/* 校验：「今日重点挑战」点确定后能跳转到对应模块/子页 */
const fs = require('fs');
const vm = require('vm');
const HTML_PATH = 'D:/Workbuddy/2026-08-23-20-10-40/三升四工作站/少年学习空间站.html';
const html = fs.readFileSync(HTML_PATH, 'utf8');

/* ---------- DOM 桩 ---------- */
function fakeElement(id){
  const el = {
    id: id||'', _children:[], _listeners:{}, _innerHTML:'', matched:false, _attrs:{},
    style:{ setProperty(){} }, dataset:{}, value:'', textContent:'',
    disabled:false, readOnly:false, title:'', parentNode:null, tagName:'',
    get firstChild(){ return this._children[0] || null; },
    get innerHTML(){ return this._innerHTML; },
    set innerHTML(v){ this._innerHTML = v; if(v==='') this._children = []; },
    setAttribute(k,v){ this._attrs[k] = v; },
    getAttribute(k){ return this._attrs[k]; },
    removeChild(ch){ const i = this._children.indexOf(ch); if(i>=0) this._children.splice(i,1); return ch; },
    getBoundingClientRect(){ return {left:0, top:0, right:100, bottom:40, width:100, height:40}; },
    classList:{ _set:new Set(), add(...cs){ cs.forEach(c=>this._set.add(c)); },
      remove(...cs){ cs.forEach(c=>this._set.delete(c)); },
      toggle(c,f){ f ? this._set.add(c) : this._set.delete(c); }, contains(c){ return this._set.has(c); } },
    appendChild(ch){ this._children.push(ch); return ch; },
    addEventListener(ev,fn){ (this._listeners[ev]=this._listeners[ev]||[]).push(fn); },
    focus(){}, remove(){}, scrollIntoView(){}, querySelector(){ return null; }, querySelectorAll(){ return []; }
  };
  return el;
}
const elements = {};
const documentStub = {
  getElementById(id){ if(!elements[id]) elements[id] = fakeElement(id); return elements[id]; },
  querySelector(){ return null; },
  querySelectorAll(sel){
    /* 供 selectMathCat / selectEnglishCat 切换 tab 高亮用 */
    if(sel === '#mathCatTabs .cat-tab') return mathTabs;
    if(sel === '#englishCatTabs .cat-tab') return engTabs;
    return [];
  },
  createElement(tag){ const el = fakeElement(''); el.tagName = tag; return el; },
  createElementNS(ns, tag){ const el = fakeElement(''); el.tagName = tag; return el; },
  body: fakeElement('body'), addEventListener(){}
};
const mathTabs = ['review','division','mixed','preview','timed'].map(v=>{ const e = fakeElement(); e.dataset = {mcat:v}; return e; });
const engTabs  = ['letters','words','spell','match'].map(v=>{ const e = fakeElement(); e.dataset = {ecat:v}; return e; });

