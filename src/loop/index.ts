/*
 * @Author: zhangce
 * @Date: 2022-03-07 13:50:06
 * @Email: zhangce@fengmap.com
 * @LastEditTime: 2023-03-02 18:00:34
 * @LastEditors: zhangce
 * @LastEditorsEmail: zhangce@fengmap.com
 * @Description: 循环方法集合
 *  Copyright: Copyright 2014 - 2022, FengMap, Ltd. All rights reserved.
 */

import { isArray, isObject } from '../is'


function _arrayFilter(array, iteratee) {
    let index = -1
    const length = array === null ? 0 : array.length
    let resIndex = 0
    const result = []

    while (++index < length) {
        const value = array[index]
        if (iteratee(value, index, array)) {
            result[resIndex++] = value
        }
    }
    return result
}

function _objectFilter(obj, iteratee) {
    const result = []
    if (isObject(obj)) {
        for (const key in obj) {
            if (iteratee(obj[key], key)) {
                result.push(obj[key])
            }
        }
    }
    return result
}

/**
 * @desc: 封装filter
 * @param {Record<string, T> | T[]} data 用来迭代的数据
 * @param {*} iteratee 每次迭代调用的函数
 * @return {[...]}
 */
const filter = <T>(data: T[] | Record<string, T>, iteratee: (item: T, key?: string | number) => boolean): T[] => {
    const func = isArray(data) ? _arrayFilter : _objectFilter
    return func(data, iteratee)
}

const _arrayEach = (array, iteratee) => {
    let index = -1
    const length = array === null ? 0 : array.length

    while (++index < length) {
        if (iteratee(array[index], index, array) === false) {
            break
        }
    }
}

const _objectEach = (obj, iteratee) => {
    if (isObject(obj)) {
        for (const key in obj) {
            if (iteratee(obj[key], key) === false) {
                break
            }
        }
    }
}

/**
 * 封装forEach 
 * 
 * @since 1.0.0
 * @category Collection
 * @param {Record<string, T> | T[]}  data 用来迭代的数据
 * @param {Function} iteratee 每次迭代调用的函数
 * @return {void}
 * @example
 * 
 * const arr = [1, 2, 3, 4, 5];
 * 
 * _.forEach(arr, (value, index) => {
 *  // return false 终止循环
 * });
 */

const forEach = <T>(data: T[] | Record<string, T>, iteratee: (item: T, key?: string | number) => void | boolean) => {
    const func = isArray(data) ? _arrayEach : _objectEach
    return func(data, iteratee)
}

export {
    forEach,
    filter,
}