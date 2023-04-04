/**
 * 判断是否是图片链接
 * 
 * @since 1.0.0
 * @param {string} path - 要检查的值
 * @return {boolean} 返回true | false
 * @example
 * 
 * ```ts
 * import { isImg } from 'super-tools-lib'
 * 
 * isImg(val) // true | false
 * ```
 */
export const isImg = (path: string): boolean => {
    return /\w.(png|jpg|jpeg|svg|webp|gif|bmp)$/i.test(path)
}