/*
 * @Author: zhangce
 * @Date: 2021-08-16 18:09:23
 * @LastEditors: zhangce
 * @LastEditTime: 2023-02-27 15:31:20
 * @Description: 
 */


/**
 * base64类型验证
 * @param {string} base64
 * @return {*}
 */
const isBase64 = (base64: string): boolean => {
    return /data:image\/.+;base64,/.test(base64)
}

/**
 * 数组类型验证
 * @param {unknown} arr
 * @return {*}
 */
const isArray = (arr: unknown): boolean => {
    return Array.isArray(arr)
}

/**
 * 字符串类型验证
 * @param {unknown} str
 * @return {*}
 */
const isString = (str: unknown): boolean => {
    return typeof str === 'string'
}

/**
 * 函数类型验证
 * @param {unknown} fn
 * @return {*}
 */
const isFunction = (fn: unknown): boolean => typeof fn === 'function'

/**
 * 对象类型验证
 * @param {unknown} obj
 * @return {*}
 */
const isObject = (obj: unknown): boolean => {
    return Object.prototype.toString.call(obj) === '[object Object]'
}

/**
 * 数字类型验证
 * @param {any} num
 * @return {*}
 */
const isNumber = (num: unknown): num is number => {
    return typeof num === 'number' && !isNaN(num)
}

/**
 * 判断是否在微信中打开
 * @param {*} boolean
 * @return {*}
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
 * 检测是否为null
 * @param {*} o
 * @return {*}
 */
const isNull = (o: unknown): boolean => {
    return o === null
}

/**
 * 检测是否undefined
 * @param {*} o
 * @return {*}
 */
const isUndefined = (o: unknown): boolean => {
    return o === undefined
}

/**
 * 是否时间
 * @param {*} o
 * @return {*}
 */
const isDate = (o: unknown): boolean => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Date'
}

/**
 * 是否正则
 * @param {*} o
 * @return {*}
 */
const isRegExp = (o: unknown): boolean => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'RegExp'
}

/**
 * 是否错误对象
 * @param {*} o
 * @return {*}
 */
const isError = (o: unknown): boolean => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Error'
}

/**
 * 是否Symbol函数
 * @param {*} o
 * @return {*}
 */
const isSymbol = (o: unknown): boolean => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Symbol'
}

/**
 * 是否Promise对象
 * @param {*} o
 * @return {*}
 */
const isPromise = (o: unknown): boolean => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Promise'
}

/**
 * 返回类型
 * @param {unknown} o
 * @return {*}
 */
const returnType = (o: unknown): unknown => {
    if (Number.isNaN(o)) return 'NaN'
    return Object.prototype.toString.call(o).slice(8, -1)
}

/**
 * 判断浏览器是否支持webP格式图片
 * @param {*}
 * @return {*} 
 */
const isSupportWebP = () => {
    return !![].map && document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') === 0
}

/**
 * 判断是否为移动端
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
 * @param {*} boolean
 * @return {*}
 */
const isAndroidMobileDevice = (): boolean => {
    return /android/i.test(navigator.userAgent.toLowerCase())
}

/**
 * 判断是否苹果移动设备访问
 * @param {*} boolean
 * @return {*}
 */
const isAppleMobileDevice = (): boolean => {
    return /iphone|ipod|ipad|Macintosh/i.test(navigator.userAgent.toLowerCase())
}

/**
 * 判断是否是图片链接
 * @param {string} path
 * @return {*}
 */
const isImg = (path: string): boolean => {
    return /\w.(png|jpg|jpeg|svg|webp|gif|bmp)$/i.test(path)
}

/**
 * 判断是否为url链接
 * @param {string} path
 * @return {*}
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
 * 判断两个对象是否拥有一样的键
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
 * 判断一个对象内是否包含指定的键
 * @param {Record} obj
 * @param {*} unknown
 * @param {string} key
 * @return {*}
 */
const isObjectExistsKey = (obj: Record<string, unknown>, key: string): boolean => key in obj

/**
 * 判断a对象是否包含b对象的键
 * @param {Record} a
 * @param {*} unknown
 * @param {Record} b
 * @param {*} unknown
 * @return {*}
 */
const isObjectIncludeSpecifiedKey = (a: Record<string, unknown>, b: Record<string, unknown>): boolean => {
    const aKeyNames = Object.getOwnPropertyNames(a)
    const bKeyNames = Object.getOwnPropertyNames(b)
    // for (let i = 0; i < bKeyNames.length; i++) {
    //     if (!aKeyNames.includes(bKeyNames[i])) {
    //         return false
    //     }
    // }
    // return true
    return bKeyNames.every(key => aKeyNames.includes(key))
}


/**
 * 判断对象是否为空
 * @param {Record} obj
 * @param {*} unknown
 * @return {*}
 */
const isEmptyObject = (obj: Record<string, unknown>): boolean => {
    if (!obj || typeof obj !== 'object' || Array.isArray(obj))
        return false
    return !Object.keys(obj).length
}

/**
 * 检查数组是否为空
 * @param {*} T
 * @return {*}
 */
const isEmptyArray = <T>(arr: T[]): boolean => Array.isArray(arr) && !arr.length

/**
 * 检测暗模式
 * @return {*}
 */
const isDarkMode = () => {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
}

/**
 * 判断是否是基本数据类型
 * @param {unknown} val
 * @return {*}
 */
const isBasicType = (val: unknown): boolean => {
    const t = Object.prototype.toString.call(val)
    if (t === '[object String]' ||
        t === '[object Boolean]' ||
        t === '[object Number]' ||
        t === '[object Null]' ||
        t === '[object Undefined]' ||
        t === '[object Symbol]') {
        return true
    }
    return false
}

/**
 * 检查字符串是否为十六进制颜色
 * @param {string} color
 * @return {*}
 */
const isHexColor = (color: string): boolean => /^#([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i.test(color)

/**
 * 检查是否是Map对象
 * @param {*} v
 * @return {*}
 */
const isMap = (v: unknown) => returnType(v) === 'Map'

/**
 * 检查是否是Set对象
 * @param {unknown} v
 * @return {*}
 */
const isSet = (v: unknown) => returnType(v) === 'Set'

/**
 * 检测数字是否为奇数
 * @param {number} v
 * @return {*}
 */
const isOdd = (v: number) => !!(v & 1)

/**
 * 检测数字是否为偶数
 * @param {number} v
 * @return {*}
 */
const isEven = (v: number) => !(v & 1)

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
    isEmptyObject,
    isEmptyArray,
    isDarkMode,
    isHexColor,
    isBasicType,
    isMap,
    isSet,
    isOdd,
    isEven,
}