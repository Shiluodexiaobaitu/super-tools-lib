# 常用js工具函数

### map
- lonLatToMercator,       // 经纬度转墨卡托
- mercatorToLonlat,       // 墨卡托转经纬度
- getPosition,            // H5 获取地理位置

### utils
- getUrlParam,                // 获取地址栏参数
- getQueryString,             // 获取 url 后面通过?传参的参数
- gNameToCapitalize,          // 首字母转大写
- toFullScreen,               // 全屏
- exitFullscreen,             // 退出全屏
- guid,                       // 生成一个唯一的guid 
- getDistance,                // 获取两个高德坐标的距离, 后一个点，不传，默认为用户坐标
- repeat,                     // 传入字符串，和重复次数，返回结果字符串
- base64_decode,              // 实现base64解码
- getCookie,                  // 获取cookie值
- getPageHeight,              // 获取页面高度
- getPageViewHeight,          // 获取页面可视高度
- isAndroidMobileDevice,      // 判断是否安卓移动设备访问
- isAppleMobileDevice,        // 判断是否苹果移动设备访问()
- throttle,                   // 截流
- debounce,                   // 防抖
- download,                   // 根据url地址下载
- fuzzyQuery,                 // 使用match方法实现模糊查询
- LocalStorage,               // 封装本地存储方法

### 正则
- verificationCP,         // 身份证号正则
- licensePlateNumber,     // 车牌号正则
- urlReg,                 // url正则

### 循环数组去重
- arrayUnique,               // 利用ES6 Set去重数组
- arrayNonRepeatfy,          // 利用Map数据结构去重
- aLineUnique,               // 一行代码数组去重