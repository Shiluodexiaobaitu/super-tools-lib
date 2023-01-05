/*
 * @Author: zhangce
 * @Date: 2021-08-10 15:07:24
 * @LastEditors: zhangce
 * @LastEditTime: 2023-01-05 10:48:27
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

/**
 * 按字母排序
 * @param {*} data 
 * @param {*} keyword
 * @param {*} ascen 正序/逆序
*/
const alphabeticSort = (_data: any[], keyword: string, ascen = true): any[] => {
    const data = [..._data]
    if (ascen) {
        return data.sort((a, b) => a[keyword] < b[keyword] ? -1 : a[keyword] > b[keyword] ? 1 : 0)
    } else {
        return data.sort((a, b) => a[keyword] > b[keyword] ? -1 : a[keyword] < b[keyword] ? 1 : 0)
    }

}

/**
 * @desc: 将对象数组转换为单个对象
 * @param {*} T
 * @param {*} any
 * @param {*} K
 * @param {*} T
 * @return {*}
 */
const arrToObject = <T extends Record<string, any>, K extends keyof T>(arr: T[], key: K): Record<string, T> => {
    return Object.fromEntries(arr.map((it) => [it[key], it]))
}

/**
 * @desc: 将字符串数组转换为数字
 * @param {string} arr
 * @return {*}
 */
const toNumbers = (arr: string[]): number[] => arr.map(Number)

/**
 * @desc: 按数组对象中的属性计数
 * @param {*} T
 * @param {*} string
 * @param {*} K
 * @param {*} number
 * @return {*}
 */
const countBy = <T extends Record<string, string>, K extends keyof T>(arr: T[], prop: K): Record<string, number> => (
    arr.reduce((prev, curr) => ((prev[curr[prop]] = ++prev[curr[prop]] || 1), prev), {} as Record<string, number>)
)

/**
 * @desc: 查找数组中最大项的索引
 * @param {number} arr
 * @return {*}
 */
const indexOfMax = (arr: number[]): number => {
    return arr.reduce((prev, curr, i, a) => (curr > a[prev] ? i : prev), 0)
}

/**
 * @desc: 查找数组中最小项的索引
 * @param {number} arr
 * @return {*}
 */
const indexOfMin = (arr: number[]): number => {
    return arr.reduce((prev, curr, i, a) => (curr < a[prev] ? i : prev), 0)
}


export {
    arrayUnique,
    arrayNonRepeatfy,
    aLineUnique,
    bubbleSort,
    last,
    alphabeticSort,
    arrToObject,
    toNumbers,
    countBy,
    indexOfMax,
    indexOfMin,
}