/* 校验：「古诗填空背诵」的「答错暂停」机制已推广到英语/数学所有点选题 */
const fs = require('fs');
const vm = require('vm');
const HTML_PATH = 'D:/Workbuddy/2026-08-23-20-10-40/三升四工作站/少年学习空间站.html';
const html = fs.readFileSync(HTML_PATH, 'utf8');

/* ---------- DOM 桩 ---------- */
function fakeElement(id){
  const el = {
    id: id||'', _children:[], _listeners:{}, _innerHTML:'', matched:false,
    style:{ setProperty(){} }, dataset:{}, value:'', textContent:'',
    disabled:false, readOnly:false, title:'', parentNode:null,
    get innerHTML(){ return this._innerHTML; },
    set innerHTML(v){ this._innerHTML = v; if(v==='') this._children = []; },
    classList:{
      _set:new Set(),
      add(c){ this._set.add(c); if(c==='correct' && !el.matched){ el.matched = true; matchedEls.push(el); } },
      remove(c){ this._set.delete(c); if(c==='correct'){ el.matched = false; const i = matchedEls.indexOf(el); if(i>=0) matchedEls.splice(i,1); } },
      toggle(c,f){ f ? this._set.add(c) : this._set.delete(c); },
      contains(c){ return this._set.has(c); }
    },
    appendChild(ch){ this._children.push(ch); return ch; },
    addEventListener(ev,fn){ (this._listeners[ev]=this._listeners[ev]||[]).push(fn); },
    focus(){}, remove(){}, scrollIntoView(){}, querySelector(){ return null; }, querySelectorAll(){ return []; }
  };
  return el;
}
const elements = {};
const matchedEls = [];   /* 用于模拟 querySelectorAll('.correct') */
const documentStub = {
  getElementById(id){ if(!elements[id]) elements[id] = fakeElement(id); return elements[id]; },
  querySelector(){ return null; },
  querySelectorAll(sel){ return sel && sel.indexOf('.correct') >= 0 ? matchedEls : []; },
  createElement(){ return fakeElement(''); },
  body: fakeElement('body'),
  addEventListener(){}
};
let handleSeq = 0;
const storage = {};
const localStorageStub = {
  getItem(k){ return Object.prototype.hasOwnProperty.call(storage,k) ? storage[k] : null; },
  setItem(k,v){ storage[k] = String(v); },
  removeItem(k){ delete storage[k]; }
};
const sandbox = {
  document: documentStub, localStorage: localStorageStub,
  window: { scrollTo(){}, addEventListener(){} },
  confirm(){ return true; }, navigator:{ userAgent:'test' }, alert(){},
  setTimeout, clearTimeout, setInterval(){ return ++handleSeq; }, clearInterval(){},
  location:{ reload(){} },
  console, JSON, Math, Date, Number, String, Array, Object, parseInt, parseFloat, isNaN, isFinite,
  Function, RegExp, Error, Promise
};
sandbox.globalThis = sandbox;
sandbox.window.AudioContext = undefined;
vm.createContext(sandbox);

const script = html.match(/<script>([\s\S]*?)<\/script>/)[1];
let failed = 0;
const ok = (c,m)=>{ if(c) console.log('  PASS:', m); else { failed++; console.log('  FAIL:', m); } };
const S = id => sandbox.document.getElementById(id);
const run = code => vm.runInContext(code, sandbox);
const sleep = ms => new Promise(r=>setTimeout(r,ms));

