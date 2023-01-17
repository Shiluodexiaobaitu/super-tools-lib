import {
    returnType,
    isBasicType,
    isArray,
    isObject,
    isObjectKeyEqual,
    isMap,
    isSet,
} from './index'
import { forEach } from '../loop'

/**
* @desc: 深比较来确定两者的值是否相等
* ** 方法支持比较：array，object，string，boolean，number，null，undefined，symbol
* @param {*} value
* @param {*} other
* @return {*}
*/
const isEqual = (value, other) => {
    return _isEqual(value, other)
}

const _equalObject = <V, O>(value: Record<string, V>, other: Record<string, O>, map) => {
    if (isObjectKeyEqual(value, other)) {
        let _flag = true

        forEach(value, (item, key) => {
            if (!_isEqual(item, other[key], map)) {
                _flag = false
                return false
            }
        })
        return _flag
    }
    return false
}

const _equalArray = <V, O>(value: V[], other: O[], map) => {
    const valueLength = value.length
    const otherLength = other.length

    if (valueLength !== otherLength) {
        return false
    }

    let _flag = true

    forEach(value, (item, index) => {
        if (!_isEqual(item, other[index], map)) {
            _flag = false
            return false
        }
    })

    return _flag
}


const _equalMap = (value: Map<any, any>, other: Map<any, any>, map) => {
    if (value.size !== other.size) {
        return false
    }

    const valueKArr = []
    const valueVArr = []
    value.forEach((item, key) => (valueKArr.push(key), valueVArr.push(item)))

    const otherKArr = []
    const otherVArr = []
    other.forEach((item, key) => (otherKArr.push(key), otherVArr.push(item)))

    if (!_isEqual(valueKArr, otherKArr, map)) {
        return false
    }

    if (!_isEqual(valueVArr, otherVArr, map)) {
        return false
    }

    return true
}

const _equalSet = (value: Set<any>, other: Set<any>, map) => {
    if (value.size !== other.size) {
        return false
    }

    const valueArr = []
    value.forEach(item => (valueArr.push(item)))
    const otherArr = []
    other.forEach(item => (otherArr.push(item)))

    if (!_isEqual(valueArr, otherArr, map)) {
        return false
    }
    return true
}

const _isEqual = (value, other, map = new WeakMap()) => {
    if (value === other) {
        return true
    }

    if (returnType(value) !== returnType(other)) {
        return false
    }

    if (isBasicType(value) || isBasicType(other)) {
        return value === other
    }

    // 解决引用数据类型循环引用
    if (map.has(value)) {
        const count = map.get(value)
        if (count === 1) {
            return true
        }
    }

    if (isObject(value) || isArray(value)) {
        if (!map.get(value)) {
            map.set(value, 1)
        }
    }

    if (isObject(value) && isObject(other)) {
        return _equalObject(value, other, map)
    }

    if (isArray(value) && isArray(other)) {
        return _equalArray(value, other, map)
    }

    if (isMap(value) && isMap(other)) {
        return _equalMap(value, other, map)
    }

    if (isSet(value) && isSet(other)) {
        return _equalSet(value, other, map)
    }

    return true
}

export { isEqual }