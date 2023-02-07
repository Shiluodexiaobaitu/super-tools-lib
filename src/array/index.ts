/*
 * @Author: zhangce
 * @Date: 2021-08-10 15:07:24
 * @LastEditors: zhangce
 * @LastEditTime: 2023-02-03 15:05:17
 * @Description: 
 */

/**
 * @desc: 冒泡排序
 * @param {*} arr
 * @return {*}
 */
const bubbleSort = (arr) => {
    // 两个数据进行交换
    function exchange(v1, v2) {
        const temp = arr[v1]
        arr[v1] = arr[v2]
        arr[v2] = temp
    }

    // 数组长度
    const length = arr.length

    for (let i = length - 1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                exchange(j, j + 1)
            }
        }
    }

    // 返回最终数组
    return arr
}

/**
 * @desc: 数组去重
 * @param {*} T
 * @param {*} field 对比字段
 * @return {*}
 */
const arrayUnique = <T>(arr: T[], field: string | number): T[] => {

    const _newKeys = {}
    arr.forEach(item => {
        if (!_newKeys[item[field]]) {
            _newKeys[item[field]] = item
        }
    })

    return Object.values(_newKeys)

    // return Array.from(new Set(arr))
    // var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
}

// /**
//  * @desc: 数组去重
//  * @param {*} T
//  * @param {*} field 对比字段
//  * @return {*}
//  */
// const arrayUnique = <T>(arr: T[], field: string | number): T[] => {

//     const _newKeys = {}
//     arr.forEach(item => {
//         if (!_newKeys[item[field]]) {
//             _newKeys[item[field]] = item
//         }
//     })

//     return Object.values(_newKeys)

//     // return Array.from(new Set(arr))
//     // var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
// }

// /**
//  * @desc: 数组去重复 利用ES6 Set去重（ES6中最常用）
//  * @param {*} T
//  * @return {*}
//  */
// const arrayUnique = <T>(arr: T[]): T[] => {
//     return Array.from(new Set(arr))
//     // var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
// }

/**
 * @desc: 利用Map数据结构去重
 * @param {*} T
 * @return {*}
 */
const arrayNonRepeatfy = <T>(arr: T[]): T[] => {
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
 * @desc: 一行代码数组去重复
 * @param {*} T
 * @return {*}
 */
const aLineUnique = <T>(arr: T[]): T[] => {
    return [...new Set(arr)]
}

/**
 * @desc: 返回数组中最后一项
 * @param {*} array
 * @return {*}
 */
const last = <T>(array: T[]): T => {
    const length = array === null ? 0 : array.length
    return length ? array[length - 1] : undefined
}

/**
 * @desc: 按字母排序
 * @param {*} data 
 * @param {*} keyword
 * @param {*} ascen 正序/逆序
*/
const alphabeticSort = <T>(_data: T[], keyword: string, ascen = true): T[] => {
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

/**
 * @desc: 检查数组是否包含符合某些标准的值
 * @param {*} T
 * @return {*}
 */
const contains = <T>(arr: T[], criteria: (a: T) => boolean): boolean => {
    return arr.filter(criteria).length > 0
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
    contains,
}