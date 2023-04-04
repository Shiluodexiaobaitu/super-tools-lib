/**
 * 将秒转换为hh:mm:ss格式
 * 
 * @since 1.62.0
 * @param {number} s - 秒
 * @return {string} 返回转换后的格式hh:mm:ss
 * @example
 * 
 * ```ts
 * import { formatSeconds } from 'super-tools-lib'
 * 
 * formatSeconds(60) // '00:01:00'
 * 
 * formatSeconds(2232342) // '20:05:42'
 * ```
 */
export const formatSeconds = (s: number): string => {
    return new Date(s * 1000).toISOString().substr(11, 8)
}