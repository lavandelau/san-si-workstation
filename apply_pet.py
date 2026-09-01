"""
Apply pet-dog modifications to 少年学习空间站.html
1. Replace petSVG() with petDogHTML() using the user's 3D dog image
2. Add CSS animations for the dog
3. Rename species list to dog-themed names
4. Keep eggSVG for hatching, but show dog on hatch
"""
import re, os, base64

ROOT = os.path.dirname(os.path.abspath(__file__))
HTML = os.path.join(ROOT, '少年学习空间站.html')
DOG_B64_FILE = os.path.join(ROOT, '_dog_b64.txt')

with open(HTML, 'r', encoding='utf-8') as f:
    html = f.read()

with open(DOG_B64_FILE, 'r', encoding='utf-8') as f:
    dog_data_uri = f.read().strip()  # already has data:image/png;base64, prefix

print(f'HTML size: {len(html)}')
print(f'Dog data URI length: {len(dog_data_uri)}')

# ============================================================
# 1) Replace petSVG() function with petDogHTML() that uses the image
# ============================================================
old_pet_svg = '''/* 生成宠物SVG（按物种+成长阶段） */
function petSVG(speciesId, opts){
  opts = opts || {};
  const sp = petSpecies.find(s=>s.id===speciesId) || petSpecies[4];
  const size = opts.size || 160;
  let ears = '', extra = '';
  if(sp.kind==='cat'){
    ears = `<path d="M30 32 L24 12 L44 24 Z" fill="${sp.ear}"/><path d="M70 32 L76 12 L56 24 Z" fill="${sp.ear}"/>`;
    extra = `<path d="M18 48 h13 M18 54 h13 M69 48 h13 M69 54 h13" stroke="#B58A5C" stroke-width="1.4" stroke-linecap="round"/>`;
  } else if(sp.kind==='rabbit'){
    ears = `<ellipse cx="36" cy="15" rx="8" ry="18" fill="${sp.body}" transform="rotate(-8 36 15)"/><ellipse cx="36" cy="15" rx="4" ry="12" fill="${sp.ear}" transform="rotate(-8 36 15)"/><ellipse cx="64" cy="15" rx="8" ry="18" fill="${sp.body}" transform="rotate(8 64 15)"/><ellipse cx="64" cy="15" rx="4" ry="12" fill="${sp.ear}" transform="rotate(8 64 15)"/>`;
  } else if(sp.kind==='fox'){
    ears = `<path d="M28 34 L22 8 L46 22 Z" fill="${sp.ear}"/><path d="M72 34 L78 8 L54 22 Z" fill="${sp.ear}"/>`;
  } else if(sp.kind==='dragon'){
    ears = `<path d="M34 24 L28 6 L44 18 Z" fill="${sp.ear}"/><path d="M66 24 L72 6 L56 18 Z" fill="${sp.ear}"/>`;
    extra = `<path d="M16 72 Q4 64 8 52 Q16 58 22 62 Z" fill="#A8DCC3"/><path d="M84 72 Q96 64 92 52 Q84 58 78 62 Z" fill="#A8DCC3"/>`;
  } else {
    ears = `<ellipse cx="28" cy="30" rx="9" ry="15" fill="${sp.ear}" transform="rotate(-18 28 30)"/><ellipse cx="72" cy="30" rx="9" ry="15" fill="${sp.ear}" transform="rotate(18 72 30)"/>`;
  }
  let acc = '';
  if((opts.stage||1)>=2) acc += `<rect x="38" y="57" width="24" height="6" rx="3" fill="#FF6B6B"/><circle cx="50" cy="63" r="2.5" fill="#FCD34D"/>`;
  if((opts.stage||1)>=3) acc += `<path d="M35 16 L40 24 L45 16 L50 24 L55 16 L60 24 L65 16 L62 28 L38 28 Z" fill="#FCD34D" stroke="#F0B429" stroke-width="1"/>`;
  return `<svg class="pet-svg ${opts.bob?'pet-bob':''}" viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg" style="width:${size}px;height:${size}px">
    <path d="M75 78 Q92 68 86 52" stroke="${sp.body}" stroke-width="6" fill="none" stroke-linecap="round"/>
    <ellipse cx="50" cy="82" rx="26" ry="22" fill="${sp.body}"/>
    <ellipse cx="50" cy="88" rx="15" ry="12" fill="${sp.belly}"/>
    <rect x="33" y="94" width="9" height="15" rx="4.5" fill="${sp.body}"/>
    <rect x="58" y="94" width="9" height="15" rx="4.5" fill="${sp.body}"/>
    <circle cx="50" cy="45" r="26" fill="${sp.body}"/>
    ${ears}
    <circle cx="40" cy="43" r="4" fill="#333"/><circle cx="60" cy="43" r="4" fill="#333"/>
    <circle cx="41.3" cy="41.7" r="1.4" fill="#fff"/><circle cx="61.3" cy="41.7" r="1.4" fill="#fff"/>
    <ellipse cx="50" cy="53" rx="3.5" ry="2.5" fill="#333"/>
    <path d="M50 56 Q46.5 61 43 59 M50 56 Q53.5 61 57 59" stroke="#333" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    ${extra}
    ${acc}
    <circle cx="32" cy="52" r="3.2" fill="#FFB6C1" opacity="0.7"/><circle cx="68" cy="52" r="3.2" fill="#FFB6C1" opacity="0.7"/>
  </svg>`;
}'''

