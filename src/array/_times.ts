
/**
 * 创建一个大小为N的数组
 * 
 * @since 1.63.0
 * @param {number} n - 数组大小
 * @param {function} iteratee - 迭代器
 * @return {*} 返回数组
 * @example
 * 
 * ```ts
 * import { times } from 'lodash'
 * 
 * times(3, String) // => ['0', '1', '2']
 * 
 * times(4, () => 0) // => [0, 0, 0, 0]
 * ```
 */
export const times = (n: number, iteratee: (...test) => any) => {
    let index = -1
    const result = Array(n)
    while (++index < n) {
        result[index] = iteratee(index)
    }
    return result
}