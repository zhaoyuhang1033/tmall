var bannerData = [ //模拟TAB栏 数据
  '女装 /内衣',
  '男装 /运动户外',
  '女鞋 /男鞋 /箱包',
  '美妆 /个人护理',
  '腕表 /眼镜 /珠宝饰品',
  '手机 /数码 /电脑办公',
  '母婴玩具',
  '零食 /茶酒 /进口食品',
  '生鲜水果',
  '大家电 /生活电器',
  '家具建材',
  '汽车 /配件 /用品',
  '家纺 /家饰 /鲜花',
  '医药保健',
  '厨具 /收纳 /宠物',
  '图书音像'
]
var fontColor = ['red', 'blue', 'purple', 'red', 'purple', 'blue', 'orange',//TAB栏字体颜色
  'yellow', 'yellow', 'blue', 'red', 'blue', 'yellow', 'green', 'red', 'green'
]  
bannerData.forEach(function (item) {  //轮播图左侧菜单TBA栏实现
  var $li = $('<li></li>');
  $li.text(item);
  $('.menu_tabs_contnet').append($li);
});
$('.menu_tabs_contnet > li' ).mouseenter(function(){ 
  $('.menu_tabs_contnet > li' ).css('color' , '');
  $('.menu_tabs_contnet > li').css('background-color' , '');
  $(this).css('color' , fontColor[$(this).index()]);
  $(this).css('background-color' , '#fff');
  $('.show > img').attr('src'  , './img/banner-img/col' +( $(this).index() +1)+'.png');
});
$('.banner').mouseleave(function (){
  $('.show > img').attr('src' , '');
  $('.menu_tabs_contnet > li').css('background-color' , '');
  $('.menu_tabs_contnet > li' ).css('color' , '');
});
var bannerBackGround = [ //轮播图对应父容器的背景颜色
  '#e8e8e8' , 
  '#e00718' , 
  '#fff100' , 
  '#e8e8e8' , 
  '#f55147' , 
  '#844ce3'
]
$('.carrousel_main_navbar > li').mouseenter(function (){  //轮播图效果实现(淡入淡出轮播图)
  $('.carrousel').css('background-color' , bannerBackGround[$(this).index()])
  $(this).addClass('active').siblings().removeClass('active');
  $('.carrousel_main > li').eq($(this).index()).fadeIn().siblings().fadeOut()
});
var brandListData = [  //模拟数据(名牌)
  {'src' : './img/bradlist/1.jpg' , 'title' : 'T'},
  {'src' : './img/bradlist/2.png' , 'title' : 'belulu'},
  {'src' : './img/bradlist/3.jpg' , 'title' : 'Sefon/臣枫'},
  {'src' : './img/bradlist/4.png' , 'title' : 'EVE‘NY/伊芙心悦'},
  {'src' : './img/bradlist/5.jpg' , 'title' : 'SUSONGETH/首尚格释'},
  {'src' : './img/bradlist/6.jpg' , 'title' : '喜马拉雅好声音'},
  {'src' : './img/bradlist/7.jpg' , 'title' : 'Schneider Electric/施耐德'},
  {'src' : './img/bradlist/8.jpg' , 'title' : 'Crystaluxe'},
  {'src' : './img/bradlist/9.jpg' , 'title' : '优惠券 ￥30'},
  {'src' : './img/bradlist/10.jpg', 'title' : 'ENFINITAS/蓝臻'},
  {'src' : './img/bradlist/11.jpg', 'title' : '奔富酒园'},
  {'src' : './img/bradlist/12.png', 'title' : '优惠券 ￥50'},
  {'src' : './img/bradlist/13.png', 'title' : '布朗天使'},
  {'src' : './img/bradlist/14.jpg', 'title' : 'Skin Menu/肌肤之食'},
  {'src' : './img/bradlist/15.png', 'title' : 'Aide Baou/爱得堡'},
  {'src' : './img/bradlist/16.jpg', 'title' : '普哆衣'},
  {'src' : './img/bradlist/17.png', 'title' : 'GateMan'},
  {'src' : './img/bradlist/18.jpg', 'title' : '依纳'},
  {'src' : './img/bradlist/19.jpg', 'title' : 'Pinterchains/品特链条'},
  {'src' : './img/bradlist/20.png', 'title' : '米皇'},
  {'src' : './img/bradlist/21.jpg', 'title' : 'Plasmon'},
  {'src' : './img/bradlist/22.png', 'title' : 'Difiney/蒂芬妮'},
  {'src' : './img/bradlist/23.png', 'title' : 'ROYAL CANIN/皇家'},
  {'src' : './img/bradlist/24.jpg', 'title' : '优惠券 ￥100'},
  {'src' : './img/bradlist/25.jpg', 'title' : '澜'},
  {'src' : './img/bradlist/26.png', 'title' : 'Racekish'},
  {'src' : './img/bradlist/27.png', 'title' : '卫洗丽'},
  {'src' : './img/bradlist/28.png', 'title' : 'J Brand'},
  {'src' : './img/bradlist/29.jpg', 'title' : '杭依阁'},
]
brandListData.forEach(function (item){  //为他的父容器追加数据对应的图片及文字 价格
  $('.brand_list').append(`  
  <li class="brand_item">
  <div class="brand-img">
    <img width="100" height="50" src="${item.src}">
  </div>
  <a class="brand-mask">
    <div class="coupon">
      <span class="brand_title">${item.title}</span>
    </div>
    <div class="enter">
      <span>点击进入</span>
    </div>
  </a>
</li>
  `);
});
$('.brand_item').mouseenter(function (){
  $('.brand-mask').eq($(this).index()).css('opacity' , 1);
});
$('.brand_item').mouseleave(function (){
  $('.brand-mask').css('opacity' , 0);
});
$('.tab_head >li').mouseenter(function (){
  $(this).addClass('active').siblings().removeClass('active');
  $('.tab_bd > img').attr('src' , `./img/天猫超市/tabs-${$(this).index()+1}.png`);
});
function renderData(selector , data){  //生成HTML模板  在图片的src处 给lazylod添加接口  
  //class = 'lazyload'  data-src = '图片路径'
  data.forEach(function (item){
    $(selector).append(
      `
      <a href="#" class="market_item">
            <div class="market_item_wrap">
              <img class="lazyload"  data-src="${item.src}" alt="" width="185" height="185">  
              <div class="market_item_wrap_title">${item.title}</div>
              <div class="price">${item.price}</div>
            </div>
      </a>  `
    )
  })
}
var tmallmarketData = [  //模拟天猫超市数据
  {'src' : './img/天猫超市/item1.jpg' , 'title' : '茶花小号加锁式吸盘无痕粘钩卫生间玻璃粘钩承重挂钩4只' , 'price' : '￥29.9'},
  {'src' : './img/天猫超市/item2.jpg' , 'title' : '云南脆柿1kg约100g/个 ' , 'price' : '￥19.9'},
  {'src' : './img/天猫超市/item5.jpg' , 'title' : 'Downy/当妮护衣留香珠 清新舒畅100克 衣服香水洗衣液伴侣 ' , 'price' : '￥19.9'}, 
  {'src' : './img/天猫超市/item3.jpg' , 'title' : '白猫优倍净芦荟洗洁精450g 环保无磷配方去油污 ' , 'price' : '￥19.9'},
  {'src' : './img/天猫超市/item4.jpg' , 'title' : '斑布纸巾批发本色抽纸卫生纸家用家庭装实惠装餐巾纸特价130抽3包 ' , 'price' : '￥13'},
  {'src' : './img/天猫超市/item6.jpg' , 'title' : '夏士莲香皂 沁凉清爽型三块装125g×3块 舒爽润肤 ' , 'price' : '￥15'},
]
renderData('.bd_inner_right' ,tmallmarketData );
var tmallGjData = [  //模拟天猫国际数据
  {"src" : "./img/天猫国际/item1.jpg" , "title" : "sk-iisk2神仙水skii护肤精华露护肤套装补水保湿紧致肌肤提亮肤色" , "price" : "￥1590"},
  {"src" : "./img/天猫国际/item2.jpg" , "title" : "Shiseido/资生堂UNO男士泡沫洗面奶蓝色超保湿洁净洁面乳130g*2 " , "price" : "￥59"},
  {"src" : "./img/天猫国际/item3.jpg" , "title" : "【日本】beautybar 24KT头黄金棒美容棒瘦脸震动V脸美容仪神器 " , "price" : "￥499"},
  {"src" : "./img/天猫国际/item4.jpg" , "title" : "日本原装花王Merries婴幼儿湿纸巾54抽2包儿童屁屁柔湿巾手口湿巾 " , "price" : "￥39"},
  {"src" : "./img/天猫国际/item5.png" , "title" : "德国进口SOS免洗洗手液杀菌消毒儿童抑菌喷雾家用便携式100ml " , "price" : "￥49"},
  {"src" : "./img/天猫国际/item6.jpg" , "title" : "【直营】日本大王制纸淡香超长卷卫生纸卷筒纸卷纸单层100m*12卷 " , "price" : "￥55.5"},
  {"src" : "./img/天猫国际/item7.jpg" , "title" : "韩国爱茉莉玫瑰护发精油卷发头发发油免洗发膜修复柔顺毛躁护发素 " , "price" : "￥49"},
  {"src" : "./img/天猫国际/item8.jpg" , "title" : "【官方旗舰】新品上市现货澳洲原装a2成人高钙脱脂速溶奶粉1Kg " , "price" : "￥138"}
]
renderData('.bd_GJ_inner_right' , tmallGjData);
var tmallMLRSData = [ //美丽人生数据
  {"src" : "./img/美丽人生/item1.jpg" , "title" : "秋冬新品NIAN JEEP厚款直筒休闲裤男士裤子 弹力商务高腰男装长裤 " , "price" : "￥88"},
  {"src" : "./img/美丽人生/item2.jpg" , "title" : "Daphne/达芙妮旗下shoebox鞋柜秋新系带休闲商务男皮鞋板鞋男  " , "price" : "￥49"},
  {"src" : "./img/美丽人生/item3.jpg" , "title" : "包邮美津浓Mizuno MORELIA NEO …莫雷拉人草足球鞋P1GA161627  " , "price" : "￥398"},
  {"src" : "./img/美丽人生/item4.jpg" , "title" : "赫恩男士洗面奶控油去黑头祛痘印送美白保湿补水洁面乳护肤品套装  " , "price" : "￥69.9"},
  {"src" : "./img/美丽人生/item5.jpg" , "title" : "冠琴手表 男士手表 石英表防水皮带男表 双日历夜光商务手表男  " , "price" : "￥108"},
  {"src" : "./img/美丽人生/item6.jpg" , "title" : "卡拉羊公务包商务包男11寸12寸电脑包斜挎包扬男单肩包上班公文包  " , "price" : "￥139"},
  {"src" : "./img/美丽人生/item7.png" , "title" : "Daphne/达芙妮圆漾尖头亮面漆皮简约气质浅口通勤女鞋1015404813  " , "price" : "￥49"},
  {"src" : "./img/美丽人生/item8.jpg" , "title" : "shesgirl茜子发饰 Line of Love简约线条欧美合金刘海边夹发夹  " , "price" : "￥39"}
]
renderData('.bd_MLRS_inner_right' , tmallMLRSData);
var tmallCDKWData = [ //潮电酷玩数据
  {"src" : "./img/潮电酷玩/item1.jpg" , "title" : "纽曼EX16蓝牙圆屏智能手表手环微信qq短信多功能男士运动防水闹钟  " , "price" : "￥149"},
  {"src" : "./img/潮电酷玩/item2.jpg" , "title" : "Daphne/XOX/客所思 M900主播外置声卡套装电容麦克风电脑直播K歌录音喊麦   " , "price" : "￥198"},
  {"src" : "./img/潮电酷玩/item3.jpg" , "title" : "PANDA/熊猫 F-360 双面复读机便携磁带录音学习英语卡座卡带播放  " , "price" : " "},
  {"src" : "./img/潮电酷玩/item4.jpg" , "title" : "惠普u盘64g高速usb3.0迷你车载防水个性创…爱情侣优盘原装正版电脑两用移动u盘   " , "price" : "￥94.9"},
  {"src" : "./img/潮电酷玩/item5.jpg" , "title" : "SanDisk 闪迪 CF 32G 800X 120M 极速存储卡 单反相机内存卡   " , "price" : ""},
  {"src" : "./img/潮电酷玩/item6.jpg" , "title" : "【官网正品 现货顺丰】华为原装无线蓝牙耳机真双耳…mate10保时捷 RS苹果手机通用  " , "price" : "￥749 "},
  {"src" : "./img/潮电酷玩/item7.jpg" , "title" : "朗琴C1无线蓝牙音箱迷你小钢炮家用超重低音炮便携式户外小音响   " , "price" : "￥108"},
  {"src" : "./img/潮电酷玩/item8.jpg" , "title" : "德国巨炮耳机头戴式手机电脑耳麦苹果音乐重低音GARINEMAX A12   " , "price" : "￥79"}
]
renderData('.bd_CKDW_inner_right' , tmallCDKWData);
var tmallJJSHData = [ //居家生活数据
  {"src" : "./img/居家生活/item1.jpg" , "title" : " 十卷得力3210标价纸打码纸标价机纸不干胶标价签纸单排打价机用纸  " , "price" : "￥16.9"},
  {"src" : "./img/居家生活/item2.jpg" , "title" : " 德国进口 保黛宝魔红诱惑香水润肤乳滋润补水保湿香体乳  " , "price" : "￥79"},
  {"src" : "./img/居家生活/item3.jpg" , "title" : " 包邮 日本ZEBRA斑马JF-0.5笔芯 Sar…笔替芯适用于JJ15水笔芯0.5mm  " , "price" : "￥3.6"},
  {"src" : "./img/居家生活/item4.jpg" , "title" : " 迪士尼3437保温杯3428 杯盖 3430 3446 3443 3432原装3440水杯盖  " , "price" : "￥12"},
  {"src" : "./img/居家生活/item5.jpg" , "title" : " 洽洽焦糖瓜子/山核桃味瓜子108克大脆瓜子零食小吃休闲食品  " , "price" : "￥5.8"},
  {"src" : "./img/居家生活/item6.jpg" , "title" : " 2018新款计算器带语音记算器真人发音计算机大号…办公用品会计财务专用机算器12位数  " , "price" : "￥35.8"},
  {"src" : "./img/居家生活/item7.png" , "title" : " 桂格即食燕麦片1000g*2袋早餐冲饮营养谷物原味代餐燕麦片 " , "price" : "￥32.9 "},
  {"src" : "./img/居家生活/item8.jpg" , "title" : " 口水娃兰花豆30g香脆木豆蚕豆香辣牛肉五香烤肉味零食小吃 " , "price" : " ￥1.2"}
]
renderData('.bd_JJSH_inner_right' , tmallJJSHData);
var tmallHOMEData = [  //打造爱巢数据
  {"src" : "./img/打造爱巢/item1.jpg" , "title" : " 美的（Midea电水壶 304不锈钢电热水壶 1.7L容量 双层防烫烧水壶   " , "price" : "￥99"},
  {"src" : "./img/打造爱巢/item2.jpg" , "title" : " 书柜书架落地简约现代组合简易家用省空间收纳置物架小学生儿童   " , "price" : "￥198"},
  {"src" : "./img/打造爱巢/item3.jpg" , "title" : " 平板车塑料面板手推车塑料面板塑料车板拉货车塑料车板   " , "price" : "￥50"},
  {"src" : "./img/打造爱巢/item4.jpg" , "title" : " 金正 JZW-1220E电热水壶煮茶器玻璃保温电茶壶煮黑茶普洱壶养生壶   " , "price" : "￥109"},
  {"src" : "./img/打造爱巢/item5.jpg" , "title" : " 华帝i11083、49、85、86、90烟机风管罩 下单备注型号或咨询客服   " , "price" : "￥299"},
  {"src" : "./img/打造爱巢/item6.jpg" , "title" : " Midea/美的 MK-TM1502电热水壶家用自动断电304不锈钢电水壶烧水   " , "price" : "￥85"},
  {"src" : "./img/打造爱巢/item7.jpg" , "title" : " Bear/小熊 SNJ-C10H1酸奶机家用全自动迷你自制分杯不锈钢发酵机  " , "price" : "￥88 "},
  {"src" : "./img/打造爱巢/item8.jpg" , "title" : " Tonze/天际 ZDH-208D电热水壶家用长嘴304不锈钢烧水壶自动迷你  " , "price" : " ￥79"}
]
renderData('.bd_HOME_inner_right' , tmallHOMEData);
var tmallHWCXdata = [ //户外出行数据
  {"src" : "./img/户外出行/item1.jpg" , "title" : " 美国星特朗P80EQ 90eq通用原装出游便携背包博冠天狼防震防潮    " , "price" : "￥95"},
  {"src" : "./img/户外出行/item2.jpg" , "title" : " 冲锋衣男三合一两件套冬季可拆户外防风衣加绒加厚可拆卸外套潮牌    " , "price" : "￥238"},
  {"src" : "./img/户外出行/item3.jpg" , "title" : " 骆驼户外登山包 50L旅行双肩包骑行跑步运动背包男女    " , "price" : "￥268"},
  {"src" : "./img/户外出行/item4.jpg" , "title" : " 金正 JZW-李宁 男子时尚潮流系列 休闲鞋ARLM001-1    " , "price" : "￥85"},
  {"src" : "./img/户外出行/item5.jpg" , "title" : " 探路者速干短袖男夏季运动户外t恤快干衣服吸汗宽松透气速干衣女   " , "price" : "￥69 "},
  {"src" : "./img/户外出行/item6.jpg" , "title" : " adidas阿迪达斯2018新款中性训练系列单肩包S99975    " , "price" : "￥75"},
  {"src" : "./img/户外出行/item7.jpg" , "title" : " 2018BIJIA尊享8x22高倍高清双筒微光夜视望远镜 超清便携户外望远   " , "price" : "￥69 "},
  {"src" : "./img/户外出行/item8.jpg" , "title" : " 秋冬季加绒男士抓绒马甲户外防风透气耐磨登山开衫立领抓绒衣马甲   " , "price" : " ￥99"} 
]
renderData('.bd_HWCX_inner_right' , tmallHWCXdata);

