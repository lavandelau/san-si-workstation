/* 语法门禁：源文件 + app/ 构建产物的全部内联脚本都必须能被解析
   运行： node test/syntax.js
*/
'use strict';
const fs = require('fs');
const h = require('./harness');
const r = h.createReporter('JS 语法检查');

const html = h.readSource();
const s = h.checkSyntax(html);
r.ok('源文件内联脚本语法正确', s.bad === 0, s.total + ' 块 / ' + s.bad + ' 个错误');
s.errors.forEach(e => r.info('块#' + e.block + ' -> ' + e.message));

/* 构建产物一并检查，避免"注入 PWA 配置时把代码写坏了" */
const appFiles = h.listAppHtml();
if (appFiles.length === 0) {
  r.info('未找到 app/ 构建产物，跳过（先跑 build_app.py）');
} else {
  let total = 0, bad = 0;
  appFiles.forEach(f => {
    const res = h.checkSyntax(fs.readFileSync(f, 'utf8'));
    total += res.total; bad += res.bad;
    res.errors.forEach(e => r.info(require('path').basename(f) + ' 块#' + e.block + ' -> ' + e.message));
  });
  r.ok('app/ 构建产物语法正确', bad === 0, appFiles.length + ' 个文件 / ' + total + ' 块 / ' + bad + ' 个错误');
}

/* 结构完整性：成对标签别被误删 */
r.ok('script 开闭标签配对', (html.match(/<script/g) || []).length === (html.match(/<\/script>/g) || []).length,
  '开 ' + (html.match(/<script/g) || []).length + ' / 闭 ' + (html.match(/<\/script>/g) || []).length);

r.finish();
