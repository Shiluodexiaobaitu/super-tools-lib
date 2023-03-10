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

##### guid (生成一个唯一的 guid)

- return (String)：返回 guid

```js
_.guid(); // 'bfa39b2f-f77e-425e-8f41-1fe0d8ac38b4'
```

##### throttle (函数节流)

- 参数
  >1，fn(Function)
  >2，time(Number)：时间
- return (Function)：返回一个新的函数

```js
const fn = _.throttle(() => {
  console.log("1");
}, 2000);
fn();
fn();
fn();
```

##### debounce (函数防抖)

- 参数
  >1，fn(Function)
  >2，time(Number)：时间
- return (Function)：返回一个新的函数

```js
const fn = _.debounce(() => {
  console.log("1");
}, 2000);
fn();
fn();
fn(); // 如果多次触发将上次记录延迟清除掉,以最后一次触发重新计时
```

##### fileDownload (根据 url 地址下载文件，图片，音频，视频)

- 参数
  >1，url(String)：文件路径

```js
_.fileDownload(url);
```

##### getUrlParam (获取 url ？后的参数)

- return (Object)

```js
_.getUrlParam();
```

##### cookie (cookie 操作)

```js
_.cookie.set("key", "value", 1000);

_.cookie.get("key"); // 'value'

_.cookie.delete("key");

_.cookie.get("key"); // undefined
```

##### colorHex (RGB 颜色转 16 进制)

- 参数
  >1，value(String)：rgb 颜色值
- return (String)：返回转换后的 16 进制的颜色值

```js
_.colorHex("255,192,203"); // '#ffc0cb'
_.colorHex("rgb(255,192,203)"); // '#ffc0cb'
```

##### hexToRgba (16 进制颜色转 RGBA)

- 参数
  >1，value(String)：16 进制颜色值
- return (String)：返回转换后的 rgba 颜色值

```js
_.hexToRgba("#ffc0cb"); // 'rgba(255,192,203,1)'
```

##### rgbaToHex (rgba 颜色转 16 进制)

- 参数
  >1，value(String)：rgba 颜色值
- return (String)：返回转换后的 16 进制颜色值

```js
_.rgbaToHex("rgba(255,192,203,1)"); // '#ffc0cb'
```

##### viewportToPixels (计算 vh / vw 转 px)

- 参数
  >1，value(String)：css vh vw 值
- return (Number)：返回转换后的 px 值

```js
_.viewportToPixels("90vh"); // 640
```

##### noRefdelUrlParam (无刷新去除 url ?后 参数)

- 参数
  >1，value(String)：url？后的参数名
- return (String)：返回一个新的 url

```js
// http://localhost:8888/?id=2
_.noRefdelUrlParam("id"); // http://localhost:8888/?
```

##### vconsole (移动端查看 log)

```js
_.vconsole();
```

##### getAge (输入身份证号获取年龄)

- 参数
  >1，value(String)：身份证号
- return (String)

```js
_.getAge("xxxxxxxxxxxxxxxxx"); // '29岁0月14天'
```

##### getSex (输入身份证号获取性别)

- 参数
  >1，value(String)：身份证号
- return (String)

```js
_.getSex("xxxxxxxxxxxxxxxxx"); // '男'
```

##### digitUppercase (数字转化为大写金额)

- 参数
  >1，value(Number)：数值金额
- return (String)：大写汉字金额

```js
_.digitUppercase(10000); // '壹万元整'
```

##### injectScript (动态引入 js)

```js
_.injectScript(src);
```

##### sinogToLetter (输入汉字转换汉字首字母)

- 参数
  >1，value(String)：要转换的汉字
- return (String)：返回汉字对应的大写英文首字母

```js
_.sinogToLetter("你好"); // 'NH'
```

##### getFitSize (返回设计稿上 px 在不同屏幕下的适配尺寸)

- 参数
  >1，px(Number)：设计稿上样式的尺寸
  >2，draft(Number)：设计稿宽度
- return (Number)：返回在不同屏幕下设配的样式尺寸

```js
//375屏幕下
_.getFitSize(100, 750); // 50
```

##### checkPassWord (检测密码强度)

- 参数
  >1，value(String)：密码
- return (Number) 1：密码弱 2：密码中等 3：密码强 4：密码很强

```js
_.checkPassWord("ssssss@1Sdddd"); // 4
```

##### fahrenheitToCelsius (将华氏温度转换为摄氏温度)

