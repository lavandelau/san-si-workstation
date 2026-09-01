
/* ================================================================
   DATA: English Words, Poems, Thinking Questions
   ================================================================ */

const englishWords = {
  '家畜家禽': [
    {en:'cow',zh:'奶牛',i:'🐄'},{en:'pig',zh:'猪',i:'🐷'},{en:'sheep',zh:'绵羊',i:'🐑'},{en:'chicken',zh:'鸡',i:'🐔'},
    {en:'duck',zh:'鸭子',i:'🦆'},{en:'horse',zh:'马',i:'🐴'},{en:'dog',zh:'狗',i:'🐶'},{en:'cat',zh:'猫',i:'🐱'},
    {en:'goat',zh:'山羊',i:'🐐'},{en:'goose',zh:'鹅',i:'🦢'}
  ],
  '水果': [
    {en:'apple',zh:'苹果',i:'🍎'},{en:'banana',zh:'香蕉',i:'🍌'},{en:'orange',zh:'橙子',i:'🍊'},{en:'grape',zh:'葡萄',i:'🍇'},
    {en:'watermelon',zh:'西瓜',i:'🍉'},{en:'pear',zh:'梨',i:'🍐'},{en:'peach',zh:'桃子',i:'🍑'},{en:'lemon',zh:'柠檬',i:'🍋'},
    {en:'cherry',zh:'樱桃',i:'🍒'},{en:'strawberry',zh:'草莓',i:'🍓'}
  ],
  '野生动物': [
    {en:'lion',zh:'狮子',i:'🦁'},{en:'tiger',zh:'老虎',i:'🐯'},{en:'elephant',zh:'大象',i:'🐘'},{en:'monkey',zh:'猴子',i:'🐵'},
    {en:'bear',zh:'熊',i:'🐻'},{en:'wolf',zh:'狼',i:'🐺'},{en:'fox',zh:'狐狸',i:'🦊'},{en:'deer',zh:'鹿',i:'🦌'},
    {en:'rabbit',zh:'兔子',i:'🐰'},{en:'snake',zh:'蛇',i:'🐍'}
  ],
  '五官身体': [
    {en:'eye',zh:'眼睛',i:'👁'},{en:'ear',zh:'耳朵',i:'👂'},{en:'nose',zh:'鼻子',i:'👃'},{en:'mouth',zh:'嘴巴',i:'👄'},
    {en:'face',zh:'脸',i:'😊'},{en:'hand',zh:'手',i:'✋'},{en:'foot',zh:'脚',i:'🦶'},{en:'head',zh:'头',i:'👤'},
    {en:'hair',zh:'头发',i:'💇'},{en:'tooth',zh:'牙齿',i:'🦷'}
  ],
  '亲属称谓': [
    {en:'father',zh:'爸爸',i:'👨'},{en:'mother',zh:'妈妈',i:'👩'},{en:'brother',zh:'兄弟',i:'👦'},{en:'sister',zh:'姐妹',i:'👧'},
    {en:'grandfather',zh:'爷爷',i:'👴'},{en:'grandmother',zh:'奶奶',i:'👵'},{en:'uncle',zh:'叔叔',i:'🧔'},{en:'aunt',zh:'阿姨',i:'👩‍🦰'}
  ],
  '数字1-100': [
    {en:'one',zh:'1',i:'1️⃣'},{en:'two',zh:'2',i:'2️⃣'},{en:'three',zh:'3',i:'3️⃣'},{en:'four',zh:'4',i:'4️⃣'},
    {en:'five',zh:'5',i:'5️⃣'},{en:'six',zh:'6',i:'6️⃣'},{en:'seven',zh:'7',i:'7️⃣'},{en:'eight',zh:'8',i:'8️⃣'},
    {en:'nine',zh:'9',i:'9️⃣'},{en:'ten',zh:'10',i:'🔟'},{en:'eleven',zh:'11'},{en:'twelve',zh:'12'},
    {en:'twenty',zh:'20'},{en:'thirty',zh:'30'},{en:'fifty',zh:'50'},{en:'hundred',zh:'100'}
  ],
  '月份星期': [
    {en:'January',zh:'一月',i:'❄️'},{en:'February',zh:'二月',i:'💝'},{en:'March',zh:'三月',i:'🌱'},{en:'April',zh:'四月',i:'🌸'},
    {en:'May',zh:'五月',i:'🌹'},{en:'June',zh:'六月',i:'🌞'},{en:'July',zh:'七月',i:'🍦'},{en:'August',zh:'八月',i:'🍉'},
    {en:'September',zh:'九月',i:'🍂'},{en:'October',zh:'十月',i:'🎃'},{en:'November',zh:'十一月',i:'🍁'},{en:'December',zh:'十二月',i:'🎄'},
    {en:'Monday',zh:'星期一',i:'🌟'},{en:'Tuesday',zh:'星期二',i:'🌱'},{en:'Wednesday',zh:'星期三',i:'🌤️'},
    {en:'Thursday',zh:'星期四',i:'🌳'},{en:'Friday',zh:'星期五',i:'🎉'},{en:'Saturday',zh:'星期六',i:'🎊'},{en:'Sunday',zh:'星期日',i:'☀️'}
  ],
  '人称代词': [
    {en:'I',zh:'我',i:'🙋'},{en:'you',zh:'你',i:'👉'},{en:'he',zh:'他',i:'👦'},{en:'she',zh:'她',i:'👧'},
    {en:'it',zh:'它',i:'🐾'},{en:'we',zh:'我们',i:'👨‍👩‍👧'},{en:'they',zh:'他们',i:'👥'}
  ],
  '物主代词': [
    {en:'my',zh:'我的',i:'🙋'},{en:'your',zh:'你的',i:'👉'},{en:'his',zh:'他的',i:'👦'},{en:'her',zh:'她的',i:'👧'},
    {en:'its',zh:'它的',i:'🐾'},{en:'our',zh:'我们的',i:'👪'},{en:'their',zh:'他们的',i:'👥'}
  ]
};

const lettersData = [
  {l:'A',w:'Apple',p:'æ'},{l:'B',w:'Bear',p:'bi:'},{l:'C',w:'Cat',p:'si:'},{l:'D',w:'Dog',p:'di:'},
  {l:'E',w:'Egg',p:'i:'},{l:'F',w:'Fish',p:'ef'},{l:'G',w:'Goat',p:'dʒi:'},{l:'H',w:'Hat',p:'eɪtʃ'},
  {l:'I',w:'Ice',p:'aɪ'},{l:'J',w:'Juice',p:'dʒeɪ'},{l:'K',w:'Kite',p:'keɪ'},{l:'L',w:'Lion',p:'el'},
  {l:'M',w:'Monkey',p:'em'},{l:'N',w:'Nose',p:'en'},{l:'O',w:'Orange',p:'oʊ'},{l:'P',w:'Pig',p:'pi:'},
  {l:'Q',w:'Queen',p:'kju:'},{l:'R',w:'Rabbit',p:'ɑ:'},{l:'S',w:'Sun',p:'es'},{l:'T',w:'Tiger',p:'ti:'},
  {l:'U',w:'Umbrella',p:'ju:'},{l:'V',w:'Van',p:'vi:'},{l:'W',w:'Wolf',p:'dʌbəlju:'},{l:'X',w:'X-ray',p:'eks'},
  {l:'Y',w:'Yellow',p:'waɪ'},{l:'Z',w:'Zoo',p:'zi:'}
];
const vowels = ['A','E','I','O','U'];

/* Poems with pinyin */
const poemsData = [
  {
    title:'鹿柴', author:'王维', dynasty:'唐', grade:'四',
    lines:[
      [[{c:'空',p:'kōng'},{c:'山',p:'shān'},{c:'不',p:'bù'},{c:'见',p:'jiàn'},{c:'人',p:'rén'}]],
      [[{c:'但',p:'dàn'},{c:'闻',p:'wén'},{c:'人',p:'rén'},{c:'语',p:'yǔ'},{c:'响',p:'xiǎng'}]],
      [[{c:'返',p:'fǎn'},{c:'景',p:'jǐng'},{c:'入',p:'rù'},{c:'深',p:'shēn'},{c:'林',p:'lín'}]],
      [[{c:'复',p:'fù'},{c:'照',p:'zhào'},{c:'青',p:'qīng'},{c:'苔',p:'tái'},{c:'上',p:'shàng'}]]
    ],
    textFull:'空山不见人，但闻人语响。返景入深林，复照青苔上。'
  },
  {
    title:'暮江吟', author:'白居易', dynasty:'唐', grade:'四',
    lines:[
      [[{c:'一',p:'yí'},{c:'道',p:'dào'},{c:'残',p:'cán'},{c:'阳',p:'yáng'},{c:'铺',p:'pū'},{c:'水',p:'shuǐ'},{c:'中',p:'zhōng'}]],
      [[{c:'半',p:'bàn'},{c:'江',p:'jiāng'},{c:'瑟',p:'sè'},{c:'瑟',p:'sè'},{c:'半',p:'bàn'},{c:'江',p:'jiāng'},{c:'红',p:'hóng'}]],
      [[{c:'可',p:'kě'},{c:'怜',p:'lián'},{c:'九',p:'jiǔ'},{c:'月',p:'yuè'},{c:'初',p:'chū'},{c:'三',p:'sān'},{c:'夜',p:'yè'}]],
      [[{c:'露',p:'lù'},{c:'似',p:'sì'},{c:'真',p:'zhēn'},{c:'珠',p:'zhū'},{c:'月',p:'yuè'},{c:'似',p:'sì'},{c:'弓',p:'gōng'}]]
    ],
    textFull:'一道残阳铺水中，半江瑟瑟半江红。可怜九月初三夜，露似真珠月似弓。'
  },
  {
    title:'雪梅', author:'卢钺', dynasty:'宋', grade:'四',
    lines:[
      [[{c:'梅',p:'méi'},{c:'雪',p:'xuě'},{c:'争',p:'zhēng'},{c:'春',p:'chūn'},{c:'未',p:'wèi'},{c:'肯',p:'kěn'},{c:'降',p:'xiáng'}]],
      [[{c:'骚',p:'sāo'},{c:'人',p:'rén'},{c:'阁',p:'gé'},{c:'笔',p:'bǐ'},{c:'费',p:'fèi'},{c:'评',p:'píng'},{c:'章',p:'zhāng'}]],
      [[{c:'梅',p:'méi'},{c:'须',p:'xū'},{c:'逊',p:'xùn'},{c:'雪',p:'xuě'},{c:'三',p:'sān'},{c:'分',p:'fēn'},{c:'白',p:'bái'}]],
      [[{c:'雪',p:'xuě'},{c:'却',p:'què'},{c:'输',p:'shū'},{c:'梅',p:'méi'},{c:'一',p:'yí'},{c:'段',p:'duàn'},{c:'香',p:'xiāng'}]]
    ],
    textFull:'梅雪争春未肯降，骚人阁笔费评章。梅须逊雪三分白，雪却输梅一段香。'
  },
  {
    title:'出塞', author:'王昌龄', dynasty:'唐', grade:'四',
    lines:[
      [[{c:'秦',p:'qín'},{c:'时',p:'shí'},{c:'明',p:'míng'},{c:'月',p:'yuè'},{c:'汉',p:'hàn'},{c:'时',p:'shí'},{c:'关',p:'guān'}]],
      [[{c:'万',p:'wàn'},{c:'里',p:'lǐ'},{c:'长',p:'cháng'},{c:'征',p:'zhēng'},{c:'人',p:'rén'},{c:'未',p:'wèi'},{c:'还',p:'huán'}]],
      [[{c:'但',p:'dàn'},{c:'使',p:'shǐ'},{c:'龙',p:'lóng'},{c:'城',p:'chéng'},{c:'飞',p:'fēi'},{c:'将',p:'jiàng'},{c:'在',p:'zài'}]],
      [[{c:'不',p:'bù'},{c:'教',p:'jiào'},{c:'胡',p:'hú'},{c:'马',p:'mǎ'},{c:'度',p:'dù'},{c:'阴',p:'yīn'},{c:'山',p:'shān'}]]
    ],
    textFull:'秦时明月汉时关，万里长征人未还。但使龙城飞将在，不教胡马度阴山。'
  },
  {
    title:'凉州词', author:'王翰', dynasty:'唐', grade:'四',
    lines:[
      [[{c:'葡',p:'pú'},{c:'萄',p:'táo'},{c:'美',p:'měi'},{c:'酒',p:'jiǔ'},{c:'夜',p:'yè'},{c:'光',p:'guāng'},{c:'杯',p:'bēi'}]],
      [[{c:'欲',p:'yù'},{c:'饮',p:'yǐn'},{c:'琵',p:'pí'},{c:'琶',p:'pá'},{c:'马',p:'mǎ'},{c:'上',p:'shàng'},{c:'催',p:'cuī'}]],
      [[{c:'醉',p:'zuì'},{c:'卧',p:'wò'},{c:'沙',p:'shā'},{c:'场',p:'chǎng'},{c:'君',p:'jūn'},{c:'莫',p:'mò'},{c:'笑',p:'xiào'}]],
      [[{c:'古',p:'gǔ'},{c:'来',p:'lái'},{c:'征',p:'zhēng'},{c:'战',p:'zhàn'},{c:'几',p:'jǐ'},{c:'人',p:'rén'},{c:'回',p:'huí'}]]
    ],
    textFull:'葡萄美酒夜光杯，欲饮琵琶马上催。醉卧沙场君莫笑，古来征战几人回？'
  },
  {
    title:'夏日绝句', author:'李清照', dynasty:'宋', grade:'四',
    lines:[
      [[{c:'生',p:'shēng'},{c:'当',p:'dāng'},{c:'作',p:'zuò'},{c:'人',p:'rén'},{c:'杰',p:'jié'}]],
      [[{c:'死',p:'sǐ'},{c:'亦',p:'yì'},{c:'为',p:'wéi'},{c:'鬼',p:'guǐ'},{c:'雄',p:'xióng'}]],
      [[{c:'至',p:'zhì'},{c:'今',p:'jīn'},{c:'思',p:'sī'},{c:'项',p:'xiàng'},{c:'羽',p:'yǔ'}]],
      [[{c:'不',p:'bù'},{c:'肯',p:'kěn'},{c:'过',p:'guò'},{c:'江',p:'jiāng'},{c:'东',p:'dōng'}]]
    ],
    textFull:'生当作人杰，死亦为鬼雄。至今思项羽，不肯过江东。'
  },
  {
    title:'别董大', author:'高适', dynasty:'唐', grade:'四',
    lines:[
      [[{c:'千',p:'qiān'},{c:'里',p:'lǐ'},{c:'黄',p:'huáng'},{c:'云',p:'yún'},{c:'白',p:'bái'},{c:'日',p:'rì'},{c:'曛',p:'xūn'}]],
      [[{c:'北',p:'běi'},{c:'风',p:'fēng'},{c:'吹',p:'chuī'},{c:'雁',p:'yàn'},{c:'雪',p:'xuě'},{c:'纷',p:'fēn'},{c:'纷',p:'fēn'}]],
      [[{c:'莫',p:'mò'},{c:'愁',p:'chóu'},{c:'前',p:'qián'},{c:'路',p:'lù'},{c:'无',p:'wú'},{c:'知',p:'zhī'},{c:'己',p:'jǐ'}]],
      [[{c:'天',p:'tiān'},{c:'下',p:'xià'},{c:'谁',p:'shuí'},{c:'人',p:'rén'},{c:'不',p:'bù'},{c:'识',p:'shí'},{c:'君',p:'jūn'}]]
    ],
    textFull:'千里黄云白日曛，北风吹雁雪纷纷。莫愁前路无知己，天下谁人不识君？'
  },
  {
    title:'嫦娥', author:'李商隐', dynasty:'唐', grade:'四',
    lines:[
      [[{c:'云',p:'yún'},{c:'母',p:'mǔ'},{c:'屏',p:'píng'},{c:'风',p:'fēng'},{c:'烛',p:'zhú'},{c:'影',p:'yǐng'},{c:'深',p:'shēn'}]],
      [[{c:'长',p:'cháng'},{c:'河',p:'hé'},{c:'渐',p:'jiàn'},{c:'落',p:'luò'},{c:'晓',p:'xiǎo'},{c:'星',p:'xīng'},{c:'沉',p:'chén'}]],
      [[{c:'嫦',p:'cháng'},{c:'娥',p:'é'},{c:'应',p:'yīng'},{c:'悔',p:'huǐ'},{c:'偷',p:'tōu'},{c:'灵',p:'líng'},{c:'药',p:'yào'}]],
      [[{c:'碧',p:'bì'},{c:'海',p:'hǎi'},{c:'青',p:'qīng'},{c:'天',p:'tiān'},{c:'夜',p:'yè'},{c:'夜',p:'yè'},{c:'心',p:'xīn'}]]
    ],
    textFull:'云母屏风烛影深，长河渐落晓星沉。嫦娥应悔偷灵药，碧海青天夜夜心。'
  },
  {
    title:'精卫填海', author:'《山海经》', dynasty:'先秦', grade:'四', isProse:true,
    lines:[
      [[{c:'炎',p:'yán'},{c:'帝',p:'dì'},{c:'之',p:'zhī'},{c:'少',p:'shào'},{c:'女',p:'nǚ'}]],
      [[{c:'名',p:'míng'},{c:'曰',p:'yuē'},{c:'女',p:'nǚ'},{c:'娃',p:'wá'}]],
      [[{c:'女',p:'nǚ'},{c:'娃',p:'wá'},{c:'游',p:'yóu'},{c:'于',p:'yú'},{c:'东',p:'dōng'},{c:'海',p:'hǎi'}]],
      [[{c:'溺',p:'nì'},{c:'而',p:'ér'},{c:'不',p:'bù'},{c:'返',p:'fǎn'}]],
      [[{c:'故',p:'gù'},{c:'为',p:'wéi'},{c:'精',p:'jīng'},{c:'卫',p:'wèi'}]],
      [[{c:'常',p:'cháng'},{c:'衔',p:'xián'},{c:'西',p:'xī'},{c:'山',p:'shān'},{c:'之',p:'zhī'},{c:'木',p:'mù'},{c:'石',p:'shí'}]],
      [[{c:'以',p:'yǐ'},{c:'堙',p:'yīn'},{c:'于',p:'yú'},{c:'东',p:'dōng'},{c:'海',p:'hǎi'}]]
    ],
    textFull:'炎帝之少女，名曰女娃。女娃游于东海，溺而不返，故为精卫，常衔西山之木石，以堙于东海。'
  },
  {
    title:'题西林壁', author:'苏轼', dynasty:'宋', grade:'四',
    lines:[
      [[{c:'横',p:'héng'},{c:'看',p:'kàn'},{c:'成',p:'chéng'},{c:'岭',p:'lǐng'},{c:'侧',p:'cè'},{c:'成',p:'chéng'},{c:'峰',p:'fēng'}]],
      [[{c:'远',p:'yuǎn'},{c:'近',p:'jìn'},{c:'高',p:'gāo'},{c:'低',p:'dī'},{c:'各',p:'gè'},{c:'不',p:'bù'},{c:'同',p:'tóng'}]],
      [[{c:'不',p:'bù'},{c:'识',p:'shí'},{c:'庐',p:'lú'},{c:'山',p:'shān'},{c:'真',p:'zhēn'},{c:'面',p:'miàn'},{c:'目',p:'mù'}]],
      [[{c:'只',p:'zhǐ'},{c:'缘',p:'yuán'},{c:'身',p:'shēn'},{c:'在',p:'zài'},{c:'此',p:'cǐ'},{c:'山',p:'shān'},{c:'中',p:'zhōng'}]]
    ],
    textFull:'横看成岭侧成峰，远近高低各不同。不识庐山真面目，只缘身在此山中。'
  },
  {
    title:'独坐敬亭山', author:'李白', dynasty:'唐', grade:'四',
    lines:[
      [[{c:'众',p:'zhòng'},{c:'鸟',p:'niǎo'},{c:'高',p:'gāo'},{c:'飞',p:'fēi'},{c:'尽',p:'jìn'}]],
      [[{c:'孤',p:'gū'},{c:'云',p:'yún'},{c:'独',p:'dú'},{c:'去',p:'qù'},{c:'闲',p:'xián'}]],
      [[{c:'相',p:'xiāng'},{c:'看',p:'kàn'},{c:'两',p:'liǎng'},{c:'不',p:'bù'},{c:'厌',p:'yàn'}]],
      [[{c:'只',p:'zhǐ'},{c:'有',p:'yǒu'},{c:'敬',p:'jìng'},{c:'亭',p:'tíng'},{c:'山',p:'shān'}]]
    ],
    textFull:'众鸟高飞尽，孤云独去闲。相看两不厌，只有敬亭山。'
  },
  {
    title:'黄鹤楼送孟浩然之广陵', author:'李白', dynasty:'唐', grade:'四',
    lines:[
      [[{c:'故',p:'gù'},{c:'人',p:'rén'},{c:'西',p:'xī'},{c:'辞',p:'cí'},{c:'黄',p:'huáng'},{c:'鹤',p:'hè'},{c:'楼',p:'lóu'}]],
      [[{c:'烟',p:'yān'},{c:'花',p:'huā'},{c:'三',p:'sān'},{c:'月',p:'yuè'},{c:'下',p:'xià'},{c:'扬',p:'yáng'},{c:'州',p:'zhōu'}]],
      [[{c:'孤',p:'gū'},{c:'帆',p:'fān'},{c:'远',p:'yuǎn'},{c:'影',p:'yǐng'},{c:'碧',p:'bì'},{c:'空',p:'kōng'},{c:'尽',p:'jìn'}]],
      [[{c:'唯',p:'wéi'},{c:'见',p:'jiàn'},{c:'长',p:'cháng'},{c:'江',p:'jiāng'},{c:'天',p:'tiān'},{c:'际',p:'jì'},{c:'流',p:'liú'}]]
    ],
    textFull:'故人西辞黄鹤楼，烟花三月下扬州。孤帆远影碧空尽，唯见长江天际流。'
  },
  {
    title:'送元二使安西', author:'王维', dynasty:'唐', grade:'四',
    lines:[
      [[{c:'渭',p:'wèi'},{c:'城',p:'chéng'},{c:'朝',p:'zhāo'},{c:'雨',p:'yǔ'},{c:'浥',p:'yì'},{c:'轻',p:'qīng'},{c:'尘',p:'chén'}]],
      [[{c:'客',p:'kè'},{c:'舍',p:'shè'},{c:'青',p:'qīng'},{c:'青',p:'qīng'},{c:'柳',p:'liǔ'},{c:'色',p:'sè'},{c:'新',p:'xīn'}]],
      [[{c:'劝',p:'quàn'},{c:'君',p:'jūn'},{c:'更',p:'gèng'},{c:'尽',p:'jìn'},{c:'一',p:'yì'},{c:'杯',p:'bēi'},{c:'酒',p:'jiǔ'}]],
      [[{c:'西',p:'xī'},{c:'出',p:'chū'},{c:'阳',p:'yáng'},{c:'关',p:'guān'},{c:'无',p:'wú'},{c:'故',p:'gù'},{c:'人',p:'rén'}]]
    ],
    textFull:'渭城朝雨浥轻尘，客舍青青柳色新。劝君更尽一杯酒，西出阳关无故人。'
  },
  {
    title:'四时田园杂兴', author:'范成大', dynasty:'宋', grade:'四',
    lines:[
      [[{c:'昼',p:'zhòu'},{c:'出',p:'chū'},{c:'耘',p:'yún'},{c:'田',p:'tián'},{c:'夜',p:'yè'},{c:'绩',p:'jì'},{c:'麻',p:'má'}]],
      [[{c:'村',p:'cūn'},{c:'庄',p:'zhuāng'},{c:'儿',p:'ér'},{c:'女',p:'nǚ'},{c:'各',p:'gè'},{c:'当',p:'dāng'},{c:'家',p:'jiā'}]],
      [[{c:'童',p:'tóng'},{c:'孙',p:'sūn'},{c:'未',p:'wèi'},{c:'解',p:'jiě'},{c:'供',p:'gòng'},{c:'耕',p:'gēng'},{c:'织',p:'zhī'}]],
      [[{c:'傍',p:'bàng'},{c:'桑',p:'sāng'},{c:'阴',p:'yīn'},{c:'下',p:'xià'},{c:'学',p:'xué'},{c:'种',p:'zhòng'},{c:'瓜',p:'guā'}]]
    ],
    textFull:'昼出耘田夜绩麻，村庄儿女各当家。童孙未解供耕织，傍桑阴下学种瓜。'
  }
];