(async ()=>{
run(script);
console.log('== 脚本加载完成 ==\n');

/* ================= 1. 数学：混合运算（非计时）答错 ================= */
console.log('[1] 数学 · 混合运算/预习：答错暂停');
run("renderMath('mixed')");                       // → nextMathProblem('bracket')
const q1 = S('mathGame').innerHTML;
const btnWrong = fakeElement('opt'), optA = fakeElement('optA'), optB = fakeElement('optB');
btnWrong.parentNode = { querySelectorAll: ()=>[btnWrong, optA, optB] };
sandbox.__btn = btnWrong;
run("checkMathAnswer('__WRONG__', '__RIGHT__', __btn, 'bracket')");
ok(S('mathResult').innerHTML.includes('我知道了，下一题'), '答错显示「我知道了，下一题 ➡️」按钮');
ok(S('mathResult').innerHTML.includes('mathNextStep'), '按钮绑定 mathNextStep');
ok(optA.classList.contains('locked') && optB.classList.contains('locked'), '其余选项被锁定（防改答案）');
ok(!btnWrong.classList.contains('locked'), '已选项保持高亮不被淡化');
await sleep(1600);
ok(S('mathGame').innerHTML === q1, '等 1.6 秒后题目没有自动跳走（暂停生效）');
run("mathNextStep('bracket')");
ok(S('mathGame').innerHTML !== q1, '点击「下一题」后才换题');

/* ================= 2. 数学：答对也暂停（同古诗填空） ================= */
console.log('\n[2] 数学：答对也等孩子点「下一题」');
const q2 = S('mathGame').innerHTML;
const btnRight = fakeElement('opt2');
btnRight.parentNode = { querySelectorAll: ()=>[btnRight] };
sandbox.__btn2 = btnRight;
run("checkMathAnswer('__RIGHT__', '__RIGHT__', __btn2, 'bracket')");
ok(S('mathResult').innerHTML.includes('下一题'), '答对显示「下一题 ➡️」按钮');
await sleep(1600);
ok(S('mathGame').innerHTML === q2, '答对后同样不自动跳走');
run("mathNextStep('bracket')");
ok(S('mathGame').innerHTML !== q2, '点按钮后换题');

/* ================= 3. 数学：计时挑战保持节奏 ================= */
console.log('\n[3] 数学 · 计时挑战：答对仍自动连答（保留速度挑战手感）');
run("renderMath('timed')");
const q3 = S('mathGame').innerHTML;
const btnT = fakeElement('optT');
btnT.parentNode = { querySelectorAll: ()=>[btnT] };
sandbox.__btnT = btnT;
run("checkMathAnswer('__RIGHT__', '__RIGHT__', __btnT, 'division')");
await sleep(1100);
ok(S('mathGame').innerHTML !== q3, '计时挑战答对后自动进入下一题');

/* ================= 4. 数学：重复点击不重复计分 ================= */
console.log('\n[4] 防重复点击');
run("renderMath('mixed')");
const before = run('mathTotal');
const btnD = fakeElement('optD');
btnD.parentNode = { querySelectorAll: ()=>[btnD] };
sandbox.__btnD = btnD;
run("checkMathAnswer('X','Y', __btnD, 'bracket')");
run("checkMathAnswer('X','Y', __btnD, 'bracket')");   // 再点一次
ok(run('mathTotal') === before + 1, '重复点击只计一次（mathAnswerLocked 生效）');

/* ================= 5. 英语 · 单词拼写 ================= */
console.log('\n[5] 英语 · 单词拼写挑战');
run("renderEnglish('spell')");
const spellQ = S('spellGame').innerHTML;
S('spellInput').value = 'zzz-not-a-word';
run('checkSpell()');
ok(S('spellResult').innerHTML.includes('我知道了，下一题'), '拼错显示「我知道了，下一题 ➡️」');
ok(S('spellResult').innerHTML.includes('正确答案'), '拼错展示正确拼写');
ok(S('spellInput').disabled === true, '答完后输入框锁定');
await sleep(1700);
ok(S('spellGame').innerHTML === spellQ, '不再 1.5 秒自动跳到下一题');
run('nextSpellWord()');
ok(S('spellGame').innerHTML !== spellQ, '点「下一题」后换词');
/* 拼对也暂停 */
const spellQ2 = S('spellGame').innerHTML;
S('spellInput').value = run('spellCurrent.en');
run('checkSpell()');
ok(S('spellResult').innerHTML.includes('下一题'), '拼对显示「下一题 ➡️」');
await sleep(1700);
ok(S('spellGame').innerHTML === spellQ2, '拼对后同样不自动跳走');

/* ================= 6. 英语 · 英汉配对 ================= */
console.log('\n[6] 英语 · 英汉配对闯关：配错暂停');
run("renderEnglish('match')");
const bEn = fakeElement('bEn'), bZhWrong = fakeElement('bZhWrong'), bZhRight = fakeElement('bZhRight');
bEn.dataset   = {val:'cat', type:'en'};
bZhWrong.dataset = {val:'dog', type:'zh'};
bZhRight.dataset = {val:'cat', type:'zh'};
sandbox.__bEn = bEn; sandbox.__bZhWrong = bZhWrong; sandbox.__bZhRight = bZhRight;
run('matchClick(__bEn); matchClick(__bZhWrong);');
ok(run('matchPaused') !== null, '配错进入暂停状态（matchPaused）');
ok(bEn.style.borderColor === 'var(--red)' && bZhWrong.style.borderColor === 'var(--red)', '两张卡保持红框');
ok(S('matchResult').innerHTML.includes('不是一对'), '提示「不是一对，点任意卡片继续」');
await sleep(1000);
ok(run('matchPaused') !== null, '等 1 秒后红框不自动消失（不再自动清除）');
run('matchClick(__bEn);');
ok(run('matchPaused') === null, '再点一下 → 解除暂停');
ok(bEn.style.borderColor === '' && bZhWrong.style.borderColor === '', '红框已清除');
ok(run('matchSelected') === null, '选中状态已重置');

/* 配对成功 → 下一轮也改为手动 */
console.log('\n[7] 英语 · 英汉配对：全部配对后手动进入下一轮');
run("renderEnglish('match')");
matchedEls.length = 0;
/* 构造 4 对，逐对点中 */
const pairs = ['a','b','c','d'].map(v=>{
  const en = fakeElement(), zh = fakeElement();
  en.dataset = {val:v, type:'en'}; zh.dataset = {val:v, type:'zh'};
  return [en, zh];
});
pairs.forEach(([en, zh])=>{
  sandbox.__x = en; sandbox.__y = zh;
  run('matchClick(__x); matchClick(__y);');
});
ok(matchedEls.length === 8, '4 对全部配对成功（' + matchedEls.length + '/8）');
ok(S('matchResult').innerHTML.includes('nextMatchRound'), '显示「下一轮 ➡️」按钮');
const roundHTML = S('matchGame').innerHTML;
await sleep(2300);
ok(S('matchGame').innerHTML === roundHTML, '不再 2 秒自动进入下一轮');

/* ================= 8. 错题重练 ================= */
console.log('\n[8] 错题重练（数学/英语错题）');
run("state.errors = [{id:'e1', title:'测试错题', subject:'数学', knowledge:'两位数乘两位数', reason:'测试', mastered:false, wrongCount:1, date:'2026-09-05'}];");
run('renderRedoPanel(); startSmartRedo();');
const redoQ = S('errRedoGame').innerHTML;
const btnR = fakeElement('btnR');
btnR.parentNode = { querySelectorAll: ()=>[btnR] };
sandbox.__btnR = btnR;
run("checkRedoChoice('__WRONG__', '__RIGHT__', __btnR)");
ok(S('redoResult').innerHTML.includes('我知道了，下一题'), '重练答错显示「我知道了，下一题 ➡️」');
ok(S('redoResult').innerHTML.includes('redoNextStep'), '按钮绑定 redoNextStep');
await sleep(1700);
ok(S('errRedoGame').innerHTML === redoQ, '不再 1.5 秒自动进入下一题');
run('redoNextStep()');
ok(S('errRedoGame').innerHTML !== redoQ || run('redoSession') === null, '点按钮后推进（下一题或结束本轮）');

/* ================= 9. 复习清单（原有暂停保持） ================= */
console.log('\n[9] 复习清单：原有「答错先做3道同类题」不受影响');
ok(script.includes("function renderReviewPractice()") && script.includes("才能继续"), '复习清单补救练习逻辑仍在');

console.log('\n========================================');
console.log(failed === 0 ? '✅ 全部通过' : '❌ 失败 ' + failed + ' 项');
process.exit(failed === 0 ? 0 : 1);
})().catch(e=>{ console.log('TEST ERROR:', e.stack ? e.stack.split('\n').slice(0,6).join('\n') : e); process.exit(1); });
