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
 * 过滤数组/对象
 * 
 * @since 1.62.0
 * @param {Record<string, T> | T[]} data - 用来迭代的数据
 * @param {*} iteratee - 每次迭代调用的函数
 * @return {Array} 返回过滤后数组 
 * @example
 * 
 * ```ts
 * import { filter } from 'super-tools-lib'
 * 
 * filter([1,2,3], (i) => i <= 2 ) // [1,2]
 * ```
 */
const filter = <T>(data: T[] | Record<string, T>, iteratee: (item: T, key?: string | number) => boolean): T[] => {
    const func = isArray(data) ? _arrayFilter : _objectFilter
    return func(data, iteratee)
}

export { filter, _arrayFilter, _objectFilter }