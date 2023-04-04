/**
 * 将角度转换为弧度
 * 
 * @since 1.62.0
 * @param {number} deg - 角度
 * @return {number} 返回角度转换后的弧度
 * @example
 * 
 * ```ts
 * import { degsToRads } from 'super-tools-lib'
 * 
 * degsToRads(90) // 1.5707963267948966
 * ```
 */
export const degsToRads = (deg: number): number => (deg * Math.PI) / 180.0