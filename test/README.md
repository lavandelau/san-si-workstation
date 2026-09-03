# 测试目录

对 `少年学习空间站.html` 做自动化校验。项目是单文件 HTML，所有 CSS/JS 内联，没有构建产物可测，所以测试直接从 HTML 里抽代码出来跑。

## 怎么跑

```bash
node test/run-all.js          # 全部测试，失败时退出码 1
node test/syntax.js           # 只跑语法门禁
node test/strict-score.js     # 只跑背诵评分
```

用托管 Node，路径示例：

```bash
"C:/Users/51951/.workbuddy/binaries/node/versions/22.22.2-2/node.exe" test/run-all.js
```

## 文件说明

| 文件 | 作用 |
|---|---|
| `run-all.js` | 依次跑下面每个测试文件，汇总通过与失败 |
| `harness.js` | 公共工具：定位源文件、内联 JS 语法检查、按函数名抽源码、浏览器环境桩、断言统计。**不是测试，不直接运行** |
| `syntax.js` | 语法门禁。源文件和 `app/` 构建产物的每个内联 `<script>` 都要能被 `new Function()` 解析 |
| `recite-data.js` | 背诵素材库数据完整性：17 条素材字段齐全、现代文片段的分句数与关键词数一致、古诗库没被覆盖 |
| `strict-score.js` | 严格背诵评分 `strictReciteScore()` 的区间与铁律：四档分数区间、乱读封顶 30、错/漏/多读分类、单调性 |
| `recite-flow.js` | 录音链路集成：用 DOM 桩把真实的 `finishRecite` / `finishRecite4` 跑一遍，验证分数、错误清单、转写回显、无转写时降级封顶 60 |

## 三个必须记住的坑

**1. 校验 JS 语法只能用 Node，不能用 Python。**
Python 的 `compile()` 对中文全角字符（`：（））宽容度低，会误报 `invalid character`。一律用 `node --check` 或 `new Function(code)`。

**2. 抽函数源码时会漏掉 `async`。**
`html.indexOf('function X(')` 定位在 `function` 上，前面还有 `async ` 没被包含。抽出来的函数体里的 `await` 会报
`await is only valid in async functions`。`harness.js` 的 `grab()` 已经向前补了 6 个字符处理这件事，加新抽取时直接复用。

**3. DOM 桩要能接住 `addEventListener` 和 `classList.add`。**
早期版本的桩缺这两个，模拟点击直接崩。`makeStubs()` 里已经补全。

## 加新测试

1. 在 `test/` 下新建 `xxx.js`
2. `const h = require('./harness');` 拿工具
3. 用 `h.createReporter('标题')` 做断言和汇总
4. `r.finish()` 在结尾调用，有失败会自动把退出码设成 1
5. 不用改 `run-all.js`，它会自动发现新文件

## 测试覆盖不到的部分

麦克风、语音识别、Web Audio 音效这些依赖真实浏览器的能力，测试里全是桩，**只能验证逻辑分支，验证不了实际效果**。涉及录音的改动，发布后必须在 https 或 localhost 下真机试一遍。
