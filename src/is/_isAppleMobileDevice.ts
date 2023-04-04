/**
 * 判断是否苹果移动设备访问
 * 
 * @since 1.0.0
 * @return {boolean} 返回true | false
 * @example
 * 
 * ```ts
 * import { isAppleMobileDevice } from 'super-tools-lib'
 * 
 * isAppleMobileDevice() // true | false
 * ```
 */
export const isAppleMobileDevice = (): boolean => {
    return /iphone|ipod|ipad|Macintosh/i.test(navigator.userAgent.toLowerCase())
}