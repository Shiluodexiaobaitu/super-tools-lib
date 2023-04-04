/**
 * 判断是否在微信中打开
 * 
 * @since 1.0.0
 * @return {boolean} 返回true | false
 * @example
 * 
 * ```ts
 * import { isWeiXin } from 'super-tools-lib'
 * 
 * isWeiXin() // true | false
 * ```
 */
export const isWeiXin = (): boolean => {
    const ua = navigator.userAgent.toLowerCase()
    if (ua.indexOf('micromessenger') !== -1) {
        return true
    } else {
        return false
    }
}