- 参数
  >1，value(Number)： 华氏温度
- return (Number)：返回摄氏温度

```js
_.fahrenheitToCelsius(50); // 10
```

##### celsiusToFahrenheit (将摄氏温度转华氏温度)

- 参数
  >1，value(Number)：摄氏温度
- return (Number)：华氏温度

```js
_.celsiusToFahrenheit(10); // 50
```

### 数组对象方法

##### forEach

- 参数：
  >1，(Array|Object): 一个用来迭代的集合。
  >2，Function:每次迭代调用的函数。

```js
const arr = [1, 2, 3, 4, 5];
_.forEach(arr, (value, index) => {
  // return false 终止循环
});

const obj = { a: 1, b: 2, c: 3 };
_.forEach(obj, (value, key) => {
  // return false 终止循环
});
```

##### filter

- 参数：
  >1，(Array|Object)：一个用来迭代的集合。
  >2，Function：每次迭代调用的函数。
- return (Array)： 返回一个新的过滤后的数组。

```js
const arr = [1, 2, 3, 4, 5];
_.filter(arr, (value, index) => value === 3); // [3]

_.filter({ a: 2, v: 2 }, (value, key) => value === 2); // [2,2]
```

##### map

- 参数
  >1，(Array|Object)：一个用来迭代的集合。
  >2，Function:每次迭代调用的函数。
- return (Array)： 返回新的映射后数组

```js
_.map([1, 2, 3], (value) => value * 2); // [2, 4, 6]

_.map({ a: 1, b: 2, c: 3 }, (value) => value * 2); // [2, 4, 6]
```

##### last (返回数组最后一项)

- 参数
  >1，value(Array)：要操作的数组
- return (Any)：返回数组的最后一项

```js
const arr = [1, 2, 3, 4, 5];
_.last(arr); // 5
```

##### alphabeticSort (按字母排序)

- 参数
  >1，(Array)：要操作的数组
  >2，(String)：排序字段
- return (Array)：返回一个排序后的新数组

```js
let arr = [
  { value: "b" },
  { value: "a" },
  { value: "c" },
  { value: "e" },
  { value: "f" },
];
_.alphabeticSort(arr, "value");
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

##### arrToObject (将对象数组转换为单个对象)

- 参数
  >1，(Array)：要操作的数组
  >2，(String)：指定对象的键的值
- return (Object)

```js
_.arrToObject(
  [
    { id: "1", name: "Alpha", gender: "Male" },
    { id: "2", name: "Bravo", gender: "Male" },
    { id: "3", name: "Charlie", gender: "Female" },
  ],
  "id"
);
// {
//     '1': { id: '1', name: 'Alpha', gender: 'Male' },
//     '2': { id: '2', name: 'Bravo', gender: 'Male' },
//     '3': { id: '3', name: 'Charlie', gender: 'Female' },
// }
```

##### toNumbers (将字符串数组转换为数字)

- 参数
  >1，(Array)：要操作的数组
- return (Array)：返回一个新的数字

```js
_.toNumbers(["2", "3", "4"]); // [2, 3, 4]
```

##### countBy (按数组对象中的属性计数)

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
); // { 'audi': 2, 'ford': 2, 'bmw': 1 }
```

##### indexOfMax (查找数组中最大项的索引)

- 参数
  >1，(number[])：要操作的数组
- return (number)：返回数组中最大值的索引下标

```js
_.indexOfMax([1, 3, 2, 7, 5]); // 3
```

##### indexOfMin (查找数组中最小项的索引)

- 参数
  >1，(number[])：要操作的数组
- return (number)：返回数组中最小值的索引下标

```js
_.indexOfMin([1, 3, 2, 7, 5]); // 0
```

##### contains (检查数组是否包含符合某些标准的值)

- 参数
  >1，(Array)：要操作的数组
  >2，(Function)：每次迭代调用的函数
- return (boolean)：返回是否满足迭代函数的判断

```js
_.contains([1, 2, 3], (v) => v == 3); // true
```

### 字符串操作方法

##### initialToCapitali (字符串首位是字母转大写)

- 参数
  >1，(String)：要操作的字符串
- return (String)：返回首字母转为大写的字符串

```js
_.initialToCapitali("aaaa"); // 'Aaaa'
```

##### repeat (传入字符串，和重复次数，返回结果字符串)

- 参数
  >1，(String)：要操作的字符串
  >2，(Number)：重复次数
