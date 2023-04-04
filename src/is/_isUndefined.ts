/**
 * 检测是否undefined
 * 
 * @since 1.0.0
 * @param {*} o - 要检查的值
 * @return {boolean} 返回true | false
 * @example
 * 
 * ```ts
 * import { isUndefined } from 'super-tools-lib'
 * 
 * isUndefined(val) // true | false
 * ```
 */
export const isUndefined = (o: unknown): boolean => {
    return o === undefined
}