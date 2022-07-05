/*
 * @Author: zhangce
 * @Date: 2022-03-07 13:50:06
 * @Email: zhangce@fengmap.com
 * @LastEditTime: 2022-07-05 12:06:00
 * @LastEditors: zhangce
 * @LastEditorsEmail: zhangce@fengmap.com
 * @Description: 循环方法集合
 *  Copyright: Copyright 2014 - 2022, FengMap, Ltd. All rights reserved.
 */
import { filter } from './_filter';
import { isArray, isObject } from '../is';

const _arrayEach = (array, iteratee) => {
    let index = -1;
    const length = array == null ? 0 : array.length;

    while (++index < length) {
        if (iteratee(array[index], index, array) === false) {
            break;
        }
    }
    return array;
}

const _objectEach = (obj, iteratee) => {
    if (isObject(obj)) {
        for (const key in obj) {
            if (iteratee(obj[key], key) === false) {
                break;
            }
        }
    }
}

/**
 * @description: 封装forEach 
 * @param {any} data
 * @param {Function} fn
 * @return {*}
 */
const forEach = (data: unknown[] | Record<string, unknown>, fn: () => void) => {
    const func = isArray(data) ? _arrayEach : _objectEach;
    return func(data, fn)
}

export {
    forEach,
    filter
}