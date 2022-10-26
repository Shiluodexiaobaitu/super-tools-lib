/*
 * @Author: zhangce
 * @Date: 2021-08-10 15:07:24
 * @LastEditors: zhangce
 * @LastEditTime: 2022-10-21 13:42:33
 * @Description: 
 */
import { bubbleSort } from './_sort'

/** 
  * 数组去重复 利用ES6 Set去重（ES6中最常用）
 */
const arrayUnique = (arr: Array<any>): Array<any> => {
    return Array.from(new Set(arr))
    // var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
}

/**
 * 利用Map数据结构去重
*/
const arrayNonRepeatfy = (arr: Array<any>): Array<any> => {
    const map = new Map()
    const array = []  // 数组用于返回结果
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {  // 如果有该key值
            map.set(arr[i], true)
        } else {
            map.set(arr[i], false)   // 如果没有该key值
            array.push(arr[i])
        }
    }
    return array
}

/**
 * 一行代码数组去重复
*/
const aLineUnique = (arr: Array<any>): Array<any> => {
    return [...new Set(arr)]
}

/**
 * 返回数组中最后一项
 * @param {*} array
 * @return {*}
 */
const last = (array: any[]): any => {
    const length = array === null ? 0 : array.length
    return length ? array[length - 1] : undefined
}



export {
    arrayUnique,
    arrayNonRepeatfy,
    aLineUnique,
    bubbleSort,
    last,
}