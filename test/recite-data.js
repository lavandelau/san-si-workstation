/* 背诵素材库数据完整性：四上背诵素材库 + 古诗库
   运行： node test/recite-data.js
*/
'use strict';
const h = require('./harness');
const r = h.createReporter('背诵素材库数据');
const html = h.readSource();

/* ---- 1. 先过语法，数据所在的脚本块必须是可解析的 ---- */
const syn = h.checkSyntax(html);
r.ok('内联脚本语法正确', syn.bad === 0, syn.total + ' 块 / ' + syn.bad + ' 个错误');

/* ---- 2. 取出 reciteData ---- */
const m = html.match(/const reciteData = (\[[\s\S]*?\]);\s*\n\s*\/\* Thinking Questions \*\//)
  || html.match(/const reciteData = (\[[\s\S]*?\n\]);/);
if (!r.ok('找到 reciteData 定义', !!m)) { r.finish(); return; }

let reciteData = [];
try {
  reciteData = new Function('return ' + m[1])();
} catch (e) {
  r.ok('reciteData 可解析', false, e.message);
  r.finish();
  return;
}
r.ok('reciteData 可解析', true, reciteData.length + ' 条');

/* ---- 3. 字段完整性 ---- */
const missing = reciteData.filter(x => !x.title || !x.source || !x.content || !x.tag);
r.ok('每条都有 title/source/content/tag', missing.length === 0,
  missing.length ? '缺失: ' + missing.map(x => x.title || '(无标题)').join('、') : reciteData.length + ' 条全部齐全');

/* ---- 4. 现代文片段：分句数必须与关键词数一致 ---- */
function splitSentences(text) {
  const parts = []; let buf = ''; const chars = text.split('');
  for (let k = 0; k < chars.length; k++) {
    buf += chars[k];
    const two = chars[k] + (chars[k + 1] || '');
    if (two === '……') { buf += chars[k + 1]; k++; parts.push(buf); buf = ''; }
    else if ('。！？'.indexOf(chars[k]) > -1) { parts.push(buf); buf = ''; }
  }
  if (buf.trim()) parts.push(buf);
  return parts;
}
const prose = reciteData.filter(x => x.tag === '现代文片段');
let mismatch = 0;
prose.forEach(x => {
  const sc = splitSentences(x.content).length;
  const hc = (x.hints || []).length;
  if (sc !== hc) { mismatch++; r.info('[数量不符] ' + x.title + ' 分句 ' + sc + ' / 关键词 ' + hc); }
});
r.ok('现代文片段 分句数 = 关键词数', mismatch === 0, prose.length + ' 条 / ' + mismatch + ' 条不符');

/* ---- 5. 分类统计 ---- */
const byTag = {};
reciteData.forEach(x => { byTag[x.tag] = (byTag[x.tag] || 0) + 1; });
Object.keys(byTag).forEach(t => r.info(t + ': ' + byTag[t] + ' 条'));

/* ---- 6. 确认古诗库没被覆盖 ---- */
const oldPoems = html.match(/const poemsData = \[([\s\S]*?)\n\];/);
if (r.ok('poemsData 仍存在', !!oldPoems)) {
  const titles = [...oldPoems[1].matchAll(/title:'([^']+)'/g)].map(x => x[1]);
  r.ok('poemsData 条目未丢失', titles.length > 0, titles.length + ' 首');
}

r.finish();
