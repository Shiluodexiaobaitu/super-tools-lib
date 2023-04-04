/**
 * 检测是否为null
 * 
 * @since 1.0.0
 * @param {*} o - 要检查的值
 * @return {boolean} 返回true | false
 * @example
 * 
 * ```ts
 * import { isNull } from 'super-tools-lib'
 * 
 * isNull(val) // true | false
 * ```
 */
export const isNull = (o: unknown): boolean => {
    return o === null
}