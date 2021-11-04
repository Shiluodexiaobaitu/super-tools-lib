//测试

/**
 * 生成一个唯一的guid
 * @return {string}
*/
const guid = (): string => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c: any): string {
        const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

/**
 * 文件的Base64编码，
 * @param {则需要FileReader。FileReader类型实现的是一种异步文件读取机制。可以把FileReader想象成XMLHttpRequest，区别只是它读取的是文件系统，而不是远程服务器。}
*/
const getFileBase64 = (file: File, cb: Function): void => {
    if (!file) throw new Error('Error! no param "file"(getFileBase64()).');

    const reader = new FileReader();
    reader.onload = function (e: any): void {
        const base64 = e.target.result;   // 该文件的完整Base64

        if (cb) cb(base64);
    };
    reader.onerror = function (): void {
        alert('Read file fail.');
    };
    reader.readAsDataURL(file);
}

/**
 * 判断是否安卓移动设备访问
*/
const isAndroidMobileDevice = (): boolean => {
    return /android/i.test(navigator.userAgent.toLowerCase());
}

/**
 * 判断是否苹果移动设备访问
*/
const isAppleMobileDevice = (): boolean => {
    return /iphone|ipod|ipad|Macintosh/i.test(navigator.userAgent.toLowerCase());
}

/**
 * 节流
 * @param {*} func 执行函数
 * @param {*} delay 节流时间,毫秒
*/
const throttle = function (func: Function, delay: number): Function {
    let timer: any = null
    return function () {
        if (!timer) {
            timer = setTimeout(() => {
                // 或者直接 func()
                func()
                timer = null
            }, delay)
        }
    }
}

/**
 * 防抖
*/
const debounce = function (fn: Function, wait: number): Function {
    let timeout: any = null
    return function () {
        if (timeout !== null) clearTimeout(timeout)// 如果多次触发将上次记录延迟清除掉
        timeout = setTimeout(() => {
            // 或者直接 fn()
            fn()
            timeout = null
        }, wait)
    }
}

/**
  * 根据url地址下载
  * @param {string} url 下载地址
*/
const fileDownload = function (url: string): boolean {
    const isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
    const isSafari = navigator.userAgent.toLowerCase().indexOf('safari') > -1;
    if (isChrome || isSafari) {
        const link = document.createElement('a');
        link.href = url;
        if (link.download !== undefined) {
            const fileName = url.substring(url.lastIndexOf('/') + 1, url.length);
            link.download = fileName;
        }
        if (document.createEvent) {
            const e = document.createEvent('MouseEvents');
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
 * @param  {Array}  key     进行查询的数组的字段
 * @param  {String} keyWord  查询的关键词
 * @return {Array}           查询的结果
*/
const fuzzyQuery = function (list: Array<any>, key: string, keyWord: String): Array<any> {
    const arr = [];
    for (let i = 0; i < list.length; i++) {
        if (list[i][key].match(keyWord) !== null) {
            arr.push(list[i]);
        }
    }
    return arr;
}

/**
 * 获取url参数 返回一个{}
*/
const getUrlParam = function (): Object {
    const url = document.location.toString();
    let arrObj = url.split('?');
    const params = Object.create(null)
    if (arrObj.length > 1) {
        arrObj = arrObj[1].split('&');
        arrObj.forEach((item: any) => {
            item = item.split('=');
            params[item[0]] = item[1]
        })
    }
    return params;
}

/**
 * 获取cookie值
*/
const getCookie = function (name: string): string {
    const arr = document.cookie.match(new RegExp('(^| )' + name + '=([^;]*)(;|$)'));
    if (arr != null) return unescape(arr[2]);
    return '';
}

/**
 * RGB颜色转16进制
*/
const colorHex = (color: string): string => {
    const that = color;
    const aColor = color.split(',');
    let strHex = '#';
    for (let i = 0; i < aColor.length; i++) {
        let hex = Number(aColor[i]).toString(16);
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
// */
const viewportToPixels = (value: string) => {
    const parts: any = value.match(/([0-9\.]+)(vh|vw)/)
    const q = Number(parts[1])
    let side = 0
    if (parts[2] === 'vw') {
        side = window.innerWidth
    } else {
        side = window.innerHeight
    }
    // side = window[['innerHeight', 'innerWidth'][['vh', 'vw'].indexOf(parts[2])]]
    return side * (q / 100)
}

/**
 * 无刷新去除url参数
*/
const noRefdelUrlParam = (ref: string): string => {
    const url = window.location.href;
    // 若是不包括此参数
    if (url.indexOf(ref) == -1) {
        return url;
    }
    const arr_url = url.split('?');
    const base = arr_url[0];
    const arr_param = arr_url[1].split('&');
    let index = -1;
    for (let i = 0; i < arr_param.length; i++) {
        const paired = arr_param[i].split('=');
        if (paired[0] == ref) {
            index = i;
            break;
        }
    }
    if (index == -1) {
        return url;
    } else {
        arr_param.splice(index, 1);
        // return base + "?" + arr_param.join('&');
        window.history.pushState({}, '0', base + '?' + arr_param.join('&'));
        return base + '?' + arr_param.join('&')
    }
}

/**
 * 根据身份证号获取年龄
*/
const getAge = (id: string) => {
    // 1、先判断身份证号的正确性
    // 2、判断是否在世
    const year = id.substr(6, 4)
    const month = id.substr(10, 2)
    const day = id.substr(12, 2)

    const timeBrth = new Date(`${year}/${month}/${day}`).getTime()
    const timeNow = new Date().getTime()
    const longTime = timeNow - timeBrth
    const days = longTime / (1 * 24 * 60 * 60 * 1000)

    let result = ''
    if (days < 31) {
        result = parseInt(`${days}`) + '天'
    } else if (days < 365) {
        result = `${parseInt(`${days / 30}`)}月${parseInt(`${days % 30}`)}天`
    } else {
        result = `${parseInt(`${days / 365}`)}岁${parseInt(`${days % 365 / 30}`)}月${parseInt(`${days % 365 % 30}`)}天`
    }
    return result
}

/**
 * 根据身份证号获取性别
*/
const getSex = (id: string) => {
    // 1、先判断身份证号的正确性
    const sex = Number(id.substr(16, 1))
    return sex % 2 ? '男' : '女'
}

/**
 * 数字转化为大写金额
*/
const digitUppercase = (n: number): string => {
    const fraction = ['角', '分'];
    const digit = [
        '零', '壹', '贰', '叁', '肆',
        '伍', '陆', '柒', '捌', '玖'
    ];
    const unit = [
        ['元', '万', '亿'],
        ['', '拾', '佰', '仟']
    ];
    n = Math.abs(n);
    let s = '';
    for (let i = 0; i < fraction.length; i++) {
        s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
    }
    s = s || '整';
    n = Math.floor(n);
    for (let i = 0; i < unit[0].length && n > 0; i++) {
        let p = '';
        for (let j = 0; j < unit[1].length && n > 0; j++) {
            p = digit[n % 10] + unit[1][j] + p;
            n = Math.floor(n / 10);
        }
        s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
    }
    return s.replace(/(零.)*零元/, '元')
        .replace(/(零.)+/g, '零')
        .replace(/^整$/, '零元整');
};

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
    viewportToPixels,
    noRefdelUrlParam,
    getAge,
    getSex,
    digitUppercase
}

export default tools;