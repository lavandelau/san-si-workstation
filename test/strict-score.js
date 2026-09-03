/* 严格背诵评分 strictReciteScore() 的评分区间与铁律测试
   运行： node test/strict-score.js

   评分铁律（用户给定，必须严格成立）：
     - 完全准确 90-100
     - 少量错漏 ≤5%  80-89
     - 错漏 5%-15%   60-79
     - 错漏 >15%     0-59
     - 乱读/不沾原文  封顶 30，严禁 85+
*/
'use strict';
const h = require('./harness');
const r = h.createReporter('严格背诵评分');
const html = h.readSource();

/* ---- 抽取被测函数 ---- */
const NAMES = ['reciteNorm', 'escRecite', 'strictReciteScore'];
let api = {};
try {
  const src = h.grabAll(html, NAMES);
  new Function('exports', src + '\nexports.reciteNorm=reciteNorm;exports.strictReciteScore=strictReciteScore;')(api);
} catch (e) {
  r.ok('抽取评分函数', false, e.message);
  r.finish();
  return;
}
const { reciteNorm, strictReciteScore } = api;
r.ok('抽取评分函数', typeof strictReciteScore === 'function');

/* ---- 归一化 ---- */
r.section('文本归一化');
r.ok('去掉空白与标点', reciteNorm('空山 不见人，但闻人语响。') === '空山不见人但闻人语响',
  reciteNorm('空山 不见人，但闻人语响。'));

/* ---- 评分区间 ---- */
const POEM = '空山不见人，但闻人语响。返景入深林，复照青苔上。'; // 归一化后 20 字
const cases = [
  { name: '一字不差', got: POEM, band: [90, 100], note: '错漏 0%' },
  { name: '只有标点空格差异', got: '空山不见人 但闻人语响 返景入深林 复照青苔上', band: [90, 100], note: '不应因标点扣分' },
  { name: '漏 1 字（20字中,5%）', got: '空山不见人，但闻人语响。返景入深林，复照青苔。', band: [80, 89] },
  { name: '错 2 字（20字中,10%）', got: '空山不见大，但闻人雨响。返景入深林，复照青苔上。', band: [60, 79] },
  { name: '漏 3 字（20字中,15% 边界）', got: '空山不见，但闻语响。返景入深林，复照青苔。', band: [60, 79] },
  { name: '漏 5 字（20字中,25%）', got: '空山不见，但闻语响。返景入深，复照青。', band: [0, 59] },
  { name: '背对之后多说一通废话', got: POEM + '今天天气真好啊我们出去玩吧', band: [0, 59] },
  { name: '完全乱读不沾原文', got: '我我我今天吃了三个大苹果然后就睡觉了', band: [0, 30] },
  { name: '背成另一首诗', got: '床前明月光疑是地上霜举头望明月低头思故乡', band: [0, 30] },
  { name: '只背了开头一句', got: '空山不见人', band: [0, 30] },
  { name: '空转写（完全没出声）', got: '', band: [0, 0] }
];

r.section('评分区间');
cases.forEach(c => {
  const v = strictReciteScore(POEM, c.got);
  const ok = v.score >= c.band[0] && v.score <= c.band[1];
  r.ok(c.name, ok, v.score + ' 分 / 错漏率 ' + v.error_rate + '% / 期望 ' + c.band[0] + '-' + c.band[1]
    + (v.offTopic ? ' / 判定不沾原文' : '') + (c.note ? ' / ' + c.note : ''));
  if (v.error_list.length) r.info('前 3 处: ' + v.error_list.slice(0, 3).join(' | '));
});

/* ---- 铁律：大量错读绝不允许 85+ ---- */
r.section('铁律：大量错读严禁 85 分以上');
['大大大大小小上上下下', '一二三四五六七八九十', '啊吧吗呢的了在是'].forEach(j => {
  const v = strictReciteScore(POEM, j);
  r.ok('乱读「' + j + '」', v.score < 85, v.score + ' 分（必须 < 85）');
});

/* ---- 错误分类 ---- */
r.section('错误分类');
const vMix = strictReciteScore(POEM, '空山不见大，但闻语响。返景入深林，复照青苔上。');
r.ok('错读被识别', vMix.stat.sub > 0, '错读 ' + vMix.stat.sub + ' 字');
r.ok('漏读被识别', vMix.stat.del > 0, '漏读 ' + vMix.stat.del + ' 字');
const vIns = strictReciteScore(POEM, POEM + '哈哈哈');
r.ok('多读被识别', vIns.stat.ins > 0, '多读 ' + vIns.stat.ins + ' 字');

/* ---- 边界单调性 ---- */
r.section('错漏率递增时分数必须递减');
const base = '一二三四五六七八九十甲乙丙丁戊己庚辛壬癸'; // 20 字
let prev = 101, monotonic = true;
const rows = [];
for (let drop = 0; drop <= 6; drop++) {
  const v = strictReciteScore(base, base.slice(0, base.length - drop));
  rows.push('漏' + drop + '字=' + v.error_rate + '%→' + v.score + '分');
  if (v.score > prev) monotonic = false;
  prev = v.score;
}
r.ok('分数随错漏增加而下降', monotonic, rows.join('  '));

r.finish();
