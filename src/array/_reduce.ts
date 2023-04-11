
/**
 * reduce
 * 
 * @since 1.62.0
 * @param {T[]} data - 数组
 * @param {(pre: T | number, cur: T, index: number, arr: T[]) => number} iteratee - 每次迭代的回调函数 
 * @param {number} init - 初始值
 * @return {number} 返回计算结果
 * @example
 * 
 * ```ts
 * import { reduce } from 'super-tools-lib'
 * 
 * const arr = [1,2,3,4,5]
 * 
 * const num = reduce(arr, (pre,cur)=> pre+cur)
 * // num => 15
 * 
 * const num = reduce(arr, (pre,cur)=> pre+cur, 100)
 * // num => 115
 * ```
 */
export const reduce = <T>(data: T[], iteratee: (pre: T | number, cur: T, index: number, arr: T[]) => number, init?: number) => {

    const length = data.length

    let index = init === undefined ? 0 : -1
    let num = init === undefined ? 0 : init

    while ((++index) < length) {

        const value = data[index]
        if (index === 1 && init === undefined) {
            num = iteratee(data[0], value, index, data)
        } else {
            num = iteratee(num, value, index, data)
        }
    }

    return num
}