- return (String)：返回一个新的字符串

```js
_.repeat("abc", 3); // 'abcabcabc'
```

##### trim (去除字符串首尾空格)

- 参数
  >1，(String)：要操作的字符串
- return (String)：返回一个去除空格的字符串

```js
_.trim("  xxx  "); // 'xxx'
```

##### getTextWidth (计算文字宽度)

- 参数：
  >1，(String)：文本
  >2，(Numver)： '14px sans-serif' 字号 字体
- return (Number)：返回文字宽度

```js
_.getTextWidth("哈哈哈哈哈哈哈哈", 26); // 80
```

##### transFormat (字符串替换)

- 参数：
  >1，(String)：表示将要替换的字符串
  >2，(String)：表示你将要替换的字符
  >3，(String)：表示你想要替换的字符
- return (String)：返回替换后的字符串

```js
_.transFormat("2019-12-13", "-", "/"); // 2019/12/13
```

##### strInversion (反正字符串)

- 参数：
  >1，(String)：要反转的字符串
- return (String)：返回反转后的字符串

```js
_.strInversion("abc"); // 'cba'
```

##### toLine (驼峰转下划线)

- 参数：
  >1，(String)：要驼峰转下划线字符串
  >2，(Boolean)：是否转换成小写字母 默认值 true, false 转换成大写
- return (String)：返回转换后的字符串

```js
_.toLine("contBeginDate", false); // 'CONT_BEGIN_DATE'
```

##### toFullHexColor (将 3 位数颜色转换为 6 位数颜色)

- 参数：
  >1，(String)：要操作 16 进制颜色值
- return (String)：返回转换后的字符串

```js
_.toFullHexColor("#FFF"); // '#FFFFFF'
```

##### decode (解码 JWT 令牌)

- 参数：
  >1，(String)：要操作的字符串
- return (String)：返回转换后的字符串

```js
_.decode(`
    eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
    eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0I
    joxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
`); // '{"sub":"1234567890","name":"John Doe","iat":1516239022}'
```

##### letterToEmoji (转换字母以关联表情符号)

- 参数：
  >1，(String)：要操作的字符串
- return (String)：返回关联的表情符号

```js
_.letterToEmoji("a"); // '🇦'
```

##### toPascalCase (将字符串转换为 PascalCase)

- 参数：
  >1，(String)：要操作的字符串
- return (String)：返回大驼峰命名规则字符串

```js
_.toPascalCase("hello world"); // 'HelloWorld'
_.toPascalCase("hello.world"); // 'HelloWorld'
_.toPascalCase("foo_bar-baz"); // FooBarBaz
```

##### removeSpaces (删除字符串中的空格)

- 参数
  >1，(String)：要操作的字符串
- return (String)：返回去除空格的字符串

```js
_.removeSpaces("s s s k "); // sssk
```

##### replaceText (替换指定位置字符串内容)

- 参数
  >1，(String)：要操作的字符串
  >2，([number, number] | [number])：字符串索引位置区间
  >3，(String)：插入的字符串
- return (String)：返回新的字符串

```js
_.replaceText("17778780909", [3, 7], "*"); // '177****0909'
```

### 数值操作方法

##### accAdd (浮点数加法运算)

- 参数
  >1，(Number)：要操作的数字
  >2，(Number)：要操作的数字
- return (Number)：返回两数相加的合

```js
_.accAdd(0.1, 0.2); // 0.3
```

##### accSub (浮点数减法运算)

- 参数
  >1，(Number)：要操作的数字
  >2，(Number)：要操作的数字
- return (Number)：返回两数相减的合

```js
_.accSub(0.3, 0.1); // 0.2
```

##### accMul (浮点数乘法运算)

- 参数
  >1，(Number)：要操作的数字
  >2，(Number)：要操作的数字
- return (Number)：返回两数相乘的合

```js
_.accMul(0.1, 3); // 0.3
```

##### accDiv (浮点数除法运算)

- 参数
  >1，(Number)：要操作的数字
  >2，(Number)：要操作的数字
- return (Number)：返回两数相除的合

```js
_.accDiv(0.3, 3); // 0.1
```

##### formatPrice (数字千分位增加逗号)

- 参数
  >1，(Number)：要操作的数字
  >2，(String)：要插入的符号
- return (Number)：返回一个新的字符串

```js
_.formatPrice(1111112211111, ","); // '1,111,112,211,111'
```

