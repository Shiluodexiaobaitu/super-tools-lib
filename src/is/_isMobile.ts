/**
 * 判断是否为移动端
 * 
 * @since 1.0.0
 * @return {boolean} 返回true | false
 * @example
 * 
 * ```ts
 * import { isMobile } from 'super-tools-lib'
 * 
 * isMobile() // true | false
 * ```
 */
export const isMobile = (): boolean => {
    if (window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
        return true // 移动端
    } else {
        return false // PC端
    }
}