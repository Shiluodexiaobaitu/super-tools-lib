import { strChineseFirstPY, oMultiDiff } from './_utils';

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
const getFileBase64 = (file: File, cb: (base64: any) => void): void => {
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
 * 节流
 * @param {*} func 执行函数
 * @param {*} delay 节流时间,毫秒
*/
const throttle = function (fn: () => void, delay = 200): () => void {
    let timer: any = null
    return function (...rest) {
        if (!timer) {
            timer = setTimeout(() => {
                // 或者直接 func()
                fn(...rest)
                timer = null
            }, delay)
        }
    }
}

/**
 * 防抖
*/
const debounce = function (fn: () => void, wait: number): () => void {
    let timeout: any = null
    return function (...rest) {
        if (timeout !== null) clearTimeout(timeout)// 如果多次触发将上次记录延迟清除掉
        timeout = setTimeout(() => {
            // 或者直接 fn()
            fn(...rest)
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
const fuzzyQuery = function (list: Array<any>, key: string, keyWord: string): Array<any> {
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
const getUrlParam = function () {
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
 * 封装cookie增删改查的函数
 */
const cookie = {
    /**
     * 设置cookie属性及时间
     * 注意：只能逐条设置
     * @param {*} key 属性名
     * @param {*} value 属性值
     * @param {*} expTime 过期时间
     * @returns 
     */
    set: (key: string, value: string, expTime?: number) => {
        document.cookie = key + '=' + value + ';max-age=' + expTime;
    },

    /**
     * 删除cookie属性
     * @param {*} key 被删的属性
     */
    delete: (key: string) => {
        document.cookie = key + '=' + '' + ';max-age=' + -1;
    },

    /**
     * 查询cookie属性
     * 使用：get('hobby', function(data){console.log(data)})
     * @param {*} key 
     * @param {*} cb 
     * @returns 
     */
    get: (key: string) => {
        const CookiesArray = document.cookie.split('; ');
        let value: string | undefined = undefined
        for (let i = 0; i < CookiesArray.length; i++) {
            const CookieItem = CookiesArray[i];
            const CookieItemArray = CookieItem.split('=');

            if (CookieItemArray[0] == key) {
                value = CookieItemArray[1]
            }
        }
        return value
    }
}

/**
 * RGB颜色转16进制
*/
const colorHex = (color: string): string => {
    const that = color;
    const aColor = color
        .replace(/rgb?\(/, '')
        .replace(/\)/, '')
        .replace(/[\s+]/g, '')
        .split(',');
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
 * 16进制颜色转RGBA
 * @param {str} 16进制颜色值
 * @param {alpa} 
 * @return {string}
*/
const hexToRgba = (str: string, alpa: number): string => {
    alpa = alpa === undefined ? 1 : alpa;
    if (!str) return;
    let color = str.toLowerCase();
    const pattern = /^#([0-9|a-f]{3}|[0-9|a-f]{6})$/;
    if (color && pattern.test(color)) {
        if (color.length === 4) {
            // 将三位转换为六位
            color = '#' + color[1] + color[1] + color[2] + color[2] + color[3] + color[3];
        }
        //处理六位的颜色值
        const colorNew = [];
        for (let i = 1; i < 7; i += 2) {
            colorNew.push(parseInt('0x' + color.slice(i, i + 2)));
        }
        colorNew.push(alpa);

        return 'rgba(' + colorNew.join(',') + ')';
    }
    return color;
}

/**
 * rgba颜色转16进制
*/
const rgbaToHex = (color): string => {
    const values = color
        .replace(/rgba?\(/, '')
        .replace(/\)/, '')
        .replace(/[\s+]/g, '')
        .split(',');
    const a = parseFloat(values[3] || 1),
        r = Math.floor(a * parseInt(values[0]) + (1 - a) * 255),
        g = Math.floor(a * parseInt(values[1]) + (1 - a) * 255),
        b = Math.floor(a * parseInt(values[2]) + (1 - a) * 255);
    return '#' +
        ('0' + r.toString(16)).slice(-2) +
        ('0' + g.toString(16)).slice(-2) +
        ('0' + b.toString(16)).slice(-2);
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

/**
 * 动态引入js
*/
const injectScript = (src: string) => {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = src;
    const t = document.getElementsByTagName('script')[0];
    t.parentNode.insertBefore(s, t);
}

/**
 * 汉字转字母
*/
const sinogToLetter = (str: string) => {

    function checkCh(ch) {
        const uni = ch.charCodeAt(0);
        //如果不在汉字处理范围之内,返回原字符,也可以调用自己的处理函数    
        if (uni > 40869 || uni < 19968)
            return ch; //dealWithOthers(ch);    
        //检查是否是多音字,是按多音字处理,不是就直接在strChineseFirstPY字符串中找对应的首字母    
        return (oMultiDiff[uni] ? oMultiDiff[uni] : (strChineseFirstPY.charAt(uni - 19968)));
    }

    function mkRslt(arr: Array<any>) {
        let arrRslt = [''];
        for (let i = 0, len = arr.length; i < len; i++) {
            const str = arr[i];
            const strlen = str.length;
            if (strlen == 1) {
                for (let k = 0; k < arrRslt.length; k++) {
                    arrRslt[k] += str;
                }
            } else {
                const tmpArr = arrRslt.slice(0);
                arrRslt = [];
                for (let k = 0; k < strlen; k++) {
                    //复制一个相同的arrRslt    
                    const tmp = tmpArr.slice(0);
                    //把当前字符str[k]添加到每个元素末尾    
                    for (let j = 0; j < tmp.length; j++) {
                        tmp[j] += str.charAt(k);
                    }
                    //把复制并修改后的数组连接到arrRslt上    
                    arrRslt = arrRslt.concat(tmp);
                }
            }
        }
        return arrRslt.join();
    }

    if (typeof (str) != 'string')
        throw new Error('函数makePy需要字符串类型参数!');
    const arrResult = [];
    //将字符串转码后转为数组  
    for (let i = 0, len = str.length; i < len; i++) {
        const ch = str.charAt(i);
        arrResult.push(checkCh(ch));
    }
    return mkRslt(arrResult);
}

/**
 * @description: 返回设计稿上px在不同屏幕下的适配尺寸
 * @param {number} px 
 * @param {*} draft 设计稿宽度
 * @return {*}
 */
const getFitSize = (px: number, draft = 750): number => {
    const scale = document.body.clientWidth / draft;
    return Math.floor((scale * px))
}

/**
 * @description: 检测密码强度
 * @param {*} str
 * @return {*}  1：密码弱 2：密码中等 3：密码强 4：密码很强
 */
const checkPassWord = (str: string): number => {
    let level = 0;
    if (str.length < 6) {
        return level
    }
    if (/[0-9]/.test(str)) {
        level++
    }
    if (/[a-z]/.test(str)) {
        level++
    }
    if (/[A-Z]/.test(str)) {
        level++
    }
    if (/\W/.test(str)) {
        level++
    }
    return level
}


/**
 * @desc dom转img
 * @param {*} id domID
 * @param {*} name 图片名
 * @param {*} cb 成功回调
 * @return {*}
 */
// 依赖库版本： "html2canvas": "^1.4.1",
//  export const domToImg = (id, name, cb) => {
// 	window.pageYoffset = 0
// 	document.documentElement.scrollTop = 0
// 	document.body.scrollTop = 0
// 	const node = document.getElementById(id)
// 	const width = node.offsetWidth //dom宽
// 	const height = node.offsetHeight //dom高
// 	const scale = 2 //放大倍数 这个相当于清晰度 调大一点更清晰一点
// 	html2canvas(node, {
// 		width: width,
// 		heigth: height,
// 		backgroundColor: '#F5F7FB', //背景颜色 为null是透明
// 		dpi: window.devicePixelRatio * 2, //按屏幕像素比增加像素
// 		scale: scale,
// 		X: 0,
// 		Y: 0,
// 		scrollX: -3, //如果左边多个白边 设置该偏移-3 或者更多
// 		scrollY: -10,
// 		useCORS: true, //是否使用CORS从服务器加载图像 !!!
// 		allowTaint: true, //是否允许跨域图像污染画布  !!!
// 	}).then((canvas) => {
// 		const url = canvas.toDataURL() //这里上面不设值cors会报错
// 		const a = document.createElement('a') //创建一个a标签 用来下载
// 		a.download = name || '图片.png'
// 		const event = new MouseEvent('click') //增加一个点击事件
// 		//如果需要下载的话就加上这两句
// 		a.href = url //此处的url为base64格式的图片资源
// 		a.dispatchEvent(event) //触发a的单击事件 即可完成下载

// 		if (cb && typeof cb === 'function') {
// 			cb()
// 		}
// 	})
// }

export {
    guid,
    getFileBase64,
    throttle,
    debounce,
    fileDownload,
    fuzzyQuery,
    getUrlParam,
    cookie,
    colorHex,
    viewportToPixels,
    noRefdelUrlParam,
    getAge,
    getSex,
    digitUppercase,
    hexToRgba,
    rgbaToHex,
    injectScript,
    sinogToLetter,
    getFitSize,
    checkPassWord
}