##### smallRounding (小数指定位数进行取整)

- 参数
  >1，(Number)：要操作的数字
  >2，(Number)：指定小数位进行取整
- return (Number)：返回取整后的数字

```js
_.smallRounding(89.38931, 3); // 89.39
```

##### range (在给定范围内创建数字数组)

- 参数
  >1，(Number)：开始数字
  >2，(Number)：结束数字
- return (number[])：返回创建的数字数组

```js
_.range(1, 5); // [1,2,3,4,5]
```

##### closest (从数组中查找最接近的数字)

- 参数
  >1，(number[])：要操作的数值
  >2，(Number)：目标值
- return (number[])：返回数组中最接近目标值的值

```js
_.closest([29, 87, 8, 78, 97, 20, 75, 33, 24, 17], 50); // 33
```

### 时间操作方法

##### dateFormater (格式化时间)

- 参数
  >1，(String)：日期格式
  >2，(Date)：时间
- return (String)：返回指定格式的日期

```js
_.dateFormater("YYYY-MM-DD HH:mm:ss", new Date()); // '2022-01-18 12:01:10'
```

##### formatPassTime (格式化${startTime}距现在的已过时间(距离传入的时间经多了多久))

- 参数
  >1，(Number)：时间戳
- return (String)

```js
_.formatPassTime(1578614400000); // '2年前'
```

##### formatRemainTime (格式化现在距${endTime}的剩余时间)

- 参数
  >1，(Number)：时间戳
- return (String)

```js
_.formatRemainTime(new Date("2023").getTime()); // '347天19小时52分钟 26秒'
```

##### dayDiff (计算两日期之间相差的天数)

- 参数
  >1，(Date)：时间
  >2，(Date)：时间
- return (Number)

```js
_.dayDiff(new Date("2022-03-01"), new Date("2021-01-21")); // 404
```

##### monthDiff (计算两个日期之间的月数)

- 参数
  >1，(Date)：时间
  >2，(Date)：时间
- return (Number)

```js
_.monthDiff(new Date("2022-01-01"), new Date("2021-01-01")); // 12
```

##### compareDate (比较两个日期)

- 参数
  >1，(Date)：时间
  >2，(Date)：时间
- return (Boolean)

```js
_.compareDate(new Date("2020-03-30"), new Date("2020-01-01")); // true
```

##### formatSeconds (将秒转换为 hh:mm:ss 格式)

- 参数
  >1，(Number)：秒
- return (String)

```js
_.formatSeconds(300); // '00:05:00'
```

##### getQuarter (获取日期的当前季度)

- 参数
  >1，(Date)：时间
- return (Number)

```js
_.getQuarter(new Date("2023-12-12")); // 4
```

##### getLastDate (获取传入的日期当月的最后一个日期)

- 参数
  >1，(Date)：时间
- return (Date)

```js
_.getLastDate(new Date("2023-01-01")); // Tue Jan 31 2023 00:00:00 GMT+0800 (中国标准时间)
```

##### getFirstDate (获取传入的日期当月的第一个日期)

- 参数
  >1，(Date)：时间
- return (Date)

```js
_.getFirstDate(new Date("2023-01-23")); // Sun Jan 01 2023 00:00:00 GMT+0800 (中国标准时间)
```

##### getCurrentSecond (获取当前时间戳（秒）)

- return (Number) 秒

```js
_.getCurrentSecond(); // 1673418350
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

##### performanceAnalysis (进行性能分析)

```js
_.performanceAnalysis();
```

### DOM 操作方法

##### getOffset (获取一个元素距离浏览器左上角的偏移量)

- 参数
  >1，(Element)：dom
- return ({ top:0, left:0 })

```js
_.getOffset(element); // { top:0, left:0 }
```

##### stopPropagation (阻止冒泡事件)

- 参数
  >1，(Element)：dom

```js
_.stopPropagation(element);
```

##### hasClass (检测类名)

- 参数
  >1，(Element)：dom
  >2，(String)：类名

```js

