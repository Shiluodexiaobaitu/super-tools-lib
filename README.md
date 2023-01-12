## 封装 150+ javascript 方法

### 安装

```
npm install super-tools-lib
of
yarn add super-tools-lib
```

### 引用

```
import _ from 'super-tools-lib';
_.guid()

of

import { guid } from 'super-tools-lib';
guid()

of

const _ = require('super-tools-lib');
_.guid();
```

### 常用方法

- guid 生成一个唯一的 guid

```js

_.guid()
=> 'bfa39b2f-f77e-425e-8f41-1fe0d8ac38b4'
```

- getFileBase64 文件的 Base64 编码，

```js
_.getFileBase64(file, (base64) => {
  console.log("base64", base64);
});
```

- isAndroidMobileDevice 判断是否安卓移动设备访问

```js

_.isAndroidMobileDevice() // true | false
```

- isAppleMobileDevice 判断是否苹果移动设备访问

```js

_.isAppleMobileDevice() // true | false
```

- throttle 函数节流

```js

const fn = _.throttle(()=>{console.log('1')},2000);
fn()
fn()
fn()
```

- debounce 函数防抖

```js

const fn =  _.debounce(()=>{console.log('1')},2000);
fn()
fn()
fn() // 如果多次触发将上次记录延迟清除掉,以最后一次触发重新计时
```

- fileDownload 根据 url 地址下载文件，图片，音频，视频

```js
_.fileDownload(url);
```

- fuzzyQuery 模糊查询

```js

 * @param  {Array}  list     进行查询的数组
 * @param  {String}  key     进行查询的数组的字段
 * @param  {String} keyWord  查询的关键词
 * @return {Array}           查询的结果

const arr = [{ name: "1" }, { name: "2" }, { name: "3" }];
_.fuzzyQuery(arr, "name", "1"); // [ { "name": "1"}]
```

- getUrlParam 获取 url ？后的参数

```js

_.getUrlParam();
```

- cookie cookie 操作

```js

_.cookie.set('key','value',1000)

_.cookie.get('key') // 'value'

_.cookie.delete('key')

_.cookie.get('key') // undefined

```

- colorHex RGB 颜色转 16 进制

```js

_.colorHex('255,192,203'); // '#ffc0cb'
_.colorHex('rgb(255,192,203)') // '#ffc0cb'
```

- hexToRgba 16 进制颜色转 RGBA

```js

_.hexToRgba('#ffc0cb'); // 'rgba(255,192,203,1)'
```

- rgbaToHex rgba 颜色转 16 进制

```js

_.rgbaToHex('rgba(255,192,203,1)') // '#ffc0cb'
```

- viewportToPixels 计算 vh / vw 转 px

```js

_.viewportToPixels('90vh') // 640
```

- noRefdelUrlParam 无刷新去除 url ?后 参数

```js

// http://localhost:8888/?id=2
_.noRefdelUrlParam('id');  // http://localhost:8888/?
```

- vconsole 移动端查看 log

```js
_.vconsole();
```

- getAge 输入身份证号获取年龄

```js

_.getAge('xxxxxxxxxxxxxxxxx'); // '29岁0月14天'
```

- getSex 输入身份证号获取性别

```js

_.getSex('xxxxxxxxxxxxxxxxx'); // '男'
```

- digitUppercase 数字转化为大写金额

```js

_.digitUppercase(10000) // '壹万元整'
```

- injectScript 动态引入 js

```js
_.injectScript(src);
```

- sinogToLetter 输入汉字转换汉字首字母

```js

_.sinogToLetter('你好 ') // 'NH'
```

```js
//375屏幕下
_.getFitSize(100,750); // 50
```

- checkPassWord 检测密码强度
  参数
  1，密码
  return {1：密码弱 2：密码中等 3：密码强 4：密码很强}

```js

_.checkPassWord('ssssss@1Sdddd'); // 4
```

- fahrenheitToCelsius 将华氏温度转换为摄氏温度
  参数
  fahrenheit: 华氏温度

```js

_.fahrenheitToCelsius(50); // 10
```

- celsiusToFahrenheit 将摄氏温度转华氏温度
  参数
  fahrenheit: 摄氏温度

```js

_.celsiusToFahrenheit(10); // 50
```

### 循环数组对象方法

- forEach
  参数：
  1，(Array|Object): 一个用来迭代的集合。
  2，Function:每次迭代调用的函数。

```js
const arr = [1, 2, 3, 4, 5];
_.forEach(arr, (item, index) => {});

const obj = { a: 1, b: 2, c: 3 };
_.forEach(obj, (value, key) => {
  // return false 终止循环
});
```