new_pet_svg = f'''/* 生成宠物展示：使用用户提供的3D狗狗（base64嵌入），按阶段叠加配饰 */
const PET_DOG_SRC = {dog_data_uri!r};  /* data:image/png;base64,... */
function petDogHTML(opts){{
  opts = opts || {{}};
  const size = opts.size || 170;
  const stage = opts.stage || 1;
  const bob = opts.bob ? ' pet-bob' : '';
  const stageClass = ' pet-stage-' + stage;
  /* 阶段2（少年）：脖子光圈；阶段3（成年）：头顶皇冠 + 全身闪光 */
  let extra = '';
  if(stage >= 2) extra += '<div class="pet-collar-glow"></div>';
  if(stage >= 3) extra += '<svg class="pet-crown" viewBox="0 0 60 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 22 L8 8 L18 16 L30 4 L42 16 L52 8 L55 22 Z" fill="#FCD34D" stroke="#F0B429" stroke-width="1.5" stroke-linejoin="round"/><circle cx="30" cy="6" r="2.5" fill="#FF6B6B"/><circle cx="8" cy="10" r="1.8" fill="#5BBFB5"/><circle cx="52" cy="10" r="1.8" fill="#A78BFA"/></svg><div class="pet-sparkles">' + [0,1,2,3].map(i=>'<span class="pet-sparkle sp'+i+'">✦</span>').join('') + '</div>';
  return `<div class="pet-wrap${{bob}}${{stageClass}}" style="width:${{size}}px;height:${{size}}px">
    <img class="pet-dog-img" src="${{PET_DOG_SRC}}" alt="小狗" draggable="false">
    ${{extra}}
  </div>`;
}}
/* 兼容旧名调用 */
function petSVG(speciesId, opts){{ return petDogHTML(opts); }}'''

assert old_pet_svg in html, 'Could not find petSVG function to replace'
html = html.replace(old_pet_svg, new_pet_svg)
print(f'OK: replaced petSVG (html now {len(html)} chars)')

# ============================================================
# 2) Add CSS for the dog image and animations
# ============================================================
old_css_anchor = '''@keyframes petBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}
.pet-bob{animation:petBob 2.6s ease-in-out infinite}
@keyframes eggShake{0%,100%{transform:rotate(0deg)}20%{transform:rotate(-7deg)}40%{transform:rotate(6deg)}60%{transform:rotate(-4deg)}80%{transform:rotate(3deg)}}
.egg-shake{animation:eggShake 1s ease-in-out infinite}
@keyframes popIn{0%{transform:scale(.6);opacity:0}70%{transform:scale(1.08)}100%{transform:scale(1);opacity:1}}
.pop-in{animation:popIn .4s ease-out}'''