_.hasClass(element,name)
=> true | false
```

##### addClass (添加类名)

- 参数
  >1，(Element)：dom
  >2，(String)：类名

```js
_.addClass(element, name);
```

##### removeClass (删除类名)

- 参数
  >1，(Element)：dom
  >2，(String)：类名

```js
_.removeClass(element, name);
```

##### replaceClass (替换类名)

- 参数
  >1，(Element)：dom
  >2，(String)：新类名
  >3，(String)：旧类名

```js
_.replaceClass(element, newName, oldName);
```

##### scrollToTheBottom (监听滚动条滚动到底部)

- 参数
  >1，(Element)： dom
  >2，(Function)： 滚动到底部事件回调
  >3，(Number)： 滚动监听截流时间

```js
_.scrollToTheBottom(ele, callback, delay);
```

##### textVisibilityChange (计算文字是否溢出容器)

- 参数
  >1，(Element)：承载文字的容器
- return: true 文字溢出， false 不溢出

```js
_.textVisibilityChange(document.getElementById("text")); // true | false
```

##### getTransformMatrix (获取 transform translate 中矩阵 x，y 坐标)

- 参数
  >1，(Element)：dom
- return: { x: Number, y: Number }

```js
_.getTransformMatrix(document.getElementById("text"));
```

##### isDescendant (检查某个元素是否是另一个元素的后代)

- 参数
  >1，(Element)：子节点
  >2，(Element)：父节点
- return (Boolean)

```js
_.isDescendant(childDom, parentDom); // true | false
```

##### getSelectedText (获取鼠标所选文本)

- return (String)

```js
_.getSelectedText(); // ''
```

##### insertAfter (在其他元素之后插入一个元素)

- 参数
  >1，(Element)：插入的新节点
  >2，(Element)：目标节点

```js
_.insertAfter(newEle, anotherEle);
```

##### insertBefore (在其他元素之前插入一个元素)

- 参数
  >1，(Element)：插入的新节点
  >2，(Element)：目标节点

```js
_.insertBefore(newEle, anotherEle);
```

##### insertHtmlAfter (在元素后插入给定的 HTML)

- 参数
  >1，(String)：html
  >2，(Element)：目标节点

```js
_.insertHtmlAfter(html, ele);
```

##### insertHtmlBefore (在元素前插入给定的 HTML)

- 参数
  >1，(String)：html
  >2，(Element)：目标节点

```js
_.insertHtmlBefore(html, ele);
```

##### eleReplace (替换 dom 元素)

- 参数
  >1，(Element)：目标节点
  >2，(Element)：将目标节点替换成指定节点

```js
_.eleReplace(oldEle, newEle);
```

### 坐标转换方法

##### lonLatToMercator (经纬度转墨卡托)

- 参数
  >1，({lon:Number,lat:Number})
- return ({x:number,y:number})

```js
_.lonLatToMercator({ lon: 116.445088, lat: 39.94614 }); // {x: 12962607.899733523, y: 4858118.574453057}
```

##### mercatorToLonlat (墨卡托转经纬度)

- 参数
  >1，({x:number,y:number})
- return ({lon:Number,lat:Number})

```js
_.mercatorToLonlat({ x: 12962607.899733523, y: 4858118.574453057 }); // {lon: 116.44508800000001, lat: 39.946140000000014}
```

### 操作浏览器方法

##### toFullScreen (浏览器全屏)

```js
_.toFullScreen();
```

##### exitFullscreen (浏览器退出全屏)

```js
_.exitFullscreen();
```

##### LocalStorage (封装本地存储方法，提供 get，set，remove， clear，forEach 等方法)
- 存储的数据的生命周期是永久，除非主动删除数据，否则永远不会过期

```js
// 返回user下的name值
_.LocalStorage.get(user, name);

// 设置user下name字段的的值value
_.LocalStorage.set(user, name, value);

// 删除user下的name字段
_.LocalStorage.remove(user, name);

// 清空本地存储
_.LocalStoeage.clear();

// 遍历本地存储
_.LocalStoeage.forEach((value,key)=>{})
```

##### getLocalStorageSize 获取 localStorage 使用容量

```js
_.getLocalStorageSize(); // '0.00KB'
```

##### SessionStorage (封装本地存储方法，提供 get，set，remove， clear，forEach 等方法)

- 存储的数据的生命周期是一个会话 （关闭当前浏览器页面）

```js
// 返回user下的name值
_.SessionStorage.get(user, name);

// 设置user下name字段的的值value
_.SessionStorage.set(user, name, value);

// 删除user下的name字段
_.SessionStorage.remove(user, name);

// 清空本地存储
_.SessionStorage.clear();

// 遍历本地存储
_.SessionStorage.forEach((value,key)=>{})
```

##### getPosition (H5 获取地理位置)

```js
_.getPosition()
  .then((pos) => {
    console.log("pos", pos);
  })
  .catch((err) => console.log(err));