const storage = {};
const sandbox = {
  document: documentStub,
  localStorage: { getItem:k=>Object.prototype.hasOwnProperty.call(storage,k)?storage[k]:null, setItem:(k,v)=>{storage[k]=String(v);}, removeItem:k=>{delete storage[k];} },
  window: { scrollTo(){}, addEventListener(){} },
  confirm:()=>true, navigator:{ userAgent:'test' }, alert(){},
  setTimeout, clearTimeout, setInterval:()=>1, clearInterval(){},
  location:{ reload(){} }, console, JSON, Math, Date, Number, String, Array, Object,
  parseInt, parseFloat, isNaN, isFinite, Function, RegExp, Error, Promise
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

/* 用记录器替换跳转相关的重函数，避免渲染副作用，同时记录调用 */
run(`
  var __log = {sections:[], ctabs:[], adventure:0};
  var __switchSection = switchSection;
  switchSection = function(n){ __log.sections.push(n); };
  var __switchChineseTab = switchChineseTab;
  switchChineseTab = function(t){ __log.ctabs.push(t); chineseTab = t; };
  startAdventure = function(){ __log.adventure++; };
  renderMath = function(c){ mathCat = c; };
  renderEnglish = function(c){ englishCat = c; };
`);

console.log('[1] 目标定义完整性');
const defs = run('goalQuickDefs');
ok(Array.isArray(defs) && defs.length >= 11, '共 '+defs.length+' 个快捷目标');
const texts = defs.map(d=>d.text);
ok(new Set(texts).size === texts.length, '无重复目标项（此前「古诗」重复了两次）');
const cats = [...new Set(defs.map(d=>d.cat))].sort().join(',');
ok(cats === 'IFT'.slice(0,0) + ['古诗','数学','成语','思维','阅读','闯关','英语'].sort().join(','), '目标分类齐全：'+cats);

const jump = t => run('jumpToGoalTarget(' + JSON.stringify(t) + ')');
const reset = ()=>run('__log = {sections:[], ctabs:[], adventure:0};');

console.log('\n[2] 数学类目标 → 数学王国，且自动切到对应题型分类');
reset(); ok(jump('数学：把「两位数×两位数」练到全对') === true, '「两位数×两位数」返回 true（已跳转）');
ok(run('__log.sections').join()==='math', '  → 切到数学王国');
ok(run('mathCat')==='review', '  → 题型分类切到「三下复习清单」');
ok(mathTabs.find(t=>t.dataset.mcat==='review').classList.contains('active'), '  → 复习清单 tab 高亮');
ok(mathTabs.find(t=>t.dataset.mcat==='mixed').classList.contains('active')===false, '  → 其他分类取消高亮');

reset(); jump('数学：完成「大数的认识」预习');
ok(run('mathCat')==='preview', '「大数的认识」→ 四年级预习');
reset(); jump('数学：完成「除法专项」练习');
ok(run('mathCat')==='division', '「除法专项」→ 除法专项');

console.log('\n[3] 语文类目标 → 语文天地，且自动切到对应子页');
reset(); jump('古诗：把一首新诗背到90分');
ok(run('__log.sections').join()==='chinese' && run('__log.ctabs').join()==='poetry', '古诗 → 诗文花园');
reset(); jump('成语：故事猜成语答对8题');
ok(run('__log.ctabs').join()==='idiom', '成语 → 成语百宝箱');
reset(); jump('阅读：完成2篇阅读理解全对');
ok(run('__log.ctabs').join()==='reading', '阅读理解 → 语文阅读站');
reset(); jump('阅读：课外阅读打卡1次');
ok(run('__log.ctabs').join()==='booklog', '阅读打卡 → 阅读打卡页');

console.log('\n[4] 英语类目标 → 英语星球子页');
reset(); jump('英语：拼写挑战突破80分');
ok(run('__log.sections').join()==='english' && run('englishCat')==='spell', '拼写挑战 → 拼写子页');
reset(); jump('英语：默写10个水果单词全对');
ok(run('englishCat')==='words', '默写单词 → 单词分类子页');
reset(); jump('英语：英汉配对连对5组');
ok(run('englishCat')==='match', '英汉配对 → 配对子页');

console.log('\n[5] 闯关 / 思维');
reset(); jump('闯关：闯关模式连闯3关');
ok(run('__log.sections').join()==='adventure', '闯关 → 跳到闯关冒险乐园');
await sleep(400);
ok(run('__log.adventure')===1, '  → 200ms 后自动开局（startAdventure 被调用）');
reset(); jump('思维：思维训练做对10道题');
ok(run('__log.sections').join()==='thinking', '思维 → 思维训练场');

console.log('\n[6] 自定义目标：只保存、不跳转');
reset();
ok(jump('今天要把房间收拾干净') === false, '自定义目标返回 false');
ok(run('__log.sections').length===0, '  → 不发生任何跳转');

console.log('\n[7] 点「确定」保存目标 → 自动跳转（原 bug：只弹提示不跳转）');
reset();
S('todayGoalInput').value = '思维：思维训练做对10道题';
run('saveTodayGoal()');
ok(run("state.goals[todayStr()]")==='思维：思维训练做对10道题', '目标已写入 state');
await sleep(600);
ok(run('__log.sections').join()==='thinking', '等待 350ms 后已跳转到思维训练场');
ok(S('todayGoalDisplay').innerHTML.includes('今日重点挑战'), '挑战展示区已刷新');

console.log('\n[8] 清空目标不跳转');
reset();
S('todayGoalInput').value = '';
run('saveTodayGoal()');
await sleep(500);
ok(run('__log.sections').length===0, '目标为空时不跳转');

console.log('\n========================================');
if(failed===0) console.log('✅ 全部通过'); else console.log('❌ 失败 '+failed+' 项');
process.exit(failed?1:0);
})();
