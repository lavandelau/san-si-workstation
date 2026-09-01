# -*- coding: utf-8 -*-
import io

path = r"C:\Users\aimee\WorkBuddy\2026-08-23-20-10-40\少年学习空间站.html"
with io.open(path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

start = None
for i, ln in enumerate(lines):
    if ln.startswith('const englishWords = {'):
        start = i
        break
if start is None:
    raise SystemExit('NOT FOUND start')

end = None
for j in range(start, len(lines)):
    if lines[j].rstrip() == '};':
        end = j
        break
if end is None:
    raise SystemExit('NOT FOUND end')

new_block = u"""const englishWords = {
  '家畜家禽': [
    {en:'cow',zh:'奶牛',i:'\U0001F404'},{en:'pig',zh:'猪',i:'\U0001F437'},{en:'sheep',zh:'绵羊',i:'\U0001F411'},{en:'chicken',zh:'鸡',i:'\U0001F414'},
    {en:'duck',zh:'鸭子',i:'\U0001F986'},{en:'horse',zh:'马',i:'\U0001F434'},{en:'dog',zh:'狗',i:'\U0001F436'},{en:'cat',zh:'猫',i:'\U0001F431'},
    {en:'goat',zh:'山羊',i:'\U0001F410'},{en:'goose',zh:'鹅',i:'\U0001F9A2'}
  ],
  '水果': [
    {en:'apple',zh:'苹果',i:'\U0001F34E'},{en:'banana',zh:'香蕉',i:'\U0001F34C'},{en:'orange',zh:'橙子',i:'\U0001F34A'},{en:'grape',zh:'葡萄',i:'\U0001F347'},
    {en:'watermelon',zh:'西瓜',i:'\U0001F349'},{en:'pear',zh:'梨',i:'\U0001F350'},{en:'peach',zh:'桃子',i:'\U0001F351'},{en:'lemon',zh:'柠檬',i:'\U0001F34B'},
    {en:'cherry',zh:'樱桃',i:'\U0001F352'},{en:'strawberry',zh:'草莓',i:'\U0001F353'}
  ],
  '野生动物': [
    {en:'lion',zh:'狮子',i:'\U0001F981'},{en:'tiger',zh:'老虎',i:'\U0001F42F'},{en:'elephant',zh:'大象',i:'\U0001F418'},{en:'monkey',zh:'猴子',i:'\U0001F435'},
    {en:'bear',zh:'熊',i:'\U0001F43B'},{en:'wolf',zh:'狼',i:'\U0001F43A'},{en:'fox',zh:'狐狸',i:'\U0001F98A'},{en:'deer',zh:'鹿',i:'\U0001F98C'},
    {en:'rabbit',zh:'兔子',i:'\U0001F430'},{en:'snake',zh:'蛇',i:'\U0001F40D'}
  ],
  '五官身体': [
    {en:'eye',zh:'眼睛',i:'\U0001F441'},{en:'ear',zh:'耳朵',i:'\U0001F442'},{en:'nose',zh:'鼻子',i:'\U0001F443'},{en:'mouth',zh:'嘴巴',i:'\U0001F444'},
    {en:'face',zh:'脸',i:'\U0001F60A'},{en:'hand',zh:'手',i:'\u270B'},{en:'foot',zh:'脚',i:'\U0001F9B6'},{en:'head',zh:'头',i:'\U0001F464'},
    {en:'hair',zh:'头发',i:'\U0001F487'},{en:'tooth',zh:'牙齿',i:'\U0001F9B7'}
  ],
  '亲属称谓': [
    {en:'father',zh:'爸爸',i:'\U0001F468'},{en:'mother',zh:'妈妈',i:'\U0001F469'},{en:'brother',zh:'兄弟',i:'\U0001F466'},{en:'sister',zh:'姐妹',i:'\U0001F467'},
    {en:'grandfather',zh:'爷爷',i:'\U0001F474'},{en:'grandmother',zh:'奶奶',i:'\U0001F475'},{en:'uncle',zh:'叔叔',i:'\U0001F9D4'},{en:'aunt',zh:'阿姨',i:'\U0001F469\u200D\U0001F9B0'}
  ],
  '数字1-100': [
    {en:'one',zh:'1',i:'1\uFE0F\u20E3'},{en:'two',zh:'2',i:'2\uFE0F\u20E3'},{en:'three',zh:'3',i:'3\uFE0F\u20E3'},{en:'four',zh:'4',i:'4\uFE0F\u20E3'},
    {en:'five',zh:'5',i:'5\uFE0F\u20E3'},{en:'six',zh:'6',i:'6\uFE0F\u20E3'},{en:'seven',zh:'7',i:'7\uFE0F\u20E3'},{en:'eight',zh:'8',i:'8\uFE0F\u20E3'},
    {en:'nine',zh:'9',i:'9\uFE0F\u20E3'},{en:'ten',zh:'10',i:'\U0001F51F'},{en:'eleven',zh:'11'},{en:'twelve',zh:'12'},
    {en:'twenty',zh:'20'},{en:'thirty',zh:'30'},{en:'fifty',zh:'50'},{en:'hundred',zh:'100'}
  ],
  '月份星期': [
    {en:'January',zh:'一月',i:'\u2744\uFE0F'},{en:'February',zh:'二月',i:'\U0001F49D'},{en:'March',zh:'三月',i:'\U0001F331'},{en:'April',zh:'四月',i:'\U0001F338'},
    {en:'May',zh:'五月',i:'\U0001F339'},{en:'June',zh:'六月',i:'\U0001F31E'},{en:'July',zh:'七月',i:'\U0001F366'},{en:'August',zh:'八月',i:'\U0001F349'},
    {en:'September',zh:'九月',i:'\U0001F342'},{en:'October',zh:'十月',i:'\U0001F383'},{en:'November',zh:'十一月',i:'\U0001F341'},{en:'December',zh:'十二月',i:'\U0001F384'},
    {en:'Monday',zh:'星期一',i:'\U0001F31F'},{en:'Tuesday',zh:'星期二',i:'\U0001F331'},{en:'Wednesday',zh:'星期三',i:'\U0001F324\uFE0F'},
    {en:'Thursday',zh:'星期四',i:'\U0001F333'},{en:'Friday',zh:'星期五',i:'\U0001F389'},{en:'Saturday',zh:'星期六',i:'\U0001F38A'},{en:'Sunday',zh:'星期日',i:'\u2600\uFE0F'}
  ],
  '人称代词': [
    {en:'I',zh:'我',i:'\U0001F64B'},{en:'you',zh:'你',i:'\U0001F449'},{en:'he',zh:'他',i:'\U0001F466'},{en:'she',zh:'她',i:'\U0001F467'},
    {en:'it',zh:'它',i:'\U0001F43E'},{en:'we',zh:'我们',i:'\U0001F468\u200D\U0001F469\u200D\U0001F467'},{en:'they',zh:'他们',i:'\U0001F465'}
  ],
  '物主代词': [
    {en:'my',zh:'我的',i:'\U0001F64B'},{en:'your',zh:'你的',i:'\U0001F449'},{en:'his',zh:'他的',i:'\U0001F466'},{en:'her',zh:'她的',i:'\U0001F467'},
    {en:'its',zh:'它的',i:'\U0001F43E'},{en:'our',zh:'我们的',i:'\U0001F46A'},{en:'their',zh:'他们的',i:'\U0001F465'}
  ]
};
"""

lines[start:end+1] = [new_block]
with io.open(path, 'w', encoding='utf-8') as f:
    f.writelines(lines)
print('OK: replaced lines', start+1, 'to', end+1, 'total now', len(lines))
