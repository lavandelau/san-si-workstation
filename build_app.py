# -*- coding: utf-8 -*-
"""
把「少年学习空间站」+ 4 个游戏文件，构建成可安装到手机/平板的 PWA 站点。

用法：
    python build_app.py

产物： app/ 目录（直接拿去部署成静态站点即可）
  - index.html            ← 少年学习空间站.html
  - game_hall.html / game_24.html / game_memory.html / game_multiply.html
  - manifest.json         ← 安装到桌面所需的清单
  - sw.js                 ← 离线缓存，装好后断网也能玩
  - icons/*.png           ← APP 图标
"""
import os
import re
import shutil
import time

BASE = os.path.dirname(os.path.abspath(__file__))
APP = os.path.join(BASE, "app")
ICONS = os.path.join(APP, "icons")

THEME = "#5BBFB5"          # 侧边栏主色（青绿）
THEME_DARK = "#45b7ab"
BG = "#f0f7fa"             # 页面背景色

# 源文件名 -> 发布后的文件名
PAGES = [
    ("少年学习空间站.html", "index.html"),
    ("game_hall.html", "game_hall.html"),
    ("game_24.html", "game_24.html"),
    ("game_memory.html", "game_memory.html"),
    ("game_multiply.html", "game_multiply.html"),
]

