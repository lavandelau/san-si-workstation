/* 校验：「古诗填空背诵」的「答错暂停」机制已推广到英语/数学所有点选题 */
const fs = require('fs');
const vm = require('vm');
const HTML_PATH = 'D:/Workbuddy/2026-08-23-20-10-40/三升四工作站/少年学习空间站.html';
const html = fs.readFileSync(HTML_PATH, 'utf8');

/* ---------- DOM 桩 ---------- */
function fakeElement(id){
  const el = {
    id: id||'', _children:[], _listeners:{}, _innerHTML:'', matched:false, _attrs:{},
    style:{ setProperty(){} }, dataset:{}, value:'', textContent:'',
    disabled:false, readOnly:false, title:'', parentNode:null, tagName:'', offsetWidth:100,
    get firstChild(){ return this._children[0] || null; },
    get innerHTML(){ return this._innerHTML; },
    set innerHTML(v){ this._innerHTML = v; if(v==='') this._children = []; },
    setAttribute(k,v){ this._attrs[k] = v; },
    getAttribute(k){ return this._attrs[k]; },
    removeChild(ch){ const i = this._children.indexOf(ch); if(i>=0) this._children.splice(i,1); return ch; },
    getBoundingClientRect(){ return {left:0, top:0, right:100, bottom:40, width:100, height:40}; },
    classList:{
      _set:new Set(),
      add(...cs){ cs.forEach(c=>{ this._set.add(c); if(c==='correct' && !el.matched){ el.matched = true; matchedEls.push(el); } }); },
      remove(...cs){ cs.forEach(c=>{ this._set.delete(c); if(c==='correct'){ el.matched = false; const i = matchedEls.indexOf(el); if(i>=0) matchedEls.splice(i,1); } }); },
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
  createElement(tag){ const el = fakeElement(''); el.tagName = tag; return el; },
  createElementNS(ns, tag){ const el = fakeElement(''); el.tagName = tag; return el; },
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
bEn.dataset   = {val:'cat', type:'en', text:'cat'};
bZhWrong.dataset = {val:'dog', type:'zh', text:'狗'};
bZhRight.dataset = {val:'cat', type:'zh', text:'猫'};
sandbox.__bEn = bEn; sandbox.__bZhWrong = bZhWrong; sandbox.__bZhRight = bZhRight;
run('matchClick(__bEn); matchClick(__bZhWrong);');
ok(run('matchPaused') !== null, '配错进入暂停状态（matchPaused）');
ok(bEn.classList.contains('wrong') && bZhWrong.classList.contains('wrong'), '两张卡保持红框（.wrong）');
ok(bEn.classList.contains('shake'), '配错卡片有抖动反馈');
ok(S('matchResult').innerHTML.includes('不是一对'), '提示「不是一对，点任意卡片继续」');
await sleep(1000);
ok(run('matchPaused') !== null, '等 1 秒后红框不自动消失（不再自动清除）');
run('matchClick(__bEn);');
ok(run('matchPaused') === null, '再点一下 → 解除暂停');
ok(!bEn.classList.contains('wrong') && !bZhWrong.classList.contains('wrong'), '红框已清除');
ok(run('matchSelected') === null, '选中状态已重置');

/* 配对成功 → 下一轮也改为手动 */
console.log('\n[7] 英语 · 英汉配对：全部配对后手动进入下一轮');
run("renderEnglish('match')");
matchedEls.length = 0;
/* 构造 4 对，逐对点中 */
const pairs = ['a','b','c','d'].map(v=>{
  const en = fakeElement(), zh = fakeElement();
  en.dataset = {val:v, type:'en', text:v}; zh.dataset = {val:v, type:'zh', text:v};
  return [en, zh];
});
const allTiles = pairs.reduce((acc,p)=>acc.concat(p), []);
/* 让 matchBoard 支持连线所需的 querySelector / querySelectorAll / getBoundingClientRect */
const boardEl = S('matchBoard');
boardEl.querySelectorAll = sel=>{
  if(sel.indexOf('.match-tile.correct') >= 0){
    const t = sel.indexOf('data-type="en"') >= 0 ? 'en' : (sel.indexOf('data-type="zh"') >= 0 ? 'zh' : null);
    return matchedEls.filter(e=> !t || e.dataset.type === t);
  }
  return [];
};
boardEl.querySelector = sel=>{
  const m = sel.match(/data-val="([^"]+)"/);
  const t = sel.indexOf('data-type="zh"') >= 0 ? 'zh' : 'en';
  if(!m) return null;
  return allTiles.find(e=> e.dataset.val === m[1] && e.dataset.type === t) || null;
};
pairs.forEach(([en, zh])=>{
  sandbox.__x = en; sandbox.__y = zh;
  run('matchClick(__x); matchClick(__y);');
});
ok(matchedEls.length === 8, '4 对全部配对成功（' + matchedEls.length + '/8）');
ok(S('matchResult').innerHTML.includes('nextMatchRound'), '显示「下一轮 ➡️」按钮');
const roundHTML = S('matchGame').innerHTML;
await sleep(2300);
ok(S('matchGame').innerHTML === roundHTML, '不再 2 秒自动进入下一轮');

/* ================= 7b. 英语 · 配对：同侧点击不再误判成功 ================= */
console.log('\n[7b] 英语 · 配对：点两次英语不会配对成功');
run("renderEnglish('match')");
matchedEls.length = 0;
const eA = fakeElement(), eB = fakeElement();
eA.dataset = {val:'cat', type:'en', text:'cat'};
eB.dataset = {val:'dog', type:'en', text:'dog'};
sandbox.__eA = eA; sandbox.__eB = eB;
run('matchClick(__eA);');
ok(run('matchSelected') === eA && eA.classList.contains('sel'), '第一次点英语 → 选中（.sel）');
run('matchClick(__eA);');
ok(run('matchSelected') === null, '再点同一张 → 取消选择，不配对');
ok(!eA.classList.contains('correct') && !eA.classList.contains('wrong'), '点两次同一张不会判定为配对成功');
run('matchClick(__eA); matchClick(__eB);');
ok(run('matchSelected') === eB, '点同侧另一张 → 只换选中');
ok(!eA.classList.contains('sel') && eB.classList.contains('sel'), '旧的取消高亮、新的高亮');
ok(!eA.classList.contains('correct') && !eB.classList.contains('correct'), '同侧点击不会配对成功');
ok(!eA.classList.contains('wrong') && !eB.classList.contains('wrong'), '同侧点击也不误判为配错');
ok(run('matchTotal') === 0, '同侧点击不计入总轮数');

/* ================= 7c. 英语 · 配对：点英语自动朗读 ================= */
console.log('\n[7c] 英语 · 配对：点一下英语就朗读');
run("renderEnglish('match')");
run("__spoken = []; speakEN = function(t){ __spoken.push('en:'+t); }; speakCN = function(t){ __spoken.push('zh:'+t); };");
const sEn = fakeElement(); sEn.dataset = {val:'apple', type:'en', text:'apple'};
const sZh = fakeElement(); sZh.dataset = {val:'apple', type:'zh', text:'苹果'};
sandbox.__sEn = sEn; sandbox.__sZh = sZh;
run('matchClick(__sEn);');
ok(run('__spoken').indexOf('en:apple') >= 0, '点英语卡 → 朗读该单词（speakEN）');
run('__spoken = []; matchClick(__sZh);');
ok(run('__spoken').indexOf('zh:苹果') >= 0, '点中文卡 → 朗读中文（speakCN）');
ok(run('__spoken').indexOf('en:apple') >= 0, '一英一中共配成一对后，补读一次英语');
ok(sEn.classList.contains('correct') && sZh.classList.contains('correct'), '配对成功两张卡变绿');

/* ================= 7d. 英语 · 配对：连线 + 点赞气泡 ================= */
console.log('\n[7d] 英语 · 配对：多邻国式连线与点赞');
run("renderEnglish('match')");
matchedEls.length = 0;
const board2 = S('matchBoard');
const svg2 = S('matchLines');
/* 桩里 innerHTML 重建不会清掉 #matchBoard 的子节点（真实 DOM 会），这里手动清空以隔离用例 */
svg2._children.length = 0;
board2._children.length = 0;
const tiles2 = ['x','y'].map(v=>{
  const en = fakeElement(), zh = fakeElement();
  en.dataset = {val:v, type:'en', text:v}; zh.dataset = {val:v, type:'zh', text:v};
  return [en, zh];
});
const all2 = tiles2.reduce((a,p)=>a.concat(p), []);
board2.querySelectorAll = sel=>{
  if(sel.indexOf('.match-tile.correct') >= 0){
    const t = sel.indexOf('data-type="en"') >= 0 ? 'en' : (sel.indexOf('data-type="zh"') >= 0 ? 'zh' : null);
    return matchedEls.filter(e=> !t || e.dataset.type === t);
  }
  return [];
};
board2.querySelector = sel=>{
  const m = sel.match(/data-val="([^"]+)"/);
  const t = sel.indexOf('data-type="zh"') >= 0 ? 'zh' : 'en';
  if(!m) return null;
  return all2.find(e=> e.dataset.val === m[1] && e.dataset.type === t) || null;
};
sandbox.__pEn = tiles2[0][0]; sandbox.__pZh = tiles2[0][1];
run('matchClick(__pEn); matchClick(__pZh);');
ok(svg2._children.length === 1, '配对成功后画出 1 条连线（SVG line）');
ok(svg2._children[0] && svg2._children[0].tagName === 'line', '连线元素是 <line>');
ok(svg2._children[0] && svg2._children[0].getAttribute('class') === 'match-line', '连线带 match-line 样式类');
const praise = board2._children.filter(c=>c.className === 'match-praise');
ok(praise.length === 1, '配对成功弹出 1 个点赞气泡');
ok(praise[0] && praise[0].textContent.indexOf('好棒') >= 0, '气泡内容为点赞文案（👍 好棒！）');
ok(tiles2[0][0].classList.contains('pop'), '配对成功的卡片有弹跳动画（.pop）');
sandbox.__qEn = tiles2[1][0]; sandbox.__qZh = tiles2[1][1];
run('matchClick(__qEn); matchClick(__qZh);');
ok(svg2._children.length === 2, '第二对配对后连线累积为 2 条');
run('mDrawLines()');
ok(svg2._children.length === 2, '重绘连线数量保持正确（先清空再画）');

/* ================= 7e. 英语 · 配对：中文列必须打乱 ================= */
console.log('\n[7e] 英语 · 配对：中文列打乱（Fisher-Yates，不再与英文一一对应）');
let alignedRounds = 0, validRounds = 0;
for(let r = 0; r < 60; r++){
  run("renderEnglish('match')");
  const mh = S('matchGame').innerHTML;
  const enVals = Array.from(mh.matchAll(/data-type="en"[^>]*data-val="([^"]+)"/g), m=>m[1]);
  const zhVals = Array.from(mh.matchAll(/data-type="zh"[^>]*data-val="([^"]+)"/g), m=>m[1]);
  if(enVals.length === 4 && zhVals.length === 4){
    validRounds++;
    if(zhVals.every((v,i)=>v === enVals[i])) alignedRounds++;
  }
}
ok(validRounds === 60, '60 轮都渲染出 4 对词块');
ok(alignedRounds === 0, `中文列与英文列一一对应的轮数 = ${alignedRounds}/60（打乱生效，兜底交换保证至少一对错位）`);

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
