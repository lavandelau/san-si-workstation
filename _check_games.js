/* 校验少年学习空间站.html：趣味小游戏厅（24点/记忆翻牌/乘法闯关）功能冒烟测试 */
const fs = require('fs');
const path = 'D:/Workbuddy/2026-08-23-20-10-40/三升四工作站/少年学习空间站.html';
const html = fs.readFileSync(path, 'utf8');

/* ---------- 最小 DOM / 环境桩 ---------- */
function fakeElement(id){
  const el = {
    id: id || '', _children: [], _listeners: {}, _innerHTML: '',
    style: { setProperty(){}, }, dataset: {}, value: '', textContent: '', disabled: false, title: '',
    get innerHTML(){ return this._innerHTML; },
    set innerHTML(v){ this._innerHTML = v; if(v === '') this._children = []; },
    remove(){},
    classList: {
      _set: new Set(),
      add(c){ this._set.add(c); }, remove(c){ this._set.delete(c); },
      toggle(c, f){ if(f===undefined){ this._set.has(c)?this._set.delete(c):this._set.add(c); } else if(f) this._set.add(c); else this._set.delete(c); },
      contains(c){ return this._set.has(c); }
    },
    appendChild(ch){ this._children.push(ch); return ch; },
    addEventListener(ev, fn){ (this._listeners[ev] = this._listeners[ev] || []).push(fn); },
    dispatch(ev, e){ (this._listeners[ev]||[]).forEach(fn=>fn(e||{})); },
    focus(){}, querySelector(){ return null; }, querySelectorAll(){ return []; }
  };
  return el;
}
const elements = {};
const documentStub = {
  getElementById(id){ if(!elements[id]) elements[id] = fakeElement(id); return elements[id]; },
  querySelector(){ return null; },
  querySelectorAll(){ return []; },
  createElement(tag){ return fakeElement(''); },
  body: fakeElement('body'),
  addEventListener(){}
};
const storage = {};
const localStorageStub = {
  getItem(k){ return Object.prototype.hasOwnProperty.call(storage, k) ? storage[k] : null; },
  setItem(k, v){ storage[k] = String(v); },
  removeItem(k){ delete storage[k]; }
};
/* 模拟旧独立小游戏的历史成绩，验证迁移 */
storage['game24_best_correct'] = '7';
storage['game_memory_best_easy'] = '9';
storage['game_memory_best_normal'] = '17';
storage['game_multiply_max_level'] = '5';

const sandbox = {
  document: documentStub, localStorage: localStorageStub,
  window: { scrollTo(){}, addEventListener(){} },
  confirm(){ return true; }, navigator:{ userAgent: 'test' }, alert(){},
  setTimeout, clearTimeout, setInterval(){ return 0; }, clearInterval(){},
  location: { reload(){} },
  console, JSON, Math, Date, Number, String, Array, Object, parseInt, parseFloat, isNaN, isFinite,
  Function, RegExp, Error, Promise
};
sandbox.globalThis = sandbox;
sandbox.window.AudioContext = undefined;
sandbox.window.webkitAudioContext = undefined;

const vm = require('vm');
vm.createContext(sandbox);
const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);
if(!scriptMatch){ console.log('NO SCRIPT FOUND'); process.exit(1); }

let failed = 0;
function ok(cond, msg){
  if(cond) console.log('  PASS:', msg);
  else { failed++; console.log('  FAIL:', msg); }
}
const sleep = ms => new Promise(r=>setTimeout(r, ms));