$(window).scroll(function (){//页面滚动时触发事件
  if($(window).scrollTop() > getOffsetTop('.famous')){
    $('.nav_bar').show();
  } else {
    $('.nav_bar').hide();
  }
  if($(window).scrollTop() >= getOffsetTop('.' + floorData[6])){
    effect(6);
  }else if($(window).scrollTop() >= getOffsetTop('.' + floorData[5])){
    effect(5);
  }else if($(window).scrollTop() >= getOffsetTop('.' + floorData[4])){
    effect(4);
  }else if($(window).scrollTop() >= getOffsetTop('.' + floorData[3])){
    effect(3);
  }else if($(window).scrollTop() >= getOffsetTop('.' + floorData[2])){
    effect(2);
  }else if($(window).scrollTop() >= getOffsetTop('.' + floorData[1])){
    effect(1);
  }else if($(window).scrollTop() >= getOffsetTop('.' + floorData[0])){
    effect(0);
  }
});  

var navBarColor = ['green' , 'purple' , 'pink' , 'blue' , 'green' , 'pink' , 'aqua']  //左侧导航条的颜色
$('.nav_bar_item').mouseenter(function (){
  $(this).siblings().css('background-color' , '');
  $(this).css('background-color' , navBarColor[$(this).index()-1]);
});

var floorData = ['tmall_market' , 'tmall_GJ' , 'tmall_MLRS' , 'tmall_CDKW' , 'tmall_JJSH' , 'tmall_HOME' , 'tmall_HWCX'] 
 //保存商品区的类名绑定相应事件
$('.nav_bar_item').click(function (){
  $('html , body').animate({
    'scroll-top' : getOffsetTop('.' +floorData[$(this).index() - 1])
  })
  return false;
});
$('.nav_header').click(function (){
  $('html , body').animate({
    'scroll-top' : 0,
  })
});

function getOffsetTop(ele){  //获取元素的offsetTop
  return $(ele).offset().top;
}
function effect(index){  //对应索引的元素添加效果
  $('.nav_bar_item').siblings().css('background-color' , '');
  $('.nav_bar_item').eq(index).css('background-color' , navBarColor[index]);
}
$('.lazyload').lazyload();  //开启懒加载