/* Thinking Questions */
const thinkingQuestions = [
  {type:1,q:'2, 4, 6, 8, ?', options:['9','10','11','12'], answer:1, exp:'每次+2'},
  {type:1,q:'1, 3, 6, 10, 15, ?', options:['18','20','21','22'], answer:2, exp:'差为2,3,4,5,6'},
  {type:1,q:'1, 4, 9, 16, 25, ?', options:['30','36','49','64'], answer:1, exp:'平方数列 1²,2²,3²...'},
  {type:1,q:'3, 6, 12, 24, ?', options:['36','42','48','50'], answer:2, exp:'每次×2'},
  {type:1,q:'5, 10, 15, 20, ?', options:['22','25','28','30'], answer:1, exp:'每次+5'},
  {type:1,q:'2, 5, 11, 23, ?', options:['35','42','47','49'], answer:2, exp:'前数×2+1'},
  {type:1,q:'1, 2, 4, 8, 16, ?', options:['20','24','32','48'], answer:2, exp:'每次×2'},
  {type:1,q:'100, 90, 80, 70, ?', options:['50','60','65','55'], answer:1, exp:'每次-10'},
  {type:1,q:'1, 2, 3, 5, 8, 13, ?', options:['15','18','21','24'], answer:2, exp:'前两数之和（斐波那契）'},
  {type:1,q:'2, 3, 5, 7, 11, ?', options:['12','13','14','15'], answer:1, exp:'质数列'},
  {type:2,q:'按规律，下一个图形应该是？△○△○△○△○△○?', options:['△','○','□','☆'], answer:0, exp:'△和○交替出现'},
  {type:2,q:'●→●●→●●●→●●●●→?', options:['●●','●●●●●','●●●●','●'], answer:1, exp:'每次多一个圆点'},
  {type:2,q:'□△○□△○□△○?', options:['□','△','○','☆'], answer:0, exp:'□△○循环'},
  {type:3,q:'小明买3本笔记本每本5元，付了20元，找回多少钱？第一步应该先算什么？', options:['算总价3×5=15元','算找零20-15=5元','数笔记本数量','看带了多少钱'], answer:0, exp:'先算总价再算找零，3×5=15,20-15=5'},
  {type:3,q:'长方形长8米宽5米，求周长。正确步骤是？', options:['8+5=13','8×5=40','8+5=13再×2=26','不确定'], answer:2, exp:'周长=(长+宽)×2=(8+5)×2=26'},
  {type:3,q:'一箱24瓶牛奶，平均分给4个组，每组几瓶？', options:['4瓶','5瓶','6瓶','8瓶'], answer:2, exp:'24÷4=6瓶'},
  {type:3,q:'妈妈买了2千克苹果，每千克8元，付了20元，找回多少？', options:['2元','4元','5元','6元'], answer:1, exp:'2×8=16,20-16=4'},
  {type:4,q:'24÷6×2的结果是？', options:['2','8','4','6'], answer:1, exp:'从左到右：24÷6=4,4×2=8'},
  {type:4,q:'下面哪个是轴对称图形？', options:['平行四边形','梯形','正方形','任意三角形'], answer:2, exp:'正方形是轴对称图形'},
  {type:4,q:'1米等于多少厘米？', options:['10','100','1000','10000'], answer:1, exp:'1米=100厘米'},
  {type:4,q:'一年中有几个月是大月（31天）？', options:['5个','6个','7个','8个'], answer:2, exp:'1,3,5,7,8,10,12月共7个大月'},
  {type:4,q:'边长4cm的正方形，周长和面积相比？', options:['周长大','面积大','相等','无法比较'], answer:3, exp:'周长16cm，面积16cm²，单位不同无法比较'},
  {type:4,q:'以下算式中，积最接近200的是？', options:['39×5','48×4','25×8','30×7'], answer:2, exp:'25×8=200，刚好等于200'},
  {type:4,q:'一棵树高约5（ ），填什么单位？', options:['厘米','分米','米','千米'], answer:2, exp:'树高用米做单位'},
  {type:4,q:'一个正方形有几条对称轴？', options:['2条','3条','4条','无数条'], answer:2, exp:'正方形有4条对称轴'},
  {type:4,q:'一根绳子对折再对折后量得3米，这根绳子原来长多少？', options:['6米','9米','12米','15米'], answer:2, exp:'对折两次=分4段,3×4=12米'},
  {type:4,q:'一个数除以5商6余3，这个数是？', options:['30','33','35','38'], answer:1, exp:'5×6+3=33'},
];

/* ================================================================
   STATE & STORAGE
   ================================================================ */
const STORAGE_KEY = 'wb_xuexi_station_v1';

function defaultState(){
  return {
    stars:0,
    pet:{level:1,exp:0,skin:'default',name:'小狗星宝'},
    badges:[],
    errors:[],
    redoStats:{killed:0,rounds:0},
    links:[],
    dailyTasks:{},
    goals:{},
    monthlyStats:{},
    poemRecite:{},
    reviewCheck:{},
    progress:{
      english:{gamesPlayed:0,correct:0},
      poetry:{gamesPlayed:0,correct:0},
      math:{solved:0,correct:0},
      thinking:{solved:0,correct:0},
      adventure:{levels:0,best:0}
    },
    pomodoro:{focus:30,rest:10,todayCount:0,totalCount:0,todayDate:''}
  };
}

let state = loadState();

function loadState(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if(!raw) return defaultState();
    const parsed = JSON.parse(raw);
    return Object.assign(defaultState(), parsed);
  }catch(e){
    return defaultState();
  }
}

function saveState(){
  try{
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }catch(e){
    showToast('数据保存失败：'+e.message);
  }
}

function todayStr(){
  const d = new Date();
  return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
}

function monthStr(){
  const d = new Date();
  return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0');
}

function showToast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),2500);
}

/* ================================================================
   SPEECH (Web Speech API)
   ================================================================ */
function speak(text, lang){
  if(lang===undefined) lang='en-US';
  if(!('speechSynthesis' in window)){
    showToast('浏览器不支持语音朗读');
    return;
  }
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = lang;
  u.rate = 0.8;
  speechSynthesis.speak(u);
}

function speakCN(text){ speak(text, 'zh-CN'); }
function speakEN(text){ speak(text, 'en-US'); }

/* 字母卡片专用：先读字母名，停顿片刻，再读单词 */
let letterTimer = null;
function speakLetter(letter, word){
  if(!('speechSynthesis' in window)){
    showToast('浏览器不支持语音朗读');
    return;
  }
  speechSynthesis.cancel();
  if(letterTimer){ clearTimeout(letterTimer); }
  let wordSpoken = false;
  const speakWord = ()=>{
    if(wordSpoken) return;
    wordSpoken = true;
    const u2 = new SpeechSynthesisUtterance(word);
    u2.lang = 'en-US';
    u2.rate = 0.75;
    speechSynthesis.speak(u2);
  };
  const u1 = new SpeechSynthesisUtterance(letter);
  u1.lang = 'en-US';
  u1.rate = 0.7;
  u1.onend = ()=>{ letterTimer = setTimeout(speakWord, 800); };  // 字母读完停 0.8 秒再读单词
  speechSynthesis.speak(u1);
  // 兜底：个别浏览器不触发 onend，按字母时长估算
  letterTimer = setTimeout(speakWord, 1400);
}

/* ================================================================
   STAR & BADGE SYSTEM
   ================================================================ */
function addStars(n){
  state.stars += n;
  saveState();
  updateStarDisplay();
}

function updateStarDisplay(){
  const els = document.querySelectorAll('#todayStars, #petStars');
  els.forEach(e=>{ if(e) e.textContent = state.stars; });
}

const badgeDefs = [
  {id:'math_master', name:'数学小达人', desc:'数学答对30题', icon:'🔢', cond:s=>s.progress.math.correct>=30},
  {id:'english_star', name:'英语小能手', desc:'英语答对30题', icon:'🌐', cond:s=>s.progress.english.correct>=30},
  {id:'poetry_star', name:'古诗之星', desc:'古诗背诵答对15题', icon:'🌸', cond:s=>s.progress.poetry.correct>=15},
  {id:'self_pioneer', name:'自律小先锋', desc:'连续打卡7天', icon:'📋', cond:s=>{
    let count=0;
    const today = new Date();
    for(let i=0;i<7;i++){
      const d = new Date(today); d.setDate(d.getDate()-i);
      const ds = d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
      if(state.dailyTasks[ds] && state.dailyTasks[ds].completed>=5) count++;
      else break;
    }
    return count>=7;
  }},
  {id:'thinking_champ', name:'思维冠军', desc:'思维答对20题', icon:'🧠', cond:s=>s.progress.thinking.correct>=20},
  {id:'adventure_hero', name:'闯关英雄', desc:'闯关成功5次', icon:'🗺️', cond:s=>s.progress.adventure.levels>=5},
  {id:'star_rich', name:'星星富翁', desc:'累计100颗星', icon:'⭐', cond:s=>s.stars>=100},
  {id:'pet_lover', name:'宠物达人', desc:'宠物升到3级', icon:'🐾', cond:s=>s.pet.level>=3},
];

function checkBadges(){
  badgeDefs.forEach(b=>{
    if(!state.badges.includes(b.id) && b.cond(state)){
      state.badges.push(b.id);
      saveState();
      showToast('🎉 获得新徽章：'+b.name+'！');
    }
  });
}

function renderBadgeWall(containerId){
  const container = document.getElementById(containerId);
  if(!container) return;
  container.innerHTML = badgeDefs.map(b=>{
    const earned = state.badges.includes(b.id);
    return `<div class="badge-item ${earned?'earned':'locked'}">
      <div class="badge-icon">${b.icon}</div>
      <div class="badge-name">${b.name}</div>
      <div class="badge-desc">${b.desc}</div>
      <div class="badge-desc" style="margin-top:2px">${earned?'已获得':'未解锁'}</div>
    </div>`;
  }).join('');
}

/* ================================================================
   PET SYSTEM
   ================================================================ */
const petSkins = [
  {id:'default', name:'默认', unlockLevel:1, colors:{body:'#D4A574',ear:'#C49A6C',nose:'#333',eye:'#333'}},
  {id:'orange', name:'橙色', unlockLevel:2, colors:{body:'#FF9F43',ear:'#E8852F',nose:'#333',eye:'#333'}},
  {id:'cyan', name:'青色', unlockLevel:3, colors:{body:'#5BBFB5',ear:'#4ecdc4',nose:'#333',eye:'#333'}},
  {id:'purple', name:'紫色', unlockLevel:4, colors:{body:'#A78BFA',ear:'#9270E8',nose:'#333',eye:'#333'}},
  {id:'golden', name:'金色', unlockLevel:5, colors:{body:'#FCD34D',ear:'#F0B429',nose:'#333',eye:'#333'}},
];

function petExpForLevel(lvl){
  return [0,50,120,220,350,500][lvl] || 9999;
}

function getPetSVG(){
  const skin = petSkins.find(s=>s.id===state.pet.skin) || petSkins[0];
  const c = skin.colors;
  const lvl = state.pet.level;
  let accessories = '';
  if(lvl>=2) accessories += `<rect x="40" y="55" width="20" height="5" rx="2" fill="#FF6B6B" opacity="0.8"/>`;
  if(lvl>=3) accessories += `<circle cx="50" cy="40" r="6" fill="#FCD34D" stroke="#F0B429" stroke-width="1.5"/>`;
  if(lvl>=4) accessories += `<rect x="35" y="30" width="12" height="3" rx="1" fill="#333"/><rect x="53" y="30" width="12" height="3" rx="1" fill="#333"/>`;
  if(lvl>=5) accessories += `<path d="M35 18 L40 25 L45 18 L50 25 L55 18 L60 25 L65 18 L62 28 L38 28 Z" fill="#FCD34D" stroke="#F0B429" stroke-width="1"/>`;
  
  return `<svg class="pet-svg" viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- Tail -->
    <path d="M75 75 Q90 65 85 50" stroke="${c.body}" stroke-width="6" fill="none" stroke-linecap="round"/>
    <!-- Body -->
    <ellipse cx="50" cy="80" rx="25" ry="22" fill="${c.body}"/>
    <!-- Legs -->
    <rect x="33" y="92" width="8" height="14" rx="4" fill="${c.body}"/>
    <rect x="59" y="92" width="8" height="14" rx="4" fill="${c.body}"/>
    <rect x="42" y="95" width="8" height="11" rx="4" fill="${c.body}"/>
    <rect x="50" y="95" width="8" height="11" rx="4" fill="${c.body}"/>
    <!-- Head -->
    <circle cx="50" cy="45" r="25" fill="${c.body}"/>
    <!-- Ears -->
    <ellipse cx="28" cy="28" rx="8" ry="14" fill="${c.ear}" transform="rotate(-20 28 28)"/>
    <ellipse cx="72" cy="28" rx="8" ry="14" fill="${c.ear}" transform="rotate(20 72 28)"/>
    <!-- Eyes -->
    <circle cx="40" cy="42" r="4" fill="${c.eye}"/>
    <circle cx="60" cy="42" r="4" fill="${c.eye}"/>
    <circle cx="41" cy="41" r="1.5" fill="#fff"/>
    <circle cx="61" cy="41" r="1.5" fill="#fff"/>
    <!-- Nose -->
    <ellipse cx="50" cy="52" rx="3.5" ry="2.5" fill="${c.nose}"/>
    <!-- Mouth -->
    <path d="M50 55 Q47 60 44 58 M50 55 Q53 60 56 58" stroke="${c.nose}" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <!-- Accessories -->
    ${accessories}
    <!-- Blush -->
    <circle cx="33" cy="50" r="3" fill="#FFB6C1" opacity="0.6"/>
    <circle cx="67" cy="50" r="3" fill="#FFB6C1" opacity="0.6"/>
  </svg>`;
}

function renderPet(){
  const container = document.getElementById('petDisplay');
  if(!container) return;
  container.innerHTML = getPetSVG();
  
  document.getElementById('petNameDisplay').textContent = state.pet.name;
  document.getElementById('petLevelDisplay').textContent = 'Lv.'+state.pet.level;
  
  const expNeeded = petExpForLevel(state.pet.level);
  const expPrev = state.pet.level>1 ? petExpForLevel(state.pet.level-1) : 0;
  const expInLevel = state.pet.exp - expPrev;
  const expTotal = expNeeded - expPrev;
  const pct = Math.min(100, (expInLevel/expTotal)*100);
  
  document.getElementById('petExpFill').style.width = pct+'%';
  document.getElementById('petExpText').textContent = '经验: '+state.pet.exp+'/'+expNeeded;
  document.getElementById('petStars').textContent = state.stars;
  
  // Render skins
  const skinsContainer = document.getElementById('petSkins');
  if(skinsContainer){
    skinsContainer.innerHTML = petSkins.map(s=>{
      const unlocked = state.pet.level >= s.unlockLevel;
      const active = state.pet.skin === s.id;
      return `<button class="skin-btn ${active?'active':''} ${unlocked?'':'locked'}" 
        onclick="${unlocked?`selectPetSkin('${s.id}')`:`showToast('需要Lv.${s.unlockLevel}解锁')`}">
        ${s.name}${unlocked?'':' 🔒'}
      </button>`;
    }).join('');
  }
  
  renderBadgeWall('petBadgeWall');
}

function selectPetSkin(id){
  state.pet.skin = id;
  saveState();
  renderPet();
  showToast('外观已切换！');
}

function feedPet(){
  if(state.stars < 5){
    showToast('星星不够！需要5颗星喂养宠物');
    return;
  }
  state.stars -= 5;
  state.pet.exp += 15;
  
  // Check level up
  const expNeeded = petExpForLevel(state.pet.level);
  while(state.pet.exp >= expNeeded && state.pet.level < 5){
    state.pet.level++;
    showToast('🎉 宠物升级！现在 Lv.'+state.pet.level+'！');
  }
  if(state.pet.level >= 5 && state.pet.exp >= petExpForLevel(5)){
    state.pet.exp = petExpForLevel(5);
    showToast('宠物已满级！');
  }
  
  saveState();
  renderPet();
  updateStarDisplay();
  checkBadges();
}

/* ================================================================
   NAVIGATION
   ================================================================ */
function switchSection(name){
  if(reciteRecorder && reciteRecorder.state === 'recording') cancelRecite();
  document.querySelectorAll('.content-section').forEach(s=>s.classList.remove('active'));
  const sec = document.getElementById('section-'+name);
  if(sec) sec.classList.add('active');

  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
  document.querySelectorAll('.nav-item[data-section="'+name+'"]').forEach(n=>n.classList.add('active'));

  // Render section content
  if(name==='today') renderToday();
  else if(name==='english') renderEnglish('letters');
  else if(name==='poetry') renderPoetry();
  else if(name==='math') renderMath(mathCat);
  else if(name==='thinking') renderThinking();
  else if(name==='adventure') renderAdventure();
  else if(name==='errors'){ renderErrors(); renderRedoPanel(); }
  else if(name==='links') renderLinks();
  else if(name==='pet') renderPet();
  else if(name==='settings') {/* static */}

  closeSidebar();
  window.scrollTo(0,0);
}

function toggleSidebar(){
  const sb = document.getElementById('sidebar');
  const bd = document.getElementById('sidebarBackdrop');
  const open = !sb.classList.contains('open');
  sb.classList.toggle('open', open);
  bd.classList.toggle('show', open);
}

function closeSidebar(){
  const sb = document.getElementById('sidebar');
  const bd = document.getElementById('sidebarBackdrop');
  if(!sb || !bd) return;
  sb.classList.remove('open');
  bd.classList.remove('show');
}

document.querySelectorAll('.nav-item').forEach(item=>{
  item.addEventListener('click',()=>{
    const sec = item.dataset.section;
    if(sec) switchSection(sec);
  });
});

/* ================================================================
   TODAY MODULE
   ================================================================ */
const dailyTaskDefs = [
  {id:'math', name:'完成一套数学练习', icon:'🔢'},
  {id:'english_words', name:'英语单词默写', icon:'✍️'},
  {id:'english_read', name:'英语跟读（1篇/5句）', icon:'🗣️'},
  {id:'poetry', name:'古诗文背诵（4篇）', icon:'📖'},
  {id:'chinese_words', name:'汉字词组默写（20个）', icon:'✏️'},
];

const goalQuickDefs = [
  {text:'数学：把「两位数×两位数」练到全对', cat:'数学', icon:'🔢'},
  {text:'古诗：把一首新诗背到90分', cat:'古诗', icon:'🌸'},
  {text:'英语：默写10个水果单词全对', cat:'英语', icon:'🔤'},
  {text:'数学：完成「大数的认识」预习', cat:'数学', icon:'📐'},
  {text:'闯关：闯关模式连闯3关', cat:'闯关', icon:'🏆'},
  {text:'思维：思维训练做对10道题', cat:'思维', icon:'🧠'},
  {text:'英语：拼写挑战突破80分', cat:'英语', icon:'📝'},
  {text:'古诗：背诵录音拿到100分', cat:'古诗', icon:'🎙️'},
];

function renderGoalQuickPicker(){
  const container = document.getElementById('goalQuickPicker');
  const todayGoal = state.goals[todayStr()];
  container.innerHTML = goalQuickDefs.map(g=>{
    const active = todayGoal === g.text;
    return `<div class="goal-chip ${active?'active':''}" onclick="pickGoal('${g.text.replace(/'/g,"\\'")}')">
      ${g.icon} ${g.text}
      ${active?'<span class="tag">✓ 已选</span>':''}
    </div>`;
  }).join('');
}

