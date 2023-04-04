/**
 * 检查字符串是否为十六进制颜色
 * 
 * @since 1.0.0
 * @param {string} color - 要检查的值
 * @return {boolean} 返回true | false
 * @example
 * 
 * ```ts
 * import { isHexColor } from 'super-tools-lib'
 * 
 * isHexColor(val) // true | false
 * ```
 */
export const isHexColor = (color: string): boolean => /^#([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i.test(color)