/* 录音链路集成测试：开始录音 -> 语音识别转写 -> 结束 -> 严格评分 -> 渲染成绩
   运行： node test/recite-flow.js

   用 new Function 注入浏览器桩，把真实的 finishRecite / finishRecite4 跑一遍，
   验证：分数写入、错误清单渲染、转写回显、无转写时的降级封顶。
*/
'use strict';
const h = require('./harness');
const r = h.createReporter('录音评分链路');
const html = h.readSource();

const NAMES = ['asrSupported', 'startAsr', 'stopAsr', 'asrNoticeHtml', 'reciteNorm', 'escRecite',
  'strictReciteScore', 'reciteVerdictHtml', 'analyzeRecite', 'teardownRecite',
  'stopRecite', 'cancelRecite', 'finishRecite', 'finishRecite4'];

let src;
try { src = h.grabAll(html, NAMES); }
catch (e) { r.ok('抽取录音相关函数', false, e.message); r.finish(); return; }

const { els, documentStub, windowStub, BlobStub, URLStub } = h.makeStubs({
  window: { SpeechRecognition: h.fakeSpeechRecognition() }
});

const body = `
var reciteStream=null, reciteRecorder=null, reciteChunks=[], reciteCtx=null, reciteAnalyser=null;
var reciteRaf=0, reciteTick=0, reciteStartTs=0, lastReciteUrl=null;
var reciteAsr=null, reciteAsrText='', reciteAsrFailed=false;
var state={progress:{poetry:{gamesPlayed:0,correct:0}}, poemRecite:{}, reciteRecord:{}};
var poemsData=[{title:'鹿柴', textFull:'空山不见人，但闻人语响。返景入深林，复照青苔上。'}];
var reciteData=[{title:'观潮（第3自然段）', content:'午后一点左右，从远处传来隆隆的响声，好像闷雷滚动。'}];
var givenStars=0, toasts=[];
function addStars(n){ givenStars+=n; }
function saveState(){}
function showToast(m){ toasts.push(m); }
function renderRecitePanel(){}
function renderRecite4Panel(){}
${src}
return {
  finishRecite: finishRecite, finishRecite4: finishRecite4, stopRecite: stopRecite,
  asrSupported: asrSupported,
  setAsrText: function(t){ reciteAsrText = t; },
  setChunks: function(c){ reciteChunks = c; },
  getStars: function(){ return givenStars; },
  getState: function(){ return state; },
  getPanel: function(which){ return els[which]; }
};
`;

let api;
try {
  api = new Function('document', 'window', 'URL', 'Blob', 'clearInterval', 'cancelAnimationFrame', 'setTimeout', 'els',
    body)(documentStub, windowStub, URLStub, BlobStub, function () {}, function () {}, setTimeout, els);
} catch (e) {
  r.ok('构建测试沙箱', false, e.message);
  r.finish();
  return;
}

function readPanel(panel) {
  const t = panel.innerHTML;
  return {
    score: Number((t.match(/recite-score[^>]*>(\d+)/) || [])[1]),
    rate: (t.match(/错漏率 <b[^>]*>([\d.]+)%/) || [])[1],
    hasErrList: t.indexOf('要改正的地方') >= 0,
    hasPerfect: t.indexOf('逐字核对通过') >= 0,
    hasTranscript: t.indexOf('系统听到的内容') >= 0,
    degraded: t.indexOf('本次没能做逐字比对') >= 0
  };
}

async function run() {
  r.ok('浏览器语音识别可用', api.asrSupported() === true);

  r.section('诗文花园 · 严格评分');
  const poemCases = [
    { name: '一字不差', text: '空山不见人，但闻人语响。返景入深林，复照青苔上。', score: [90, 100], perfect: true },
    { name: '漏字加错字', text: '空山不见大，但闻语响。返景入深林，复照青苔。', score: [60, 79], err: true },
    { name: '背成不相关内容', text: '我今天吃了三个大苹果然后就睡觉了', score: [0, 30], err: true }
  ];
  for (const c of poemCases) {
    api.setChunks([{ size: 100 }]);
    api.setAsrText(c.text);
    await api.finishRecite(0);
    const p = readPanel(api.getPanel('recitePanel'));
    const ok = p.score >= c.score[0] && p.score <= c.score[1]
      && p.hasTranscript && !p.degraded
      && (c.perfect ? p.hasPerfect : true) && (c.err ? p.hasErrList : true);
    r.ok(c.name, ok, p.score + ' 分 / 错漏率 ' + p.rate + '% / 转写回显 '
      + (p.hasTranscript ? '有' : '无') + ' / 错误清单 ' + (p.hasErrList ? '有' : '无'));
  }

  r.section('四上背诵素材库 · 严格评分');
  const matCases = [
    { name: '整段一字不差', text: '午后一点左右，从远处传来隆隆的响声，好像闷雷滚动。', score: [90, 100] },
    { name: '错漏一半', text: '午后一点，从远处传来响声。', score: [0, 30] }
  ];
  for (const c of matCases) {
    api.setChunks([{ size: 100 }]);
    api.setAsrText(c.text);
    await api.finishRecite4(0);
    const p = readPanel(api.getPanel('recite4Panel'));
    r.ok(c.name, p.score >= c.score[0] && p.score <= c.score[1],
      p.score + ' 分 / 错漏率 ' + p.rate + '%');
  }

  r.section('成绩记录');
  const st = api.getState();
  r.ok('诗文成绩已记录', !!st.poemRecite['鹿柴'], '背 ' + st.poemRecite['鹿柴'].count + ' 次 / 最佳 ' + st.poemRecite['鹿柴'].best);
  r.ok('素材库成绩已记录', !!st.reciteRecord['观潮（第3自然段）'], '背 ' + st.reciteRecord['观潮（第3自然段）'].count + ' 次 / 最佳 ' + st.reciteRecord['观潮（第3自然段）'].best);

  r.section('降级：拿不到转写文本时必须封顶 60 且明确告知');
  api.setChunks([{ size: 100 }]);
  api.setAsrText('');
  await api.finishRecite(0);
  const d = readPanel(api.getPanel('recitePanel'));
  r.ok('分数封顶 60', d.score <= 60, d.score + ' 分');
  r.ok('显示降级说明', d.degraded);
  r.ok('不做逐字打分时不出错误清单', !d.hasErrList);

  r.finish();
}

run().catch(e => { console.error('运行出错:', e); process.exitCode = 1; });