function pickGoal(text){
  const today = todayStr();
  const current = state.goals[today];
  if(current === text){
    state.goals[today] = '';
    document.getElementById('todayGoalInput').value = '';
  } else {
    state.goals[today] = text;
    document.getElementById('todayGoalInput').value = text;
  }
  saveState();
  renderGoalQuickPicker();
  updateGoalDisplay();
  showToast(state.goals[today] ? '挑战目标已设定！加油！' : '目标已取消');
}

function updateGoalDisplay(){
  const display = document.getElementById('todayGoalDisplay');
  const val = state.goals[todayStr()];
  if(!val){
    display.innerHTML = '🎯 还没有设置今天的重点挑战哦~ 从上面选一个吧！';
    display.style.background = '#f8f9fa';
    display.style.borderColor = '#e2e6ea';
    display.style.color = 'var(--text3)';
  } else {
    display.innerHTML = `<b style="color:var(--teal)">🎯 今日重点挑战</b><br><span style="font-size:15px;color:var(--text)">${val}</span><br><span style="font-size:12px;color:var(--text3)">完成它就能拿星星奖励！</span>`;
    display.style.background = '#e6f9f6';
    display.style.borderColor = 'var(--teal)';
    display.style.color = 'var(--text)';
  }
}

function renderToday(){
  const today = todayStr();
  if(!state.dailyTasks[today]) state.dailyTasks[today] = {completed:0, tasks:{}};
  const td = state.dailyTasks[today];
  
  // Goal
  const goalInput = document.getElementById('todayGoalInput');
  goalInput.value = state.goals[today] || '';
  renderGoalQuickPicker();
  updateGoalDisplay();
  
  // Daily tasks
  const list = document.getElementById('dailyTaskList');
  list.innerHTML = dailyTaskDefs.map(t=>{
    const done = td.tasks[t.id];
    return `<div class="task-item ${done?'done':''}" onclick="toggleDailyTask('${t.id}')">
      <div class="task-check"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>
      <div class="task-text">${t.icon} ${t.name}</div>
    </div>`;
  }).join('');
  
  const completed = Object.values(td.tasks).filter(v=>v).length;
  document.getElementById('dailyTaskProgress').style.width = (completed/5*100)+'%';
  document.getElementById('dailyTaskHint').textContent = '完成 '+completed+'/5 项';
  
  // Pomodoro
  if(state.pomodoro.todayDate !== today){
    state.pomodoro.todayDate = today;
    state.pomodoro.todayCount = 0;
    saveState();
  }
  document.getElementById('pomoFocus').value = state.pomodoro.focus;
  document.getElementById('pomoRest').value = state.pomodoro.rest;
  document.getElementById('pomoCount').textContent = '今日完成 '+state.pomodoro.todayCount+' 个番茄钟（累计'+state.pomodoro.totalCount+'个）';
  
  // Monthly stats
  renderMonthlyStats();
  
  updateStarDisplay();
}

function saveTodayGoal(){
  const val = document.getElementById('todayGoalInput').value.trim();
  const today = todayStr();
  state.goals[today] = val;
  saveState();
  renderGoalQuickPicker();
  updateGoalDisplay();
  showToast(val ? '挑战目标已保存！加油！' : '目标已清空');
}

function toggleDailyTask(id){
  const today = todayStr();
  if(!state.dailyTasks[today]) state.dailyTasks[today] = {completed:0, tasks:{}};
  state.dailyTasks[today].tasks[id] = !state.dailyTasks[today].tasks[id];
  state.dailyTasks[today].completed = Object.values(state.dailyTasks[today].tasks).filter(v=>v).length;
  saveState();
  
  if(state.dailyTasks[today].tasks[id]){
    addStars(2);
    showToast('+2 颗星！完成任务加油！');
  }
  
  // Update monthly stats
  if(!state.monthlyStats[monthStr()]) state.monthlyStats[monthStr()] = {};
  state.monthlyStats[monthStr()][today] = state.dailyTasks[today].completed;
  saveState();
  
  checkBadges();
  renderToday();
}

function renderMonthlyStats(){
  const month = monthStr();
  const stats = state.monthlyStats[month] || {};
  const now = new Date();
  const year = now.getFullYear();
  const m = now.getMonth();
  const daysInMonth = new Date(year, m+1, 0).getDate();
  const todayDate = now.getDate();
  
  let doneDays = 0;
  let html = '';
  for(let d=1; d<=daysInMonth; d++){
    const ds = month+'-'+String(d).padStart(2,'0');
    const completed = stats[ds] || 0;
    let cls = 'cal-day';
    if(d <= todayDate){
      if(completed >= 5) { cls += ' full'; doneDays++; }
      else if(completed > 0) { cls += ' has-data'; doneDays++; }
    }
    html += `<div class="${cls}">${d}</div>`;
  }
  document.getElementById('monthCalendar').innerHTML = html;
  document.getElementById('monthTotal').textContent = todayDate;
  document.getElementById('monthDone').textContent = doneDays;
  document.getElementById('monthRate').textContent = Math.round(doneDays/todayDate*100)+'%';
}

/* ================================================================
   POMODORO
   ================================================================ */
let pomoTimer = null;
let pomoMode = 'focus'; // focus or rest
let pomoSeconds = 0;
let pomoTotal = 0;

function getPomoSeconds(){
  const focus = parseInt(document.getElementById('pomoFocus').value)||30;
  const rest = parseInt(document.getElementById('pomoRest').value)||10;
  state.pomodoro.focus = focus;
  state.pomodoro.rest = rest;
  saveState();
  return pomoMode==='focus' ? focus*60 : rest*60;
}

function updatePomoDisplay(){
  const m = Math.floor(pomoSeconds/60);
  const s = pomoSeconds%60;
  document.getElementById('pomoTime').textContent = String(m).padStart(2,'0')+':'+String(s).padStart(2,'0');
  document.getElementById('pomoMode').textContent = pomoMode==='focus' ? '专注时间' : '休息时间';
  
  const total = pomoTotal;
  const progress = 1 - pomoSeconds/total;
  const circumference = 2 * Math.PI * 44;
  document.getElementById('pomoRingFill').style.strokeDashoffset = circumference * (1 - progress);
  const ring = document.getElementById('pomoRingFill');
  ring.style.stroke = pomoMode==='focus' ? '#5BBFB5' : '#FF9F43';
}

function togglePomodoro(){
  const btn = document.getElementById('pomoStartBtn');
  if(pomoTimer){
    clearInterval(pomoTimer);
    pomoTimer = null;
    btn.textContent = '继续';
  } else {
    if(pomoSeconds <= 0){
      pomoTotal = getPomoSeconds();
      pomoSeconds = pomoTotal;
    }
    updatePomoDisplay();
    pomoTimer = setInterval(()=>{
      pomoSeconds--;
      updatePomoDisplay();
      if(pomoSeconds <= 0){
        clearInterval(pomoTimer);
        pomoTimer = null;
        if(pomoMode === 'focus'){
          state.pomodoro.todayCount++;
          state.pomodoro.totalCount++;
          saveState();
          addStars(3);
          showToast('🎉 专注完成！+3颗星，休息一下吧~');
          pomoMode = 'rest';
        } else {
          showToast('休息结束，继续加油！');
          pomoMode = 'focus';
        }
        pomoTotal = getPomoSeconds();
        pomoSeconds = pomoTotal;
        updatePomoDisplay();
        document.getElementById('pomoStartBtn').textContent = '开始';
        document.getElementById('pomoCount').textContent = '今日完成 '+state.pomodoro.todayCount+' 个番茄钟（累计'+state.pomodoro.totalCount+'个）';
        checkBadges();
        return;
      }
    }, 1000);
    btn.textContent = '暂停';
  }
}

function resetPomodoro(){
  clearInterval(pomoTimer);
  pomoTimer = null;
  pomoMode = 'focus';
  pomoTotal = getPomoSeconds();
  pomoSeconds = pomoTotal;
  updatePomoDisplay();
  document.getElementById('pomoStartBtn').textContent = '开始';
}

/* ================================================================
   ENGLISH MODULE
   ================================================================ */
let englishCat = 'letters';

document.getElementById('englishCatTabs').addEventListener('click', e=>{
  const tab = e.target.closest('.cat-tab');
  if(!tab) return;
  document.querySelectorAll('#englishCatTabs .cat-tab').forEach(t=>t.classList.remove('active'));
  tab.classList.add('active');
  englishCat = tab.dataset.ecat;
  renderEnglish(englishCat);
});

function renderEnglish(cat){
  englishCat = cat || englishCat;
  const container = document.getElementById('englishContent');
  
  if(englishCat === 'letters'){
    container.innerHTML = `
      <div class="card-title"><span class="emoji">🔤</span>26个英文字母</div>
      <div class="letter-grid">${lettersData.map(l=>{
        const isVowel = vowels.includes(l.l);
        return `<div class="letter-card ${isVowel?'vowel':''}" onclick="speakLetter('${l.l}','${l.w}')">
          <div class="lc-letter">${l.l}</div>
          <div class="lc-word">${l.w}</div>
        </div>`;
      }).join('')}</div>
      <div class="card-title mt12"><span class="emoji">🌟</span>元音字母（点击朗读）</div>
      <div class="letter-grid">${vowels.map(v=>{
        const data = lettersData.find(l=>l.l===v);
        return `<div class="letter-card vowel" onclick="speakLetter('${v}','${data.w}')">
          <div class="lc-letter">${v}</div>
          <div class="lc-word">${data.w}</div>
        </div>`;
      }).join('')}</div>
      <div class="hint-text mt12">点击卡片：先读字母名，停一下，再读单词，跟着大声念！</div>
    `;
  }
  else if(englishCat === 'words'){
    let cats = Object.keys(englishWords);
    container.innerHTML = `
      <div class="card-title"><span class="emoji">📚</span>单词分类学习</div>
      <div class="cat-tabs" id="wordCatTabs">${cats.map((c,i)=>`<div class="cat-tab ${i===0?'active':''}" data-wcat="${c}">${c}</div>`).join('')}</div>
      <div id="wordGrid" class="word-grid"></div>
      <div class="hint-text mt12">点击单词卡片听英语发音！</div>
    `;
    const wgt = document.getElementById('wordCatTabs');
    wgt.addEventListener('click', e=>{
      const tab = e.target.closest('.cat-tab');
      if(!tab) return;
      wgt.querySelectorAll('.cat-tab').forEach(t=>t.classList.remove('active'));
      tab.classList.add('active');
      renderWordGrid(tab.dataset.wcat);
    });
    renderWordGrid(cats[0]);
  }
  else if(englishCat === 'spell'){
    container.innerHTML = `
      <div class="card-title"><span class="emoji">✏️</span>单词拼写挑战</div>
      <div id="spellGame"></div>
    `;
    startSpellGame();
  }
  else if(englishCat === 'match'){
    container.innerHTML = `
      <div class="card-title"><span class="emoji">🎲</span>英汉配对闯关</div>
      <div id="matchGame"></div>
    `;
    startMatchGame();
  }
}

function renderWordGrid(cat){
  const words = englishWords[cat];
  document.getElementById('wordGrid').innerHTML = words.map(w=>
    `<div class="word-card" onclick="speakEN('${w.en}')">
      <div class="wc-en">${w.en}</div>
      <div class="wc-zh">${w.zh}</div>
    </div>`
  ).join('');
}

let spellCurrent = null;
let spellScore = 0;
let spellTotal = 0;

function startSpellGame(){
  spellScore = 0;
  spellTotal = 0;
  nextSpellWord();
}

function nextSpellWord(){
  const allWords = [];
  Object.values(englishWords).forEach(arr=>arr.forEach(w=>allWords.push(w)));
  spellCurrent = allWords[Math.floor(Math.random()*allWords.length)];
  const correct = spellCurrent.en;
  const shuffled = correct.split('').sort(()=>Math.random()-0.5).join('');
  
  document.getElementById('spellGame').innerHTML = `
    <div class="tc mb12">
      <div style="font-size:14px;color:var(--text2)">看中文，拼出英文单词</div>
      <div style="font-size:28px;font-weight:800;color:var(--orange);margin:10px 0">${spellCurrent.zh}</div>
      <button class="speak-btn" onclick="speakEN('${correct}')"><svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg></button>
      <div style="font-size:12px;color:var(--text2);margin-top:4px">点喇叭听发音</div>
    </div>
    <div class="tc mb12">
      <div style="font-size:22px;font-weight:700;letter-spacing:4px;color:var(--cyan)">${shuffled}</div>
      <div style="font-size:12px;color:var(--text2);margin-top:4px">字母已打乱，请输入正确拼写</div>
    </div>
    <input class="input tc" id="spellInput" style="text-align:center;font-size:20px;font-weight:700" placeholder="输入英文单词..." onkeypress="if(event.key==='Enter')checkSpell()">
    <button class="btn btn-primary btn-block mt12" onclick="checkSpell()">提交答案</button>
    <div class="math-stat mt12">
      <div class="stat-item"><div class="stat-num" style="color:var(--cyan)" id="spellScoreDisplay">${spellScore}</div><div class="stat-label">答对</div></div>
      <div class="stat-item"><div class="stat-num" style="color:var(--orange)" id="spellTotalDisplay">${spellTotal}</div><div class="stat-label">总题数</div></div>
    </div>
    <div id="spellResult"></div>
  `;
  document.getElementById('spellInput').focus();
}

function checkSpell(){
  const input = document.getElementById('spellInput').value.trim().toLowerCase();
  spellTotal++;
  const result = document.getElementById('spellResult');
  if(input === spellCurrent.en.toLowerCase()){
    spellScore++;
    state.progress.english.correct++;
    addStars(2);
    result.innerHTML = '<div class="result-display result-correct">太棒了！+2 ⭐</div>';
  } else {
    result.innerHTML = `<div class="result-display result-wrong">正确答案：${spellCurrent.en}</div>`;
  }
  state.progress.english.gamesPlayed++;
  saveState();
  checkBadges();
  setTimeout(nextSpellWord, 1500);
}

let matchPairs = [];
let matchScore = 0;
let matchTotal = 0;
let matchSelected = null;

function startMatchGame(){
  matchScore = 0;
  matchTotal = 0;
  nextMatchRound();
}

function nextMatchRound(){
  const allWords = [];
  Object.values(englishWords).forEach(arr=>arr.forEach(w=>allWords.push(w)));
  const selected = [];
  while(selected.length < 4){
    const w = allWords[Math.floor(Math.random()*allWords.length)];
    if(!selected.find(s=>s.en===w.en)) selected.push(w);
  }
  matchPairs = selected;
  const shuffledZh = [...selected].sort(()=>Math.random()-0.5);
  
  document.getElementById('matchGame').innerHTML = `
    <div class="math-stat mb12">
      <div class="stat-item"><div class="stat-num" style="color:var(--cyan)" id="matchScoreDisplay">${matchScore}</div><div class="stat-label">配对成功</div></div>
      <div class="stat-item"><div class="stat-num" style="color:var(--orange)" id="matchTotalDisplay">${matchTotal}</div><div class="stat-label">总轮数</div></div>
    </div>
    <div class="hint-text tc mb12">点击左边的英文和右边对应的中文进行配对！</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
      <div>
        <div style="font-size:13px;font-weight:700;color:var(--text2);margin-bottom:8px;text-align:center">英文</div>
        ${selected.map((w,i)=>`<button class="btn btn-outline btn-block mb12" data-type="en" data-idx="${i}" data-val="${w.en}" onclick="matchClick(this)" style="min-height:48px">${w.en}</button>`).join('')}
      </div>
      <div>
        <div style="font-size:13px;font-weight:700;color:var(--text2);margin-bottom:8px;text-align:center">中文</div>
        ${shuffledZh.map((w,i)=>`<button class="btn btn-outline btn-block mb12" data-type="zh" data-idx="${i}" data-val="${w.en}" onclick="matchClick(this)" style="min-height:48px">${w.zh}</button>`).join('')}
      </div>
    </div>
    <div id="matchResult"></div>
  `;
  matchSelected = null;
}

function matchClick(btn){
  if(btn.classList.contains('correct') || btn.classList.contains('wrong')) return;
  
  if(!matchSelected){
    matchSelected = btn;
    btn.style.background = 'var(--cyan-light)';
    btn.style.borderColor = 'var(--cyan)';
  } else {
    matchTotal++;
    if(matchSelected.dataset.val === btn.dataset.val){
      matchScore++;
      state.progress.english.correct++;
      addStars(2);
      matchSelected.classList.add('correct');
      btn.classList.add('correct');
      matchSelected.style.background = 'var(--cyan-light)';
      matchSelected.style.borderColor = 'var(--cyan)';
      btn.style.background = 'var(--cyan-light)';
      btn.style.borderColor = 'var(--cyan)';
      
      const allCorrect = document.querySelectorAll('#matchGame button[data-type].correct').length;
      if(allCorrect >= 8){
        document.getElementById('matchResult').innerHTML = '<div class="result-display result-correct">全部配对成功！+8 ⭐ 进入下一轮~</div>';
        state.progress.english.gamesPlayed++;
        saveState();
        checkBadges();
        setTimeout(nextMatchRound, 2000);
      }
    } else {
      matchSelected.style.background = '#fff0f0';
      matchSelected.style.borderColor = 'var(--red)';
      btn.style.background = '#fff0f0';
      btn.style.borderColor = 'var(--red)';
      setTimeout(()=>{
        matchSelected.style.background = '';
        matchSelected.style.borderColor = '';
        btn.style.background = '';
        btn.style.borderColor = '';
        matchSelected = null;
      }, 800);
      return;
    }
    matchSelected = null;
    document.getElementById('matchScoreDisplay').textContent = matchScore;
    document.getElementById('matchTotalDisplay').textContent = matchTotal;
  }
}

/* ================================================================
   POETRY MODULE
   ================================================================ */
let currentPoem = -1;
let poemOrder = [];

function renderPoetry(){
  // 新诗（四年级）排前面，三年级经典诗安静地排在后面，孩子感知不到"复习"
  poemOrder = poemsData.map((p,i)=>({p,i}))
    .sort((a,b)=>(a.p.grade==='四'?0:1)-(b.p.grade==='四'?0:1))
    .map(x=>x.i);
  if(currentPoem === -1 || !poemOrder.includes(currentPoem)) currentPoem = poemOrder[0];
  const list = document.getElementById('poemList');
  list.innerHTML = poemOrder.map(i=>{
    const p = poemsData[i];
    const badge = p.grade === '四'
      ? '<span style="font-size:10px;background:#e0f5f3;color:#3da99e;border-radius:4px;padding:1px 5px;margin-right:5px;vertical-align:1px">新</span>'
      : '';
    return `<div class="poem-list-item ${i===currentPoem?'active':''}" data-idx="${i}" onclick="selectPoem(${i})">${badge}${p.title}</div>`;
  }).join('');
  displayPoem(currentPoem);
  renderPoetryGame();
}

function selectPoem(i){
  if(reciteRecorder && reciteRecorder.state === 'recording') cancelRecite();
  currentPoem = i;
  document.querySelectorAll('#poemList .poem-list-item').forEach(el=>{
    el.classList.toggle('active', +el.dataset.idx === i);
  });
  displayPoem(i);
}

function displayPoem(i){
  const p = poemsData[i];
  const poemHTML = p.lines.map(line=>{
    return line.map(arr=>{
      return arr.map(ch=>`<ruby>${ch.c}<rt>${ch.p||''}</rt></ruby>`).join('');
    }).join('');
  }).join('<br>');
  
  document.getElementById('poemDisplay').innerHTML = `
    <div class="card-title"><span class="emoji">📜</span>${p.title}${p.isProse?'<span style="font-size:11px;background:#efe6fa;color:var(--purple);border-radius:4px;padding:2px 6px;margin-left:6px;font-weight:600">古文</span>':''}</div>
    <div style="text-align:center;color:var(--text2);font-size:14px;margin-bottom:8px">【${p.dynasty}】${p.author}</div>
    <div class="poem-mask-wrap" id="poemMaskWrap">
      <div class="poem-text">${poemHTML}</div>
      <div class="poem-mask-hint">🤫 背诵挑战中 · 原文已隐藏<br><span style="font-size:12px">用心回忆，大胆背出来！</span></div>
    </div>
    <div class="tc mt12">
      <button class="btn btn-primary" onclick="speakCN('${p.textFull.replace(/'/g,"\\'")}')">
        <svg viewBox="0 0 24 24" style="width:18px;height:18px;fill:currentColor"><path d="M3 9v6h4l5 5V4L7 9H3z"/></svg> 朗读全文
      </button>
    </div>
    <div style="border-top:1px dashed var(--border);margin-top:14px;padding-top:12px">
      <div id="recitePanel"></div>
    </div>
  `;
  renderRecitePanel(i);
}

let poetryGameQ = null;
let poetryScore = 0;
let poetryTotal = 0;

/* ================================================================
   RECITE — 背诵录音挑战（录音 + 本地分析打分 + 对比播放，全离线）
   ================================================================ */
let reciteStream = null, reciteRecorder = null, reciteChunks = [];
let reciteCtx = null, reciteAnalyser = null, reciteRaf = 0, reciteTick = 0, reciteStartTs = 0;
let lastReciteUrl = null;

function renderRecitePanel(i){
  const p = poemsData[i];
  const hist = state.poemRecite ? state.poemRecite[p.title] : null;
  document.getElementById('recitePanel').innerHTML = `
    <div class="card-title"><span class="emoji">🎙️</span>背诵挑战 · 录音打分</div>
    <div style="font-size:13px;color:var(--text2);text-align:center;line-height:1.8">
      ${hist ? `已背 ${hist.count} 次 · 最佳成绩 ${hist.best} 分` : '先听一遍朗读，再凭记忆大声背诵，录完自动打分！'}
    </div>
    <div class="tc mt12">
      <button class="btn btn-primary" style="min-height:48px;padding:0 26px" onclick="startRecite(${i})">🎙️ 开始背诵录音</button>
    </div>
    <div style="font-size:11px;color:var(--text2);text-align:center;margin-top:8px">开始后原文自动隐藏 · 需允许麦克风权限 · 成绩永久保存</div>
  `;
}

