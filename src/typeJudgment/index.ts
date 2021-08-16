/**
 * base64类型验证
*/
const isBase64 = (base64: any): boolean => {
    return /data:image\/.+;base64,/.test(base64);
}

/**
 * 数组类型验证
*/
const isArray = (arr: any): boolean => {
    return Array.isArray(arr)
}

/**
 * 字符串类型验证
*/
const isString = (str: any): boolean => {
    return typeof str === 'string'
}

/**
 * 函数类型验证
*/
const isFunction = (fn: any): boolean => {
    if (fn && typeof fn === 'function') {
        return true
    }
    return false
}

/**
 * 对象类型验证
*/
const isObject = (obj: any): boolean => {
    return Object.prototype.toString.call(obj) === '[object Object]'
}

/**
 * 数字类型验证
*/
const isNumber = (num: any): boolean => {
    if (isNaN(num)) return false
    return typeof num === 'number'
}

/**
 * 判断是否在微信中打开
*/
const isWeiXin = (): boolean => {
    const ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('micromessenger') != -1) {
        return true;
    } else {
        return false;
    }
}


const typeJudgment = {
    isBase64,
    isArray,
    isString,
    isFunction,
    isObject,
    isNumber,
    isWeiXin
}

export default typeJudgment;