/*
 * @Author: zhangce
 * @Date: 2022-03-07 14:51:13
 * @Email: zhangce@fengmap.com
 * @LastEditTime: 2022-06-10 15:20:01
 * @LastEditors: zhangce
 * @LastEditorsEmail: zhangce@fengmap.com
 * @Description: 
 *  Copyright: Copyright 2014 - 2022, FengMap, Ltd. All rights reserved.
 */
import { isArray } from '../is';


/**
 * @description: 封装filter
 * @param {Array} data
 * @param {Function} fn
 * @return {*}
 */
export const filter = (data: Array<any> | Object, fn: Function) => {
    const func = isArray(data) ? _arrayFilter : () => [];
    return func(data, fn)
}


function _arrayFilter(array, predicate) {
    let index = -1;
    const length = array == null ? 0 : array.length;
    let resIndex = 0;
    const result = [];

    while (++index < length) {
        const value = array[index];
        if (predicate(value, index, array)) {
            result[resIndex++] = value;
        }
    }
    return result;
}