async function startRecite(i){
  if(!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia || !window.MediaRecorder){
    showToast('当前浏览器不支持录音，请用 Chrome / Edge 打开');
    return;
  }
  speechSynthesis.cancel();
  try{
    reciteStream = await navigator.mediaDevices.getUserMedia({audio:true});
  }catch(e){
    showToast('请点击浏览器地址栏 🔒 允许麦克风权限哦');
    return;
  }
  reciteChunks = [];
  reciteRecorder = new MediaRecorder(reciteStream);
  reciteRecorder.ondataavailable = e=>{ if(e.data && e.data.size>0) reciteChunks.push(e.data); };
  reciteRecorder.onstop = ()=>finishRecite(i);
  reciteRecorder.start();
  try{
    reciteCtx = new (window.AudioContext||window.webkitAudioContext)();
    const src = reciteCtx.createMediaStreamSource(reciteStream);
    reciteAnalyser = reciteCtx.createAnalyser();
    reciteAnalyser.fftSize = 512;
    src.connect(reciteAnalyser);
  }catch(e){ reciteCtx = null; reciteAnalyser = null; }
  reciteStartTs = Date.now();
  const maskWrap = document.getElementById('poemMaskWrap');
  if(maskWrap) maskWrap.classList.add('masked');
  document.getElementById('recitePanel').innerHTML = `
    <div class="card-title"><span class="emoji">🔴</span>正在录音 · 大声背诵吧！</div>
    <div class="recite-timer" id="reciteTimer">0.0 秒</div>
    <div class="recite-bars" id="reciteBars">${'<i></i>'.repeat(14)}</div>
    <div class="tc">
      <button class="btn btn-recite-stop" onclick="stopRecite()">⏹ 背完了</button>
      <button class="btn" id="peekBtn" style="margin-left:8px" onclick="peekPoem()">👀 偷看一眼</button>
    </div>
    <div style="font-size:12px;color:var(--text2);text-align:center;margin-top:8px">原文已隐藏，凭记忆背；实在想不起来可以偷看3秒</div>
  `;
  reciteTick = setInterval(()=>{
    const el = document.getElementById('reciteTimer');
    if(el) el.textContent = ((Date.now()-reciteStartTs)/1000).toFixed(1)+' 秒';
  },100);
  reciteRaf = requestAnimationFrame(reciteMeter);
}

function reciteMeter(){
  if(!reciteAnalyser) return;
  const buf = new Uint8Array(reciteAnalyser.fftSize);
  reciteAnalyser.getByteTimeDomainData(buf);
  let sum = 0;
  for(let j=0;j<buf.length;j++){ const v=(buf[j]-128)/128; sum += v*v; }
  const rms = Math.sqrt(sum/buf.length);
  const bars = document.getElementById('reciteBars');
  if(bars){
    const h = Math.max(4, Math.min(36, Math.round(rms*200)));
    const bar = document.createElement('i');
    bar.style.height = h+'px';
    bars.insertBefore(bar, bars.firstChild);
    while(bars.children.length>14) bars.removeChild(bars.lastChild);
  }
  reciteRaf = requestAnimationFrame(reciteMeter);
}

function peekPoem(){
  const wrap = document.getElementById('poemMaskWrap');
  const btn = document.getElementById('peekBtn');
  if(!wrap || !btn) return;
  wrap.classList.remove('masked');
  btn.disabled = true;
  btn.textContent = '👀 正在偷看…';
  setTimeout(()=>{
    if(reciteRecorder && reciteRecorder.state === 'recording'){
      wrap.classList.add('masked');
      btn.disabled = false;
      btn.textContent = '👀 偷看一眼';
    }
  }, 3000);
}

function teardownRecite(){
  if(reciteStream) reciteStream.getTracks().forEach(t=>t.stop());
  reciteStream = null;
  clearInterval(reciteTick);
  cancelAnimationFrame(reciteRaf);
  if(reciteCtx){ try{ reciteCtx.close(); }catch(e){} }
  reciteCtx = null; reciteAnalyser = null;
  const maskWrap = document.getElementById('poemMaskWrap');
  if(maskWrap) maskWrap.classList.remove('masked');
}

function stopRecite(){
  if(reciteRecorder && reciteRecorder.state !== 'inactive') reciteRecorder.stop();
  teardownRecite();
}

function cancelRecite(){
  if(reciteRecorder && reciteRecorder.state !== 'inactive'){
    reciteRecorder.onstop = null;
    reciteRecorder.stop();
  }
  teardownRecite();
}

async function finishRecite(i){
  if(reciteChunks.length === 0){
    showToast('没有录到声音，凑近一点再试吧');
    renderRecitePanel(i);
    return;
  }
  const blob = new Blob(reciteChunks, {type: reciteChunks[0].type || 'audio/webm'});
  if(lastReciteUrl) URL.revokeObjectURL(lastReciteUrl);
  lastReciteUrl = URL.createObjectURL(blob);
  const p = poemsData[i];
  let result = null;
  try{
    const ab = await blob.arrayBuffer();
    const actx = new (window.AudioContext||window.webkitAudioContext)();
    const audioBuf = await actx.decodeAudioData(ab);
    try{ actx.close(); }catch(e){}
    result = analyzeRecite(audioBuf, p);
  }catch(e){ result = null; }
  const score = result ? result.score : 70;
  if(!state.poemRecite) state.poemRecite = {};
  const h = state.poemRecite[p.title] || {best:0, count:0};
  h.count++;
  h.last = score;
  h.best = Math.max(h.best, score);
  state.poemRecite[p.title] = h;
  let stars = 1;
  if(score >= 90) stars = 5;
  else if(score >= 75) stars = 3;
  else if(score >= 60) stars = 2;
  addStars(stars);
  state.progress.poetry.gamesPlayed += 1;
  if(score >= 85) state.progress.poetry.correct += 1;
  saveState();
  const msg = score >= 90 ? '🏆 太棒了，背诵小明星！'
    : score >= 75 ? '👍 很不错，继续保持！'
    : score >= 60 ? '💪 有进步，再多练两遍！'
    : '🌱 别灰心，先听朗读再来一次！';
  const breakdown = result ? `
    <div style="font-size:13px;color:var(--text2);text-align:center;line-height:1.9">
      完整度 ${result.coverage}/40 · 流利度 ${result.fluency}/40 · 篇幅 ${result.pace}/20<br>
      说话时长约 ${result.speechSec} 秒 · 中途停顿 ${result.pauses} 次
    </div>` : `
    <div style="font-size:13px;color:var(--text2);text-align:center;line-height:1.9">
      本次自动分析未成功，先按 70 分记录<br>请爸爸妈妈点下面按钮听一听真实水平
    </div>`;
  document.getElementById('recitePanel').innerHTML = `
    <div class="card-title"><span class="emoji">🏆</span>背诵成绩</div>
    <div class="recite-score">${score}<span style="font-size:16px;font-weight:600"> 分</span></div>
    <div style="text-align:center;font-size:15px;font-weight:700">${msg} +${stars}⭐</div>
    ${breakdown}
    <div class="recite-row">
      <button class="btn" onclick="playMyRecite()">▶️ 听我的背诵</button>
      <button class="btn" onclick="playCompare(${i})">🔊 对比播放</button>
      <button class="btn btn-primary" onclick="renderRecitePanel(${i})">🔄 再背一次</button>
    </div>
  `;
  showToast('背诵完成，奖励 '+stars+' 颗星星！');
}

function analyzeRecite(audioBuf, p){
  const data = audioBuf.getChannelData(0);
  const sr = audioBuf.sampleRate;
  const hop = Math.floor(sr*0.05);
  const frames = [];
  for(let k=0;k+hop<=data.length;k+=hop){
    let s = 0;
    for(let j=0;j<hop;j++) s += data[k+j]*data[k+j];
    frames.push(Math.sqrt(s/hop));
  }
  if(frames.length < 10) return {score:60, coverage:20, fluency:30, pace:10, speechSec:'0.0', pauses:0};
  const sorted = [...frames].sort((a,b)=>a-b);
  const noise = sorted[Math.floor(sorted.length*0.15)] || 0;
  const threshold = Math.max(noise*2.2, 0.012);
  const speech = frames.map((v,idx)=>{
    const a = frames[idx-1] !== undefined ? frames[idx-1] : v;
    const b = frames[idx+1] !== undefined ? frames[idx+1] : v;
    return [a,v,b].sort((x,y)=>x-y)[1] > threshold ? 1 : 0;
  });
  const speechCount = speech.reduce((a,b)=>a+b, 0);
  const speechSec = (speechCount*0.05).toFixed(1);
  let pauses = 0, run = 0, seenSpeech = false;
  for(const v of speech){
    if(v === 1){
      if(seenSpeech && run >= 24) pauses++;
      run = 0;
      seenSpeech = true;
    } else run++;
  }
  const chars = p.textFull.replace(/[，。？！、]/g,'').length;
  const expected = Math.max(4, chars*0.45);
  const ratio = (speechCount*0.05)/expected;
  const coverage = Math.round(Math.min(1, ratio/0.85)*40);
  const rawFluency = Math.max(8, 40 - pauses*7);
  const fluency = Math.round(rawFluency * Math.min(1, ratio/0.6));
  const totalSec = audioBuf.duration;
  const pace = (totalSec >= expected*0.7 && totalSec <= expected*2.2) ? 20 : 10;
  let score = coverage + fluency + pace;
  if(ratio < 0.15) score = Math.min(score, 30); // 基本没出声，不给高分
  score = Math.max(30, Math.min(100, score));
  return {score, coverage, fluency, pace, speechSec, pauses};
}

function playMyRecite(){
  if(!lastReciteUrl){ showToast('还没有录音哦'); return; }
  speechSynthesis.cancel();
  new Audio(lastReciteUrl).play();
}

function playCompare(i){
  const p = poemsData[i];
  if(!lastReciteUrl){ showToast('还没有录音哦'); return; }
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(p.textFull);
  u.lang = 'zh-CN';
  u.rate = 0.8;
  u.onend = ()=>{ setTimeout(()=>{ new Audio(lastReciteUrl).play(); }, 600); };
  speechSynthesis.speak(u);
  showToast('先听标准朗读，再听你的背诵对比');
}

function renderPoetryGame(){
  poetryScore = 0;
  poetryTotal = 0;
  nextPoetryGame();
}

function nextPoetryGame(){
  const poem = poemsData[Math.floor(Math.random()*poemsData.length)];
  const fullText = poem.textFull.replace(/[，。？]/g,'');
  const chars = fullText.split('');
  const blankIdx = Math.floor(Math.random()*chars.length);
  const blankChar = chars[blankIdx];
  
  // Get surrounding text for context
  const start = Math.max(0, blankIdx-4);
  const end = Math.min(chars.length, blankIdx+5);
  let context = '';
  for(let i=start; i<end; i++){
    if(i===blankIdx) context += '___';
    else context += chars[i];
  }
  
  // Generate options
  const allChars = new Set();
  poemsData.forEach(p=>{
    p.textFull.replace(/[，。？]/g,'').split('').forEach(c=>allChars.add(c));
  });
  const options = [blankChar];
  while(options.length < 4){
    const random = Array.from(allChars)[Math.floor(Math.random()*allChars.size)];
    if(!options.includes(random)) options.push(random);
  }
  options.sort(()=>Math.random()-0.5);
  
  poetryGameQ = {answer: blankChar, poem: poem.title};
  
  document.getElementById('poetryGame').innerHTML = `
    <div style="font-size:14px;color:var(--text2);margin-bottom:8px">出自：《${poem.title}》</div>
    <div style="font-size:20px;font-weight:700;text-align:center;padding:16px;background:var(--bg);border-radius:10px;margin-bottom:14px">${context}</div>
    <div style="font-size:13px;color:var(--text2);margin-bottom:8px">上面 ___ 处应该填什么字？</div>
    <div class="think-options">
      ${options.map(o=>`<button class="think-option" onclick="checkPoetryAnswer('${o}',this)">${o}</button>`).join('')}
    </div>
    <div class="math-stat mt12">
      <div class="stat-item"><div class="stat-num" style="color:var(--cyan)" id="poetryScoreDisplay">${poetryScore}</div><div class="stat-label">答对</div></div>
      <div class="stat-item"><div class="stat-num" style="color:var(--orange)" id="poetryTotalDisplay">${poetryTotal}</div><div class="stat-label">总题数</div></div>
    </div>
    <div id="poetryResult"></div>
  `;
}

function checkPoetryAnswer(ans, btn){
  poetryTotal++;
  const result = document.getElementById('poetryResult');
  if(ans === poetryGameQ.answer){
    poetryScore++;
    state.progress.poetry.correct++;
    addStars(2);
    btn.classList.add('correct');
    result.innerHTML = '<div class="result-display result-correct">太棒了！+2 ⭐</div>';
  } else {
    btn.classList.add('wrong');
    result.innerHTML = `<div class="result-display result-wrong">正确答案：${poetryGameQ.answer}</div>`;
    // Add to errors
    addErrorAuto('古诗填空', '语文', poetryGameQ.poem, '古诗记忆不牢');
  }
  state.progress.poetry.gamesPlayed++;
  saveState();
  checkBadges();
  setTimeout(nextPoetryGame, 1800);
}

/* ================================================================
   MATH MODULE
   ================================================================ */
let mathCat = 'review';
let mathScore = 0;
let mathTotal = 0;
let mathTimedTimer = null;
let mathTimedSeconds = 0;

document.getElementById('mathCatTabs').addEventListener('click', e=>{
  const tab = e.target.closest('.cat-tab');
  if(!tab) return;
  document.querySelectorAll('#mathCatTabs .cat-tab').forEach(t=>t.classList.remove('active'));
  tab.classList.add('active');
  mathCat = tab.dataset.mcat;
  renderMath(mathCat);
});

function renderMath(cat){
  mathCat = cat || mathCat;
  if(mathTimedTimer){ clearInterval(mathTimedTimer); mathTimedTimer = null; }
  reviewSession = null;
  mathScore = 0;
  mathTotal = 0;
  
  const container = document.getElementById('mathContent');
  
  if(mathCat === 'review'){
    container.innerHTML = `<div class="card-title"><span class="emoji">📋</span>三下复习清单<span style="font-size:12px;font-weight:400;color:var(--text2);margin-left:8px">每天完成打✓，第二天刷新</span></div><div id="reviewList"></div><div id="mathGame"></div>`;
    renderReviewList();
  }
  else if(mathCat === 'division'){
    renderDivisionDrill();
  }
  else if(mathCat === 'mixed'){
    container.innerHTML = `<div class="card-title"><span class="emoji">🔀</span>混合运算 · 脱式计算（含括号）</div><div id="mathGame"></div>`;
    nextMathProblem('bracket');
  }
  else if(mathCat === 'preview'){
    container.innerHTML = `
      <div class="card-title"><span class="emoji">预习</span>四年级上册新知识预习</div>
      <div class="cat-tabs" id="previewTabs">
        <div class="cat-tab active" data-pcat="bignum">大数的认识</div>
        <div class="cat-tab" data-pcat="hectare">公顷·平方千米</div>
        <div class="cat-tab" data-pcat="threemulti">三位数×两位数</div>
        <div class="cat-tab" data-pcat="twodiv">除数两位数</div>
        <div class="cat-tab" data-pcat="angle">角的度量</div>
        <div class="cat-tab" data-pcat="quad">平行四边形·梯形</div>
      </div>
      <div id="mathGame"></div>
    `;
    document.getElementById('previewTabs').addEventListener('click', e=>{
      const tab = e.target.closest('.cat-tab');
      if(!tab) return;
      document.querySelectorAll('#previewTabs .cat-tab').forEach(t=>t.classList.remove('active'));
      tab.classList.add('active');
      nextMathProblem(tab.dataset.pcat);
    });
    nextMathProblem('bignum');
  }
  else if(mathCat === 'timed'){
    container.innerHTML = `
      <div class="card-title"><span class="emoji">⏱️</span>计时答题挑战</div>
      <div class="math-stat mb12">
        <div class="stat-item"><div class="stat-num" style="color:var(--red);font-size:32px" id="timedCount">60</div><div class="stat-label">倒计时(秒)</div></div>
        <div class="stat-item"><div class="stat-num" style="color:var(--cyan)" id="timedScore">0</div><div class="stat-label">答对</div></div>
        <div class="stat-item"><div class="stat-num" style="color:var(--orange)" id="timedTotal">0</div><div class="stat-label">总题</div></div>
      </div>
      <div id="mathGame"></div>
      <div id="timedResult"></div>
    `;
    mathTimedSeconds = 60;
    nextTimedProblem();
    mathTimedTimer = setInterval(()=>{
      mathTimedSeconds--;
      document.getElementById('timedCount').textContent = mathTimedSeconds;
      if(mathTimedSeconds <= 0){
        clearInterval(mathTimedTimer);
        mathTimedTimer = null;
        document.getElementById('timedResult').innerHTML = `<div class="result-display result-correct">时间到！答对 ${mathScore} 题，获得 ${mathScore*2} 颗星！</div>`;
        addStars(mathScore*2);
        state.progress.math.solved += mathTotal;
        saveState();
        checkBadges();
      }
    }, 1000);
  }
}

function nextTimedProblem(){
  const pool = ['twomulti','division','bracket','decadd','remainder','threemulti'];
  nextMathProblem(pool[Math.floor(Math.random()*pool.length)]);
}

/* ================================================================
   除法专项 — 填空题矩阵（三位数 ÷ 一位数，非选择题）
   共20题，每页10题分页展示，回车逐题提交 / 一键检查全部
   ================================================================ */
let divDrill = null;
let divScore = 0;
let divDone = 0;
let divPage = 0;
const DIV_TOTAL = 20;
const DIV_PAGE_SIZE = 10;

function genDivDrillProblem(){
  const b = Math.floor(Math.random()*8)+2;          // 除数 2-9
  const lo = Math.ceil(100/b), hi = Math.floor(999/b);
  const result = Math.floor(Math.random()*(hi-lo+1))+lo; // 保证被除数是三位数
  return {a:b*result, b:b, ans:result, val:'', checked:false, right:false, skip:false};
}

function renderDivisionDrill(){
  const container = document.getElementById('mathContent');
  if(!container) return;
  divDrill = Array.from({length:DIV_TOTAL}, genDivDrillProblem);
  divScore = 0;
  divDone = 0;
  divPage = 0;

  container.innerHTML = `
    <div class="card-title"><span class="emoji">➗</span>除法专项 · 填空矩阵（三位数 ÷ 一位数）<span style="font-size:12px;font-weight:400;color:var(--text2);margin-left:8px">共${DIV_TOTAL}题 · 每页${DIV_PAGE_SIZE}题 · 每题按回车提交，全部填完点「检查答案」</span></div>
    <div class="math-tip">${mathTips.division}</div>
    <div class="div-grid" id="divGrid"></div>
    <div class="div-actions" id="divPager" style="margin-bottom:10px"></div>
    <div class="div-actions">
      <button class="btn btn-primary" onclick="checkDivisionAll()">检查答案</button>
      <button class="btn btn-outline" onclick="renderDivisionDrill()">再来一组</button>
    </div>
    <div class="math-stat mt12">
      <div class="stat-item"><div class="stat-num" style="color:var(--cyan)" id="divScoreDisplay">0</div><div class="stat-label">答对</div></div>
      <div class="stat-item"><div class="stat-num" style="color:var(--orange)" id="divDoneDisplay">0</div><div class="stat-label">已提交</div></div>
      <div class="stat-item"><div class="stat-num" style="color:var(--purple)" id="divTotalDisplay">${DIV_TOTAL}</div><div class="stat-label">总题数</div></div>
    </div>
    <div id="divResult"></div>
  `;
  renderDivisionPage();
}

