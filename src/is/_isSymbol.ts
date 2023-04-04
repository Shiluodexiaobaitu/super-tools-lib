/**
 * 是否Symbol函数
 * 
 * @since 1.0.0
 * @param {*} o - 要检查的值
 * @return {boolean} 返回true | false
 * @example
 * 
 * ```ts
 * import { isSymbol } from 'super-tools-lib'
 * 
 * isSymbol(val) // true | false
 * ```
 */
export const isSymbol = (o: unknown): boolean => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Symbol'
}