new_css_anchor = '''@keyframes petBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}
.pet-bob{animation:petBob 2.6s ease-in-out infinite}
/* === 3D狗狗宠物 专属样式与动画 === */
.pet-wrap{position:relative;display:inline-block;margin:0 auto;filter:drop-shadow(0 8px 14px rgba(120,80,40,.18))}
.pet-dog-img{display:block;width:100%;height:100%;object-fit:contain;object-position:center 50%;user-select:none;-webkit-user-drag:none;pointer-events:none}
/* 眨眼：每隔几秒快速把亮度压一下 */
@keyframes petBlink{0%,92%,100%{filter:brightness(1)}94%{filter:brightness(.78)}96%{filter:brightness(1)}}
.pet-dog-img{animation:petBlink 5.5s ease-in-out infinite}
/* 尾巴轻摆（用整图微旋转） */
@keyframes petWag{0%,100%{transform:rotate(0deg)}25%{transform:rotate(-1.6deg)}75%{transform:rotate(1.6deg)}}
.pet-stage-1 .pet-dog-img{animation:petBlink 5.5s ease-in-out infinite, petWag 3.2s ease-in-out infinite}
.pet-stage-2 .pet-dog-img{animation:petBlink 5.2s ease-in-out infinite, petWag 2.8s ease-in-out infinite}
.pet-stage-3 .pet-dog-img{animation:petBlink 5s ease-in-out infinite, petWag 2.4s ease-in-out infinite}
/* 少年阶段脖子光圈 */
.pet-collar-glow{position:absolute;left:50%;bottom:18%;transform:translateX(-50%);width:78%;height:14%;background:radial-gradient(ellipse at center,rgba(255,215,120,.55),rgba(255,180,80,0) 70%);border-radius:50%;pointer-events:none;animation:collarPulse 2.4s ease-in-out infinite}
@keyframes collarPulse{0%,100%{opacity:.7;transform:translateX(-50%) scale(1)}50%{opacity:1;transform:translateX(-50%) scale(1.08)}}
/* 成年阶段头顶皇冠 */
.pet-crown{position:absolute;top:-6%;left:50%;transform:translateX(-50%);width:46%;height:auto;filter:drop-shadow(0 2px 3px rgba(255,180,0,.4));animation:crownFloat 3s ease-in-out infinite}
@keyframes crownFloat{0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(-4px)}}
/* 成年阶段闪光 */
.pet-sparkles{position:absolute;inset:0;pointer-events:none}
.pet-sparkle{position:absolute;color:#FCD34D;font-size:18px;text-shadow:0 0 6px rgba(255,210,80,.7);opacity:0;animation:sparkleShow 3s ease-in-out infinite}
.pet-sparkle.sp0{top:14%;left:8%;animation-delay:0s}
.pet-sparkle.sp1{top:24%;right:6%;animation-delay:.7s;font-size:22px}
.pet-sparkle.sp2{bottom:18%;left:14%;animation-delay:1.4s;font-size:16px}
.pet-sparkle.sp3{bottom:30%;right:12%;animation-delay:2.1s;font-size:20px}
@keyframes sparkleShow{0%,100%{opacity:0;transform:scale(.5) rotate(0deg)}50%{opacity:1;transform:scale(1.1) rotate(20deg)}}
/* 不同阶段整体缩放 */
.pet-stage-1 .pet-dog-img{transform-origin:center bottom}
.pet-stage-2 .pet-dog-img{transform-origin:center bottom}
.pet-stage-3 .pet-dog-img{transform-origin:center bottom}
.pet-stage-2 .pet-wrap{transform:scale(1.06)}
.pet-stage-3 .pet-wrap{transform:scale(1.12)}
/* 物种选择卡片里的狗狗：小一点 */
.species-card .pet-wrap{transform:none !important}
.species-card .pet-dog-img{animation:none !important}  /* 列表里关掉动画免得闪 */
/* === 旧动画保留 === */
@keyframes eggShake{0%,100%{transform:rotate(0deg)}20%{transform:rotate(-7deg)}40%{transform:rotate(6deg)}60%{transform:rotate(-4deg)}80%{transform:rotate(3deg)}}
.egg-shake{animation:eggShake 1s ease-in-out infinite}
@keyframes popIn{0%{transform:scale(.6);opacity:0}70%{transform:scale(1.08)}100%{transform:scale(1);opacity:1}}
.pop-in{animation:popIn .4s ease-out}'''

assert old_css_anchor in html, 'Could not find pet CSS anchor'
html = html.replace(old_css_anchor, new_css_anchor)
print(f'OK: replaced CSS animations')

# ============================================================
# 3) Rename species list to dog-themed names (all share one dog image)
# ============================================================
old_species = """const petSpecies = [
  {id:'cat',    name:'小猫',   body:'#F5B971', ear:'#F09A54', belly:'#FDEBD0', kind:'cat'},
  {id:'rabbit', name:'兔子',   body:'#F7F3EE', ear:'#F2C4CE', belly:'#FFFFFF', kind:'rabbit'},
  {id:'fox',    name:'小狐狸', body:'#FF8C66', ear:'#E86F45', belly:'#FFE9DC', kind:'fox'},
  {id:'dragon', name:'小龙',   body:'#7EC8A9', ear:'#5FB38C', belly:'#D8F3E6', kind:'dragon'},
  {id:'dog',    name:'小狗',   body:'#D4A574', ear:'#C49A6C', belly:'#F0DFC8', kind:'dog'},
];"""

