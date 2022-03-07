/*
 * @Author: zhangce
 * @Date: 2021-11-04 17:11:40
 * @LastEditors: zhangce
 * @LastEditTime: 2022-03-07 15:24:11
 * @Description: 
 */

import typeJudgment from '../typeJudgment';
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
    if (typeJudgment.isObject(obj)) {
        for (const key in obj) {
            arr.push(obj[key])
        }
    }
    return arr
}

const keys = (obj): Array<any> => {
    const arr = [];
    if (typeJudgment.isObject(obj)) {
        for (const key in obj) {
            arr.push(key)
        }
    }
    return arr
}

const object = {
    cloneDeep,
    stringfyQueryString,
    values,
    keys
}

export default object;