```

##### winCopy (禁止/开启：右键、选择、复制)

- 参数
  >1，(Boolean)
- return (Boolean)

```js
_.winCopy(true); // true | false
```

##### print (打印指定内容)

```js
 * @param {string} printEleId //要打印的内容容器id
 * @param {string} rootEleId  //根节点容器id
 * @param {string} style // 打印时页面容器样式
 * @return {*}
_.print(printEleId, rootEleId, style)
```

##### copy (复制文本)

```js
_.copy("xxxxxxds");
```

##### scrollToTop (平滑滚动到页面顶部)

```js
_.scrollToTop();
```

##### userBrowser (返回当前浏览器是什么类型的浏览器)

- return (Sting)

```js
// 可能返回类型 Firefox, Chrome, Opera, Safari
_.userBrowser(); // 'Chrome'
```

##### IndexedDB (浏览器数据库)

- 参数
  >1，dbName (String)：数据库名称
  >2，storeName (String)：容器名称
  >3，version (Number)：版本号
- return (Boolean)

```js
const db = new _.IndexedDB({
  dbName: "dbName",
  storeName: "storeName",
  version: 1,
});

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

##### arrayNonRepeatfy (数组去重)

- 参数
  >1，(Array)：要操作的数据
- return (Array)

```js
const arr = [
  1,
  1,
  "true",
  "true",
  true,
  true,
  15,
  15,
  false,
  false,
  undefined,
  undefined,
  null,
  null,
  NaN,
  NaN,
  "NaN",
  0,
  0,
  "a",
  "a",
  {},
  {},
];
_.arrayNonRepeatfy(arr); // [1, 'true', true, 15, false, undefined, null, NaN, 'NaN', 0, 'a', {}, {}]
```

### 操作对象方法

##### cloneDeep (深度克隆数据)

- 参数
  >1，(\*)：要深拷贝的值
- return (\*)：返回拷贝后的值

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

##### stringfyQueryString (对象序列化)

- 参数
  >1，(Object)：要操作的数据
- return (String)：返回序列化的字符串

```js
_.stringfyQueryString({
  name: "fei",
  id: 1,
  storeNo: "1-105",
  floorName: "F1",
}); // 'name=fei&id=1&storeNo=1-105&floorName=F1'
```

##### values (对象的 value 集合)

- 参数：
  >1，(Object)：要操作的对象
- return (Array)： 返回对象的 value 集合

```js

const obj = { a: 1, b: 2 };
_.values(obj);
=> [1,2]
```

##### keys (对象的 key 集合)

- 参数：
  >1，Object
- return (Array)：返回对象的 key 集合

```js

const obj = { a: 1, b: 2 };
_.keys(obj);
=> ['a','b']
```

### 判断方法

##### isBase64

- 参数
  >1，(any)：要检查的值
- return (Boolean)

```js
_.isBase64(target); // true | false
```

##### isArray

- 参数
  >1，(any)：要检查的值
- return (Boolean)

```js
_.isArray(target); // true | false
```

##### isString

- 参数
  >1，(any)：要检查的值
- return (Boolean)

```js
_.isString(target); // true | false
```

##### isFunction

- 参数
  >1，(any)：要检查的值
- return (Boolean)

```js
_.isFunction(target); // true | false
```

##### isObject

- 参数
  >1，(any)：要检查的值
- return (Boolean)

```js
_.isObject(target); // true | false
```

##### isNumber

- 参数
  >1，(any)：要检查的值
- return (Boolean)

```js
_.isNumber(target); // true | false
```

##### isWeiXin

- 参数
  >1，(any)：要检查的值
- return (Boolean)

```js
_.isWeiXin(); // true | false
```

##### isSupportWebP 判断浏览器是否支持 webP 格式图片

- 参数
  >1，(any)：要检查的值
- return (Boolean)

```js
_.isSupportWebP(); // true | false
```

##### isMobile 判断当前是不是移动端

- 参数
  >1，(any)：要检查的值
- return (Boolean)

```js
_.isMobile(); // true | false
```

##### returnType 返回类型

- 参数
  >1，(any)：要检查的值
- return (Boolean)

```js
_.returnType(target);
```

##### isPromise 是否 Promise 对象

- 参数
  >1，(any)：要检查的值
- return (Boolean)

