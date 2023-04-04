/**
 * 随机打乱数组顺序
 * - 洗牌算法随机
 * 
 * @since 1.62.0
 * @param arr - 要操作的数组
 * @return {T[]} 返回打乱顺序后的数组
 * @example
 * 
 * ```ts
 * import { strInversion } from 'super-tools-lib'
 * 
 * strInversion('abc') // cba
 * ```
 */
export const shuffle = <T>(arr: T[]): T[] => {
    const result = []
    let random
    while (arr.length > 0) {
        random = Math.floor(Math.random() * arr.length)
        result.push(arr[random])
        arr.splice(random, 1)
    }
    return result
}