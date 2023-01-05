/*
 * @Author: zhangce
 * @Date: 2022-01-14 17:50:51
 * @LastEditors: zhangce
 * @LastEditTime: 2023-01-05 10:45:58
 * @Description: 
 */
import { accAdd, accSub, accMul, accDiv } from './floatPares'


/**
 * @description: 千分位加逗号
 * @param {*} price 
 * @return {*}
 */
const formatPrice = (price, sign = ',') => {
    return String(price).replace(/\B(?=(\d{3})+(?!\d))/g, sign)
}

/**
 * 小数取整
 * @param {数字} num
 * @param {第几位小数四舍五入} place
*/
const smallRounding = (num: number, place: number): number => {
    const p = '10000000000000000000000000000'
    const n = Number(p.slice(0, place))
    return Math.round(num * n) / n
}

/**
 * @desc: 在给定范围内创建数字数组
 * @param {number} min
 * @param {number} max
 * @return {*}
 */
const range = (min: number, max: number): number[] =>
    Array(max - min + 1)
        .fill(0)
        .map((_, i) => min + i)


/**
 * @desc: 从数组中查找最接近的数字
 * @param {number} arr
 * @param {number} n
 * @return {*}
 */
const closest = (arr: number[], n: number): number => {
    return arr.reduce((prev, curr) => (Math.abs(curr - n) < Math.abs(prev - n) ? curr : prev))
}


export {
    accAdd,
    accSub,
    accMul,
    accDiv,
    formatPrice,
    smallRounding,
    range,
    closest,
}
