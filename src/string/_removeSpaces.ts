/**
 * 删除字符串中的空格
 * 
 * @since 1.62.0
 * @param {string} str - 要操作的字符串
 * @return {string} 返回去除空格后的新字符串
 * @example
 * 
 * ```ts
 * import { removeSpaces } from 'super-tools-lib'
 * 
 * removeSpaces("s s s k "); // sssk
 * ```
 */
export const removeSpaces = (str: string): string => str.replace(/\s/g, '')