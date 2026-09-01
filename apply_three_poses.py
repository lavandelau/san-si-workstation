import re, os, base64
from PIL import Image

ROOT = os.path.dirname(os.path.abspath(__file__))
HTML = os.path.join(ROOT, '少年学习空间站.html')

# Process images: crop bottom watermark, resize, compress
pose_files = {
    'sit':  '3d-dog.png',
    'walk': 'A_cute_3D_cartoon_dachshund_pu_2026-08-26T16-22-50.png',
    'lie':  'A_cute_3D_cartoon_dachshund_pu_2026-08-26T16-23-32.png'
}

def process(path, name):
    img = Image.open(path)
    w, h = img.size
    # crop bottom ~12% to remove watermark
    crop_h = int(h * 0.88)
    cropped = img.crop((0, 0, w, crop_h))
    # resize to width 400 (enough for 170-200px display, retina-safe)
    new_w = 400
    new_h = int(cropped.size[1] * new_w / cropped.size[0])
    final = cropped.resize((new_w, new_h), Image.LANCZOS)
    rgb = final.convert('RGB')
    tmp = os.path.join(ROOT, f'pet_{name}.jpg')
    rgb.save(tmp, 'JPEG', quality=85, optimize=True)
    with open(tmp, 'rb') as f:
        b64 = base64.b64encode(f.read()).decode('ascii')
    print(f'{name}: {final.size} -> {len(b64)} base64 chars')
    return f"data:image/jpeg;base64,{b64}"

imgs = {k: process(os.path.join(ROOT, v), k) for k, v in pose_files.items()}

with open(HTML, 'r', encoding='utf-8') as f:
    html = f.read()

def replace_once(html, old, new, label):
    if old not in html:
        raise RuntimeError(f'{label}: old string not found')
    if html.count(old) != 1:
        raise RuntimeError(f'{label}: found {html.count(old)} occurrences')
    return html.replace(old, new, 1)

# 1) Replace const PET_DOG_SRC with const PET_DOG_IMG object
src_pattern = r"const PET_DOG_SRC\s*=\s*'data:image/[^;]+;base64,[^']+'\s*;"
new_src = f"""const PET_DOG_IMG = {{
  sit: `{imgs['sit']}`,
  walk: `{imgs['walk']}`,
  lie: `{imgs['lie']}`
}};"""
html, n = re.subn(src_pattern, new_src, html)
if n != 1:
    raise RuntimeError(f'PET_DOG_SRC replace count = {n}')
print('Replaced PET_DOG_SRC with PET_DOG_IMG')

# 2) Update petDogHTML body to use pose + tempPose
old_dog_body = '''function petDogHTML(opts){
  opts = opts || {};
  const size = opts.size || 170;
  const stage = opts.stage || 1;
  const bob = opts.bob ? ' pet-bob' : '';
  const stageClass = ' pet-stage-' + stage;'''
new_dog_body = '''function petDogHTML(opts){
  opts = opts || {};
  const size = opts.size || 170;
  const stage = opts.stage || 1;
  const bob = opts.bob ? ' pet-bob' : '';
  const autoPose = opts.pose || 'sit';
  const pose = (state.pet && state.pet._tempPose) || autoPose;
  const stageClass = ' pet-stage-' + stage;'''
html = replace_once(html, old_dog_body, new_dog_body, 'petDogHTML body')
print('Updated petDogHTML body to support pose')

# 3) Replace img src inside petDogHTML
old_img_src = 'src="${PET_DOG_SRC}"'
new_img_src = 'src="${PET_DOG_IMG[pose] || PET_DOG_IMG.sit}"'
html = replace_once(html, old_img_src, new_img_src, 'img src')
print('Updated img src to use PET_DOG_IMG')

# 4) Auto-choose pose in petMainHTML based on pet status
old_main_render = '''    <div class="pet-room room-${p.room||'plain'}">
      ${petSVG(p.species,{size:170,stage:stage,bob:true})}'''
new_main_render = '''    <div class="pet-room room-${p.room||'plain'}">
      ${petSVG(p.species,{size:170,stage:stage,bob:true,pose:petCurrentPose()})}'''
html = replace_once(html, old_main_render, new_main_render, 'petMainHTML render')
print('Added dynamic pose call in petMainHTML')

# 5) Add petCurrentPose helper right before petMainHTML
old_main_func = '''/* ---------- 主界面 ---------- */
function petMainHTML(){'''
new_main_func = '''/* ---------- 当前姿态（坐/走/卧） ---------- */
function petCurrentPose(){
  const p = state.pet;
  if(!p.hatched) return 'sit';
  // 活力低或心情差 → 趴下休息
  if(p.energy < 35 || p.mood < 25) return 'lie';
  // 心情好且活力足 → 开心走动
  if(p.mood >= 70 && p.energy >= 55) return 'walk';
  // 默认乖巧坐着
  return 'sit';
}

/* ---------- 主界面 ---------- */
function petMainHTML(){'''
html = replace_once(html, old_main_func, new_main_func, 'petMainHTML helper')
print('Inserted petCurrentPose helper')

# 6) Add setPetPose helper after petSVG wrapper
old_svg = '''function petSVG(speciesId, opts){ return petDogHTML(opts); }'''
new_svg = '''function petSVG(speciesId, opts){ return petDogHTML(opts); }
function setPetPose(pose, ms){
  // 临时改变姿态，ms 毫秒后自动恢复自动判断
  if(!state.pet) return;
  state.pet._tempPose = pose;
  renderPet();
  if(window._petPoseTimer) clearTimeout(window._petPoseTimer);
  window._petPoseTimer = setTimeout(function(){
    delete state.pet._tempPose;
    renderPet();
  }, ms || 1200);
}'''
html = replace_once(html, old_svg, new_svg, 'petSVG wrapper')
print('Updated petSVG wrapper and added setPetPose')

# 7) Add temporary pose triggers on interactions
old_use = '''  saveState();
  checkBadges();
  renderPet();
  showToast(item.icon + ' ' + msg);'''
new_use = '''  saveState();
  checkBadges();
  setPetPose('walk', 1500);
  renderPet();
  showToast(item.icon + ' ' + msg);'''
html = replace_once(html, old_use, new_use, 'usePetItem')
print('Added walk pose after usePetItem')

old_nap = '''  saveState();
  renderPet();
  showToast('😴 ' + state.pet.name + ' 睡了个好觉，活力+30！');'''
new_nap = '''  saveState();
  setPetPose('lie', 2000);
  renderPet();
  showToast('😴 ' + state.pet.name + ' 睡了个好觉，活力+30！');'''
html = replace_once(html, old_nap, new_nap, 'petNap')
print('Added lie pose after petNap')

with open(HTML, 'w', encoding='utf-8') as f:
    f.write(html)
print('Saved HTML')
