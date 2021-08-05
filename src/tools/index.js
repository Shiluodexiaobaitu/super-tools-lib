/**
 * 生成一个唯一的guid
 * @return {string}
*/
const guid = function () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

/**
 * 文件的Base64编码，
 * @param {则需要FileReader。FileReader类型实现的是一种异步文件读取机制。可以把FileReader想象成XMLHttpRequest，区别只是它读取的是文件系统，而不是远程服务器。}
*/
const getFileBase64 = (file, cb) => {
    if (!file) throw new Error('Error! no param "file"(getFileBase64()).');

    let reader = new FileReader();
    reader.onload = function (e) {
        let base64 = e.target.result;   // 该文件的完整Base64

        if (cb) cb(base64);
    };
    reader.onerror = function () {
        alert('Read file fail.');
    };
    reader.readAsDataURL(file);
}

/**
 * 判断是否安卓移动设备访问
*/
const isAndroidMobileDevice = function () {
    return /android/i.test(navigator.userAgent.toLowerCase());
}

/**
 * 判断是否苹果移动设备访问
*/
const isAppleMobileDevice = function () {
    return /iphone|ipod|ipad|Macintosh/i.test(navigator.userAgent.toLowerCase());
}

/**
 * 节流
 * @param {*} func 执行函数
 * @param {*} delay 节流时间,毫秒
*/
const throttle = function (func, delay) {
    let timer = null
    return function () {
        if (!timer) {
            timer = setTimeout(() => {
                func.apply(this, arguments)
                // 或者直接 func()
                timer = null
            }, delay)
        }
    }
}

/**
 * 防抖
*/
const debounce = function (fn, wait) {
    let timeout = null
    return function () {
        if (timeout !== null) clearTimeout(timeout)// 如果多次触发将上次记录延迟清除掉
        timeout = setTimeout(() => {
            fn.apply(this, arguments)
            // 或者直接 fn()
            timeout = null
        }, wait)
    }
}

/**
  * 根据url地址下载
*/
const fileDownload = function (url) {
    var isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
    var isSafari = navigator.userAgent.toLowerCase().indexOf('safari') > -1;
    if (isChrome || isSafari) {
        var link = document.createElement('a');
        link.href = url;
        if (link.download !== undefined) {
            var fileName = url.substring(url.lastIndexOf('/') + 1, url.length);
            link.download = fileName;
        }
        if (document.createEvent) {
            var e = document.createEvent('MouseEvents');
            e.initEvent('click', true, true);
            link.dispatchEvent(e);
            return true;
        }
    }
    if (url.indexOf('?') === -1) {
        url += '?download';
    }
    window.open(url, '_self');
    return true;
}

/**
 * 使用match方法实现模糊查询
 * @param  {Array}  list     进行查询的数组
 * @param  {String} keyWord  查询的关键词
 * @return {Array}           查询的结果
*/
const fuzzyQuery = function (list, keyWord) {
    var arr = [];
    for (var i = 0; i < list.length; i++) {
        if (list[i].name.match(keyWord) != null) {
            arr.push(list[i]);
        }
    }
    return arr;
}

/**
 * 获取url参数 返回一个{}
*/
const getUrlParam = function () {
    let url = document.location.toString();
    let arrObj = url.split('?');
    let params = Object.create(null)
    if (arrObj.length > 1) {
        arrObj = arrObj[1].split('&');
        arrObj.forEach(item => {
            item = item.split('=');
            params[item[0]] = item[1]
        })
    }
    return params;
}

/**
 * 获取cookie值
*/
const getCookie = function (name) {
    var arr = document.cookie.match(new RegExp('(^| )' + name + '=([^;]*)(;|$)'));
    if (arr != null) return unescape(arr[2]);
    return null;
}

/**
 * RGB颜色转16进制
*/
const colorHex = (color) => {
    var that = color;
    var aColor = color.split(',');
    var strHex = '#';
    for (var i = 0; i < aColor.length; i++) {
        var hex = Number(aColor[i]).toString(16);
        if (hex.length < 2) {
            hex = '0' + hex;
        }
        strHex += hex;
    }
    if (strHex.length !== 7) {
        strHex = that;
    }
    return strHex;
}

/**
 * 计算vh / vw转px
*/
export const viewportToPixels = (value) => {
    var parts = value.match(/([0-9\.]+)(vh|vw)/)
    var q = Number(parts[1])
    var side = window[['innerHeight', 'innerWidth'][['vh', 'vw'].indexOf(parts[2])]]
    return side * (q / 100)
}

const tools = {
    guid,
    getFileBase64,
    isAndroidMobileDevice,
    isAppleMobileDevice,
    throttle,
    debounce,
    fileDownload,
    fuzzyQuery,
    getUrlParam,
    getCookie,
    colorHex,
    viewportToPixels
}

export default tools;