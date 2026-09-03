/* 测试公共工具
   提供：定位源文件、内联 JS 语法检查、按函数名抽取源码、DOM 桩、断言统计
*/
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SOURCE = path.join(ROOT, '少年学习空间站.html');
const APP = path.join(ROOT, 'app');

/* ---------- 源文件 ---------- */
function readSource() {
  if (!fs.existsSync(SOURCE)) throw new Error('找不到源文件: ' + SOURCE);
  return fs.readFileSync(SOURCE, 'utf8');
}

function listAppHtml() {
  if (!fs.existsSync(APP)) return [];
  return fs.readdirSync(APP).filter(n => n.endsWith('.html')).map(n => path.join(APP, n));
}

/* 取出所有内联 <script> 的代码体（跳过外链脚本） */
function inlineScripts(html) {
  const re = /<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g;
  const out = [];
  let m;
  while ((m = re.exec(html))) { if (m[1].trim()) out.push(m[1]); }
  return out;
}

/* 语法检查：必须用 Node 的 new Function()
   Python 的 compile() 对中文全角字符（：（））会误报 invalid character */
function checkSyntax(html) {
  const blocks = inlineScripts(html);
  const errors = [];
  blocks.forEach((code, i) => {
    try { new Function(code); }
    catch (e) { errors.push({ block: i + 1, message: e.message }); }
  });
  return { total: blocks.length, bad: errors.length, errors };
}

/* 按函数名抽取源码
   坑：indexOf('function X(') 定位在 function 上，前面可能还有 async 关键字，
   必须一起带上，否则抽出来的函数体里的 await 会报
   "await is only valid in async functions and the top level bodies of modules" */
function grab(html, name) {
  let start = html.indexOf('function ' + name + '(');
  if (start < 0) throw new Error('找不到函数 ' + name);
  if (html.slice(Math.max(0, start - 6), start) === 'async ') start -= 6;
  let depth = 0;
  for (let i = html.indexOf('{', start); i < html.length; i++) {
    if (html[i] === '{') depth++;
    else if (html[i] === '}') { depth--; if (depth === 0) return html.slice(start, i + 1); }
  }
  throw new Error('括号未闭合: ' + name);
}

function grabAll(html, names) {
  return names.map(n => grab(html, n)).join('\n');
}

/* ---------- 浏览器环境桩 ---------- */
function mkEl(id) {
  return {
    _id: id, innerHTML: '', textContent: '', disabled: false, style: {},
    classList: {
      _s: {},
      add(c) { this._s[c] = 1; },
      remove(c) { delete this._s[c]; },
      contains(c) { return !!this._s[c]; }
    },
    appendChild() {}, insertBefore() {}, removeChild() {},
    querySelectorAll() { return []; }, addEventListener() {}
  };
}

/* 构造一套最小可用的浏览器桩，供 new Function(body) 注入 */
function makeStubs(opts) {
  opts = opts || {};
  const els = {};
  const documentStub = {
    getElementById(id) { return els[id] || (els[id] = mkEl(id)); },
    createElement() { return mkEl('new'); },
    querySelectorAll() { return []; },
    addEventListener() {}
  };
  class BlobStub {
    constructor(parts, opt) { this.parts = parts; this.type = (opt && opt.type) || 'audio/webm'; }
    async arrayBuffer() { throw new Error('测试环境不做音频解码'); }
  }
  const URLStub = { revokeObjectURL() {}, createObjectURL() { return 'blob:test'; } };
  const windowStub = Object.assign({
    AudioContext: function () { throw new Error('测试环境无音频上下文'); }
  }, opts.window || {});
  return { els, documentStub, windowStub, BlobStub, URLStub };
}

/* 模拟支持语音识别的浏览器（默认不提供，需要时显式开启） */
function fakeSpeechRecognition() {
  return function () {
    this.lang = ''; this.continuous = false; this.interimResults = false; this.maxAlternatives = 1;
    this.onresult = null; this.onerror = null; this.onend = null;
    this.start = function () {};
    this.stop = function () { if (this.onend) this.onend(); };
  };
}

/* ---------- 断言 + 汇总 ---------- */
function createReporter(title) {
  let pass = 0, fail = 0;
  return {
    section(t) { console.log('\n=== ' + t + ' ==='); },
    ok(name, cond, detail) {
      const good = !!cond;
      if (good) pass++; else fail++;
      console.log('  [' + (good ? '通过' : '失败') + '] ' + name + (detail ? '  ' + detail : ''));
      return good;
    },
    info(msg) { console.log('        ' + msg); },
    finish() {
      console.log('\n' + title + ' -> ' + pass + ' 通过 / ' + fail + ' 失败');
      if (fail > 0) process.exitCode = 1;
      return fail === 0;
    }
  };
}

module.exports = {
  ROOT, SOURCE, APP,
  readSource, listAppHtml,
  inlineScripts, checkSyntax,
  grab, grabAll,
  mkEl, makeStubs, fakeSpeechRecognition,
  createReporter
};
