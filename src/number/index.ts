/*
 * @Author: zhangce
 * @Date: 2022-01-14 17:50:51
 * @LastEditors: zhangce
 * @LastEditTime: 2022-01-21 12:25:00
 * @Description: 
 */
import { accAdd, accSub, accMul, accDiv } from './floatPares';


/**
 * @description: 千分位加逗号
 * @param {*} price 
 * @return {*}
 */
const formatPrice = (price, sign = ',') => {
    return String(price).replace(/\B(?=(\d{3})+(?!\d))/g, sign);
}

const _number = {
    accAdd, accSub, accMul, accDiv,
    formatPrice
}

export default _number
