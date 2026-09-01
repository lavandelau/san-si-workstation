/* 校验少年学习空间站.html：语法检查 + reciteData 统计 */
const fs = require('fs');
const path = 'D:/WorkBuddy/2026-08-23-20-10-40/三升四工作站/少年学习空间站.html';
const html = fs.readFileSync(path, 'utf8');

// 1. 提取所有 <script> 块并语法检查
const scripts = [...html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)].map(m => m[1]).filter(s => s.trim());
console.log('script blocks:', scripts.length);
scripts.forEach((s, i) => {
  try {
    new Function(s);
    console.log(`  block ${i + 1}: syntax OK (${s.length} chars)`);
  } catch (e) {
    console.log(`  block ${i + 1}: SYNTAX ERROR -> ${e.message}`);
  }
});

// 2. 提取 reciteData 并统计
const m = html.match(/const reciteData = (\[[\s\S]*?\]);\s*\n\s*\/\* Thinking Questions \*\//);
if (!m) { console.log('reciteData NOT FOUND'); process.exit(1); }
const reciteData = eval(m[1]);
const byTag = {};
reciteData.forEach(r => {
  byTag[r.tag] = (byTag[r.tag] || 0) + 1;
  if (!r.title || !r.source || !r.content || !r.tag) console.log('  缺字段:', r.title);
  if (r.tag === '现代文片段') {
    const sents = r.content.split(/(?<!。！？)|(?<=[。！？])|(?<=……)/).filter(x => x.trim());
    // 用与页面一致的逐字符切句逻辑
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
    const sc = splitSentences(r.content).length;
    const hc = (r.hints || []).length;
    console.log(`  [${r.title}] 分句 ${sc} / 关键词 ${hc} ${sc === hc ? 'OK' : '<<< MISMATCH'}`);
  }
});
console.log('\n=== 导入统计 ===');
console.log('总条目:', reciteData.length);
Object.keys(byTag).forEach(t => console.log(`  ${t}: ${byTag[t]} 条`));
console.log('\n明细:');
reciteData.forEach((r, i) => console.log(`  ${String(i + 1).padStart(2, '0')}. [${r.tag}] ${r.title} — ${r.source} (${r.content.replace(/\n/g, '').length}字)`));

// 3. 确认旧数据未被覆盖
const oldPoems = html.match(/const poemsData = \[([\s\S]*?)\];/);
const poemTitles = [...oldPoems[1].matchAll(/title:'([^']+)'/g)].map(x => x[1]);
console.log('\n旧 poemsData 保留条目:', poemTitles.length, poemTitles.join('、'));
