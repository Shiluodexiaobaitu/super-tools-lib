/**
 * 传入字符串，和重复次数，返回结果字符串
 * 
 * @since 1.62.0
 * @param {string} str - 字符串
 * @param {number} n - 重复次数
 * @return {string} 返回字符串*重复次数的字符串
 * @example
 * 
 * ```ts
 * import { repeat } from 'super-tools-lib'
 * 
 * repeat('abc', 3) // abcabcabc
 * ```
 */
export const repeat = (str: string, n: number): string => {
    let res = ''
    while (n) {
        if (n % 2 === 1) res += str
        if (n > 1) str += str
        n >>= 1
    }
    return res
}