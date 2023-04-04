/**
 * 判断浏览器是否支持webP格式图片
 * 
 * @since 1.0.0
 * @param {*}
 * @return {boolean} 返回true | false
 * @example
 * 
 * ```ts
 * import { isSupportWebP } from 'super-tools-lib'
 * 
 * isSupportWebP(val) // true | false
 * ```
 */
export const isSupportWebP = () => {
    return !![].map && document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') === 0
}