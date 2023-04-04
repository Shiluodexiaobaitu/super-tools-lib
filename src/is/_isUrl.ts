/**
 * 判断是否为url链接
 * 
 * @since 1.0.0
 * @param {string} path - 要检查的值
 * @return {boolean} 返回true | false
 * @example
 * 
 * ```ts
 * import { isUrl } from 'super-tools-lib'
 * 
 * isUrl(val) // true | false
 * ```
 */
export const isUrl = (path: string): boolean => {
    if (!path.startsWith('http')) {
        return false
    }
    try {
        const url = new URL(path)
        return !!url
    } catch (error) {
        return false
    }
}