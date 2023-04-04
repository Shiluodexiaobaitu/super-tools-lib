import { isArray, isObject } from '../is'


const _arrayEach = (array, iteratee) => {
    let index = -1
    const length = array === null ? 0 : array.length

    while (++index < length) {
        if (iteratee(array[index], index, array) === false) {
            break
        }
    }
}

const _objectEach = (obj, iteratee) => {
    if (isObject(obj)) {
        for (const key in obj) {
            if (iteratee(obj[key], key) === false) {
                break
            }
        }
    }
}

/**
 * 循环数组/对象
 * 
 * @since 1.0.0
 * @category Collection
 * @param {Record<string, T> | T[]}  data - 用来迭代的数据
 * @param {Function} iteratee - 每次迭代调用的函数
 * @return {void}
 * @example
 * 
 * const arr = [1, 2, 3, 4, 5];
 * 
 * _.forEach(arr, (value, index) => {
 *  // return false 终止循环
 * });
 */

const forEach = <T>(data: T[] | Record<string, T>, iteratee: (item: T, key?: string | number) => void | boolean) => {
    const func = isArray(data) ? _arrayEach : _objectEach
    return func(data, iteratee)
}

export { forEach, _objectEach, _arrayEach }