```js
_.isPromise(target); // true | false
```

##### isSymbol

- 参数
  >1，(any)：要检查的值
- return (Boolean)

```js
_.isSymbol(target); // true | false
```

##### isError

- 参数
  >1，(any)：要检查的值
- return (Boolean)

```js
_.isError(target); // true | false
```

##### isRegExp

- 参数
  >1，(any)：要检查的值
- return (Boolean)

```js
_.isRegExp(target); // true | false
```

##### isAndroidMobileDevice 判断是否安卓移动设备访问

- return (Boolean)

```js
_.isAndroidMobileDevice(); // true | false
```

##### isAppleMobileDevice 判断是否苹果移动设备访问

- 参数
  >1，(any)：要检查的值
- return (Boolean)

```js
_.isAppleMobileDevice(); // true | false
```

##### isDate

- 参数
  >1，(any)：要检查的值
- return (Boolean)

```js
_.isDate(target); // true | false
```

##### isUndefined

- 参数
  >1，(any)：要检查的值
- return (Boolean)

```js
_.isUndefined(target); // true | false
```

##### isNull

- 参数
  >1，(any)：要检查的值
- return (Boolean)

```js
_.isNull(target); // true | false
```

##### isImg

- 参数
  >1，(any)：要检查的值
- return (Boolean)

```js
_.isImg(val); // true | false
```

##### isUrl

- 参数
  >1，(any)：要检查的值
- return (Boolean)

```js
_.isUrl(val); // true | false
```

##### isObjectKeyEqual (判断两个对象是否拥有一样的 key)

- 参数
  >1，(any)：要检查的值
- return (Boolean)

```js
_.isObjectKeyEqual({ a: 2 }, { a: 3 }); // true

_.isObjectKeyEqual({ a: 2, b: 3 }, { a: 3, c: 3 }); // false
```

##### isObjectExistsKey (判断一个对象内是否包含指定的键)

- 参数
  >1，(any)：要检查的值
- return (Boolean)

```js
_.isObjectKeyEqual({ a: 2 }, "a"); // true
```

##### isObjectIncludeSpecifiedKey (判断 a 对象是否包含 b 对象的键)

- 参数
  >1，(any)：要检查的值
- return (Boolean)

```js
const a = { a: 2, b: 2 };
const b = { b: 3 };
_.isObjectIncludeSpecifiedKey(a, b); // true
```

##### isEmptyObject (判断对象是否为空)

- 参数
  >1，(any)：要检查的值
- return (Boolean)

```js
_.isEmptyObject({}); // true
```

##### isEmptyArray (检查数组是否为空)

- 参数
  >1，(any)：要检查的值
- return (Boolean)

```js
_.isEmptyArray([]); // true
```

##### isDarkMode (检测是否暗模式)

- 参数
  >1，(any)：要检查的值
- return (Boolean)

```js
_.isDarkMode(); // true | false
```

##### isHexColor (检查字符串是否为十六进制颜色)

- 参数
  >1，(any)：要检查的值
- return (Boolean)

```js
_.isHexColor("#fff"); // true
_.isHexColor("#ffffff"); // true
_.isHexColor("dad"); // false
```

##### isHexColor (判断是否是基本数据类型)

- 参数
  >1，(any)：要检查的值
- return (Boolean)

```js
_.isBasicType("1"); // true
```

##### isMap (检查是否是 Map 对象)

- 参数
  >1，(any)：要检查的值
- return (Boolean)

```js
_.isMap(new Map()); // true
```

##### isSet (检查是否是 Set 对象)

- 参数
  >1，(any)：要检查的值
- return (Boolean)

```js
_.isSet(new Set()); // true
```

##### isOdd （检测数字是否为奇数）

- 参数
  >1，(any)：要检查的值
- return (Boolean)

```js
_.isOdd(3); // true
```

##### isEven （检测数字是否为偶数）

- 参数
  >1，(any)：要检查的值
- return (Boolean)

```js
_.isEven(2); // true
```

##### isEqual (深比较来确定两者的值是否相等)

- 方法支持比较：array，object，map，set，string，boolean，number，null，undefined，symbol
- 参数
  >1，(any)：对比的值
  >2，(any)：对比的值
- return (Boolean)

```js
_.isEqual({ a: 1 }, { a: 2 }); // true
```

##### isContain (判断点是否在多边形内部)

- 参数
  >1，({x:number,y:number})：当前点
  >2，([{x:number,y:number}...])： 多边形轮廓

