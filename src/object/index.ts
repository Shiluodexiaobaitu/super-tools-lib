/*
 * @Author: zhangce
 * @Date: 2021-11-04 17:11:40
 * @LastEditors: zhangce
 * @LastEditTime: 2022-05-31 13:45:48
 * @Description: 
 */

import { isObject } from '../typeJudgment';
import { cloneDeep } from './_cloneDeep';

/**
 * @description: 对象序列化
 * @param {*} obj
 * @return {*}
 */
const stringfyQueryString = (obj: Object) => {
    if (!obj) return '';
    const pairs = [];

    for (const key in obj) {
        const value = obj[key];

        if (value instanceof Array) {
            for (let i = 0; i < value.length; ++i) {
                pairs.push(encodeURIComponent(key + '[' + i + ']') + '=' + encodeURIComponent(value[i]));
            }
            continue;
        }

        pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
    }

    return pairs.join('&');
}


const values = (obj): Array<any> => {
    const arr = [];
    if (isObject(obj)) {
        for (const key in obj) {
            arr.push(obj[key])
        }
    }
    return arr
}

const keys = (obj): Array<any> => {
    const arr = [];
    if (isObject(obj)) {
        for (const key in obj) {
            arr.push(key)
        }
    }
    return arr
}

export {
    cloneDeep,
    stringfyQueryString,
    values,
    keys
}