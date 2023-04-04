/**
 * 小数取整
 * 
 * @since 1.62.0
 * @param {number} num - 数值
 * @param {number} place - 从第几位小数四舍五入
 * @returns {number} 返回取整后的数值
 * @example
 * 
 * ```ts
 * import { smallRounding } from 'super-tools-lib'
 * 
 * smallRounding(1.226, 3) // 1.23
 * ```
*/
export const smallRounding = (num: number, place: number): number => {
    const p = '10000000000000000000000000000'
    const n = Number(p.slice(0, place))
    return Math.round(num * n) / n
}