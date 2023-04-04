/**
 * 转换字母以关联表情符号
 * 
 * @since 1.62.0
 * @param {string} c - 要操作的字符串
 * @return {string} 返回和字母关联的表情符号
 * @example
 * 
 * ```ts
 * import { letterToEmoji } from 'super-tools-lib'
 * 
 * letterToEmoji("a"); // '🇦'
 * ```
 */
export const letterToEmoji = (c: string): string => String.fromCodePoint(c.toLowerCase().charCodeAt(0) + 127365)
