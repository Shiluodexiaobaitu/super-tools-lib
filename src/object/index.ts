/*
 * @Author: zhangce
 * @Date: 2021-11-04 17:11:40
 * @LastEditors: zhangce
 * @LastEditTime: 2022-05-31 14:41:55
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

/**
 * @description: 反序列化
 * @param {string} str
 * @return {*}
 */
const deserialization = (str: string): object => {

    const pairs = str.split('&');
    const obj = {};
    for (let i = 0; i < pairs.length; i++) {
        const item = pairs[i]
        const kv = item.split('=')
        obj[kv[0]] = kv[1]
    }
    return obj
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
    deserialization,
    values,
    keys
}