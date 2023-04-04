import { returnType } from './_returnType'

/**
 * 检查是否是Set对象
 * 
 * @since 1.0.0
 * @param {unknown} v - 要检查的值
 * @return {boolean} 返回true | false
 * @example
 * 
 * ```ts
 * import { isSet } from 'super-tools-lib'
 * 
 * isSet(val) // true | false
 * ```
 */
export const isSet = (v: unknown) => returnType(v) === 'Set'