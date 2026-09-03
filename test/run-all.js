/* 一键跑全部测试
   运行： node test/run-all.js
   任何一个用例失败，进程退出码为 1（方便接 CI 或提交前检查）
*/
'use strict';
const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const files = fs.readdirSync(__dirname)
  .filter(f => f.endsWith('.js') && f !== 'harness.js' && f !== 'run-all.js')
  .sort();

const failed = [];
for (const f of files) {
  console.log('\n' + '='.repeat(56));
  console.log('▶ ' + f);
  console.log('='.repeat(56));
  const res = spawnSync(process.execPath, [path.join(__dirname, f)], { encoding: 'utf8' });
  if (res.stdout) process.stdout.write(res.stdout);
  if (res.stderr) process.stderr.write(res.stderr);
  if (res.status !== 0) failed.push(f);
}

console.log('\n' + '='.repeat(56));
if (failed.length) {
  console.log('结果：有测试未通过 -> ' + failed.join(', '));
  process.exitCode = 1;
} else {
  console.log('结果：全部通过（' + files.length + ' 个测试文件）');
}
