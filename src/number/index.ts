/*
 * @Author: zhangce
 * @Date: 2022-01-14 17:50:51
 * @LastEditors: zhangce
 * @LastEditTime: 2022-10-21 13:59:48
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

export {
    accAdd,
    accSub,
    accMul,
    accDiv,
    formatPrice,
    smallRounding,
}
