
/**
 * 小数点后保留几位
 * 
 * @since 1.63.1
 * @param {number} num - 数值
 * @param {number} place - 保留几位
 * @return {number} 返回保留后的数值
 * @example
 * 
 * ```ts
 * import { toFixed } from 'super-tools-lib'
 * 
 * toFixed(1.226, 3) // 1.226
 * ```
 */
export const toFixed = (num: number, place: number): number => {
    const p = '10000000000000000000000000000'
    const n = Number(p.slice(0, place))
    return Math.round(num * n) / n
}