```js
_.isContain(
  {
    x: 11791497.844463462,
    y: 3418807.651961008,
  },
  [
    {
      x: 11791461.222580431,
      y: 3418824.913886976,
    },
    {
      x: 11791521.222580431,
      y: 3418824.913886976,
    },
    {
      x: 11791521.222580431,
      y: 3418789.913886976,
    },
    {
      x: 11791461.222580431,
      y: 3418789.913886976,
    },
  ]
); // true
```

#### EventObserver 事件观察者

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

#### StateObserver 状态观察者

```js
const state = new _.StateObserver({ name: "李四", age: 18 });

function change(newValue) {
  console.log("newValue", newValue);
}
// 监听状态改变事件
state.on("age", change);

// 移除状态改变事件
// state.off('age',change);

// 设置状态
state.setState({ age: 20 });

// 查询状态
state.getState("age"); // 20

state.getState(); // { name: "李四", age: 20 }
```

### Math

##### distance (计算两点之间的距离)

- 参数
  >1，({x:number,y:number})
  >2，({x:number,y:number})
- return (Number)：返回两点之间的距离（m）

```js
_.distance(
  {
    x: 12601590.934991667,
    y: 2507144.4488188336,
  },
  {
    x: 12603303.603016667,
    y: 2506982.020053167,
  }
); // 1720.353122987682
```

##### degsToRads (将度转换为弧度)

- 参数
  >1，(Number)：要操作的角度
- return (Number)：返回弧度

```js
_.degsToRads(90); // 1.5707963267948966
```

##### getPolygonCenter (获取多边形中心点)

- 参数：
  >1，points: 多边形坐标（最少三个点）
- return ({x:number,y:number})：多边形的中心点

```js
_.getPolygonCenter([
  {
    x: 11791461.222580431,
    y: 3418824.913886976,
  },
  {
    x: 11791521.222580431,
    y: 3418824.913886976,
  },
  {
    x: 11791521.222580431,
    y: 3418789.913886976,
  },
  {
    x: 11791461.222580431,
    y: 3418789.913886976,
  },
]); // {"x": 11791491.222580431,"y": 3418807.413886976 }
```

##### scalePolygon (缩放多边形坐标)

- 参数：
  >1， points: 多边形坐标（最少三个点）
  >2， extra: 多边形缩放倍数
- return (points)：返回放大或缩小的坐标集合

```js
_.scalePolygon(
  [
    {
      x: 11791461.222580431,
      y: 3418824.913886976,
    },
    {
      x: 11791521.222580431,
      y: 3418824.913886976,
    },
    {
      x: 11791521.222580431,
      y: 3418789.913886976,
    },
    {
      x: 11791461.222580431,
      y: 3418789.913886976,
    },
  ],
  5
);
/**
 * [
    {
        "x": 11791456.222580431,
        "y": 3418829.913886976
    },
    {
        "x": 11791526.222580431,
        "y": 3418829.913886976
    },
    {
        "x": 11791526.222580431,
        "y": 3418784.913886976
    },
    {
        "x": 11791456.222580431,
        "y": 3418784.913886976
    }
]
*/
```

### 文件操作方法

##### downBlob （下载二进制流文件）

- 参数
  >1，(File)：文件流
  >2，(String)：文件名称

```js
_.downBlob(file, fileName);
```

##### getFileBase64 (文件的 Base64 编码)

- 参数
  > 1，file(File)：文件
  > 2，cb(Function)：解析成功回调

```js
_.getFileBase64(file, (base64) => {
  console.log("base64", base64);
});
```

##### blobToDataURL (blob 转 url)

- 参数
  > 1，(Blob)：要操作的文件
- return (String)：返回 url 地址

```js
_.blobToDataURL(blob); // url....
```

##### drawAndShareImage (两张图片合并成一张图片)

- 参数
  > 1，(bgImgOps:{url: string, width: number, height: number })：背景图片配置项
  > 2，(upImgOps: { url: string, width: number, height: number, x: number, y: number })：覆盖在底图上的图片
  > 3，(ops?:{download:download,imgName: string,success:(bese64)=>bese63})：操作配置项目

```js
_.drawAndShareImage();
```

##### base64ToFile ( base64转文件)

- 参数
  > 1，(String)：base64字符串
  > 2，(String)：文件名称

```js
_.base64ToFile(base64, 'fileName')
```