new_species = """const petSpecies = [
  /* 全部统一为3D腊肠犬（图片相同），名字做颜色/性格区分，避免选了\"小猫\"却看到狗的违和感 */
  {id:'cat',    name:'奶黄',   body:'#F5B971', ear:'#F09A54', belly:'#FDEBD0', kind:'dog'},
  {id:'rabbit', name:'焦糖',   body:'#C99570', ear:'#A8784F', belly:'#F5E6D3', kind:'dog'},
  {id:'fox',    name:'栗子',   body:'#A06B45', ear:'#7E4F2F', belly:'#EFD9BD', kind:'dog'},
  {id:'dragon', name:'可可',   body:'#7E5238', ear:'#5C3924', belly:'#E5C8A8', kind:'dog'},
  {id:'dog',    name:'棕糖',   body:'#D4A574', ear:'#C49A6C', belly:'#F0DFC8', kind:'dog'},
];"""

assert old_species in html, 'Could not find petSpecies list'
html = html.replace(old_species, new_species)
print(f'OK: renamed petSpecies to dog-themed names')

# ============================================================
# 4) Hatch event: show dog with a celebratory pop animation when egg breaks
# ============================================================
old_hatch = """function tapEgg(){
  state.pet.hatchTaps = (state.pet.hatchTaps||0)+1;
  if(state.pet.hatchTaps >= 3){
    state.pet.hatched = true;
    state.pet.level = 1;
    saveState();
    showToast('🎉 ' + state.pet.name + ' 破壳而出！ Lv.1 幼崽来啦！');
  } else {
    saveState();
  }
  renderPet();
}"""

new_hatch = """function tapEgg(){
  state.pet.hatchTaps = (state.pet.hatchTaps||0)+1;
  if(state.pet.hatchTaps >= 3){
    state.pet.hatched = true;
    state.pet.level = 1;
    saveState();
    /* 破壳瞬间撒花特效 */
    burstConfetti();
    showToast('🎉 ' + state.pet.name + ' 破壳而出！ Lv.1 幼崽来啦！');
  } else {
    saveState();
  }
  renderPet();
}
/* 破壳撒花：纯 DOM 实现，无外部依赖 */
function burstConfetti(){
  const wrap = document.createElement('div');
  wrap.className = 'confetti-burst';
  const colors = ['#FF9F43','#FCD34D','#5BBFB5','#A78BFA','#FF6B9D','#51cf66'];
  for(let i=0;i<24;i++){
    const p = document.createElement('span');
    p.className = 'confetti-piece';
    p.style.background = colors[i%colors.length];
    p.style.setProperty('--dx', (Math.random()-.5)*220+'px');
    p.style.setProperty('--dy', (Math.random()*.5+.5)*260+'px');
    p.style.setProperty('--r', (Math.random()*720-360)+'deg');
    p.style.left = '50%';
    p.style.top = '40%';
    wrap.appendChild(p);
  }
  document.body.appendChild(wrap);
  setTimeout(()=>wrap.remove(), 1500);
}"""

assert old_hatch in html, 'Could not find tapEgg function'
html = html.replace(old_hatch, new_hatch)
print(f'OK: added hatch confetti')

# ============================================================
# 5) Add confetti CSS
# ============================================================
old_confetti_anchor = """/* ========== Responsive ========== */"""
new_confetti_anchor = """/* === 破壳撒花 === */
.confetti-burst{position:fixed;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:9998;overflow:hidden}
.confetti-piece{position:absolute;width:10px;height:14px;border-radius:2px;opacity:0;animation:confettiFly 1.3s cubic-bezier(.2,.6,.4,1) forwards}
@keyframes confettiFly{0%{opacity:1;transform:translate(0,0) rotate(0)}100%{opacity:0;transform:translate(var(--dx),var(--dy)) rotate(var(--r))}}

/* ========== Responsive ========== */"""

assert old_confetti_anchor in html, 'Could not find Responsive CSS anchor'
html = html.replace(old_confetti_anchor, new_confetti_anchor)
print(f'OK: added confetti CSS')

# ============================================================
# Save
# ============================================================
with open(HTML, 'w', encoding='utf-8') as f:
    f.write(html)
print(f'\nDONE. New HTML size: {len(html)} chars ({len(html)/1024:.1f} KB)')