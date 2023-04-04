import { returnType } from './_returnType'

/**
 * 检查是否是Map对象
 * 
 * @since 1.0.0
 * @param {*} v - 要检查的值
 * @return {boolean} 返回true | false
 * @example
 * 
 * ```ts
 * import { isMap } from 'super-tools-lib'
 * 
 * isMap(val) // true | false
 * ```
 */
export const isMap = (v: unknown) => returnType(v) === 'Map'