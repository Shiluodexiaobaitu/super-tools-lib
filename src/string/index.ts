/*
 * @Author: zhangce
 * @Date: 2021-08-16 18:09:23
 * @Email: zhangce@fengmap.com
 * @LastEditTime: 2022-09-13 14:01:31
 * @LastEditors: zhangce
 * @LastEditorsEmail: zhangce@fengmap.com
 * @Description: 
 *  Copyright: Copyright 2014 - 2022, FengMap, Ltd. All rights reserved.
 */

/**
  * 字符串首位是字母转大写
*/
const initialToCapitali = (gname: string): string => {
    const pattern = new RegExp('[A-Za-z]+');
    const str = gname.substr(0, 1);
    if (pattern.test(str)) {
        return `${str.toUpperCase()}${gname.substr(1)}`
    } else {
        const str1 = gname.substr(-1);
        return `${gname.substr(0, gname.length - 1)}${str1.toUpperCase()}`
    }
}

/**
* 传入字符串，和重复次数，返回结果字符串
* @return {string} 
* @param{string, number} str n 
* @example
* loadImg(url).then(console.log('加载完成')).catch(err => {console.log(err)})
*/
const repeat = (str: string, n: number): string => {
    let res = ''
    while (n) {
        if (n % 2 === 1) res += str
        if (n > 1) str += str
        n >>= 1
    }
    return res
}

/**
 * 去除字符串首尾空格
*/
const trim = (str: string): string => {
    return str.replace(/^\s+(.*?)\s+$/g, '$1');
}

/**
 * @description: 计算文字宽度
 * @param {string} text
 * @param {any} font
 * @return {*}
 */
const getTextWidth = (text: string, font: any): number => {
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d');
    context.font = font;
    const metrics = context.measureText(text);
    return metrics.width;
}

/**
 * @description: 字符替换
 * @param {*} str 表示将要替换的字符串
 * @param {*} oldChar 表示你将要替换的字符
 * @param {*} newChar 表示你想要替换的字符
 * @return {*}
 */
const transFormat = (str, oldChar, newChar) => {
    const reg = new RegExp(oldChar, 'g') // g表示全部替换，默认替换第一个
    str = str.replace(reg, newChar)
    return str
}

/**
 * @description: 反转字符串
 * @param {*} str
 * @return {*}
 */
const strInversion = str => {
    str = str + '';
    let newStr = [];
    newStr = str.split('').reverse().join('');
    return newStr
}

/**
 * @desc: 驼峰转下划线
 * @param {*} val
 * @param {*} isLowercase 是否转换为小写字母 默认值 true
 * @return {*}
 */
const toLine = (val: string, isLowercase = true): string => {
    const text = val.replace(/([A-Z])/g, '_$1')
    if (isLowercase) {
        return text.toLowerCase()
    }
    return text.toUpperCase()
}

export {
    initialToCapitali,
    repeat,
    trim,
    getTextWidth,
    transFormat,
    strInversion,
    toLine,
}