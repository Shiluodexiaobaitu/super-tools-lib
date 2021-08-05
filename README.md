
# 常用js工具函数

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
- lonLatToMercator,       // 经纬度转墨卡托
- mercatorToLonlat,       // 墨卡托转经纬度
- getDistance,            // 获取两个高德坐标的距离

### utils
- guid                    // 生成一个唯一的guid
- getFileBase64           // 文件的Base64编码，
- isAndroidMobileDevice   // 判断是否安卓移动设备访问
- isAppleMobileDevice     // 判断是否苹果移动设备访问
- throttle                // 函数节流
- debounce                // 函数防抖
- fileDownload            // 根据url地址下载文件，图片，音频，视频
- fuzzyQuery              // 使用match方法实现模糊查询
- getUrlParam             // 获取url参数
- getCookie               // 获取cookie值
- colorHex                // RGB颜色转16进制

### 字符串方法
- initialToCapitali       // 字符串首位是字母转大写
- repeat                  // 传入字符串，和重复次数，返回结果字符串

### 正则
```
import { validate } from 'super-tools-lib';
validate(key,value)
```
- 规则key
- chinese_numeric_letters // 数字，字母，汉字，任意组合
- numeric_letters         // 数字，字母，数字或字母，字母或数字组合
- number                  // 带小数点数字0～30
- cPattern                // 车牌号
- cP                      // 身份证
- intNumber               // 正整数
- character               // 字符254
- email                   // 邮箱
- website                 // 网址
- mobile                  // 手机号

### 性能监控
- performanceAnalysis     // Performance.timing：利用Performance.timing进行性能分析

### dom
- getOffset               // 获取一个元素距离浏览器左上角的偏移量

### 浏览器
- toFullScreen            // 浏览器全屏
- exitFullscreen          // 浏览器退出全屏
- LocalStorage            // 封装本地存储方法，提供get，set，remove， clear等方法
- getPosition             // H5 获取地理位置
- winCopy                 // 禁止/开启：右键、选择、复制

### 数组方法
- arrayUnique,            // 利用ES6 Set去重数组
- arrayNonRepeatfy,       // 利用Map数据结构去重
- aLineUnique,            // 一行代码数组去重