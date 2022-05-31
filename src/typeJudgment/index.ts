/*
 * @Author: zhangce
 * @Date: 2021-08-16 18:09:23
 * @LastEditors: zhangce
 * @LastEditTime: 2022-05-31 13:45:14
 * @Description: 
 */
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

/**
 * @description: 是否为null
 * @param {*} o
 * @return {*}
 */
const isNull = (o: any): boolean => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Null'
}

/**
 * @description: 是否undefined
 * @param {*} o
 * @return {*}
 */
const isUndefined = (o: any): boolean => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Undefined'
}

/**
 * @description: 是否时间
 * @param {*} o
 * @return {*}
 */
const isDate = (o: any): boolean => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Date'
}

/**
 * @description: 是否正则
 * @param {*} o
 * @return {*}
 */
const isRegExp = (o: any): boolean => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'RegExp'
}

/**
 * @description: 是否错误对象
 * @param {*} o
 * @return {*}
 */
const isError = (o: any): boolean => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Error'
}

/**
 * @description: 是否Symbol函数
 * @param {*} o
 * @return {*}
 */
const isSymbol = (o: any): boolean => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Symbol'
}

/**
 * @description: 是否Promise对象
 * @param {*} o
 * @return {*}
 */
const isPromise = (o: any): boolean => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Promise'
}


/**
 * 返回类型
*/
const returnType = (o: any): any => {
    if (Number.isNaN(o)) return 'NaN'
    return Object.prototype.toString.call(o).slice(8, -1)
}

/**
 * @description: 判断浏览器是否支持webP格式图片
 * @param {*}
 * @return {*} 
 */
const isSupportWebP = () => {
    return !![].map && document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0;
}


export {
    isBase64,
    isArray,
    isString,
    isFunction,
    isObject,
    isNumber,
    isWeiXin,
    isNull,
    isUndefined,
    isDate,
    isRegExp,
    isError,
    isSymbol,
    isPromise,
    returnType,
    isSupportWebP
}