- filter
  参数：
  1，Array:一个用来迭代的集合。
  2,Function:每次迭代调用的函数。

```js

const arr = [1, 2, 3, 4, 5];
_.filter(arr, (item, index) => item === 3); // [3]
```

- last 返回数组最后一项

```js

const arr = [1, 2, 3, 4, 5];
_.last(arr); // 5
```

- alphabeticSort 按字母排序

```js

let arr = [{value: 'b'},{value: 'a'},{value: 'c'},{value: 'e'},{value: 'f'}]
_.alphabeticSort(arr,'value')
// [
//     {
//         "value": "a"
//     },
//     {
//         "value": "b"
//     },
//     {
//         "value": "c"
//     },
//     {
//         "value": "e"
//     },
//     {
//         "value": "f"
//     }
// ] 
```

- arrToObject 将对象数组转换为单个对象

```js
_.arrToObject(
  [
    { id: "1", name: "Alpha", gender: "Male" },
    { id: "2", name: "Bravo", gender: "Male" },
    { id: "3", name: "Charlie", gender: "Female" },
  ],
  "id"
)
// {
//     '1': { id: '1', name: 'Alpha', gender: 'Male' },
//     '2': { id: '2', name: 'Bravo', gender: 'Male' },
//     '3': { id: '3', name: 'Charlie', gender: 'Female' },
// }
```

- toNumbers 将字符串数组转换为数字

```js

_.toNumbers(['2', '3', '4']) // [2, 3, 4]
```

- countBy 按数组对象中的属性计数

```js
_.countBy(
  [
    { branch: "audi", model: "q8", year: "2019" },
    { branch: "audi", model: "rs7", year: "2020" },
    { branch: "ford", model: "mustang", year: "2019" },
    { branch: "ford", model: "explorer", year: "2020" },
    { branch: "bmw", model: "x7", year: "2020" },
  ],
  "branch"
) // { 'audi': 2, 'ford': 2, 'bmw': 1 }
```

- indexOfMax 查找数组中最大项的索引

```js

_.indexOfMax([1, 3, 2, 7, 5]) // 3
```

- indexOfMin 查找数组中最小项的索引

```js

_.indexOfMin([1, 3, 2, 7, 5]) // 0
```

- contains 检查数组是否包含符合某些标准的值

```js
_.contains([1, 2, 3], (v) => v == 3); // true
```

### 字符串操作方法

- initialToCapitali 字符串首位是字母转大写

```js

_.initialToCapitali('aaaa'); // 'Aaaa'
```

- repeat 传入字符串，和重复次数，返回结果字符串

```js

_.repeat('abc',3) // 'abcabcabc'
```

- trim 去除字符串首尾空格

```js

_.trim('  xxx  ') // 'xxx'
```

- getTextWidth 计算文字宽度
  参数：
  1，text(string)：文本
  2，font(numver): '14px sans-serif' 字号 字体

```js

_.getTextWidth('哈哈哈哈哈哈哈哈',26); // 80
```

- transFormat 字符串替换
  参数：
  1，str 表示将要替换的字符串
  2，oldChar 表示你将要替换的字符
  3，newChar 表示你想要替换的字符

```js

_.transFormat('2019-12-13', '-', '/') // 2019/12/13
```

- strInversion 反正字符串
  参数：
  1，str 要反转的字符串

```js

_.strInversion('abc') // 'cba'
```

- toLine 驼峰转下划线
  参数：
  1，val 要驼峰转下划线字符串
  2，isLowercase 是否转换成小写字母 默认值 true

```js

_.toLine('contBeginDate', false) // 'CONT_BEGIN_DATE'
```

- toFullHexColor 将 3 位数颜色转换为 6 位数颜色

```js
_.toFullHexColor('#FFF') // '#FFFFFF'
```

- decode 解码 JWT 令牌

```js
_.decode(`
    eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
    eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0I
    joxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
`)// '{"sub":"1234567890","name":"John Doe","iat":1516239022}'
```

- letterToEmoji 转换字母以关联表情符号

```js
_.letterToEmoji('a') // '🇦'
```

- toPascalCase 将字符串转换为 PascalCase

```js
_.toPascalCase("hello world"); // 'HelloWorld'
_.toPascalCase("hello.world"); // 'HelloWorld'
_.toPascalCase("foo_bar-baz"); // FooBarBaz
```

- removeSpaces 删除字符串中的空格

```js
_.removeSpaces("s s s k "); // sssk
```