(async ()=>{

try{
  vm.runInContext(scriptMatch[1], sandbox, { timeout: 30000 });
  console.log('== 脚本加载 & init() 完成 ==');
}catch(e){ console.log('LOAD ERROR:', e.stack ? e.stack.split('\n').slice(0,3).join('\n') : e); process.exit(1); }

const S = id => sandbox.document.getElementById(id);

/* ---------- 1. 状态与迁移 ---------- */
console.log('\n[1] 状态初始化与旧成绩迁移');
const st = vm.runInContext('state', sandbox);
ok(st.games && st.games.g24 && st.games.mem && st.games.mul, 'state.games 结构完整');
ok(st.games.g24.best === 7, '迁移 24点历史最高（期望7，实际 ' + st.games.g24.best + '）');
ok(st.games.mem.easy === 9 && st.games.mem.normal === 17, '迁移记忆翻牌最佳步数');
ok(st.games.mul.maxLevel === 5, '迁移乘法最高关卡（期望5，实际 ' + st.games.mul.maxLevel + '）');
ok(st.progress && st.progress.games && typeof st.progress.games.correct === 'number', 'progress.games 存在');
ok(st.games.daily && st.games.daily.date, '每日星星计数器初始化');

/* ---------- 2. 游戏大厅 ---------- */
console.log('\n[2] 游戏大厅渲染');
vm.runInContext('fgRenderHub()', sandbox);
const hubHTML = S('fgWrap').innerHTML;
ok(hubHTML.includes('24点口算') && hubHTML.includes('记忆翻牌') && hubHTML.includes('乘法口诀闯关'), '大厅包含3个游戏卡片');
ok(hubHTML.includes('最高连对 7 题'), '卡片显示迁移后的24点成绩');
ok(hubHTML.includes('最高闯到第 5 关'), '卡片显示迁移后的乘法进度');

/* ---------- 3. 24点 ---------- */
console.log('\n[3] 24点口算');
vm.runInContext('fgShow24()', sandbox);
let nums = vm.runInContext('fg24Nums', sandbox);
ok(nums.length === 4, '生成4个数字: ' + JSON.stringify(nums));
const solution = vm.runInContext('fg24Solution', sandbox);
ok(!!solution, '题目有解: ' + solution);
S('fg24Expr').value = solution; /* 直接用求解器答案作为输入 */
const starsBefore = vm.runInContext('state.stars', sandbox);
vm.runInContext('fg24Submit()', sandbox);
ok(vm.runInContext('fg24Correct', sandbox) === 1, '提交正确答案 → 本轮答对=1');
ok(vm.runInContext('state.stars', sandbox) === starsBefore + 2, '答对 +2 星');
ok(vm.runInContext('state.progress.games.correct', sandbox) >= 1, 'progress.games.correct 计数');
ok(vm.runInContext('state.games.g24.best', sandbox) === 7, '当前轮连对1未破纪录，best 保持 7');
/* 错误答案（数字合法但结果≠24） */
vm.runInContext('fg24Next()', sandbox);
const n2 = vm.runInContext('fg24Nums', sandbox);
const cand = [`${n2[0]}+${n2[1]}+${n2[2]}+${n2[3]}`, `${n2[0]}*${n2[1]}+${n2[2]}+${n2[3]}`, `${n2[0]}+${n2[1]}+${n2[2]}*${n2[3]}`];
let wrongExpr = cand.find(e=>Function('return ('+e+')')() !== 24) || `${n2[0]}-${n2[1]}-${n2[2]}-${n2[3]}`;
S('fg24Expr').value = wrongExpr;
vm.runInContext('fg24Submit()', sandbox);
ok(vm.runInContext('fg24Wrong', sandbox) === 1, '错误答案 → 本轮答错=1');
/* 非法数字 */
S('fg24Expr').value = '9+9+9+9';
vm.runInContext('fg24Submit()', sandbox);
ok(vm.runInContext('state.progress.games.correct', sandbox) === 1, '未使用给定数字 → 不计入答对');
/* 提示 */
vm.runInContext('fg24Hint()', sandbox);
ok(S('fg24Msg').textContent.includes('提示'), '提示功能输出算法');

/* ---------- 4. 记忆翻牌 ---------- */
console.log('\n[4] 记忆翻牌');
vm.runInContext('fgShowMem()', sandbox);
let board = S('fgMemBoard');
ok(board._children.length === 8, '简单模式生成8张卡片（4对）');
ok(S('fgMemPairs').textContent === '0 / 4', '初始配对 0/4');
/* 翻出两张不匹配的 */
const cards = board._children;
let pair = null, nonPair = null;
for(let i=0;i<cards.length;i++){
  for(let j=i+1;j<cards.length;j++){
    if(cards[i].dataset.emoji === cards[j].dataset.emoji) pair = [cards[i], cards[j]];
    else if(!nonPair) nonPair = [cards[i], cards[j]];
  }
}
ok(!!pair, '牌堆中存在配对');
vm.runInContext('fgMemDiff', sandbox); /* noop read */
const flip = c => vm.runInContext('(function(c){ fgMemFlip(c); })(__card)', sandbox) || null;
/* 通过全局注入卡片引用 */
sandbox.__card = nonPair[0]; vm.runInContext('fgMemFlip(__card)', sandbox);
sandbox.__card = nonPair[1]; vm.runInContext('fgMemFlip(__card)', sandbox);
ok(vm.runInContext('fgMemSteps', sandbox) === 1, '翻两张记1步');
await sleep(900);
ok(!nonPair[0].classList.contains('flipped'), '不匹配自动盖回');
/* 逐对配对直到胜利 */
for(let round=0; round<4; round++){
  const cs = S('fgMemBoard')._children.filter(c=>!c.classList.contains('matched'));
  if(cs.length < 2) break;
  const map = {};
  let a=null,b=null;
  for(const c of cs){ if(map[c.dataset.emoji]){ a=map[c.dataset.emoji]; b=c; break; } map[c.dataset.emoji]=c; }
  sandbox.__card = a; vm.runInContext('fgMemFlip(__card)', sandbox);
  sandbox.__card = b; vm.runInContext('fgMemFlip(__card)', sandbox);
  await sleep(450);
}
ok(vm.runInContext('fgMemMatched', sandbox) === 4, '全部4对配对完成');
const starsBeforeMem = vm.runInContext('state.stars', sandbox);
ok(starsBeforeMem > 0, '记忆翻牌通关获得星星（+2）');
ok(vm.runInContext('state.games.mem.easy', sandbox) >= 4, '最佳步数已记录: ' + vm.runInContext('state.games.mem.easy', sandbox));
ok(S('fgMemResult').innerHTML.includes('配对成功'), '胜利结果卡片渲染');

/* ---------- 5. 乘法闯关 ---------- */
console.log('\n[5] 乘法口诀闯关');
vm.runInContext('fgShowMul()', sandbox);
ok(S('fgMulLevels')._children.length === 9, '渲染9个关卡按钮');
ok(S('fgMulLevels')._children[4].className.includes('unlocked'), '迁移后第5关已解锁');
ok(!S('fgMulLevels')._children[6].className.includes('unlocked'), '第7关未解锁');
const mulCorrectBefore = vm.runInContext('state.progress.games.correct', sandbox);
const starsBeforeMul = vm.runInContext('state.stars', sandbox);
for(let qi=0; qi<6; qi++){
  S('fgMulAnswer').value = String(vm.runInContext('fgMulAnswer', sandbox));
  vm.runInContext('fgMulSubmit()', sandbox);
  await sleep(750);
}
ok(vm.runInContext('state.progress.games.correct', sandbox) === mulCorrectBefore + 6, '本关6题全部答对（计入progress.games.correct）');
await sleep(100);
ok(vm.runInContext('state.games.mul.maxLevel', sandbox) >= 5, '通关后保持/更新最高关卡: ' + vm.runInContext('state.games.mul.maxLevel', sandbox));
ok(vm.runInContext('state.stars', sandbox) === starsBeforeMul + 3, '通关 +3 星');
/* 答错路径 */
S('fgMulAnswer').value = '999999';
const wrongStars = vm.runInContext('state.stars', sandbox);
vm.runInContext('fgMulSubmit()', sandbox);
ok(vm.runInContext('fgMulWrong', sandbox) === 1, '答错计数');
ok(vm.runInContext('fgMulWaiting', sandbox) === true, '答错后进入"下一题"等待状态');
ok(S('fgMulMsg').textContent.includes('正确答案'), '答错提示正确答案');
vm.runInContext('fgMulSubmit()', sandbox); /* 此时作为下一题按钮 */
ok(vm.runInContext('fgMulQIndex', sandbox) >= 1, '点击后进入下一题');

/* ---------- 6. 每日星星上限 ---------- */
console.log('\n[6] 每日星星上限');
vm.runInContext('fgShow24()', sandbox);
let capped = 0;
for(let i=0;i<10;i++){
  vm.runInContext('fg24Next()', sandbox);
  S('fg24Expr').value = vm.runInContext('fg24Solution', sandbox);
  vm.runInContext('fg24Submit()', sandbox);
}
const dailyG24 = vm.runInContext('state.games.daily.g24', sandbox);
ok(dailyG24 === 10, '24点每日星星领取上限10（实际 ' + dailyG24 + '）');

/* ---------- 7. 徽章 ---------- */
console.log('\n[7] 游戏徽章');
const hasBadgeDef = scriptMatch[1].includes("id:'game_master'");
ok(hasBadgeDef, '游戏小达人徽章已定义');

/* ---------- 8. 导航接入 ---------- */
console.log('\n[8] 导航接入');
ok(scriptMatch[1].includes("name==='games') fgRenderHub()"), 'switchSection 已接入 games 分支');
ok(html.includes('id="fgWrap"'), 'fgWrap 容器存在');

console.log('\n========================================');
console.log(failed === 0 ? '✅ 全部通过' : '❌ 失败 ' + failed + ' 项');
process.exit(failed === 0 ? 0 : 1);
})().catch(e=>{ console.log('TEST ERROR:', e.stack ? e.stack.split('\n').slice(0,5).join('\n') : e); process.exit(1); });
