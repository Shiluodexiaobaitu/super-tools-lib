import { isArray, isObject } from '../is'

/**
 * @desc: 封装map方法
 * @param {Array|Object} data 用来迭代的数据
 * @param {Function} iteratee 每次迭代调用的函数
 * @return {[...]}
 */
const map = <T>(data: T[] | Record<string, T>, iteratee: (item: T, key: number | string) => any): (T[] | Record<string, T>) => {
    const func = isArray(data) ? _arrayMap : _objectMap
    return func(data, iteratee)
}

const _arrayMap = (array, iteratee) => {
    let index = -1
    const length = array === null ? 0 : array.length
    let resIndex = 0
    const result = []

    while (++index < length) {
        result[resIndex++] = iteratee(array[index], index, array)
    }

    return result
}

const _objectMap = (object, iteratee) => {
    let resIndex = 0
    const result = []
    if (isObject(object)) {
        for (const key in object) {
            result[resIndex++] = iteratee(object[key], key)
        }
    }
    return result
}

export { map }