- replaceText 替换指定位置字符串内容

```js
_.replaceText("17778780909", [3, 7], "*"); // '177****0909'
```

### 数值操作方法

- accAdd 浮点数加法运算

```js

_.accAdd(0.1, 0.2) // 0.3
```

- accSub 浮点数减法运算

```js

_.accSub(0.3,0.1) // 0.2
```

- accMul 浮点数乘法运算

```js

_.accMul(0.1,3) // 0.3
```

- accDiv 浮点数除法运算

```js

_.accDiv(0.3,3) // 0.1
```

- formatPrice 数字千分位增加逗号

```js

_.formatPrice(1111112211111,',') // '1,111,112,211,111'
```

- smallRounding 小数指定位数进行取整

```js
_.smallRounding(89.38931,3); // 89.39
```

- range 在给定范围内创建数字数组

```js

_.range(1,5) // [1,2,3,4,5]
```

- closest 从数组中查找最接近的数字

```js

_.closest([29, 87, 8, 78, 97, 20, 75, 33, 24, 17],50) // 33
```

### 时间操作方法

- dateFormater 格式化时间

```js

_.dateFormater('YYYY-MM-DD HH:mm:ss',new Date()) // '2022-01-18 12:01:10'
```

- formatPassTime 格式化${startTime}距现在的已过时间(距离传入的时间经多了多久)

```js

_.formatPassTime(1578614400000); // '2年前'
```

- formatRemainTime 格式化现在距${endTime}的剩余时间

```js

_.formatRemainTime(new Date('2023').getTime()) // '347天19小时52分钟 26秒'
```

- dayDiff 计算两日期之间相差的天数

```js

_.dayDiff(new Date("2022-03-01"),new Date("2021-01-21")) // 404
```

- monthDiff 计算两个日期之间的月数

```js
_.monthDiff(new Date("2022-01-01"),new Date("2021-01-01")) // 12
```

- compareDate 比较两个日期

```js
_.compareDate(new Date('2020-03-30'), new Date('2020-01-01')) // true
```

- formatSeconds 将秒转换为 hh:mm:ss 格式

```js
_.formatSeconds(300) // '00:05:00'
```

- getQuarter 获取日期的当前季度

```js
_.getQuarter(new Date('2023-12-12')) // 4
```

- getLastDate 获取传入的日期当月的最后一个日期

```js
_.getLastDate(new Date('2023-01-01')) // Tue Jan 31 2023 00:00:00 GMT+0800 (中国标准时间)
```

- getFirstDate 获取传入的日期当月的第一个日期

```js
_.getFirstDate(new Date('2023-01-23')) // Sun Jan 01 2023 00:00:00 GMT+0800 (中国标准时间)
```

- getCurrentSecond 获取当前时间戳（秒）

```js
_.getCurrentSecond() // 1673418350
```

### 正则操作方法

```js

规则 key
chinese_numeric_letters // 数字，字母，汉字，任意组合
numeric_letters // 数字，字母，数字或字母，字母或数字组合
number // 带小数点数字 0 ～ 30
cPattern // 车牌号
cP // 身份证
intNumber // 正整数
negativeInteger // 负整数
isNotNegativeFloatNum // 匹配非负浮点数
character // 字符 254
email // 邮箱
website // 网址
mobile // 手机号
cname //校验中文名 包含校验少数民族名字
ename //校验英文名 每一个单词首字母都是大写
ip //校验 IP 地址
ipv4 // 校验 ipv4 地址
color16Reg // 16 进制颜色校验
mac //校验 mac 地址

_.validate(key,value) // true | false
```

### 性能监控

- performanceAnalysis 进行性能分析

```js
_.performanceAnalysis();
```

### DOM 操作方法

- getOffset 获取一个元素距离浏览器左上角的偏移量

```js

_.getOffset(element) // { top:0, left:0 }
```

- stopPropagation 阻止冒泡事件

```js
_.stopPropagation(element);
```

- hasClass 检测类名

```js

_.hasClass(element,name)
=> true | false
```

- addClass 添加类名

```js
_.addClass(element, name);
```

- removeClass 删除类名

```js
_.removeClass(element, name);
```

- replaceClass 替换类名

```js
_.replaceClass(element, newName, oldName);
```

- scrollToTheBottom 监听滚动条滚动到底部
  参数：
  {ele} dom
  {callback} 滚动到底部事件回调
  {delay} 滚动监听截流时间

```js
_.scrollToTheBottom(ele, callback, delay);
```

