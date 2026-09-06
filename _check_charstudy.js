/* 校验：四上生字学习模块（认读 → 组词 → 拼音填字 → 错字本） */
const fs = require('fs');
const vm = require('vm');
const HTML_PATH = 'D:/Workbuddy/2026-08-23-20-10-40/三升四工作站/少年学习空间站.html';
const html = fs.readFileSync(HTML_PATH, 'utf8');

/* ---------- DOM 桩 ---------- */
function fakeElement(id){
  const el = {
    id: id||'', _children:[], _listeners:{}, _innerHTML:'', _attrs:{},
    style:{ setProperty(){} }, dataset:{}, value:'', textContent:'',
    disabled:false, readOnly:false, title:'', parentNode:null, tagName:'',
    get firstChild(){ return this._children[0] || null; },
    get innerHTML(){ return this._innerHTML; },
    set innerHTML(v){ this._innerHTML = v; if(v==='') this._children = []; },
    setAttribute(k,v){ this._attrs[k] = v; },
    getAttribute(k){ return this._attrs[k]; },
    removeChild(ch){ const i = this._children.indexOf(ch); if(i>=0) this._children.splice(i,1); return ch; },
    getBoundingClientRect(){ return {left:0,top:0,right:100,bottom:40,width:100,height:40}; },
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
  querySelectorAll(){ return []; },
  createElement(tag){ const el = fakeElement(''); el.tagName = tag; return el; },
  createElementNS(ns, tag){ const el = fakeElement(''); el.tagName = tag; return el; },
  body: fakeElement('body'), addEventListener(){}
};
const storage = {};
const sandbox = {
  document: documentStub,
  localStorage: { getItem:k=>Object.prototype.hasOwnProperty.call(storage,k)?storage[k]:null,
                  setItem:(k,v)=>{storage[k]=String(v);}, removeItem:k=>{delete storage[k];} },
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

console.log('[1] 数据完整性（统编版四上生字表）');
const lessons = run('charLessons');
ok(Array.isArray(lessons) && lessons.length === 8, '共 8 个单元分组（实际 '+lessons.length+'）');
const allChars = [];
lessons.forEach(l=>l.chars.forEach(c=>allChars.push(Object.assign({unit:l.unit}, c))));
ok(allChars.length >= 75, '生字总数 '+allChars.length+' 个（四上约 80 字）');
ok(allChars.every(c=>c.ch && c.ch.length===1), '每个生字都是单个汉字');
ok(allChars.every(c=>c.py && /^[a-zA-Zāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜü]+$/.test(c.py)), '拼音齐全且格式合法');
ok(allChars.every(c=>Array.isArray(c.words) && c.words.length>=1), '每字都有组词');
ok(allChars.every(c=>Array.isArray(c.dis) && c.dis.length===3), '每字都有 3 个形近/同音干扰项');
const selfDis = allChars.filter(c=>c.dis.includes(c.ch));
ok(selfDis.length === 0, '干扰项里没有混入正确字' + (selfDis.length?('（'+selfDis.map(c=>c.ch)+'）'):''));
const dupChars = allChars.map(c=>c.ch).filter((v,i,a)=>a.indexOf(v)!==i);
ok(dupChars.length === 0, '字表内无重复字' + (dupChars.length?('（'+[...new Set(dupChars)]+'）'):''));
ok(new Set(lessons.map(l=>l.unit)).size === 8, '8 个单元名称不重复');
/* 抽查 md 里的字：第一单元 潮称盐笼罩蒙薄雾 全部存在 */
const u1 = lessons[0].chars.map(c=>c.ch).join('');
ok(u1 === '潮称盐笼罩蒙薄雾', '第一单元字序与生字表一致：'+u1);
const u2 = lessons[1].chars.map(c=>c.ch).join('');
ok(u2 === '蝙蝠捕蛾蚊避锐', '第二单元字序与生字表一致：'+u2);
const u5 = lessons[4].chars.map(c=>c.ch).join('');
ok(u5 === '嗅呆奈巢齿躯掩幼搏庞级链颤攀辫', '第五单元字序与生字表一致');
const chao = allChars.find(c=>c.ch==='潮');
ok(chao.py==='cháo' && chao.words.includes('潮水'), '「潮」拼音 cháo、组词含「潮水」');

console.log('\n[2] 分页：每页 8 字');
run("renderVocab()");
ok(run('charPageCount()') === Math.ceil(lessons[0].chars.length/8), '第一单元页数 = ' + run('charPageCount()'));
ok(run('charLessonChars().length') === 8, '第一单元共 8 字');
ok(S('charLessonName').textContent.includes('观潮'), '标题显示单元课文：'+S('charLessonName').textContent);
ok(S('charLessonUnit').textContent.includes('共 8 个字'), '单元信息：'+S('charLessonUnit').textContent);
const grid0 = S('charGrid').innerHTML;
ok((grid0.match(/class="char-card/g)||[]).length === 8, '首页渲染 8 张字卡');
ok(grid0.includes('潮') && grid0.includes('cháo'), '字卡含汉字与拼音');
ok(grid0.includes('会写字'), '标注「会写字」标签');
ok(grid0.includes('我会读了 → 去填字'), '会写字显示「我会读了 → 去填字」按钮');
ok(S('charPageInfo').textContent === '第 1 / 1 页', '页码：'+S('charPageInfo').textContent);
ok(S('charBtnPrev').disabled === true, '首页「上一页」禁用');
ok(S('charProgressText').textContent === '0/8', '初始进度 0/8');
ok((S('charLessonTabs').innerHTML.match(/char-lesson-tab/g)||[]).length === 8, '渲染 8 个单元切换标签');

console.log('\n[3] 认读 → 拼音填字');
run('charFinishRead(0)');
const quiz = run('charQuizActive[0]');
ok(!!quiz, '点「我会读了」后进入填字环节');
ok(quiz.options.length === 4, '四候选选项：'+quiz.options.join(''));
ok(quiz.options.includes('潮'), '选项包含正确字「潮」');
ok(new Set(quiz.options).size === 4, '4 个选项互不重复');
const cardQ = S('charGrid').innerHTML;
ok(cardQ.includes('cháo（　）'), '题干只显示拼音和括号：cháo（　）');
ok(!cardQ.includes('>潮 🔊<'), '填字时隐藏原字');

console.log('\n[4] 答错 → 进错字本，不公布答案');
const wrongOpt = quiz.options.find(o=>o!=='潮');
run("charAnswerQuiz(0, " + JSON.stringify(wrongOpt) + ", {classList:{add(){}}, disabled:false})");
ok((run('state.vocabWrong')||[]).length === 1, '错字本记录 1 个字');
ok(run('state.vocabWrong')[0].ch === '潮', '  → 记录的是「潮」');
ok(S('charWrongList').innerHTML.includes('潮'), '错字本区域显示该字');
ok(S('charWrongList').innerHTML.includes('charJumpWrong'), '  → 点击可跳回该单元重练');
ok(run('charIsDone(0,0)') === false, '答错不算学会');

console.log('\n[5] 答对 → 加星并标记学会');
const starsBefore = run('state.stars');
run("charAnswerQuiz(0, '潮', {classList:{add(){}}, disabled:false})");
ok(run('state.stars') === starsBefore + 1, '答对 +1 颗星（'+starsBefore+' → '+run('state.stars')+'）');
await sleep(1100);
ok(run('charIsDone(0,0)') === true, '900ms 后标记为已学会');
ok(S('charGrid').innerHTML.includes('✓ 已学会'), '字卡显示「✓ 已学会」');
ok(S('charProgressText').textContent === '1/8', '进度更新为 1/8');

console.log('\n[6] 全部学完 → 小结与「进入下一单元」');
for(let gi=1; gi<8; gi++) run('charMarkDone('+gi+')');
run('renderCharStudy()');
ok(S('charPageSummary').style.display === 'block', '显示本页完成小结');
ok(S('charSummaryText').textContent.includes('8 个字全部学会'), '小结文案：'+S('charSummaryText').textContent);
ok(S('charBtnNextLesson').textContent.includes('进入下一单元'), '按钮变为「进入下一单元」（第一单元只有一页）');

console.log('\n[7] 单元切换与翻页');
run('charPickLesson(4)');            // 第五单元 15 字 → 2 页
ok(run('curCharLesson') === 4, '切到第五单元');
ok(run('charPageCount()') === 2, '第五单元 15 字 = 2 页');
ok(S('charPageInfo').textContent === '第 1 / 2 页', '页码：'+S('charPageInfo').textContent);
ok(S('charBtnNext').disabled === false, '非末页「下一页」可用');
S('charBtnNext').onclick();
ok(run('curCharPage') === 1, '点下一页 → 第 2 页');
ok((S('charGrid').innerHTML.match(/class="char-card/g)||[]).length === 7, '第 2 页 7 张字卡（15-8）');
ok(run('state.charLessonIdx') === 4, '当前单元已写入存档');

console.log('\n[8] 错字本清空');
run('charClearWrong()');
ok(run('state.vocabWrong').length === 0, '清空错字本');
ok(S('charWrongList').innerHTML.includes('还没有错字'), '显示空状态提示');

console.log('\n[9] 语文天地 tab 已接入');
ok(html.includes('data-ctab="vocab"'), '语文天地新增「重点生字」tab');
ok(html.includes('id="chinese-vocab"'), '对应面板 chinese-vocab 存在');
ok(/tab==='vocab'\)\s*renderVocab\(\)/.test(html), 'switchChineseTab 会渲染该面板');

console.log('\n========================================');
if(failed===0) console.log('✅ 全部通过'); else console.log('❌ 失败 '+failed+' 项');
process.exit(failed?1:0);
})();