function renderDivisionPage(){
  const grid = document.getElementById('divGrid');
  if(!grid || !divDrill) return;
  const start = divPage * DIV_PAGE_SIZE;
  const end = Math.min(start + DIV_PAGE_SIZE, divDrill.length);

  grid.innerHTML = divDrill.slice(start, end).map((p, offset)=>{
    const i = start + offset;
    const cls = p.checked ? (p.right ? ' correct' : ' wrong') : '';
    const mark = p.checked ? (p.right ? '✓' : (p.skip ? '未答:' + p.ans : '✗' + p.ans)) : '';
    const val = (p.val || '').replace(/"/g, '&quot;');
    return `
      <div class="div-cell${cls}" id="divCell${i}">
        <span class="div-num">${i+1}.</span>
        <span class="div-q">${p.a} ÷ ${p.b} =</span>
        <input type="text" inputmode="numeric" autocomplete="off" class="div-input" id="divInput${i}" value="${val}" ${p.checked ? 'readonly' : ''} oninput="divDrill[${i}].val=this.value" onkeydown="divInputKey(event,${i})">
        <span class="div-mark" id="divMark${i}">${mark}</span>
      </div>`;
  }).join('');

  const pager = document.getElementById('divPager');
  if(pager){
    const pages = Math.ceil(divDrill.length / DIV_PAGE_SIZE);
    pager.innerHTML = pages > 1 ? `
      <button class="btn btn-outline btn-sm" onclick="divGoPage(${divPage-1})" ${divPage===0?'disabled':''}>⬅ 上一页</button>
      <span class="div-page-ind">第 ${divPage+1} / ${pages} 页</span>
      <button class="btn btn-outline btn-sm" onclick="divGoPage(${divPage+1})" ${divPage>=pages-1?'disabled':''}>下一页 ➡</button>` : '';
  }
}

function divGoPage(n){
  if(!divDrill) return;
  const pages = Math.ceil(divDrill.length / DIV_PAGE_SIZE);
  if(n < 0 || n > pages-1) return;
  divPage = n;
  renderDivisionPage();
}

function divInputKey(e, i){
  if(e.key !== 'Enter') return;
  e.preventDefault();
  checkDivisionCell(i);
  const next = document.getElementById('divInput'+(i+1));
  if(next && next.focus){
    next.focus();
  } else if(i+1 < divDrill.length){
    // 当前页最后一题：翻到下一页并聚焦第一格
    divGoPage(divPage + 1);
    const first = document.getElementById('divInput'+(i+1));
    if(first && first.focus) first.focus();
  }
}

function checkDivisionCell(i){
  if(!divDrill || !divDrill[i] || divDrill[i].checked) return;
  const input = document.getElementById('divInput'+i);
  if(!input) return;
  const val = input.value.trim();
  if(val === '') return; // 空着不判，等最终检查
  gradeDivProblem(i, val);
  updateDivStats();
  saveState();
  checkBadges();
}

/* 判分核心：不依赖 DOM 是否存在（其他页的题没有对应元素） */
function gradeDivProblem(i, val){
  const p = divDrill[i];
  const cell = document.getElementById('divCell'+i);
  const mark = document.getElementById('divMark'+i);
  const input = document.getElementById('divInput'+i);
  p.checked = true;
  p.val = val;
  p.skip = false;
  divDone++;

  if(parseInt(val, 10) === p.ans){
    p.right = true;
    divScore++;
    if(cell) cell.classList.add('correct');
    if(mark) mark.textContent = '✓';
    state.progress.math.correct++;
    addStars(1);
  } else {
    p.right = false;
    if(cell) cell.classList.add('wrong');
    if(mark) mark.textContent = '✗' + p.ans;
    addErrorAuto(p.a + ' ÷ ' + p.b + ' = ? (答:' + val + ')', '数学', '三位数除以一位数', '计算错误');
  }
  if(input) input.readOnly = true;
  state.progress.math.solved++;
}

function checkDivisionAll(){
  if(!divDrill) return;
  for(let i=0; i<divDrill.length; i++){
    const p = divDrill[i];
    if(p.checked) continue;
    const val = (p.val || '').trim();
    if(val !== ''){
      gradeDivProblem(i, val);
    } else {
      // 未作答：算错并展示正确答案
      p.checked = true; p.right = false; p.skip = true;
      divDone++;
      addErrorAuto(p.a + ' ÷ ' + p.b + ' = ? (未作答)', '数学', '三位数除以一位数', '未作答');
      state.progress.math.solved++;
    }
  }
  // 重绘当前页，恢复只读态与标记（其他页翻过去时也会按状态渲染）
  renderDivisionPage();
  updateDivStats();
  saveState();
  checkBadges();

  const result = document.getElementById('divResult');
  if(!result) return;
  const total = divDrill.length;
  if(divScore === total){
    result.innerHTML = `<div class="result-display result-correct">🎉 全对！${total} 题一题不错，除法小达人！</div>`;
  } else {
    result.innerHTML = `<div class="result-display result-wrong">答对 ${divScore} / ${total} 题，错题已记入错题本，去「错题重练」消灭它们！</div>`;
  }
}

function updateDivStats(){
  const s = document.getElementById('divScoreDisplay');
  const d = document.getElementById('divDoneDisplay');
  if(s) s.textContent = divScore;
  if(d) d.textContent = divDone;
}

/* ================================================================
   三下复习清单 — 结构化每日复习（对照用户清单模板）
   ================================================================ */
const reviewListData = [
  {cat:'🔢 计算专项', items:[
    {id:'rv_worksheet', name:'每日一套计算练习卷（8+8+9 道竖式题）', worksheet:true, count:25},
    {id:'rv_twomulti', name:'练 10 道两位数乘两位数竖式计算', type:'twomulti', count:10},
    {id:'rv_remainder', name:'重做 8 道有余数除法题', type:'remainder', count:8},
    {id:'rv_decadd', name:'完成 15 道小数加减口算', type:'decadd', count:15},
    {id:'rv_bracket', name:'巩固脱式计算，带括号运算 5 题', type:'bracket', count:5},
  ]},
  {cat:'🟦 面积单元（三下重难点）', items:[
    {id:'rv_areaword', name:'熟记长方形、正方形面积公式，做 7 道面积应用题', type:'areaword', count:7},
    {id:'rv_pva', name:'区分面积、周长，完成 5 道易混淆对比练习', type:'perimvsarea', count:5},
    {id:'rv_areaunit', name:'练习面积单位换算（cm²·dm²·m²）10 题', type:'areaunit', count:10},
  ]},
  {cat:'📅 年月日 / 时间', items:[
    {id:'rv_ymd', name:'背大小月口诀，练习 8 道日期推算题', type:'ymd', count:8},
    {id:'rv_clock', name:'普通计时法 ↔ 24 时计时法互转 10 题', type:'clock24', count:10},
  ]},
  {cat:'📦 解决问题应用题', items:[
    {id:'rv_chain', name:'完成 6 道连乘、连除应用题', type:'chainmul', count:6},
    {id:'rv_gui', name:'归一归总应用题，重新做 6 道', type:'guione', count:6},
  ]},
  {cat:'🌟 综合习惯目标', items:[
    {id:'rv_habit1', name:'今天所有计算题写完主动验算', habit:true},
    {id:'rv_habit2', name:'画图辅助，分析 3 道面积应用题题意', habit:true},
  ]},
];

let reviewSession = null;

function reviewKey(id){ return todayStr()+'|'+id; }

function renderReviewList(){
  const el = document.getElementById('reviewList');
  if(!el) return;
  const totalItems = reviewListData.reduce((s,c)=>s+c.items.length,0);
  const doneCount = reviewListData.reduce((s,c)=>s+c.items.filter(it=>state.reviewCheck[reviewKey(it.id)]).length,0);
  const checkSvg = '<svg viewBox="0 0 24 24" style="width:16px;height:16px;fill:#fff"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>';
  el.innerHTML = `
    <div class="progress-bar"><div class="progress-fill" style="width:${Math.round(doneCount/totalItems*100)}%;background:var(--teal)"></div></div>
    <div class="hint-text" style="margin-bottom:4px">今日清单进度：${doneCount} / ${totalItems} 项 · 明天自动刷新重来</div>
    ${reviewListData.map(cat=>`
      <div class="review-cat">${cat.cat}</div>
      ${cat.items.map(it=>{
        const done = state.reviewCheck[reviewKey(it.id)];
        if(it.habit){
          return `<div class="review-item ${done?'done':''}" style="cursor:pointer" onclick="toggleReviewHabit('${it.id}')">
            <div class="ri-check">${done?checkSvg:''}</div>
            <div style="flex:1">${it.name}</div>
            ${done?'<span style="color:var(--teal);font-weight:700;font-size:12px;flex-shrink:0">✓ 已做到</span>':'<span style="font-size:12px;color:var(--text3);flex-shrink:0">点击打卡</span>'}
          </div>`;
        }
        return `<div class="review-item ${done?'done':''}">
          <div class="ri-check">${done?checkSvg:''}</div>
          <div style="flex:1">${it.name}</div>
          ${done
            ? `<span style="color:var(--teal);font-weight:700;font-size:13px;flex-shrink:0">✓ ${done.correct}/${done.total}</span>`
            : `<button class="btn btn-primary" style="min-height:44px;padding:0 16px;flex-shrink:0" onclick="${it.worksheet?`startWorksheet()`:`startReviewPractice('${it.id}')`}">去练习 →</button>`}
        </div>`;
      }).join('')}
    `).join('')}
  `;
}

function toggleReviewHabit(id){
  const k = reviewKey(id);
  if(state.reviewCheck[k]){
    delete state.reviewCheck[k];
  } else {
    state.reviewCheck[k] = {habit:true};
    addStars(2);
    showToast('好习惯打卡！+2 ⭐');
  }
  saveState();
  renderReviewList();
}

function findReviewItem(id){
  for(const cat of reviewListData){
    const it = cat.items.find(x=>x.id===id);
    if(it) return it;
  }
  return null;
}

function startReviewPractice(id){
  const item = findReviewItem(id);
  if(!item) return;
  reviewSession = {id, type:item.type, count:item.count, answered:0, correct:0};
  const list = document.getElementById('reviewList');
  if(list) list.style.display = 'none';
  nextReviewProblem();
}

function exitReviewPractice(){
  reviewSession = null;
  const list = document.getElementById('reviewList');
  if(list) list.style.display = '';
  document.getElementById('mathGame').innerHTML = '';
  renderReviewList();
}

function nextReviewProblem(){
  const game = document.getElementById('mathGame');
  if(!game || !reviewSession) return;
  const problem = genMathProblem(reviewSession.type);
  game.innerHTML = `
    <div class="tc" style="font-size:13px;color:var(--text2);margin-bottom:8px;display:flex;align-items:center;justify-content:center;gap:10px;flex-wrap:wrap">
      <span>复习专项 · 第 <b style="color:var(--teal)">${reviewSession.answered+1}</b> / ${reviewSession.count} 题 · 已对 <b style="color:var(--cyan)">${reviewSession.correct}</b> 题</span>
      <button class="btn" style="min-height:36px;padding:0 12px;font-size:12px" onclick="exitReviewPractice()">返回清单</button>
    </div>
    ${mathTips[reviewSession.type] ? `<div class="math-tip">${mathTips[reviewSession.type]}</div>` : ''}
    <div class="math-question">${problem.q}</div>
    <div class="math-options">
      ${problem.options.map(o=>`<div class="math-option" onclick="checkReviewAnswer('${String(o).replace(/'/g,"\\'")}', '${String(problem.ans).replace(/'/g,"\\'")}', this)">${o}</div>`).join('')}
    </div>
    <div id="mathResult"></div>
  `;
}

function checkReviewAnswer(selected, correct, btn){
  const sess = reviewSession;
  if(!sess) return;
  sess.answered++;
  const result = document.getElementById('mathResult');
  if(selected === correct){
    sess.correct++;
    state.progress.math.correct++;
    addStars(1);
    btn.classList.add('correct');
    result.innerHTML = '<div class="result-display result-correct">答对了！+1 ⭐</div>';
  } else {
    btn.classList.add('wrong');
    result.innerHTML = `<div class="result-display result-wrong">正确答案：${correct}</div>`;
    addErrorAuto(selected+' (正确:'+correct+')', '数学', '三下复习', '计算错误');
  }
  state.progress.math.solved++;
  saveState();
  checkBadges();

  if(sess.answered >= sess.count){
    state.reviewCheck[reviewKey(sess.id)] = {correct:sess.correct, total:sess.count};
    const perfect = sess.correct === sess.count;
    const bonus = perfect ? 5 : 3;
    addStars(bonus);
    saveState();
    setTimeout(()=>{
      if(reviewSession !== sess) return;
      document.getElementById('mathGame').innerHTML = `
        <div class="result-display result-correct" style="font-size:16px;padding:18px">
          🎉 专项练习完成！<br>
          ${sess.correct} / ${sess.count} 题正确 ${perfect?'· 全对太棒了！':''}<br>
          完成奖励 +${bonus} ⭐
        </div>
        <div class="tc mt12">
          <button class="btn btn-primary" style="min-height:48px;padding:0 26px" onclick="exitReviewPractice()">返回清单，做下一项</button>
        </div>
      `;
      reviewSession = null;
      renderReviewList();
      const list = document.getElementById('reviewList');
      if(list) list.style.display = '';
    }, 1100);
  } else {
    setTimeout(()=>{
      if(reviewSession === sess) nextReviewProblem();
    }, 1200);
  }
}

/* ================================================================
   计算练习卷 — 每日一套（8无余数除法 + 8两位数乘法 + 9有余数除法）
   ================================================================ */
let worksheetData = null;

function genWorksheet(){
  const problems = [];
  // 一、无余数 三位数 ÷ 一位数（8题）：被除数必须是三位数且整除
  for(let i=0;i<8;i++){
    const b = Math.floor(Math.random()*8)+2; // 2-9
    const qmin = Math.ceil(100/b), qmax = Math.floor(999/b);
    const q = qmin + Math.floor(Math.random()*(qmax-qmin+1));
    problems.push({kind:'div', a:b*q, b, ans:q});
  }
  // 二、两位数 × 两位数（8题）
  for(let i=0;i<8;i++){
    const a = Math.floor(Math.random()*77)+13;
    const b = Math.floor(Math.random()*77)+13;
    problems.push({kind:'mul', a, b, ans:a*b});
  }
  // 三、有余数除法（9题）：被除数三位数，余数1~b-1
  for(let i=0;i<9;i++){
    const b = Math.floor(Math.random()*7)+3; // 3-9
    const r = Math.floor(Math.random()*(b-1))+1;
    const qmin = Math.ceil((100-r)/b);
    const q = qmin + Math.floor(Math.random()*60);
    problems.push({kind:'rem', a:b*q+r, b, ans:q, rem:r});
  }
  return problems;
}

function startWorksheet(){
  worksheetData = genWorksheet();
  worksheetData.submitted = false;
  const list = document.getElementById('reviewList');
  if(list) list.style.display = 'none';
  renderWorksheet();
}

function renderWorksheet(){
  const game = document.getElementById('mathGame');
  if(!game || !worksheetData) return;
  const sections = [
    {title:'一、无余数 三位数 ÷ 一位数（8 题）', from:0, to:8},
    {title:'二、两位数 × 两位数（8 题）', from:8, to:16},
    {title:'三、有余数除法（9 题）', from:16, to:25}
  ];
  let html = `
    <div class="tc" style="font-size:13px;color:var(--text2);margin-bottom:6px;display:flex;align-items:center;justify-content:center;gap:10px;flex-wrap:wrap">
      <span>📝 计算练习卷 · 共 25 题</span>
      <button class="btn" style="min-height:36px;padding:0 12px;font-size:12px" onclick="exitReviewPractice()">返回清单</button>
    </div>
    <div class="math-tip">✏️ 拿出草稿纸，一题一题列<b>竖式</b>算，算完把答案填进空格里，全部填完再交卷！算完记得验算哦。</div>
  `;
  sections.forEach(sec=>{
    html += `<div class="ws-section">${sec.title}</div><div class="ws-grid">`;
    for(let i=sec.from; i<sec.to; i++){
      const p = worksheetData[i];
      const n = i+1;
      if(p.kind === 'rem'){
        html += `<div class="ws-problem" id="wsp${n}">
          <span style="color:var(--text3)">${n}、</span>${p.a} ÷ ${p.b}＝
          <span class="ws-label">商</span><input id="wsi${n}a" inputmode="numeric" autocomplete="off">
          <span class="ws-label">余</span><input id="wsi${n}b" inputmode="numeric" autocomplete="off">
        </div>`;
      } else {
        const op = p.kind==='div' ? '÷' : '×';
        html += `<div class="ws-problem" id="wsp${n}">
          <span style="color:var(--text3)">${n}、</span>${p.a} ${op} ${p.b}＝
          <input class="wide" id="wsi${n}" inputmode="numeric" autocomplete="off">
        </div>`;
      }
    }
    html += `</div>`;
  });
  html += `
    <button class="btn btn-primary btn-block mt12" style="min-height:52px;font-size:17px" onclick="submitWorksheet()">✅ 交卷判分</button>
    <div id="wsResult"></div>
  `;
  game.innerHTML = html;
  game.scrollIntoView({behavior:'smooth', block:'start'});
}

function submitWorksheet(){
  if(!worksheetData || worksheetData.submitted){ showToast('这套卷子已经交过啦，点"再来一套"继续练'); return; }
  let correct = 0, unanswered = 0;
  const kname = {div:'三位数除以一位数', mul:'两位数乘两位数', rem:'有余数除法'};
  worksheetData.forEach((p, idx)=>{
    const n = idx+1;
    const el = document.getElementById('wsp'+n);
    if(!el) return;
    el.classList.remove('ok','bad');
    const oldMark = el.querySelector('.ws-mark');
    if(oldMark) oldMark.remove();
    if(p.kind === 'rem'){
      const qa = parseInt(document.getElementById('wsi'+n+'a').value, 10);
      const qb = parseInt(document.getElementById('wsi'+n+'b').value, 10);
      if(isNaN(qa) || isNaN(qb)){
        unanswered++;
        el.classList.add('bad');
        el.insertAdjacentHTML('beforeend', '<span class="ws-mark" style="color:var(--orange)">没填</span>');
      } else if(qa === p.ans && qb === p.rem){
        correct++;
        el.classList.add('ok');
        el.insertAdjacentHTML('beforeend', '<span class="ws-mark" style="color:var(--teal)">✓</span>');
      } else {
        el.classList.add('bad');
        el.insertAdjacentHTML('beforeend', `<span class="ws-mark" style="color:var(--red)">✗ ${p.ans}余${p.rem}</span>`);
        addErrorAuto(`${p.a}÷${p.b}（答:${qa}余${qb}）`, '数学', kname.rem, '计算错误');
      }
    } else {
      const q = parseInt(document.getElementById('wsi'+n).value, 10);
      const op = p.kind==='div' ? '÷' : '×';
      if(isNaN(q)){
        unanswered++;
        el.classList.add('bad');
        el.insertAdjacentHTML('beforeend', '<span class="ws-mark" style="color:var(--orange)">没填</span>');
      } else if(q === p.ans){
        correct++;
        el.classList.add('ok');
        el.insertAdjacentHTML('beforeend', '<span class="ws-mark" style="color:var(--teal)">✓</span>');
      } else {
        el.classList.add('bad');
        el.insertAdjacentHTML('beforeend', `<span class="ws-mark" style="color:var(--red)">✗ ${p.ans}</span>`);
        addErrorAuto(`${p.a}${op}${p.b}（答:${q}）`, '数学', kname[p.kind], '计算错误');
      }
    }
  });
  if(unanswered > 0){
    showToast(`还有 ${unanswered} 题没填完，填完再交卷哦`);
    return;
  }
  worksheetData.submitted = true;
  const total = 25;
  const perfect = correct === total;
  const stars = correct + (perfect ? 8 : (correct >= 20 ? 4 : 0));
  addStars(stars);
  state.reviewCheck[reviewKey('rv_worksheet')] = {correct, total};
  state.progress.math.solved += total;
  state.progress.math.correct += correct;
  saveState();
  checkBadges();
  renderReviewList();
  document.getElementById('wsResult').innerHTML = `
    <div class="result-display result-correct" style="font-size:16px;padding:16px">
      🎉 交卷完成！答对 ${correct} / ${total} 题${perfect ? ' · 满分卷，太厉害了！' : correct >= 20 ? ' · 超过80分，很棒！' : ' · 错题已记入错题本，明天再战！'}<br>
      获得 ${stars} 颗星 ⭐
    </div>
    <div class="tc mt12" style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
      <button class="btn btn-primary" style="min-height:48px;padding:0 22px" onclick="startWorksheet()">📄 再来一套</button>
      <button class="btn" style="min-height:48px;padding:0 22px" onclick="exitReviewPractice()">返回清单</button>
    </div>
  `;
  document.getElementById('wsResult').scrollIntoView({behavior:'smooth', block:'center'});
}

const mathTips = {
  division:'💡 <b>三位数÷一位数</b>：从百位除起，百位不够除就看前两位；除到哪一位，商就写在那一位上，余数必须比除数小。',
  mixed:'💡 <b>运算顺序</b>：先乘除后加减，有括号先算括号里的。',
  multi:'💡 <b>乘法口诀</b>是三年级数学的地基，背熟它，乘除法都不怕！',
  bigadd:'💡 <b>万以内加减法</b>：相同数位对齐，从个位算起，满十进一、退一当十。',
  twomulti:'💡 <b>两位数乘两位数</b>：先用第二个乘数个位去乘，再用十位去乘（积错一位），两层相加。',
  divoral:'💡 <b>除法口算</b>：先不看被除数末尾的0，用口诀算，再把0补回来。如 240÷6，想 24÷6=4，答案是40。',
  ymd:'💡 <b>大月31天</b>：1、3、5、7、8、10、12月（7、8月连续）；<b>小月30天</b>：4、6、9、11月；2月平年28天、闰年29天。',
  time:'💡 <b>经过时间</b> = 结束时刻 − 开始时刻。下午的时间要加12换成24时计时法再算。',
  decimal:'💡 <b>小数初步</b>：1元=10角，1角=0.1元。比较小数先比整数部分，再一位一位比小数部分。',
  fraction:'💡 <b>同分母分数</b>相加减：分母不变，只把分子相加减。',
  money:'💡 <b>总价 = 单价 × 数量</b>。算钱时注意单位"元"，别忘了写哦！',
  weight:'💡 <b>1吨 = 1000千克，1千克 = 1000克</b>。吨称重物（大象、卡车），克称轻物（硬币、橡皮）。',
  area:'💡 <b>长方形</b>：周长=(长+宽)×2，面积=长×宽；<b>正方形</b>：周长=边长×4，面积=边长×边长。周长一条线，面积一整片！',
  remainder:'💡 <b>有余数除法</b>：余数一定要比除数小！验算：商×除数+余数=被除数。',
  bignum:'📖 <b>四年级新知识</b>：从右边起，个级是个、十、百、千；万级是万、十万、百万、千万；再往上是亿。每级末尾的0都不读，中间连续几个0只读一个零。',
  hectare:'📖 <b>四年级新知识</b>：边长100米的正方形面积是1公顷；1公顷=10000平方米，1平方千米=100公顷=1000000平方米。',
  threemulti:'📖 <b>四年级新知识</b>：三位数乘两位数，用两位数的个位和十位分别去乘三位数，第二层积要错位，最后两层相加。',
  twodiv:'📖 <b>四年级新知识</b>：除数是两位数，先看被除数前两位，前两位不够除就看前三位；商要写在对应的数位上。',
  angle:'📖 <b>四年级新知识</b>：角的大小看两边张开的程度，与边的长短无关。把半圆平均分成180份，每份是1°。',
  quad:'📖 <b>四年级新知识</b>：平行四边形两组对边分别平行且相等；梯形只有一组对边平行。长方形、正方形都是特殊的平行四边形。',
  decadd:'💡 <b>小数加减</b>：小数点对齐（数位对齐），按整数加减法算，结果别忘了点小数点。如 1.2 + 0.7 = 1.9。',
  bracket:'💡 <b>脱式计算</b>：有括号先算括号里的；没有括号先乘除后加减，同级运算从左往右算。写一步算一步，等号对齐。',
  areaword:'💡 <b>长方形面积=长×宽，正方形面积=边长×边长</b>。先看清题目问的是"面积"（一整片）还是"周长"（一条线），别混！',
  perimvsarea:'💡 <b>周长一条线，面积一整片</b>：周长是围绕一圈的长度（单位：米），面积是面的大小（单位：平方米）。',
  areaunit:'💡 <b>相邻面积单位进率是100</b>：1平方米=100平方分米，1平方分米=100平方厘米。大化小乘100，小化大除以100。',
  clock24:'💡 <b>24时计时法</b>：下午、晚上的时刻加12（如下午3时→15时）；反过来减12（如20时→晚上8时）。上午凌晨不用变。',
  chainmul:'💡 <b>连乘连除</b>：想清楚先算什么、再算什么，一步一步列式。连乘求总数，连除把总数平均分。',
  guione:'💡 <b>归一问题</b>先用总量÷份数求出"一个是多少"；<b>归总问题</b>先求出总量，再重新分配。'
};

/* 字符串答案的选项去重补齐（防死循环：最多尝试50次） */
function padOptions(options, ans){
  const out = [...new Set(options)];
  let guard = 0;
  while(out.length < 4 && guard < 50){
    guard++;
    const m = String(ans).match(/-?\d+(\.\d+)?/);
    if(!m) break;
    const num = parseFloat(m[0]);
    const delta = [1,-1,2,-2,10,-10,3,-3][Math.floor(Math.random()*8)];
    if(num+delta > 0){
      const cand = String(ans).replace(m[0], String(num+delta));
      if(!out.includes(cand)) out.push(cand);
    }
  }
  return out;
}

function genMathProblem(type){
  let a, b, q, ans, options;
  
  if(type === 'division'){
    b = Math.floor(Math.random()*7)+2;          // 除数 2-8
    const result = Math.floor(Math.random()*90)+30; // 商 30-119
    a = b * result;
    q = a + ' ÷ ' + b + ' = ?';
    ans = result;
    options = [ans];
    const deltas = [10,-10,1,-1,11,-9,9,-11,20,-20].sort(()=>Math.random()-0.5);
    for(const d of deltas){
      if(options.length>=4) break;
      if(ans+d>0 && !options.includes(ans+d)) options.push(ans+d);
    }
  }
  else if(type === 'mixed'){
    const ops = ['+','-','×','÷'];
    const op = ops[Math.floor(Math.random()*ops.length)];
    if(op==='+'){
      a = Math.floor(Math.random()*50)+10;
      b = Math.floor(Math.random()*50)+10;
      ans = a+b; q = a+' + '+b+' = ?';
    } else if(op==='-'){
      a = Math.floor(Math.random()*50)+30;
      b = Math.floor(Math.random()*a)+1;
      ans = a-b; q = a+' - '+b+' = ?';
    } else if(op==='×'){
      a = Math.floor(Math.random()*8)+2;
      b = Math.floor(Math.random()*8)+2;
      ans = a*b; q = a+' × '+b+' = ?';
    } else {
      b = Math.floor(Math.random()*8)+2;
      const r = Math.floor(Math.random()*9)+2;
      a = b*r; ans = r; q = a+' ÷ '+b+' = ?';
    }
  }
  else if(type === 'multi'){
    a = Math.floor(Math.random()*9)+2;
    b = Math.floor(Math.random()*9)+2;
    q = a+' × '+b+' = ?';
    ans = a*b;
  }
  else if(type === 'fraction'){
    const denom = Math.floor(Math.random()*5)+3;
    const num1 = Math.floor(Math.random()*(denom-1))+1;
    const num2 = Math.floor(Math.random()*(denom-1))+1;
    const sum = num1+num2;
    const whole = Math.floor(sum/denom);
    const rem = sum%denom;
    q = `${num1}/${denom} + ${num2}/${denom} = ?`;
    if(whole > 0){
      ans = `${whole}又${rem}/${denom}`;
    } else {
      ans = `${rem}/${denom}`;
    }
    // Generate options from a guaranteed-large candidate pool (no infinite loop)
    options = [ans];
    const cands = [];
    for(let w = Math.max(0,whole-1); w <= whole+2; w++){
      for(let r = 1; r < denom; r++){
        if(w === whole && r === rem) continue;
        cands.push(w > 0 ? `${w}又${r}/${denom}` : `${r}/${denom}`);
      }
    }
    cands.sort(()=>Math.random()-0.5);
    for(const c of cands){
      if(options.length >= 4) break;
      if(!options.includes(c)) options.push(c);
    }
  }
  else if(type === 'time'){
    const h1 = Math.floor(Math.random()*12)+1;
    const m1 = Math.floor(Math.random()*12)*5;
    const addMin = (Math.floor(Math.random()*4)+1)*15;
    let totalMin = h1*60+m1+addMin;
    const newH = Math.floor(totalMin/60)%12 || 12;
    const newM = totalMin%60;
    q = `${h1}时${m1}分 过 ${addMin}分钟后是几时几分？`;
    ans = `${newH}时${newM}分`;
    options = [ans];
    while(options.length<4){
      const wh = Math.floor(Math.random()*12)+1;
      const wm = Math.floor(Math.random()*12)*5;
      const wrong = `${wh}时${wm}分`;
      if(!options.includes(wrong)) options.push(wrong);
    }
  }
  else if(type === 'money'){
    const items = [
      {n:'铅笔',p:2},{n:'橡皮',p:3},{n:'尺子',p:5},{n:'本子',p:4},
      {n:'笔袋',p:15},{n:'水彩笔',p:25}
    ];
    const item = items[Math.floor(Math.random()*items.length)];
    const qty = Math.floor(Math.random()*5)+2;
    const total = item.p*qty;
    q = `一支${item.n}${item.p}元，买${qty}支需要多少元？`;
    ans = total+'元';
    options = [ans];
    while(options.length<4){
      const wrong = (total + (Math.floor(Math.random()*10)-5))+'元';
      if(!options.includes(wrong) && wrong !== '0元' && !wrong.startsWith('-')) options.push(wrong);
    }
  }
  else if(type === 'bigadd'){
    a = Math.floor(Math.random()*700)+200;
    b = Math.floor(Math.random()*700)+200;
    if(Math.random() > 0.5){ ans = a+b; q = a+' + '+b+' = ?'; }
    else { if(b>a){ const t=a; a=b; b=t; } ans = a-b; q = a+' - '+b+' = ?'; }
  }
  else if(type === 'twomulti'){
    a = Math.floor(Math.random()*77)+13;
    b = Math.floor(Math.random()*77)+13;
    q = a+' × '+b+' = ?';
    ans = a*b;
    options = [ans];
    // 常见错误模式的干扰项：进位忘加(±b)、第二层积错位(±10b)、抄错(±a)
    const cands = [ans+b, ans-b, ans+10*b, ans-10*b, ans+a, ans-a].sort(()=>Math.random()-0.5);
    for(const c of cands){
      if(options.length>=4) break;
      if(c>0 && !options.includes(c)) options.push(c);
    }
    while(options.length<4){
      const wrong = ans + (Math.floor(Math.random()*61)-30);
      if(wrong > 0 && !options.includes(wrong)) options.push(wrong);
    }
  }
  else if(type === 'divoral'){
    const mults = [10, 10, 100];
    const mult = mults[Math.floor(Math.random()*mults.length)];
    b = Math.floor(Math.random()*8)+2;
    const q0 = Math.floor(Math.random()*9)+2;
    a = b*q0*mult;
    q = a+' ÷ '+b+' = ?';
    ans = q0*mult;
    options = [ans];
    while(options.length<4){
      const wrong = ans + (Math.floor(Math.random()*11)-5)*10;
      if(wrong > 0 && !options.includes(wrong)) options.push(wrong);
    }
  }
  else if(type === 'ymd'){
    const pool = [
      {q:'一年有多少个月？',o:['12个月','10个月','11个月','24个月'],a:'12个月'},
      {q:'大月（31天的月份）一年有几个月？',o:['7个','6个','8个','5个'],a:'7个'},
      {q:'一年中连续的两个大月是？',o:['7月和8月','1月和2月','11月和12月','4月和5月'],a:'7月和8月'},
      {q:'平年2月有多少天？',o:['28天','29天','30天','31天'],a:'28天'},
      {q:'闰年2月有多少天？',o:['29天','28天','30天','31天'],a:'29天'},
      {q:'平年全年有多少天？',o:['365天','366天','364天','360天'],a:'365天'},
      {q:'一年有几个季度？',o:['4个','2个','3个','12个'],a:'4个'},
      {q:'下午3时用24时计时法是？',o:['15时','13时','14时','16时'],a:'15时'},
      {q:'晚上9时用24时计时法是？',o:['21时','19时','20时','22时'],a:'21时'},
      {q:'24时计时法的18时是下午几时？',o:['6时','8时','7时','5时'],a:'6时'},
      {q:'2024年2月有多少天？（2024÷4=506，是闰年）',o:['29天','28天','30天','31天'],a:'29天'},
      {q:'小华上午8:30到校，下午4:30放学，在校几小时？',o:['8小时','7小时','9小时','6小时'],a:'8小时'},
      {q:'教师节是几月几日？',o:['9月10日','6月1日','10月1日','5月1日'],a:'9月10日'},
      {q:'一场电影从19:30放到21:00，放映了多长时间？',o:['1小时30分','2小时','1小时','2小时30分'],a:'1小时30分'}
    ];
    const p = pool[Math.floor(Math.random()*pool.length)];
    q = p.q; ans = p.a; options = [...p.o];
  }
  else if(type === 'decimal'){
    const mode = Math.floor(Math.random()*3);
    if(mode === 0){
      const a1 = Math.floor(Math.random()*9)+1, a2 = Math.floor(Math.random()*9)+1;
      q = a1+'.'+a2+' 元是几元几角？';
      ans = a1+'元'+a2+'角';
      options = padOptions([ans, a2+'元'+a1+'角', (a1+1)+'元'+a2+'角', a1+'元'+(a2+2)+'角'], ans);
    } else if(mode === 1){
      const x = Math.floor(Math.random()*8)+1, y = Math.floor(Math.random()*8)+1;
      const s = x+y;
      q = '0.'+x+' + 0.'+y+' = ?';
      ans = s<10 ? '0.'+s : '1.'+(s-10);
      options = [ans];
      [s+1, s-1, s+2, s+3].forEach(n=>{
        const c = n<10 ? '0.'+n : '1.'+(n-10);
        if(options.length<4 && c !== ans && !options.includes(c)) options.push(c);
      });
    } else {
      let x = Math.floor(Math.random()*10), y = Math.floor(Math.random()*10);
      while(y === x) y = Math.floor(Math.random()*10);
      const m = Math.floor(Math.random()*8)+1;
      const v1 = m+'.'+x, v2 = m+'.'+y;
      q = v1+' 和 '+v2+' 哪个更大？';
      ans = x>y ? v1 : v2;
      options = [v1, v2, '一样大', '无法比较'];
    }
  }
  else if(type === 'weight'){
    const pool = [
      {q:'1千克等于多少克？',o:['1000克','100克','10克','500克'],a:'1000克'},
      {q:'1吨等于多少千克？',o:['1000千克','100千克','10千克','500千克'],a:'1000千克'},
      {q:'5000克等于多少千克？',o:['5千克','50千克','500千克','0.5千克'],a:'5千克'},
      {q:'3吨等于多少千克？',o:['3000千克','300千克','30千克','30000千克'],a:'3000千克'},
      {q:'2000千克等于多少吨？',o:['2吨','20吨','0.2吨','200吨'],a:'2吨'},
      {q:'一头大象约重多少？',o:['4吨','4千克','40克','400克'],a:'4吨'},
      {q:'一枚硬币约重多少？',o:['2克','2千克','2吨','200克'],a:'2克'},
      {q:'一个苹果约重多少？',o:['200克','2克','2千克','200千克'],a:'200克'},
      {q:'一袋大米重25千克，4袋重多少？',o:['100千克','50千克','75千克','125千克'],a:'100千克'},
      {q:'8千克 = ( )克？',o:['8000克','800克','80克','80000克'],a:'8000克'}
    ];
    const p = pool[Math.floor(Math.random()*pool.length)];
    q = p.q; ans = p.a; options = [...p.o];
  }
  else if(type === 'bigmulti'){
    a = Math.floor(Math.random()*80)+20;
    b = Math.floor(Math.random()*8)+2;
    q = a+' × '+b+' = ?';
    ans = a*b;
  }
  else if(type === 'remainder'){
    b = Math.floor(Math.random()*7)+2;            // 除数 2-8
    const quotient = Math.floor(Math.random()*70)+20; // 商 20-89
    const remainder = Math.floor(Math.random()*(b-1))+1; // 余数 1~b-1（保证有余数）
    a = b*quotient + remainder;
    q = a+' ÷ '+b+' = ?余?';
    ans = `${quotient}余${remainder}`;
    options = [ans];
    const cands = [];
    for(const dq of [1,-1,2]){
      for(let rr=1; rr<b; rr++){
        if(quotient+dq>0 && !(dq===0&&rr===remainder)) cands.push(`${quotient+dq}余${rr}`);
      }
    }
    cands.sort(()=>Math.random()-0.5);
    for(const c of cands){
      if(options.length>=4) break;
      if(!options.includes(c)) options.push(c);
    }
  }
  else if(type === 'area'){
    const shapes = ['正方形','长方形'];
    const shape = shapes[Math.floor(Math.random()*shapes.length)];
    if(shape === '正方形'){
      const side = Math.floor(Math.random()*9)+2;
      const askType = Math.random() > 0.5 ? '周长' : '面积';
      if(askType === '周长'){
        q = `正方形边长${side}cm，周长是多少？`;
        ans = (side*4)+'cm';
      } else {
        q = `正方形边长${side}cm，面积是多少？`;
        ans = (side*side)+'cm²';
      }
    } else {
      const l = Math.floor(Math.random()*9)+3;
      const w = Math.floor(Math.random()*l)+2;
      const askType = Math.random() > 0.5 ? '周长' : '面积';
      if(askType === '周长'){
        q = `长方形长${l}cm宽${w}cm，周长是多少？`;
        ans = ((l+w)*2)+'cm';
      } else {
        q = `长方形长${l}cm宽${w}cm，面积是多少？`;
        ans = (l*w)+'cm²';
      }
    }
    options = [ans];
    const num = parseInt(ans);
    while(options.length<4){
      const wrong = (num + (Math.floor(Math.random()*10)-5)) + ans.replace(/\d+/g,'');
      if(!options.includes(wrong) && wrong !== ans) options.push(wrong);
    }
  }
  else if(type === 'bignum'){
    const pool = [
      {q:'从右边起，第五位是什么数位？',o:['万位','千位','十万位','百位'],a:'万位'},
      {q:'从右边起，第九位是什么数位？',o:['亿位','千万位','百万位','万位'],a:'亿位'},
      {q:'10个一万是多少？',o:['十万','一百万','一千万','一万'],a:'十万'},
      {q:'10个十万是多少？',o:['一百万','一千万','十万','一亿'],a:'一百万'},
      {q:'10个一千万是多少？',o:['一亿','一千万','十万','一百万'],a:'一亿'},
      {q:'最大的五位数是多少？',o:['99999','100000','9999','10000'],a:'99999'},
      {q:'最小的六位数是多少？',o:['100000','99999','100001','10000'],a:'100000'},
      {q:'380000用"万"作单位是多少？',o:['38万','380万','3万','308万'],a:'38万'},
      {q:'读数时，每级末尾的0要读吗？',o:['都不读','都要读','只读一个','读两个'],a:'都不读'},
      {q:'读数时中间连续的几个0，怎么读？',o:['只读一个零','全部读出来','都不读','读一半'],a:'只读一个零'},
      {q:'50600040 读作？',o:['五千零六十万零四十','五千六十万零四十','五千零六十万四十','五百零六十万零四十'],a:'五千零六十万零四十'},
      {q:'99999 和 100001 哪个大？',o:['100001大','99999大','一样大','无法比较'],a:'100001大'},
      {q:'用1、2、3、0、0组成最大的五位数是？',o:['32100','12300','30210','32001'],a:'32100'},
      {q:'一个数由3个百万和5个万组成，这个数是？',o:['3050000','3500000','3005000','305000'],a:'3050000'}
    ];
    const p = pool[Math.floor(Math.random()*pool.length)];
    q = p.q; ans = p.a; options = [...p.o];
  }
  else if(type === 'threemulti'){
    a = Math.floor(Math.random()*300)+100;
    b = Math.floor(Math.random()*38)+11;
    q = a+' × '+b+' = ?';
    ans = a*b;
    options = [ans];
    [ans+a, ans-b, ans+b, ans-a, ans+10*b].forEach(c=>{
      if(options.length<4 && c>0 && !options.includes(c)) options.push(c);
    });
    while(options.length<4){
      const wrong = ans + (Math.floor(Math.random()*200)-100);
      if(wrong>0 && !options.includes(wrong)) options.push(wrong);
    }
  }
  else if(type === 'twodiv'){
    const oral = Math.random() > 0.4;
    if(oral){
      const divs = [20,30,40,50,60,70,80,90];
      b = divs[Math.floor(Math.random()*divs.length)];
      const q0 = Math.floor(Math.random()*8)+2;
      a = b*q0;
      q = a+' ÷ '+b+' = ?';
      ans = q0;
      options = [ans];
      while(options.length<4){
        const wrong = ans + (Math.floor(Math.random()*7)-3);
        if(wrong > 0 && !options.includes(wrong)) options.push(wrong);
      }
    } else {
      const divs = [20,30,40,50,60,70,80];
      b = divs[Math.floor(Math.random()*divs.length)];
      const q0 = Math.floor(Math.random()*8)+2;
      const noise = Math.floor(Math.random()*(b-5))+1;
      a = b*q0 + noise;
      q = a+' ÷ '+b+' ≈ ?（估算）';
      ans = '约'+q0;
      options = [ans];
      [q0+1, q0-1, q0+2, q0-2].forEach(n=>{
        const c = '约'+n;
        if(options.length<4 && n>0 && !options.includes(c)) options.push(c);
      });
    }
  }
  else if(type === 'hectare'){
    const pool = [
      {q:'1公顷等于多少平方米？',o:['10000平方米','1000平方米','100平方米','100000平方米'],a:'10000平方米'},
      {q:'1平方千米等于多少公顷？',o:['100公顷','1000公顷','10公顷','10000公顷'],a:'100公顷'},
      {q:'1平方千米等于多少平方米？',o:['1000000平方米','10000平方米','100000平方米','1000平方米'],a:'1000000平方米'},
      {q:'边长多少米的正方形，面积是1公顷？',o:['100米','1000米','10米','50米'],a:'100米'},
      {q:'边长1000米的正方形，面积是？',o:['1平方千米','1公顷','1000平方米','1平方米'],a:'1平方千米'},
      {q:'测量学校操场面积，用哪个单位合适？',o:['公顷','平方厘米','平方米','平方千米'],a:'公顷'},
      {q:'测量我国的国土面积，用哪个单位合适？',o:['平方千米','公顷','平方米','平方分米'],a:'平方千米'},
      {q:'5公顷 = ( )平方米？',o:['50000平方米','5000平方米','500平方米','500000平方米'],a:'50000平方米'},
      {q:'3000000平方米 = ( )平方千米？',o:['3平方千米','30平方千米','300平方千米','0.3平方千米'],a:'3平方千米'},
      {q:'北京天安门广场面积约40( )',o:['公顷','平方米','平方千米','平方分米'],a:'公顷'}
    ];
    const p = pool[Math.floor(Math.random()*pool.length)];
    q = p.q; ans = p.a; options = [...p.o];
  }
  else if(type === 'quad'){
    const pool = [
      {q:'平行四边形有几组对边平行？',o:['2组','1组','3组','0组'],a:'2组'},
      {q:'梯形有几组对边平行？',o:['1组','2组','0组','3组'],a:'1组'},
      {q:'长方形是特殊的什么图形？',o:['平行四边形','梯形','三角形','圆'],a:'平行四边形'},
      {q:'正方形是特殊的什么图形？',o:['平行四边形','梯形','五边形','圆'],a:'平行四边形'},
      {q:'四边形的内角和是多少度？',o:['360°','180°','90°','540°'],a:'360°'},
      {q:'两腰相等的梯形叫什么梯形？',o:['等腰梯形','直角梯形','普通梯形','平行梯形'],a:'等腰梯形'},
      {q:'平行四边形容易变形，这是它的什么性质？',o:['不稳定性','稳定性','对称性','旋转性'],a:'不稳定性'},
      {q:'三角形具有什么特性？',o:['稳定性','不稳定性','对称性','可折叠性'],a:'稳定性'},
      {q:'只有一组对边平行的四边形是？',o:['梯形','平行四边形','长方形','正方形'],a:'梯形'},
      {q:'从平行四边形一条边上一点到对边的垂直线段，叫它的什么？',o:['高','长','宽','对角线'],a:'高'}
    ];
    const p = pool[Math.floor(Math.random()*pool.length)];
    q = p.q; ans = p.a; options = [...p.o];
  }
  else if(type === 'angle'){
    const pool = [
      {q:'直角是多少度？',o:['90°','45°','180°','60°'],a:'90°'},
      {q:'平角是多少度？',o:['180°','90°','360°','120°'],a:'180°'},
      {q:'周角是多少度？',o:['360°','180°','270°','90°'],a:'360°'},
      {q:'锐角是多少度的角？',o:['小于90°','大于90°','等于90°','大于180°'],a:'小于90°'},
      {q:'钝角是多少度的角？',o:['大于90°小于180°','小于90°','等于90°','大于180°'],a:'大于90°小于180°'},
      {q:'1周角 = 几个平角？',o:['2个','3个','4个','1个'],a:'2个'},
      {q:'1平角 = 几个直角？',o:['2个','3个','4个','1个'],a:'2个'},
      {q:'角的大小与边的长短有关吗？',o:['无关，只与两边张开大小有关','有关，边越长角越大','有时有关','都有关系'],a:'无关，只与两边张开大小有关'},
      {q:'用量角器量角，中心点要对准角的？',o:['顶点','一条边','边的中间','任意位置'],a:'顶点'},
      {q:'把半圆平均分成180份，每一份是多少度？',o:['1°','10°','5°','2°'],a:'1°'},
      {q:'时钟3时整，时针和分针的夹角是多少度？',o:['90°','60°','120°','30°'],a:'90°'},
      {q:'一个45°的角放在放大镜下看，是多少度？',o:['45°','90°','22.5°','180°'],a:'45°'}
    ];
    const p = pool[Math.floor(Math.random()*pool.length)];
    q = p.q; ans = p.a; options = [...p.o];
  }
  
  else if(type === 'decadd'){
    const x = Math.floor(Math.random()*90)+10;  // 十分位 1.0-9.9
    const y = Math.floor(Math.random()*90)+10;
    const isAdd = Math.random() < 0.55;
    if(isAdd){
      const sum = x+y;
      q = (x/10)+' + '+(y/10)+' = ?';
      ans = String(+(sum/10).toFixed(1));
    } else {
      const big = Math.max(x,y), small = Math.min(x,y);
      q = (big/10)+' - '+(small/10)+' = ?';
      ans = String(+((big-small)/10).toFixed(1));
    }
    const base = Math.round(parseFloat(ans)*10);
    const cands = [base+1, base-1, base+10, base-10, base+2, base-2, base+9, base-9].sort(()=>Math.random()-0.5);
    options = [ans];
    for(const c of cands){
      if(options.length>=4) break;
      if(c>0){
        const v = String(+(c/10).toFixed(1));
        if(!options.includes(v)) options.push(v);
      }
    }
  }
  else if(type === 'bracket'){
    const form = Math.floor(Math.random()*4);
    if(form === 0){
      const a = Math.floor(Math.random()*40)+12;
      const b = Math.floor(Math.random()*40)+12;
      const c = Math.floor(Math.random()*8)+2;
      q = `(${a} + ${b}) × ${c} = ?`;
      ans = (a+b)*c;
    } else if(form === 1){
      const a = Math.floor(Math.random()*60)+40;
      const b = Math.floor(Math.random()*30)+10;
      const c = Math.floor(Math.random()*8)+2;
      const sub = Math.max(11, Math.min(a-b, a-10));
      q = `(${a} - ${sub}) × ${c} = ?`;
      ans = (a-sub)*c;
    } else if(form === 2){
      const c1 = Math.floor(Math.random()*4)+2;
      const c2 = Math.floor(Math.random()*4)+2;
      const quot = Math.floor(Math.random()*20)+5;
      q = `${c1*c2*quot} ÷ (${c1} × ${c2}) = ?`;
      ans = quot;
    } else {
      const c = Math.floor(Math.random()*6)+2;
      const q1 = Math.floor(Math.random()*20)+5;
      const q2 = Math.floor(Math.random()*15)+3;
      q = `(${q1*c} + ${q2*c}) ÷ ${c} = ?`;
      ans = q1+q2;
    }
    options = [ans];
    const cands = [ans+1, ans-1, ans+10, ans-10, ans+2, ans-2, ans+5, ans-5].sort(()=>Math.random()-0.5);
    for(const c of cands){
      if(options.length>=4) break;
      if(c>0 && !options.includes(c)) options.push(c);
    }
  }
  else if(type === 'areaword'){
    const mode = Math.floor(Math.random()*3);
    if(mode === 0){
      const l = Math.floor(Math.random()*15)+6;
      const w = Math.floor(Math.random()*8)+3;
      q = `一块长方形菜地，长${l}米，宽${w}米，它的面积是多少平方米？`;
      ans = (l*w)+'平方米';
      options = padOptions([ans, ((l+w)*2)+'平方米', (l*w+l)+'平方米', (l*w+2)+'平方米'], ans);
    } else if(mode === 1){
      const l = Math.floor(Math.random()*15)+6;
      const w = Math.floor(Math.random()*8)+3;
      q = `一块长方形草坪面积是${l*w}平方米，长是${l}米，宽是多少米？`;
      ans = w+'米';
      options = padOptions([ans, (w+1)+'米', (l+1)+'米', (w+2)+'米'], ans);
    } else {
      const s = Math.floor(Math.random()*12)+4;
      q = `一个正方形花坛边长${s}米，它的面积是多少平方米？`;
      ans = (s*s)+'平方米';
      options = padOptions([ans, (s*4)+'平方米', (s*2)+'平方米', (s*s+s)+'平方米'], ans);
    }
  }
  else if(type === 'perimvsarea'){
    const mode = Math.floor(Math.random()*2);
    if(mode === 0){
      const l = Math.floor(Math.random()*12)+5;
      const w = Math.floor(Math.random()*6)+3;
      const perim = (l+w)*2, area = l*w;
      if(Math.random() < 0.5){
        q = `长方形菜地长${l}米、宽${w}米。围着菜地走一圈，一共走了多少米？`;
        ans = perim+'米（周长）';
        options = padOptions([ans, area+'米（面积）', (perim+l)+'米（周长）', (area+w)+'米（面积）'], ans);
      } else {
        q = `长方形菜地长${l}米、宽${w}米。这块菜地占地多少？`;
        ans = area+'平方米（面积）';
        options = padOptions([ans, perim+'平方米（周长）', (area*2)+'平方米（面积）', (l+w)+'平方米（面积）'], ans);
      }
    } else {
      const pool = [
        {q:'求一圈篱笆有多长，是求图形的？',o:['周长','面积','边长','角度'],a:'周长'},
        {q:'求地面要铺多大的地毯，是求图形的？',o:['面积','周长','边长','对角线'],a:'面积'},
        {q:'周长和面积的区别，说法正确的是？',o:['周长是长度，面积是面的大小','都是长度','都是面的大小','没有区别'],a:'周长是长度，面积是面的大小'},
        {q:'正方形边长4米，下面说法对的是？',o:['周长16米，面积16平方米','周长和面积都是16','周长8米，面积8平方米','周长16平方米，面积16米'],a:'周长16米，面积16平方米'},
        {q:'两个长方形周长相等，它们的面积？',o:['不一定相等','一定相等','一定不相等','无法比较'],a:'不一定相等'},
        {q:'长方形拉成平行四边形（边不变），什么变了？',o:['面积变小，周长不变','周长变小，面积不变','都没变','都变了'],a:'面积变小，周长不变'}
      ];
      const p = pool[Math.floor(Math.random()*pool.length)];
      q = p.q; ans = p.a; options = [...p.o];
    }
  }
  else if(type === 'areaunit'){
    const pool = [
      {q:'1平方分米 = ( )平方厘米',o:['100','10','1000','10000'],a:'100'},
      {q:'1平方米 = ( )平方分米',o:['100','10','1000','10000'],a:'100'},
      {q:'1平方米 = ( )平方厘米',o:['10000','1000','100','100000'],a:'10000'},
      {q:'5平方米 = ( )平方分米',o:['500','50','5000','505'],a:'500'},
      {q:'300平方厘米 = ( )平方分米',o:['3','30','0.3','3000'],a:'3'},
      {q:'700平方分米 = ( )平方米',o:['7','70','0.7','7000'],a:'7'},
      {q:'20平方分米 = ( )平方厘米',o:['2000','200','20000','20'],a:'2000'},
      {q:'2平方米 = ( )平方厘米',o:['20000','2000','200','200000'],a:'20000'},
      {q:'600平方分米 = ( )平方厘米',o:['60000','6000','600','600000'],a:'60000'},
      {q:'边长1分米的正方形，面积是( )平方厘米',o:['100','10','1000','1'],a:'100'},
      {q:'测量教室地面的大小，用哪个单位最合适？',o:['平方米','平方厘米','平方分米','公顷'],a:'平方米'},
      {q:'测量橡皮一个面的面积，用哪个单位最合适？',o:['平方厘米','平方米','平方分米','公顷'],a:'平方厘米'},
      {q:'8平方米 = ( )平方分米',o:['800','80','8000','8'],a:'800'},
      {q:'900平方厘米 = ( )平方分米',o:['9','90','9000','0.9'],a:'9'}
    ];
    const p = pool[Math.floor(Math.random()*pool.length)];
    q = p.q; ans = p.a; options = [...p.o];
  }
  else if(type === 'clock24'){
    const h = Math.floor(Math.random()*9)+1; // 1-9
    const r = Math.random();
    if(r < 0.35){
      q = `上午${h}时，用24时计时法表示是？`;
      ans = h+'时';
      options = padOptions([ans, (h+12)+'时', (h+1)+'时', (h+2)+'时'], ans);
    } else if(r < 0.7){
      const pm = ['下午','傍晚','晚上'][Math.floor(Math.random()*3)];
      q = `${pm}${h}时，用24时计时法表示是？`;
      ans = (h+12)+'时';
      options = padOptions([ans, h+'时', (h+13)+'时', (h+11)+'时'], ans);
    } else {
      q = `24时计时法的${h+12}时，是下午几时？`;
      ans = h+'时';
      options = padOptions([ans, (h+12)+'时', (h+1)+'时', (h-1>0?h-1:h+2)+'时'], ans);
    }
  }
  else if(type === 'chainmul'){
    const names = ['牛奶','矿泉水','故事书','口罩','苹果','练习本'];
    const n = names[Math.floor(Math.random()*names.length)];
    const boxes = Math.floor(Math.random()*5)+3;
    const crates = Math.floor(Math.random()*4)+2;
    const per = Math.floor(Math.random()*8)+6;
    if(Math.random() < 0.5){
      const total = boxes*crates*per;
      q = `超市运来${crates}箱${n}，每箱${boxes}盒，每盒${per}个，一共运来多少个？`;
      ans = total+'个';
      options = padOptions([ans, (boxes+crates)*per+'个', boxes*crates+per+'个', (total+per)+'个'], ans);
    } else {
      const total = boxes*crates*per;
      q = `学校买来${total}个${n}，平均分给${crates}个年级，每个年级有${boxes}个班，每个班分到多少个？`;
      ans = per+'个';
      options = padOptions([ans, (total/crates)+'个', (total/boxes)+'个', (per+1)+'个'], ans);
    }
  }
  else if(type === 'guione'){
    const items = [
      {n:'书包',p:'个'},{n:'钢笔',p:'支'},{n:'笔记本',p:'本'},
      {n:'跳绳',p:'根'},{n:'水杯',p:'个'},{n:'铅笔盒',p:'个'}
    ];
    const it = items[Math.floor(Math.random()*items.length)];
    const a = Math.floor(Math.random()*4)+3;
    const b = Math.floor(Math.random()*5)+4;
    const unit = Math.floor(Math.random()*25)+15;
    const isGuiYi = Math.random() < 0.55;
    if(isGuiYi){
      q = `买${a}${it.p}${it.n}要${a*unit}元，买${b}${it.p}同样的${it.n}要多少元？`;
      ans = (b*unit)+'元';
      options = padOptions([ans, (a*unit+b)+'元', (a*unit+a)+'元', (b*unit+unit)+'元'], ans);
    } else {
      const total = a*b;
      const divisors = [];
      for(let d=3; d<=8; d++){ if(total%d===0 && d!==a) divisors.push(d); }
      if(divisors.length === 0){
        // 兜底：退化成归一题，保证永有解
        q = `买${a}${it.p}${it.n}要${a*unit}元，买${b}${it.p}同样的${it.n}要多少元？`;
        ans = (b*unit)+'元';
        options = padOptions([ans, (a*unit+b)+'元', (a*unit+a)+'元', (b*unit+unit)+'元'], ans);
      } else {
        const c = divisors[Math.floor(Math.random()*divisors.length)];
        q = `花坛里每行摆${a}盆花，摆了${b}行。如果改摆成每行${c}盆，能摆多少行？`;
        ans = (total/c)+'行';
        options = padOptions([ans, (total/a)+'行', (total-a)+'行', (total/c+1)+'行'], ans);
      }
    }
  }

  if(!options){
    options = [ans];
    while(options.length < 4){
      let wrong = ans + (Math.floor(Math.random()*10)-5);
      if(typeof ans === 'number' && wrong > 0 && !options.includes(wrong)){
        options.push(wrong);
      } else if(typeof ans === 'string'){
        const numMatch = ans.match(/\d+/);
        if(numMatch){
          const num = parseInt(numMatch[0]);
          const wrongNum = num + (Math.floor(Math.random()*10)-5);
          if(wrongNum > 0){
            const wrong = ans.replace(/\d+/, wrongNum);
            if(!options.includes(wrong)) options.push(wrong);
          }
        }
      }
      if(options.length >= 20) break; // safety
    }
  }
  
  options.sort(()=>Math.random()-0.5);
  return {q, ans, options};
}

function nextMathProblem(type){
  const game = document.getElementById('mathGame');
  if(!game) return;
  const problem = genMathProblem(type);
  
  game.innerHTML = `
    ${mathTips[type] ? `<div class="math-tip">${mathTips[type]}</div>` : ''}
    <div class="math-question">${problem.q}</div>
    <div class="math-options">
      ${problem.options.map(o=>`<div class="math-option" onclick="checkMathAnswer('${String(o).replace(/'/g,"\\'")}', '${String(problem.ans).replace(/'/g,"\\'")}', this, '${type}')">${o}</div>`).join('')}
    </div>
    <div class="math-stat mt12">
      <div class="stat-item"><div class="stat-num" style="color:var(--cyan)" id="mathScoreDisplay">${mathScore}</div><div class="stat-label">答对</div></div>
      <div class="stat-item"><div class="stat-num" style="color:var(--orange)" id="mathTotalDisplay">${mathTotal}</div><div class="stat-label">总题数</div></div>
    </div>
    <div id="mathResult"></div>
  `;
}

function checkMathAnswer(selected, correct, btn, type){
  mathTotal++;
  const result = document.getElementById('mathResult');
  if(selected === correct){
    mathScore++;
    state.progress.math.correct++;
    addStars(1);
    btn.classList.add('correct');
    result.innerHTML = '<div class="result-display result-correct">答对了！+1 ⭐</div>';
  } else {
    btn.classList.add('wrong');
    result.innerHTML = `<div class="result-display result-wrong">正确答案：${correct}</div>`;
    addErrorAuto(selected+' (正确:'+correct+')', '数学', type, '计算错误');
  }
  state.progress.math.solved++;
  
  // Update displays
  const scoreEl = document.getElementById('mathScoreDisplay');
  const totalEl = document.getElementById('mathTotalDisplay');
  const timedScoreEl = document.getElementById('timedScore');
  const timedTotalEl = document.getElementById('timedTotal');
  if(scoreEl) scoreEl.textContent = mathScore;
  if(totalEl) totalEl.textContent = mathTotal;
  if(timedScoreEl) timedScoreEl.textContent = mathScore;
  if(timedTotalEl) timedTotalEl.textContent = mathTotal;
  
  saveState();
  checkBadges();
  
  if(!mathTimedTimer || mathTimedSeconds > 0){
    setTimeout(()=>{
      if(reviewSession){ nextReviewProblem(); }
      else if(mathTimedTimer){ nextTimedProblem(); }
      else { nextMathProblem(type); }
    }, 1200);
  }
}

/* ================================================================
   THINKING MODULE
   ================================================================ */
let thinkScore = 0;
let thinkTotal = 0;
let thinkQueue = [];

function renderThinking(){
  thinkScore = 0;
  thinkTotal = 0;
  thinkQueue = [...thinkingQuestions].sort(()=>Math.random()-0.5);
  nextThinkingQuestion();
}

function nextThinkingQuestion(){
  if(thinkQueue.length === 0){
    thinkQueue = [...thinkingQuestions].sort(()=>Math.random()-0.5);
  }
  const q = thinkQueue.shift();
  
  const typeNames = {1:'找规律',2:'图形推理',3:'应用题',4:'易错辨析'};
  const typeClass = 'think-type-'+q.type;
  
  document.getElementById('thinkingContent').innerHTML = `
    <div class="think-type ${typeClass}">${typeNames[q.type]}</div>
    <div class="think-q">${q.q}</div>
    <div class="think-options">
      ${q.options.map((o,i)=>`<button class="think-option" onclick="checkThinkingAnswer(${i}, ${q.answer}, '${q.exp.replace(/'/g,"\\'")}', this)">${o}</button>`).join('')}
    </div>
    <div class="math-stat mt12">
      <div class="stat-item"><div class="stat-num" style="color:var(--purple)" id="thinkScoreDisplay">${thinkScore}</div><div class="stat-label">答对</div></div>
      <div class="stat-item"><div class="stat-num" style="color:var(--orange)" id="thinkTotalDisplay">${thinkTotal}</div><div class="stat-label">总题数</div></div>
    </div>
    <div id="thinkResult"></div>
  `;
}

function checkThinkingAnswer(selected, correct, exp, btn){
  thinkTotal++;
  const result = document.getElementById('thinkResult');
  if(selected === correct){
    thinkScore++;
    state.progress.thinking.correct++;
    addStars(2);
    btn.classList.add('correct');
    result.innerHTML = `<div class="result-display result-correct">太棒了！+2 ⭐<br><span style="font-size:13px">解析：${exp}</span></div>`;
  } else {
    btn.classList.add('wrong');
    // Highlight correct
    const options = document.querySelectorAll('.think-option');
    if(options[correct]) options[correct].classList.add('correct');
    result.innerHTML = `<div class="result-display result-wrong">正确答案：${options[correct]?options[correct].textContent:''}<br><span style="font-size:13px">解析：${exp}</span></div>`;
    addErrorAuto(document.querySelector('.think-q').textContent, '思维', '思维训练', exp);
  }
  state.progress.thinking.solved++;
  saveState();
  checkBadges();
  setTimeout(nextThinkingQuestion, 2500);
}

/* ================================================================
   ADVENTURE MODULE
   ================================================================ */
let advLevel = 1;
let advCorrect = 0;
let advQuestions = [];

function renderAdventure(){
  advLevel = 1;
  advCorrect = 0;
  document.getElementById('advLevel').textContent = advLevel;
  document.getElementById('advCorrect').textContent = advCorrect;
  document.getElementById('advTotal').textContent = state.progress.adventure.levels;
  document.getElementById('advStartBtn').style.display = '';
  document.getElementById('advContent').innerHTML = '<div class="tc" style="padding:30px;color:var(--text2)">点击"开始闯关"混合抽取英语、语文、数学、思维题！</div>';
  renderBadgeWall('badgeWall');
}

function startAdventure(){
  advCorrect = 0;
  document.getElementById('advStartBtn').style.display = 'none';
  document.getElementById('advCorrect').textContent = 0;
  nextAdvQuestion();
}

function nextAdvQuestion(){
  const types = ['math','english','poetry','thinking'];
  const type = types[Math.floor(Math.random()*types.length)];
  const content = document.getElementById('advContent');
  
  if(type === 'math'){
    const pool = ['twomulti','division','bracket','decadd','remainder','threemulti','guione'];
    const p = genMathProblem(pool[Math.floor(Math.random()*pool.length)]);
    content.innerHTML = `
      <div class="tag think-type think-type-1">数学题</div>
      <div class="math-question">${p.q}</div>
      <div class="math-options">
        ${p.options.map((o,i)=>`<div class="math-option" onclick="checkAdvAnswer('${String(o).replace(/'/g,"\\'")}', '${String(p.ans).replace(/'/g,"\\'")}', this)">${o}</div>`).join('')}
      </div>
      <div id="advResult"></div>
    `;
  }
  else if(type === 'english'){
    const allWords = [];
    Object.values(englishWords).forEach(arr=>arr.forEach(w=>allWords.push(w)));
    const w = allWords[Math.floor(Math.random()*allWords.length)];
    const wrongWords = allWords.filter(x=>x.en!==w.en).sort(()=>Math.random()-0.5).slice(0,3);
    const options = [w, ...wrongWords].sort(()=>Math.random()-0.5);
    content.innerHTML = `
      <div class="tag think-type think-type-3">英语题</div>
      <div class="math-question">${w.zh} 的英文是？</div>
      <div class="math-options">
        ${options.map(o=>`<div class="math-option" onclick="checkAdvAnswer('${o.en}', '${w.en}', this)">${o.en}</div>`).join('')}
      </div>
      <div id="advResult"></div>
    `;
  }
  else if(type === 'poetry'){
    const poem = poemsData[Math.floor(Math.random()*poemsData.length)];
    const fullText = poem.textFull.replace(/[，。？]/g,'');
    const chars = fullText.split('');
    const idx = Math.floor(Math.random()*chars.length);
    const answer = chars[idx];
    const start = Math.max(0, idx-4);
    const end = Math.min(chars.length, idx+5);
    let context = '';
    for(let i=start;i<end;i++){
      if(i===idx) context += '___';
      else context += chars[i];
    }
    const allChars = new Set();
    poemsData.forEach(p=>p.textFull.replace(/[，。？]/g,'').split('').forEach(c=>allChars.add(c)));
    const options = [answer];
    while(options.length<4){
      const r = Array.from(allChars)[Math.floor(Math.random()*allChars.size)];
      if(!options.includes(r)) options.push(r);
    }
    options.sort(()=>Math.random()-0.5);
    content.innerHTML = `
      <div class="tag think-type think-type-2">语文题</div>
      <div style="font-size:14px;color:var(--text2);margin-bottom:8px">出自：《${poem.title}》</div>
      <div style="font-size:20px;font-weight:700;text-align:center;padding:16px;background:var(--bg);border-radius:10px;margin-bottom:14px">${context}</div>
      <div style="font-size:13px;color:var(--text2);margin-bottom:8px">___ 处应该填什么字？</div>
      <div class="think-options">
        ${options.map(o=>`<button class="think-option" onclick="checkAdvAnswer('${o}', '${answer}', this)">${o}</button>`).join('')}
      </div>
      <div id="advResult"></div>
    `;
  }
  else if(type === 'thinking'){
    const q = thinkingQuestions[Math.floor(Math.random()*thinkingQuestions.length)];
    const typeNames = {1:'找规律',2:'图形推理',3:'应用题',4:'易错辨析'};
    content.innerHTML = `
      <div class="tag think-type think-type-4">思维题</div>
      <div class="think-q">${q.q}</div>
      <div class="think-options">
        ${q.options.map((o,i)=>`<button class="think-option" onclick="checkAdvAnswer(${i}, ${q.answer}, this)">${o}</button>`).join('')}
      </div>
      <div id="advResult"></div>
    `;
  }
}

function checkAdvAnswer(selected, correct, btn){
  const result = document.getElementById('advResult');
  if(String(selected) === String(correct)){
    advCorrect++;
    btn.classList.add('correct');
    result.innerHTML = '<div class="result-display result-correct">太棒了！答对了！</div>';
    if(advCorrect >= 5){
      advLevel++;
      state.progress.adventure.levels++;
      addStars(10);
      state.progress.adventure.best = Math.max(state.progress.adventure.best, advCorrect);
      saveState();
      checkBadges();
      result.innerHTML = `<div class="result-display result-correct">🎉 闯关成功！获得 10 颗星！<br>进入第 ${advLevel} 关！</div>`;
      document.getElementById('advLevel').textContent = advLevel;
      document.getElementById('advTotal').textContent = state.progress.adventure.levels;
      setTimeout(nextAdvQuestion, 2000);
    } else {
      document.getElementById('advCorrect').textContent = advCorrect;
      setTimeout(nextAdvQuestion, 1500);
    }
  } else {
    btn.classList.add('wrong');
    result.innerHTML = `<div class="result-display result-wrong">答错了~正确答案：${correct}<br>闯关失败，重新开始！</div>`;
    advCorrect = 0;
    advLevel = 1;
    document.getElementById('advCorrect').textContent = 0;
    document.getElementById('advLevel').textContent = 1;
    setTimeout(()=>{
      document.getElementById('advStartBtn').style.display = '';
      document.getElementById('advContent').innerHTML = '<div class="tc" style="padding:30px;color:var(--text2)">别灰心！点击"开始闯关"再试一次！</div>';
    }, 2500);
  }
}

/* ================================================================
   ERROR BOOK
   ================================================================ */
function addError(){
  const title = document.getElementById('errTitle').value.trim();
  const subject = document.getElementById('errSubject').value;
  const knowledge = document.getElementById('errKnowledge').value.trim();
  const reason = document.getElementById('errReason').value.trim();
  
  if(!title){
    showToast('请输入错题名称');
    return;
  }
  
  state.errors.push({
    id: Date.now(),
    title, subject, knowledge, reason,
    date: todayStr(),
    mastered:false, wrongCount:1
  });
  saveState();

  document.getElementById('errTitle').value = '';
  document.getElementById('errKnowledge').value = '';
  document.getElementById('errReason').value = '';

  renderErrors();
  renderRedoPanel();
  showToast('错题已记录！');
}

function addErrorAuto(title, subject, knowledge, reason){
  state.errors.push({
    id: Date.now(),
    title, subject, knowledge, reason,
    date: todayStr(),
    mastered:false, wrongCount:1
  });
  saveState();
}

let errFilter = 'pending';

document.getElementById('errFilterTabs').addEventListener('click', e=>{
  const tab = e.target.closest('.cat-tab');
  if(!tab) return;
  errFilter = tab.dataset.efilter;
  renderErrors();
});

function renderErrors(){
  const list = document.getElementById('errorList');
  document.getElementById('errCount').textContent = '（共'+state.errors.length+'条）';

  document.querySelectorAll('#errFilterTabs .cat-tab').forEach(t=>t.classList.toggle('active', t.dataset.efilter===errFilter));

  let shown = state.errors;
  if(errFilter === 'pending') shown = state.errors.filter(e=>!e.mastered);
  else if(errFilter === 'mastered') shown = state.errors.filter(e=>e.mastered);

  if(shown.length === 0){
    list.innerHTML = '<div class="tc" style="padding:20px;color:var(--text2)">'+(errFilter==='pending'?'🎉 太棒了！没有待消灭的错题~':'这里还没有记录~')+'</div>';
    return;
  }

  list.innerHTML = shown.slice().reverse().map(e=>`
    <div class="error-item ${e.mastered?'mastered':''}">
      <div class="ei-title">${e.title}${e.mastered?'<span style="font-size:11px;background:#e8f8f2;color:var(--green);border-radius:4px;padding:1px 6px;margin-left:6px;font-weight:600;vertical-align:1px">已掌握</span>':''}</div>
      <div class="ei-meta">
        <span class="tag think-type think-type-1">${e.subject}</span>
        ${e.knowledge ? '<span>知识点：'+e.knowledge+'</span>' : ''}
        <span>日期：${e.date}</span>
        ${(e.wrongCount||1) > 1 ? '<span style="color:var(--red)">累计错 '+e.wrongCount+' 次</span>' : ''}
      </div>
      ${e.reason ? '<div class="ei-reason">原因：'+e.reason+'</div>' : ''}
      <button class="ei-del" onclick="deleteError(${e.id})">删除</button>
    </div>
  `).join('');
}

function deleteError(id){
  state.errors = state.errors.filter(e=>e.id !== id);
  saveState();
  renderErrors();
  renderRedoPanel();
  showToast('已删除');
}

function exportErrors(){
  if(state.errors.length === 0){
    showToast('没有错题可导出');
    return;
  }
  const csv = '题目,科目,知识点,原因,日期,状态\n' + state.errors.map(e=>
    `"${e.title}","${e.subject}","${e.knowledge}","${e.reason}","${e.date}","${e.mastered?'已掌握':'待消灭'}"`
  ).join('\n');
  const blob = new Blob(['\ufeff'+csv], {type:'text/csv;charset=utf-8'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = '错题记录_'+todayStr()+'.csv';
  a.click();
  showToast('错题已导出！');
}

function clearErrors(){
  if(!confirm('确定清空所有错题吗？此操作不可撤销！')) return;
  state.errors = [];
  saveState();
  renderErrors();
  renderRedoPanel();
  showToast('错题已清空');
}

/* ================================================================
   错题重练引擎 — 智能重练 / 知识点定向练习 / 复习卡片自评
   ================================================================ */
const MATH_GEN_TYPES = ['division','mixed','multi','fraction','time','money','bigadd','twomulti','divoral','ymd','decimal','weight','bigmulti','remainder','area','bignum','threemulti','twodiv','hectare','quad','angle','decadd','bracket','areaword','perimvsarea','areaunit','clock24','chainmul','guione'];
const REVIEW_RANDOM_POOL = ['twomulti','remainder','decadd','bracket','areaword','areaunit','clock24','chainmul','guione'];
const knowledgeTypeMap = {
  '三位数除以一位数':'division', '两位数乘两位数':'twomulti', '有余数除法':'remainder',
  '三下复习':'review_random', '小数加减':'decadd', '脱式计算':'bracket', '混合运算':'bracket',
  '面积应用题':'areaword', '面积单位换算':'areaunit', '周长面积':'perimvsarea',
  '年月日':'ymd', '24时计时法':'clock24', '连乘连除':'chainmul', '归一归总':'guione',
  '大数的认识':'bignum', '公顷和平方千米':'hectare', '公顷·平方千米':'hectare',
  '三位数乘两位数':'threemulti', '除数是两位数':'twodiv', '角的度量':'angle',
  '平行四边形和梯形':'quad', '运算顺序':'bracket', '计算错误':'review_random'
};

let redoSession = null;

function jsq(s){ return String(s).replace(/\\/g,'\\\\').replace(/'/g,"\\'"); }
function shuffleArr(a){ return [...a].sort(()=>Math.random()-0.5); }
function pendingErrors(){ return state.errors.filter(e=>!e.mastered); }

function mapKnowledgeToType(k){
  if(!k) return null;
  if(MATH_GEN_TYPES.includes(k)) return k;
  return knowledgeTypeMap[k] || null;
}

/* 为一道错题生成一道"同源新题"：能自动出题的出选择题，否则退化为复习卡片 */
function buildRedoItem(err){
  if(err.subject === '数学'){
    let t = mapKnowledgeToType(err.knowledge);
    if(t === 'review_random') t = REVIEW_RANDOM_POOL[Math.floor(Math.random()*REVIEW_RANDOM_POOL.length)];
    if(t){
      const p = genMathProblem(t);
      return {kind:'choice', q:p.q, options:p.options, ans:String(p.ans), tip:mathTips[t]||null};
    }
    return {kind:'card'};
  }
  if(err.subject === '语文'){
    const idx = poemsData.findIndex(p=>p.title === err.knowledge);
    if(idx >= 0){
      const poem = poemsData[idx];
      const chars = poem.textFull.replace(/[，。？！、]/g,'').split('');
      const i = Math.floor(Math.random()*chars.length);
      const answer = chars[i];
      const start = Math.max(0, i-4), end = Math.min(chars.length, i+5);
      let context = '';
      for(let j=start; j<end; j++) context += (j===i ? '___' : chars[j]);
      const allChars = new Set();
      poemsData.forEach(p=>p.textFull.replace(/[，。？！、]/g,'').split('').forEach(c=>allChars.add(c)));
      const options = [answer];
      let guard = 0;
      while(options.length < 4 && guard < 100){
        guard++;
        const r = Array.from(allChars)[Math.floor(Math.random()*allChars.size)];
        if(!options.includes(r)) options.push(r);
      }
      options.sort(()=>Math.random()-0.5);
      return {kind:'choice', q:'《'+poem.title+'》：'+context+' 中 ___ 处应填什么字？', options, ans:answer};
    }
    return {kind:'card'};
  }
  if(err.subject === '思维'){
    const q = thinkingQuestions.find(t=>t.q === err.title);
    if(q) return {kind:'choice', q:q.q, options:q.options, ans:q.options[q.answer], exp:q.exp};
  }
  return {kind:'card'};
}

function renderRedoPanel(){
  const intro = document.getElementById('errRedoIntro');
  if(!intro) return;
  const pending = pendingErrors();
  const mastered = state.errors.length - pending.length;
  const rs = state.redoStats || {killed:0, rounds:0};

  const groups = {};
  pending.forEach(e=>{
    const key = e.subject+'|'+(e.knowledge || '未分类');
    groups[key] = (groups[key]||0)+1;
  });
  const weakKeys = Object.keys(groups).sort((a,b)=>groups[b]-groups[a]).slice(0,8);

  intro.innerHTML = `
    <div class="math-stat mb12">
      <div class="stat-item"><div class="stat-num" style="color:var(--red)">${pending.length}</div><div class="stat-label">待消灭</div></div>
      <div class="stat-item"><div class="stat-num" style="color:var(--green)">${mastered}</div><div class="stat-label">已掌握</div></div>
      <div class="stat-item"><div class="stat-num" style="color:var(--orange)">${rs.killed}</div><div class="stat-label">累计消灭</div></div>
    </div>
    <div class="tc mb12">
      <button class="btn btn-primary" style="min-height:48px;padding:0 26px" onclick="startSmartRedo()">🎯 开始智能重练</button>
    </div>
    <div class="hint-text tc" style="margin-top:0">每轮最多 10 题 · 答对一题就消灭一题（+2⭐）· 全对再奖 3⭐</div>
    ${weakKeys.length ? `
      <div class="hint-text mt12">👆 按薄弱知识点定向练习（点一下专攻它）：</div>
      <div class="cat-tabs mt12" style="margin-bottom:0">
        ${weakKeys.map(k=>{
          const parts = k.split('|');
          return `<div class="cat-tab" onclick="startTargetRedo('${jsq(parts[0])}','${jsq(parts.slice(1).join('|'))}')">${parts.slice(1).join('|')} ×${groups[k]}</div>`;
        }).join('')}
      </div>` : (pending.length === 0 ? '<div class="hint-text tc mt12" style="color:var(--green)">🎉 所有错题都已消灭，继续保持！</div>' : '')}
  `;
}

function startSmartRedo(){
  const pending = pendingErrors();
  if(pending.length === 0){ showToast('太棒了！没有待消灭的错题！'); return; }
  startRedoSession(shuffleArr(pending).slice(0, 10));
}

function startTargetRedo(subject, knowledge){
  const pending = pendingErrors().filter(e=>e.subject===subject && (e.knowledge||'未分类')===knowledge);
  if(pending.length === 0){ showToast('这个知识点已经消灭完啦！'); return; }
  startRedoSession(pending.slice(0, 10));
}

function startRedoSession(errors){
  redoSession = {items: errors.map(err=>({err, q: buildRedoItem(err)})), idx:0, killed:0, stars:0, locked:false};
  document.getElementById('errAddCard').classList.add('hidden');
  document.getElementById('errListCard').classList.add('hidden');
  document.getElementById('errRedoIntro').classList.add('hidden');
  renderRedoItem();
  document.getElementById('errRedoCard').scrollIntoView({behavior:'smooth', block:'start'});
}

function renderRedoItem(){
  const s = redoSession;
  if(!s) return;
  const game = document.getElementById('errRedoGame');
  const it = s.items[s.idx];
  s.locked = false;
  const header = `
    <div class="tc" style="font-size:13px;color:var(--text2);margin-bottom:10px;display:flex;align-items:center;justify-content:center;gap:10px;flex-wrap:wrap">
      <span>错题重练 · 第 <b style="color:var(--red)">${s.idx+1}</b> / ${s.items.length} 题 · 已消灭 <b style="color:var(--green)">${s.killed}</b></span>
      <button class="btn" style="min-height:36px;padding:0 12px;font-size:12px" onclick="exitRedoSession()">退出重练</button>
    </div>`;
  if(it.q.kind === 'card'){
    game.innerHTML = header + `
      <div class="hint-text tc" style="margin-bottom:10px">这道题没法自动出同款新题，读一读，诚实评估自己~</div>
      <div class="redo-card-q">${it.err.title}</div>
      <div class="ei-meta" style="display:flex;flex-wrap:wrap;gap:8px;font-size:12px;color:var(--text2);margin:10px 0">
        <span class="tag think-type think-type-1">${it.err.subject}</span>
        ${it.err.knowledge ? '<span>知识点：'+it.err.knowledge+'</span>' : ''}
        <span>日期：${it.err.date}</span>
      </div>
      ${it.err.reason ? '<div class="ei-reason">当时错的原因：'+it.err.reason+'</div>' : ''}
      <div class="math-options mt12">
        <div class="math-option" style="color:var(--green)" onclick="redoMasterCard(${it.err.id}, true)">✅ 我真的会了</div>
        <div class="math-option" style="color:var(--red)" onclick="redoMasterCard(${it.err.id}, false)">❌ 还没掌握</div>
      </div>
      <div id="redoResult"></div>
    `;
  } else {
    game.innerHTML = header + `
      ${it.q.tip ? `<div class="math-tip">${it.q.tip}</div>` : ''}
      <div class="math-question">${it.q.q}</div>
      <div class="math-options">
        ${it.q.options.map(o=>`<div class="math-option" onclick="checkRedoChoice('${jsq(o)}','${jsq(it.q.ans)}',this)">${o}</div>`).join('')}
      </div>
      <div id="redoResult"></div>
    `;
  }
}

function checkRedoChoice(selected, correct, btn){
  const s = redoSession;
  if(!s || s.locked) return;
  s.locked = true;
  const it = s.items[s.idx];
  const res = document.getElementById('redoResult');
  if(String(selected) === String(correct)){
    it.err.mastered = true;
    s.killed++;
    s.stars += 2;
    addStars(2);
    btn.classList.add('correct');
    res.innerHTML = `<div class="result-display result-correct">🎯 消灭一题！+2 ⭐</div>${it.q.exp ? `<div class="hint-text tc">解析：${it.q.exp}</div>` : ''}`;
  } else {
    it.err.wrongCount = (it.err.wrongCount||1) + 1;
    btn.classList.add('wrong');
    document.querySelectorAll('#errRedoGame .math-option').forEach(o=>{
      if(o.textContent === String(correct)) o.classList.add('correct');
    });
    res.innerHTML = `<div class="result-display result-wrong">答错了~正确答案：${correct}${it.q.exp ? '<br><span style="font-size:13px">解析：'+it.q.exp+'</span>' : ''}</div>`;
  }
  saveState();
  checkBadges();
  s.idx++;
  setTimeout(()=>{
    if(redoSession !== s) return;
    if(s.idx >= s.items.length) finishRedo();
    else renderRedoItem();
  }, 1500);
}

function redoMasterCard(errId, willMaster){
  const s = redoSession;
  if(!s || s.locked) return;
  s.locked = true;
  const it = s.items[s.idx];
  if(willMaster){
    it.err.mastered = true;
    s.killed++;
    s.stars += 2;
    addStars(2);
    showToast('消灭一题！+2 ⭐');
  } else {
    it.err.wrongCount = (it.err.wrongCount||1) + 1;
    showToast('没关系，明天再来消灭它！');
  }
  saveState();
  s.idx++;
  if(s.idx >= s.items.length) finishRedo();
  else renderRedoItem();
}

function finishRedo(){
  const s = redoSession;
  if(!s) return;
  const remaining = pendingErrors().length;
  const allKilled = s.killed === s.items.length;
  if(allKilled){ addStars(3); s.stars += 3; }
  if(!state.redoStats) state.redoStats = {killed:0, rounds:0};
  state.redoStats.killed += s.killed;
  state.redoStats.rounds++;
  saveState();
  checkBadges();
  redoSession = null;
  document.getElementById('errRedoGame').innerHTML = `
    <div class="result-display result-correct" style="font-size:16px;padding:18px">
      🎉 本轮消灭 ${s.killed} / ${s.items.length} 道错题<br>
      获得 ${s.stars} 颗星 ⭐${allKilled ? '<br>全对通关，额外奖励 +3 ⭐！' : ''}
    </div>
    <div class="hint-text tc">错题本还剩 ${remaining} 道待消灭</div>
    <div class="tc mt12" style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
      ${remaining > 0 ? '<button class="btn btn-primary" style="min-height:48px;padding:0 22px" onclick="startSmartRedo()">🔄 再来一轮</button>' : ''}
      <button class="btn" style="min-height:48px;padding:0 22px" onclick="exitRedoSession()">返回错题本</button>
    </div>
  `;
  document.getElementById('errRedoGame').scrollIntoView({behavior:'smooth', block:'center'});
}

function exitRedoSession(){
  redoSession = null;
  document.getElementById('errRedoGame').innerHTML = '';
  document.getElementById('errAddCard').classList.remove('hidden');
  document.getElementById('errListCard').classList.remove('hidden');
  document.getElementById('errRedoIntro').classList.remove('hidden');
  renderErrors();
  renderRedoPanel();
}

/* ================================================================
   LINKS
   ================================================================ */
function addLink(){
  const name = document.getElementById('linkName').value.trim();
  const url = document.getElementById('linkUrl').value.trim();
  const cat = document.getElementById('linkCat').value;
  
  if(!name || !url){
    showToast('请填写名称和网址');
    return;
  }
  
  let fullUrl = url;
  if(!url.startsWith('http')) fullUrl = 'https://' + url;
  
  state.links.push({
    id: Date.now(),
    name, url: fullUrl, cat
  });
  saveState();
  
  document.getElementById('linkName').value = '';
  document.getElementById('linkUrl').value = '';
  
  renderLinks();
  showToast('链接已收藏！');
}

function renderLinks(){
  const list = document.getElementById('linkList');
  document.getElementById('linkCount').textContent = '（共'+state.links.length+'条）';
  
  if(state.links.length === 0){
    list.innerHTML = '<div class="tc" style="padding:20px;color:var(--text2)">还没有收藏链接~</div>';
    return;
  }
  
  list.innerHTML = state.links.slice().reverse().map(l=>`
    <div class="link-item">
      <div style="flex:1">
        <div class="li-name">${l.name}</div>
        <div class="li-url">${l.cat} · ${l.url}</div>
      </div>
      <a href="${l.url}" target="_blank" class="li-go">打开</a>
      <button class="li-del" onclick="deleteLink(${l.id})">删除</button>
    </div>
  `).join('');
}

function deleteLink(id){
  state.links = state.links.filter(l=>l.id !== id);
  saveState();
  renderLinks();
  showToast('已删除');
}

/* ================================================================
   DATA MANAGEMENT
   ================================================================ */
function exportData(){
  const data = JSON.stringify(state, null, 2);
  const blob = new Blob([data], {type:'application/json'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = '少年学习空间站_数据备份_'+todayStr()+'.json';
  a.click();
  showToast('数据已导出！');
}

function importData(event){
  const file = event.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = function(e){
    try{
      const imported = JSON.parse(e.target.result);
      if(!confirm('导入将覆盖当前所有数据，确定继续吗？')) return;
      state = Object.assign(defaultState(), imported);
      saveState();
      showToast('数据导入成功！');
      renderToday();
      renderPet();
      renderBadgeWall('badgeWall');
    }catch(err){
      showToast('导入失败：'+err.message);
    }
  };
  reader.readAsText(file);
  event.target.value = '';
}

function clearAllData(){
  if(!confirm('⚠️ 确认清空所有数据吗？\n\n这将删除：\n• 所有星星和徽章\n• 宠物等级和外观\n• 所有错题记录\n• 所有收藏链接\n• 每日任务记录\n• 番茄钟统计\n• 月度进度数据\n\n此操作不可撤销！建议先导出备份！')) return;
  if(!confirm('再次确认：真的要清空全部数据吗？')) return;
  state = defaultState();
  saveState();
  showToast('所有数据已清空');
  location.reload();
}

/* ================================================================
   INIT
   ================================================================ */
function init(){
  // Update monthly stats on load
  const today = todayStr();
  if(state.dailyTasks[today]){
    if(!state.monthlyStats[monthStr()]) state.monthlyStats[monthStr()] = {};
    state.monthlyStats[monthStr()][today] = state.dailyTasks[today].completed;
    saveState();
  }
  
  // Initialize pomodoro
  pomoTotal = state.pomodoro.focus * 60;
  pomoSeconds = pomoTotal;
  updatePomoDisplay();
  
  // Render initial content
  renderToday();
  updateStarDisplay();
  
  // Check for badges
  checkBadges();
}

// Start the app
init();
