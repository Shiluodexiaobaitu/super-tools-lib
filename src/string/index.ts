/*
 * @Author: zhangce
 * @Date: 2021-08-16 18:09:23
 * @Email: zhangce@fengmap.com
 * @LastEditTime: 2023-03-23 17:37:26
 * @LastEditors: 张策
 * @LastEditorsEmail: zhangce@fengmap.com
 * @Description: 
 *  Copyright: Copyright 2014 - 2022, FengMap, Ltd. All rights reserved.
 */

/**
 * 字符串首位是字母转大写
 * @param {string} gname
 * @return {*}
 */
const initialToCapitali = (gname: string): string => {
    const pattern = new RegExp('[A-Za-z]+')
    const str = gname.substr(0, 1)
    if (pattern.test(str)) {
        return `${str.toUpperCase()}${gname.substr(1)}`
    } else {
        const str1 = gname.substr(-1)
        return `${gname.substr(0, gname.length - 1)}${str1.toUpperCase()}`
    }
}

/**
 * 传入字符串，和重复次数，返回结果字符串
 * @param {string} str
 * @param {number} n
 * @return {*}
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
 * @param {string} str
 * @return {*}
 */
const trim = (str: string): string => {
    return str.replace(/^\s+(.*?)\s+$/g, '$1')
}

/**
 * 计算文字宽度
 * @param {string} text
 * @param {string} font '14px sans-serif' 字号 字体
 * @return {*}
 */
const getTextWidth = (text: string, font: string): number => {
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')
    context.font = font
    const metrics = context.measureText(text)
    return metrics.width
}

/**
 * 字符替换
 * @param {*} str 表示将要替换的字符串
 * @param {*} oldChar 表示你将要替换的字符
 * @param {*} newChar 表示你想要替换的字符
 * @return {*}
 */
const transFormat = (str: string, oldChar: string, newChar: string) => {
    const reg = new RegExp(oldChar, 'g') // g表示全部替换，默认替换第一个
    str = str.replace(reg, newChar)
    return str
}

/**
 * 反转字符串
 * @param {*} str
 * @return {*}
 */
const strInversion = (str: string) => {
    str = str + ''
    let newStr = ''
    newStr = str.split('').reverse().join('')
    return newStr
}

/**
 * 驼峰转下划线
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

/**
 * 将3位数颜色转换为6位数颜色
 * @param {string} color
 * @return {*}
 */
const toFullHexColor = (color: string): string => {
    return `#${(color.startsWith('#') ? color.slice(1) : color)
        .split('')
        .map((c) => `${c}${c}`)
        .join('')}`
}

/**
 * 解码JWT令牌
 * @param {string} token
 * @return {*}
 */
const decode = (token: string): string => {
    return decodeURIComponent(
        atob(token.split('.')[1].replace('-', '+').replace('_', '/'))
            .split('')
            .map((c) => `%${('00' + c.charCodeAt(0).toString(16)).slice(-2)}`)
            .join(''),
    )
}

/**
 * 转换字母以关联表情符号
 * @param {string} c
 * @return {*}
 */
const letterToEmoji = (c: string): string => String.fromCodePoint(c.toLowerCase().charCodeAt(0) + 127365)

/**
 * 将字符串转换为PascalCase
 * @param {string} str
 * @return {*}
 */
const toPascalCase = (str: string): string => (str.match(/[a-zA-Z0-9]+/g) || []).map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`).join('')

/**
 * 删除字符串中的空格
 * @param {string} str
 * @return {*}
 */
const removeSpaces = (str: string): string => str.replace(/\s/g, '')

/**
 * 替换指定位置字符串内容
 * @param {string} str 
 * @param {array} range 区间
 * @param {string} mask 替换内容
 * @return {*}
 */
const replaceText = (str: string, range: [number, number] | [number], mask: string): string => {

    let old = ''
    if (range.length === 2) {
        old = `${str}`.slice(range[0], range[1])
    } else {
        old = `${str}`.slice(0, range[0])
    }
    const a = []
    a.length = old.length
    a.fill(mask).join('')

    return transFormat(str, old, a.fill('*').join(''))
}

export {
    initialToCapitali,
    repeat,
    trim,
    getTextWidth,
    transFormat,
    strInversion,
    toLine,
    toFullHexColor,
    decode,
    letterToEmoji,
    toPascalCase,
    removeSpaces,
    replaceText,
}