/**
 * 判断是否安卓移动设备访问
 * 
 * @since 1.0.0
 * @return {boolean} 返回true | false
 * @example
 * 
 * ```ts
 * import { isAndroidMobileDevice } from 'super-tools-lib'
 * 
 * isAndroidMobileDevice() // true | false
 * ```
 */
export const isAndroidMobileDevice = (): boolean => {
    return /android/i.test(navigator.userAgent.toLowerCase())
}