/**
 * base64类型验证
 * 
 * @since 1.0.0
 * @param {string} base64 - 要检查的值
 * @return {boolean} 返回true | false
 * @example
 * 
 * ```ts
 * import { isBase64 } from 'super-tools-lib'
 * 
 * isBase64(val) // true | false
 * ```
 */
export const isBase64 = (base64: string): boolean => {
    return /data:image\/.+;base64,/.test(base64)
}