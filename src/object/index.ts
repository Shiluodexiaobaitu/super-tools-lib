/*
 * @Author: zhangce
 * @Date: 2021-11-04 17:11:40
 * @LastEditors: zhangce
 * @LastEditTime: 2023-03-01 10:24:37
 * @Description: 
 */

import { cloneDeep } from './_cloneDeep'

/**
 * 对象序列化
 * @param {Record} obj
 * @param {*} pos
 * @return {*}
 */
const stringfyQueryString = (obj: Record<string, string | number | boolean>) => {
    if (!obj) return ''
    const pairs = []

    for (const key in obj) {
        const value = obj[key]

        if (Array.isArray(value)) {
            for (let i = 0; i < value.length; ++i) {
                pairs.push(encodeURIComponent(key + '[' + i + ']') + '=' + encodeURIComponent(value[i]))
            }
            continue
        }

        pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]))
    }

    return pairs.join('&')
}

/**
 * 将对象的value转换成数组
 * @param {*} T
 * @return {*}
 */
const values = <T>(obj: Record<string, T>): T[] => Object.values<T>(obj)

/**
 * 将对象的key转换成数组
 * @param {*} T
 * @return {*}
 */
const keys = <T>(obj: Record<string, T>): string[] => Object.keys(obj)

export {
    cloneDeep,
    stringfyQueryString,
    values,
    keys,
}