# 常用 js 工具函数

# 用法

```
import zcutils from 'super-tools-lib';
zcutils.guid()

of

import { guid } from 'super-tools-lib';
guid()

of

const superToolsLib = require('super-tools-lib');
superToolsLib.guid();
```

### map

- lonLatToMercator, // 经纬度转墨卡托
- mercatorToLonlat, // 墨卡托转经纬度
- getDistance, // 获取两个高德坐标的距离

### utils

- guid // 生成一个唯一的 guid
- getFileBase64 // 文件的 Base64 编码，
- isAndroidMobileDevice // 判断是否安卓移动设备访问
- isAppleMobileDevice // 判断是否苹果移动设备访问
- throttle // 函数节流
- debounce // 函数防抖
- fileDownload // 根据 url 地址下载文件，图片，音频，视频
- fuzzyQuery // 使用 match 方法实现模糊查询
- getUrlParam // 获取 url 参数
- getCookie // 获取 cookie 值
- colorHex // RGB 颜色转 16 进制
- viewportToPixels // 计算 vh / vw 转 px
- noRefdelUrlParam // 无刷新去除 url 参数

### 字符串方法

- initialToCapitali // 字符串首位是字母转大写
- repeat // 传入字符串，和重复次数，返回结果字符串
- trim // 去除字符串首尾空格

### 正则

```
import { validate } from 'super-tools-lib';
validate(key,value)
```

- 规则 key
- chinese_numeric_letters // 数字，字母，汉字，任意组合
- numeric_letters // 数字，字母，数字或字母，字母或数字组合
- number // 带小数点数字 0 ～ 30
- cPattern // 车牌号
- cP // 身份证
- intNumber // 正整数
- character // 字符 254
- email // 邮箱
- website // 网址
- mobile // 手机号

### 性能监控

- performanceAnalysis // Performance.timing：利用 Performance.timing 进行性能分析

### dom

- getOffset // 获取一个元素距离浏览器左上角的偏移量
- shaking // 抖动

### 浏览器

- toFullScreen // 浏览器全屏
- exitFullscreen // 浏览器退出全屏
- LocalStorage // 封装本地存储方法，提供 get，set，remove， clear 等方法
- getPosition // H5 获取地理位置
- winCopy // 禁止/开启：右键、选择、复制
- print // 打印屏幕

### 数组方法

- arrayUnique, // 利用 ES6 Set 去重数组
- arrayNonRepeatfy, // 利用 Map 数据结构去重
- aLineUnique, // 一行代码数组去重

### 类型判断

- isBase64
- isArray
- isString
- isFunction
- isObject
- isNumber

### file 文件操作

- downBlob // 下载二进制流文件
