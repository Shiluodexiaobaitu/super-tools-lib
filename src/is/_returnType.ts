/**
 * 返回类型
 * 
 * @since 1.0.0
 * @param {unknown} o - 要检查的值
 * @return {unknown} 返回值的类型
 * @example
 * 
 * ```ts
 * import { returnType } from 'super-tools-lib'
 * 
 * returnType(val) // Boolean | String ...
 * ```
 */
export const returnType = (o: unknown): unknown => {
    if (Number.isNaN(o)) return 'NaN'
    return Object.prototype.toString.call(o).slice(8, -1)
}