- textVisibilityChange 计算文字是否溢出容器
  参数：
  {dom} 承载文字的容器
  return: true 文字溢出， false 不溢出

```js
_.textVisibilityChange(document.getElementById('text')); // true | false
```

- getTransformMatrix 获取 transform translate 中矩阵 x，y 坐标

```js
_.getTransformMatrix(document.getElementById('text'));
```

- isDescendant 检查某个元素是否是另一个元素的后代

```js
_.isDescendant(childDom,parentDom) // true | false
```

- getSelectedText 获取鼠标所选文本

```js
_.getSelectedText() // ''
```

- insertAfter 在其他元素之后插入一个元素

```js
_.insertAfter(newEle, anotherEle);
```

- insertBefore 在其他元素之前插入一个元素

```js
_.insertBefore(newEle, anotherEle);
```

- insertHtmlAfter 在元素后插入给定的 HTML

```js
_.insertHtmlAfter(html, ele);
```

- insertHtmlBefore 在元素前插入给定的 HTML

```js
_.insertHtmlBefore(html, ele);
```

- eleReplace 替换dom元素

```js
_.eleReplace(oldEle, newEle);
```

### 经纬度坐标转换方法

- lonLatToMercator 经纬度转墨卡托

```js
_.lonLatToMercator({ lon: 116.445088, lat: 39.94614 }); // {x: 12962607.899733523, y: 4858118.574453057}

```

- mercatorToLonlat 墨卡托转经纬度

```js
_.mercatorToLonlat({x: 12962607.899733523, y: 4858118.574453057}) // {lon: 116.44508800000001, lat: 39.946140000000014}
```

- getDistance 距离计算

```js
const startLon = 116.641874;
const startLat = 40.304162;
const endLon = 116.213407;
const endLat = 40.226617;

_.getDistance(startLon, startLat, endLon, endLat); // 37405
```

- calcDistance 计算经纬度两个坐标得距离

```js

_.calcDistance(116.95400,39.95400,116.95300,39.95300) // 0.1222
```

### 操作浏览器方法

- toFullScreen 浏览器全屏

```js
_.toFullScreen();
```

- exitFullscreen 浏览器退出全屏

```js
_.exitFullscreen();
```

- LocalStorage 封装本地存储方法，提供 get，set，remove， clear 等方法

```js
// 返回user下的name值
_.LocalStorage.get(user,name)

// 设置user下name字段的的值value
_.LocalStorage.get(user, name, value)

// 删除user下的name字段
_.LocalStorage.remove(user, name)

// 清空本地存储
_.LocalStoeage.clear()
```

- getLocalStorageSize 获取 localStorage 使用容量

```js
_.getLocalStorageSize() // '0.00KB'
```

- getPosition H5 获取地理位置

```js
_.getPosition()
  .then((pos) => {
    console.log("pos", pos);
  })
  .catch((err) => console.log(err));
```

- winCopy 禁止/开启：右键、选择、复制

```js
_.winCopy(true); // true | false
```

- print 打印指定内容

```js
 * @param {string} printEleId //要打印的内容容器id
 * @param {string} rootEleId  //根节点容器id
 * @param {string} style // 打印时页面容器样式
 * @return {*}
_.print(printEleId, rootEleId, style)
```

- copy 复制文本

```js
_.copy("xxxxxxds");
```

- scrollToTop 平滑滚动到页面顶部

```js
_.scrollToTop();
```

- userBrowser 返回当前浏览器是什么类型的浏览器

```js
// 可能返回类型 Firefox, Chrome, Opera, Safari
_.userBrowser(); // 'Chrome'
```

- IndexedDB 浏览器数据库

```js
const db = new _.IndexedDB("dbName", "storeName", 100);

// 设置数据
db.set("name", "张三");

// 获取数据
db.get("name", (data) => {
  console.log(data);
}); // 张三

// 更新数据
db.update("name", "李四");

// 获取数据
db.get("name", (data) => {
  console.log(data);
}); // 李四

// 删除数据
db.remove("name");

// 清空数据库
db.close();
```

### 操作数组方法

- arrayNonRepeatfy 利用 Map 数据结构去重

```js
const arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}]
_.arrayNonRepeatfy(arr) // [1, 'true', true, 15, false, undefined, null, NaN, 'NaN', 0, 'a', {}, {}]
```

### 操作对象方法

- cloneDeep 深度克隆数据

```js

 let obj = {
      b: "sss",
  };
  obj.a = obj;
  const newObj = _.cloneDeep(obj)
  newObj.b = 'bbb'
  console.log('newObj',newObj) //{b: 'bbb', a: {…}}
  console.log('obj',obj) // {b: 'sss', a: {…}}
  console.log('obj === newObj', obj.a === newObj.a) // false
=>
```

