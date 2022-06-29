/*
 * @Author: zhangce
 * @Date: 2022-03-03 14:50:41
 * @Email: zhangce@fengmap.com
 * @LastEditTime: 2022-06-10 15:20:03
 * @LastEditors: zhangce
 * @LastEditorsEmail: zhangce@fengmap.com
 * @Description: 
 *  Copyright: Copyright 2014 - 2022, FengMap, Ltd. All rights reserved.
 */

import { returnType } from '../is';

const _isBasicType = (opts: any): boolean => {
    const type = returnType(opts);
    if (type === 'String' || type === 'Symbol' || type === 'Number' || type === 'Null' || type === 'Undefined' || type === 'Boolean' || type === 'NaN') {
        return true
    }
    return false
}

//拷贝原型链
const _initCloneObject = obj => {
    // 处理基于 Object.create(null) 或 Object.create(Object.prototype.__proto__) 的实例对象
    // 其中 Object.prototype.__proto__ 就是站在原型顶端的男人
    // 但我留意到 Lodash 库的 clone 方法对以上两种情况是不处理的
    if (obj.constructor === undefined) {
        return Object.create(null)
    }
    // 处理自定义构造函数的实例对象
    if (typeof obj.constructor === 'function' && (obj !== obj.constructor || obj !== Object.prototype)) {
        const proto = Object.getPrototypeOf(obj)
        return Object.create(proto)
    }

    return {}
}

const _returnEntity = (opts) => {

    const type = returnType(opts);

    switch (type) {
        case 'Object':
            return _initCloneObject(opts)
        case 'Array':
            return []
        case 'Map':
            return new Map()
        case 'Set':
            return new Set()
        default:
            return null
    }
}

const _cloneObj = (obj, map, newObj) => {

    // const newObj = {};
    for (const key in obj) {

        if (obj.hasOwnProperty(key)) {

            if (_isBasicType(obj[key])) {

                newObj[key] = obj[key]
            } else {

                newObj[key] = _deepClone(obj[key], map)
            }
        }
    }
    return newObj
}

const _cloneArr = (arr, map, newArr) => {

    arr.forEach(item => {

        if (_isBasicType(item)) {

            newArr.push(item)
        } else {

            newArr.push(_deepClone(item, map))
        }
    })
    return newArr;
}

const _cloneMap = (map, WeakMap, newMap) => {

    for (const [key, value] of map) {
        if (_isBasicType(value)) {
            newMap.set(key, value)
        } else {
            newMap.set(key, _deepClone(value, WeakMap))
        }

    }
    return newMap
}

const _cloneSet = (set, WeakMap, newSet) => {

    for (const value of set) {
        if (_isBasicType(value)) {
            newSet.add(value)
        } else {
            newSet.add(_deepClone(value, WeakMap))
        }

    }
    return newSet
}

const _deepClone = (data: any, map = new WeakMap()) => {

    if (_isBasicType(data)) {
        return data
    }

    let newData = null;
    const type = returnType(data);

    if (map.has(data)) {
        if (CACHEMAP.get(data)) {
            const FREQUENCY = CACHEMAP.get(data);
            if (FREQUENCY >= DEPTH) {
                return map.get(data)
            }
            CACHEMAP.set(data, FREQUENCY + 1)
        }
    }

    // result 解决循环引用对象的prototype指向问题
    const result = _returnEntity(data)
    if (result !== null) {
        map.set(data, result)
    } else {
        map.set(data, data)
    }

    if (!CACHEMAP.get(data)) {
        CACHEMAP.set(data, 1);
    }

    switch (type) {
        case 'Object':
            newData = _cloneObj(data, map, result);
            break;
        case 'Array':
            newData = _cloneArr(data, map, result);
            break;
        case 'RegExp':
            newData = new RegExp(data);
            break;
        case 'Date':
            newData = new Date(data)
            break;
        case 'Map':
            newData = _cloneMap(data, map, result)
            break;
        case 'Set':
            newData = _cloneSet(data, map, result)
            break;
        default:
            newData = data
            break;
    }

    return newData;
}

const DEPTH = 1; //克隆深度
const CACHEMAP = new Map(); //克隆次数缓存

/**
 * @description: 深度克隆
 * @param {*} data 
 * @return {*}
 * 兼容深度克隆数据格式：Object，Array，RegExp，Date，Map，Set，String，Symbol，Number，Null，Undefined，Boolean，NaN
 */
export const cloneDeep = (data: any): any => {

    const NEWDAtA = _deepClone(data);
    CACHEMAP.clear();
    return NEWDAtA
}

/**
 * 实现原理：
 *  1，深拷贝是对引用数据类型，从内存中copy出来一份放到新开辟的内存中，因此拷贝出来的数据和原数据没有引用关系
 * 
 * 实现步骤：
 *  1，上边说了深拷贝是针对引用数据类型，所以第一步先判断数据类型，基础数据类型直接返回引用数据类型，在细分是什么引用数据类型对此在进行下步操作。
 *  2，区分引用数据类型，如object 则，循环对象在递归_deepClone, 以此类推直到将对象所以属性遍历完成重新分配内存
 *  3，其他引用数据类型和object实现方式雷同，遍历～重新分配内存
 *  4，这样基础版本的深拷贝就实现完成！
 * 
 * 实现过程难点：
 *  1，对于引用数据类型的相互引用处理，如果不加以处理就会出现内存溢出死循环，所以在递归copy引用数据类型时需
 * 要加入 WeakMap 引用计数，将便利过的引用数据类型保存起来，下次遍历在遇到相同的引用数据类型就直接返回，否则会出现死循环
 *  2，对于互相引用的数据WeakMap 存储的value 要和key 区分新内存，要不遇到遍历过的数据直接返回还是返回旧的引用地址，就会克隆失败。
 *  3，增加克隆深度 
 *  4，拷贝原型
 * 
 * 
 * */ 