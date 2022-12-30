/*
 * @Author: zhangce
 * @Date: 2021-08-16 18:09:23
 * @LastEditors: zhangce
 * @LastEditTime: 2022-12-30 11:37:13
 * @Description: 
 */
/**
 * base64类型验证
*/
const isBase64 = (base64: string): boolean => {
    return /data:image\/.+;base64,/.test(base64)
}

/**
 * 数组类型验证
*/
const isArray = (arr: unknown): boolean => {
    return Array.isArray(arr)
}

/**
 * 字符串类型验证
*/
const isString = (str: unknown): boolean => {
    return typeof str === 'string'
}

/**
 * 函数类型验证
*/
const isFunction = (fn: unknown): boolean => {
    if (fn && typeof fn === 'function') {
        return true
    }
    return false
}

/**
 * 对象类型验证
*/
const isObject = (obj: unknown): boolean => {
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
    const ua = navigator.userAgent.toLowerCase()
    if (ua.indexOf('micromessenger') !== -1) {
        return true
    } else {
        return false
    }
}

/**
 * @description: 是否为null
 * @param {*} o
 * @return {*}
 */
const isNull = (o: unknown): boolean => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Null'
}

/**
 * @description: 是否undefined
 * @param {*} o
 * @return {*}
 */
const isUndefined = (o: unknown): boolean => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Undefined'
}

/**
 * @description: 是否时间
 * @param {*} o
 * @return {*}
 */
const isDate = (o: unknown): boolean => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Date'
}

/**
 * @description: 是否正则
 * @param {*} o
 * @return {*}
 */
const isRegExp = (o: unknown): boolean => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'RegExp'
}

/**
 * @description: 是否错误对象
 * @param {*} o
 * @return {*}
 */
const isError = (o: unknown): boolean => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Error'
}

/**
 * @description: 是否Symbol函数
 * @param {*} o
 * @return {*}
 */
const isSymbol = (o: unknown): boolean => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Symbol'
}

/**
 * @description: 是否Promise对象
 * @param {*} o
 * @return {*}
 */
const isPromise = (o: unknown): boolean => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Promise'
}


/**
 * 返回类型
*/
const returnType = (o: unknown): unknown => {
    if (Number.isNaN(o)) return 'NaN'
    return Object.prototype.toString.call(o).slice(8, -1)
}

/**
 * @description: 判断浏览器是否支持webP格式图片
 * @param {*}
 * @return {*} 
 */
const isSupportWebP = () => {
    return !![].map && document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') === 0
}

/**
 * @description: 判断是否为移动端
 * @return {*}
 */
const isMobile = (): boolean => {
    if (window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
        return true // 移动端
    } else {
        return false // PC端
    }
}

/**
 * 判断是否安卓移动设备访问
*/
const isAndroidMobileDevice = (): boolean => {
    return /android/i.test(navigator.userAgent.toLowerCase())
}

/**
 * 判断是否苹果移动设备访问
*/
const isAppleMobileDevice = (): boolean => {
    return /iphone|ipod|ipad|Macintosh/i.test(navigator.userAgent.toLowerCase())
}

/**
 * 判断是否是图片链接
*/
const isImg = (path: string): boolean => {
    return /\w.(png|jpg|jpeg|svg|webp|gif|bmp)$/i.test(path)
}

/**
 * 判断是否为url链接
*/
const isUrl = (path: string): boolean => {
    if (!path.startsWith('http')) {
        return false
    }
    try {
        const url = new URL(path)
        return !!url
    } catch (error) {
        return false
    }
}

/**
 * @desc: 判断两个对象是否拥有一样的键
 * @param {Record} a
 * @param {*} unknown
 * @param {Record} b
 * @param {*} unknown
 * @return {*}
 */
const isObjectKeyEqual = (a: Record<string, unknown>, b: Record<string, unknown>): boolean => {
    const aKeyNames = Object.getOwnPropertyNames(a)
    const bKeyNames = Object.getOwnPropertyNames(b)
    if (aKeyNames.length !== bKeyNames.length) {
        return false
    }
    for (let i = 0; i < aKeyNames.length; i++) {
        if (!bKeyNames.includes(aKeyNames[i])) {
            return false
        }
    }
    return true
}

/**
 * @desc: 判断一个对象内是否包含指定的键
 * @param {Record} obj
 * @param {*} unknown
 * @param {string} key
 * @return {*}
 */
const isObjectExistsKey = (obj: Record<string, unknown>, key: string): boolean => {
    const objKeyNames = Object.getOwnPropertyNames(obj)
    return objKeyNames.includes(key)
}

/**
 * @desc: 判断a对象是否包含b对象的键
 * @param {Record} a
 * @param {*} unknown
 * @param {Record} b
 * @param {*} unknown
 * @return {*}
 */
const isObjectIncludeSpecifiedKey = (a: Record<string, unknown>, b: Record<string, unknown>): boolean => {
    const aKeyNames = Object.getOwnPropertyNames(a)
    const bKeyNames = Object.getOwnPropertyNames(b)
    for (let i = 0; i < bKeyNames.length; i++) {
        if (!aKeyNames.includes(bKeyNames[i])) {
            return false
        }
    }
    return true
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
    isSupportWebP,
    isMobile,
    isAndroidMobileDevice,
    isAppleMobileDevice,
    isImg,
    isUrl,
    isObjectKeyEqual,
    isObjectExistsKey,
    isObjectIncludeSpecifiedKey,
}