- stringfyQueryString 对象序列化

```js
_.stringfyQueryString({name:'fei',id:1, "storeNo" : "1-105","floorName" : "F1",}) // 'name=fei&id=1&storeNo=1-105&floorName=F1'
```

- values
  参数：
  1，Object
  返回：对象的 value 集合

```js

const obj = { a: 1, b: 2 };
_.values(obj);
=> [1,2]
```

- keys
  参数：
  1，Object
  返回：对象的 key 集合

```js

const obj = { a: 1, b: 2 };
_.keys(obj);
=> ['a','b']
```

### 判断方法

- isBase64

```js
_.isBase64(target) // true | false
```

- isArray

```js
_.isArray(target) // true | false
```

- isString

```js
_.isString(target) // true | false
```

- isFunction

```js
_.isFunction(target) // true | false
```

- isObject

```js
_.isObject(target) // true | false
```

- isNumber

```js
_.isNumber(target) // true | false
```

- isWeiXin

```js
_.isWeiXin() // true | false
```

- isSupportWebP 判断浏览器是否支持 webP 格式图片

```js
_.isSupportWebP() // true | false
```

- isMobile 判断当前是不是移动端

```js
_.isMobile() // true | false
```

- returnType 返回类型

```js
_.returnType(target)
```

- isPromise 是否 Promise 对象

```js
_.isPromise(target) // true | false
```

- isSymbol

```js
_.isSymbol(target) // true | false
```

- isError

```js
_.isError(target) // true | false
```

- isRegExp

```js
_.isRegExp(target) // true | false
```

- isDate

```js
_.isDate(target) // true | false
```

- isUndefined

```js
_.isUndefined(target) // true | false
```

- isNull

```js
_.isNull(target) // true | false
```

- isImg

```js

_.isImg(val) // true | false
```

- isUrl

```js

_.isUrl(val) // true | false

```

- isObjectKeyEqual 判断两个对象是否拥有一样的 key

```js

_.isObjectKeyEqual({a:2},{a:3}) // true

_.isObjectKeyEqual({a:2,b:3},{a:3,c:3}) // false
```

- isObjectExistsKey 判断一个对象内是否包含指定的键

```js

_.isObjectKeyEqual({a:2},'a') // true
```

- isObjectIncludeSpecifiedKey 判断 a 对象是否包含 b 对象的键

```js

const a = {a:2,b:2}
const b = {b:3}
_.isObjectIncludeSpecifiedKey(a,b) // true
```

- isEmptyObject 判断对象是否为空

```js
_.isEmptyObject({}) // true
```

- isEmptyArray 检查数组是否为空

```js
_.isEmptyArray([]) // true
```

- isDarkMode 检测是否暗模式

```js
_.isDarkMode() // true | false
```

- isHexColor 检查字符串是否为十六进制颜色

```js
_.isHexColor("#fff"); // true
_.isHexColor("#ffffff"); // true
_.isHexColor("dad"); // false
```

### EventObserver 事件观察者

```js
const eventObserver = new _.EventObserver();

function change(e) {
  console.log("e", e);
}
// 注册事件监听
eventObserver.on("my_click", change);

// 触发指定事件
eventObserver.spread("my_click", { a: 1 });

// 移除事件监听
// eventObserver.off("my_click",change);

// of

_.addEventListener("my_click", change);

// 移除事件监听
// _.removeEventListener("my_click", change);

_.dispatchEvent("my_click", { a: 1 });
```

### StateObserver 状态观察者

```js
const state = new _.StateObserver({ name: "李四", age: 18 });

function change(newValue){
  console.log('newValue',newValue)
}
// 监听状态改变事件
state.on('age', change);

// 移除状态改变事件
// state.off('age',change);

// 设置状态
state.setState({ age: 20 });

// 查询状态
state.getState('age') // 20

state.getState() // { name: "李四", age: 20 }
```

### Math

- distance // 计算两点之间的距离

```js
_.distance(
  {
    x: 12601590.934991667,
    y: 2507144.4488188336,
  },
  {
    x: 12603303.603016667,
    y: 2506982.020053167,
    z: 50.99999999999932,
  }
); // 1720.353122987682
```

- degsToRads // 将度转换为弧度

```js
_.degsToRads(90) // 1.5707963267948966
```

### 文件操作方法

- downBlob 下载二进制流文件

```js
_.downBlob(file, fileName);
```