# ============================================================
# 1. 图标
# ============================================================
def make_icons():
    from PIL import Image, ImageDraw

    S = 512

    def lerp(c1, c2, t):
        return tuple(int(c1[i] + (c2[i] - c1[i]) * t) for i in range(3))

    def hexc(h):
        h = h.lstrip("#")
        return tuple(int(h[i:i + 2], 16) for i in (0, 2, 4))

    def star(cx, cy, R, r, n=5, start=-90):
        import math
        pts = []
        for i in range(n * 2):
            rad = R if i % 2 == 0 else r
            a = math.radians(start + i * (360 / (n * 2)))
            pts.append((cx + rad * math.cos(a), cy + rad * math.sin(a)))
        return pts

    def draw_content(d, s):
        """在 s x s 的画布上画书本 + 星星（白色图形，透明底）。"""
        k = s / S
        white = (255, 255, 255, 255)
        ink = (255, 255, 255, 255)
        # ---- 打开的书 ----
        mid = 256 * k
        lx, rx = 112 * k, 400 * k          # 页面外缘
        ty_o, ty_m = 262 * k, 296 * k      # 顶边：外缘 / 中缝
        by_o, by_m = 372 * k, 406 * k      # 底边
        # 书页下方的厚度
        d.polygon([(mid, ty_m), (lx, ty_o), (lx, by_o + 14 * k), (mid, by_m + 14 * k)],
                  fill=(255, 255, 255, 140))
        d.polygon([(mid, ty_m), (rx, ty_o), (rx, by_o + 14 * k), (mid, by_m + 14 * k)],
                  fill=(255, 255, 255, 140))
        # 左右两页
        d.polygon([(mid, ty_m), (lx, ty_o), (lx, by_o), (mid, by_m)], fill=white)
        d.polygon([(mid, ty_m), (rx, ty_o), (rx, by_o), (mid, by_m)], fill=white)
        # 页面上的横线（透视：跟随页面斜率）
        slope = (ty_m - ty_o) / (mid - lx)
        line_col = (91, 191, 181, 255)
        for i in range(3):
            off = (34 + i * 30) * k
            x1, x2 = 132 * k, 238 * k
            y1 = ty_o + slope * (x1 - lx) + off
            y2 = ty_o + slope * (x2 - lx) + off
            d.line([(x1, y1), (x2, y2)], fill=line_col, width=int(9 * k))
            d.line([(s - x1, y1), (s - x2, y2)], fill=line_col, width=int(9 * k))
        # 书脊
        d.line([(mid, ty_m), (mid, by_m + 14 * k)], fill=(91, 191, 181, 255), width=int(7 * k))
        # ---- 大星星 ----
        d.polygon(star(256 * k, 158 * k, 78 * k, 33 * k), fill=(252, 211, 77, 255))
        # ---- 两侧小星星 ----
        d.polygon(star(96 * k, 214 * k, 26 * k, 11 * k), fill=(252, 211, 77, 220))
        d.polygon(star(416 * k, 214 * k, 22 * k, 9 * k), fill=(255, 255, 255, 200))
        return ink

    def base_gradient(s, rounded=True):
        img = Image.new("RGBA", (s, s), (0, 0, 0, 0))
        d = ImageDraw.Draw(img)
        c1, c2 = hexc(THEME), hexc(THEME_DARK)
        for y in range(s):
            t = y / max(s - 1, 1)
            d.line([(0, y), (s, y)], fill=lerp(c1, c2, t) + (255,))
        if rounded:
            mask = Image.new("L", (s, s), 0)
            ImageDraw.Draw(mask).rounded_rectangle(
                [0, 0, s - 1, s - 1], radius=int(s * 0.22), fill=255)
            img.putalpha(mask)
        return img

    def content_layer(s):
        img = Image.new("RGBA", (s, s), (0, 0, 0, 0))
        draw_content(ImageDraw.Draw(img), s)
        return img

    def save(img, name):
        p = os.path.join(ICONS, name)
        img.save(p, "PNG", optimize=True)
        print("   icon ->", name, img.size)

    def compose(size, content_ratio=1.0, rounded=True, flat=False):
        bg = Image.new("RGBA", (size, size), hexc(THEME) + (255,)) if flat \
            else base_gradient(size, rounded=rounded)
        c = content_layer(512)
        if content_ratio != 1.0:
            w = int(512 * content_ratio)
            c = c.resize((w, w), Image.LANCZOS)
            bg.paste(c, ((size - w) // 2, (size - w) // 2), c)
        else:
            c = c.resize((size, size), Image.LANCZOS)
            bg.alpha_composite(c)
        return bg

    # 常规图标
    save(compose(512), "icon-512.png")
    save(compose(192), "icon-192.png")
    # maskable：内容收到 62% 安全区，背景铺满
    save(compose(512, content_ratio=0.62, rounded=False, flat=True), "icon-maskable-512.png")
    # iOS：不透明满幅，由系统加圆角
    save(compose(180, content_ratio=0.80, rounded=False), "apple-touch-icon.png")
    save(compose(64), "favicon.png")


# ============================================================
# 2. 注入 PWA 标签
# ============================================================
PWA_HEAD = """<meta name="theme-color" content="{theme}">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<meta name="apple-mobile-web-app-title" content="学习站">
<link rel="manifest" href="./manifest.json">
<link rel="apple-touch-icon" href="./icons/apple-touch-icon.png">
<link rel="icon" type="image/png" href="./icons/favicon.png">
<script>
/* 离线缓存：file:// 下自动跳过，不影响本地双击打开 */
if('serviceWorker' in navigator && location.protocol !== 'file:'){
  window.addEventListener('load', function(){
    navigator.serviceWorker.register('./sw.js').catch(function(){});
  });
}
</script>
""".replace("{theme}", THEME)

INSTALL_HINT = """
<style>
#pwaHint{position:fixed;left:0;right:0;top:0;z-index:99999;display:flex;align-items:center;gap:10px;
  padding:12px 14px;background:{theme};color:#fff;font-size:14px;line-height:1.5;
  box-shadow:0 2px 10px rgba(0,0,0,.18);font-family:inherit}
#pwaHint .pwaHintTxt{flex:1}
#pwaHint button{background:#fff;color:{theme};border-radius:10px;padding:8px 14px;
  font-size:14px;font-weight:700;white-space:nowrap}
</style>
<div id="pwaHint" style="display:none">
  <span class="pwaHintTxt"></span>
  <button type="button">知道了</button>
</div>
<script>
(function(){
  var KEY='pwa_hint_closed', box=document.getElementById('pwaHint');
  if(!box) return;
  var ua=navigator.userAgent;
  var isIOS=/iPad|iPhone|iPod/.test(ua)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1);
  var standalone=window.matchMedia('(display-mode: standalone)').matches||window.navigator.standalone===true;
  if(standalone) return;
  try{ if(localStorage.getItem(KEY)) return; }catch(e){}
  var touch=('ontouchstart' in window)||navigator.maxTouchPoints>0;
  if(!touch && !isIOS) return;
  var msg = isIOS
    ? '装到桌面更好用：点底部「分享」按钮 → 选「添加到主屏幕」'
    : '装到桌面更好用：点浏览器右上角菜单 → 选「添加到主屏幕 / 安装应用」';
  box.querySelector('.pwaHintTxt').textContent = msg;
  box.style.display='flex';
  box.querySelector('button').addEventListener('click', function(){
    box.style.display='none';
    try{ localStorage.setItem(KEY,'1'); }catch(e){}
  });
})();
</script>
""".replace("{theme}", THEME)


def inject(html, with_hint):
    if "</head>" not in html:
        raise RuntimeError("找不到 </head>")
    extra = PWA_HEAD + (INSTALL_HINT if with_hint else "")
    return html.replace("</head>", extra + "</head>", 1)


# ============================================================
# 3. 清单 & 离线缓存
# ============================================================
def write_manifest():
    icons = [
        {"src": "./icons/icon-192.png", "sizes": "192x192", "type": "image/png", "purpose": "any"},
        {"src": "./icons/icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "any"},
        {"src": "./icons/icon-maskable-512.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable"},
    ]
    data = {
        "name": "少年学习空间站",
        "short_name": "学习站",
        "description": "语文天地、数学王国、英语角与离线小游戏，专为小学生设计",
        "start_url": "./index.html",
        "scope": "./",
        "display": "standalone",
        "orientation": "any",
        "background_color": BG,
        "theme_color": THEME,
        "lang": "zh-CN",
        "dir": "ltr",
        "categories": ["education", "kids"],
        "icons": icons,
    }
    import json
    with open(os.path.join(APP, "manifest.json"), "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print("   manifest.json")


def write_sw():
    ver = time.strftime("%Y%m%d%H%M%S")
    files = ["./", "./index.html"] + ["./" + dst for _, dst in PAGES[1:]]
    files += ["./manifest.json", "./icons/icon-192.png", "./icons/icon-512.png",
              "./icons/icon-maskable-512.png", "./icons/apple-touch-icon.png",
              "./icons/favicon.png"]
    sw = """/* 离线缓存 - 版本 {ver} */
var CACHE = 'xuexi-zhan-{ver}';
var FILES = {files};

self.addEventListener('install', function (e) {{
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(function (c) {{
    return Promise.all(FILES.map(function (u) {{
      return c.add(u).catch(function () {{}});
    }}));
  }}));
}});

self.addEventListener('activate', function (e) {{
  e.waitUntil(caches.keys().then(function (keys) {{
    return Promise.all(keys.map(function (k) {{
      return k === CACHE ? null : caches.delete(k);
    }}));
  }}).then(function () {{ return self.clients.claim(); }}));
}});

self.addEventListener('fetch', function (e) {{
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);
  if (url.origin !== location.origin) return;
  e.respondWith(
    caches.match(req).then(function (hit) {{
      if (hit) {{
        fetch(req).then(function (res) {{
          if (res && res.status === 200) caches.open(CACHE).then(function (c) {{ c.put(req, res.clone()); }});
        }}).catch(function () {{}});
        return hit;
      }}
      return fetch(req).then(function (res) {{
        if (res && res.status === 200 && res.type === 'basic') {{
          var copy = res.clone();
          caches.open(CACHE).then(function (c) {{ c.put(req, copy); }});
        }}
        return res;
      }}).catch(function () {{
        return caches.match('./index.html');
      }});
    }})
  );
}});
""".format(ver=ver, files=repr(files).replace("'", '"'))
    with open(os.path.join(APP, "sw.js"), "w", encoding="utf-8") as f:
        f.write(sw)
    print("   sw.js  (cache: xuexi-zhan-%s)" % ver)


# ============================================================
def main():
    if os.path.isdir(APP):
        shutil.rmtree(APP)
    os.makedirs(ICONS, exist_ok=True)

    print("[1/4] 生成 APP 图标")
    make_icons()

    print("[2/4] 复制页面并注入 PWA 配置")
    for src, dst in PAGES:
        p = os.path.join(BASE, src)
        if not os.path.exists(p):
            print("   !! 缺少", src)
            continue
        with open(p, "r", encoding="utf-8") as f:
            html = f.read()
        html = inject(html, with_hint=(dst == "index.html"))
        out = os.path.join(APP, dst)
        with open(out, "w", encoding="utf-8") as f:
            f.write(html)
        print("   %-22s -> %-22s %6.1f KB" % (src, dst, os.path.getsize(out) / 1024))

    print("[3/4] 写清单文件")
    write_manifest()

    print("[4/4] 写离线缓存脚本")
    write_sw()

    total = sum(os.path.getsize(os.path.join(r, f))
                for r, _, fs in os.walk(APP) for f in fs)
    print("\n完成 -> %s  (共 %.1f KB)" % (APP, total / 1024))


if __name__ == "__main__":
    main()
