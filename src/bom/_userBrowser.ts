/**
 * 返回当前浏览器是什么类型的浏览器
 * 
 * @since 1.62.0
 * @return {string} 返回当前所在的浏览器标识
 * @example
 * 
 * ```ts
 * import { userBrowser } from 'super-tools-lib'
 * 
 * userBrowser() // Chrome
 * ```
 */
export const userBrowser = (): string => {
    const browserName = navigator.userAgent.toLowerCase()
    if (/msie/i.test(browserName) && !/opera/.test(browserName)) {
        return 'IE'
    } else if (/firefox/i.test(browserName)) {
        return 'Firefox'
    } else if (/chrome/i.test(browserName) && /webkit/i.test(browserName) && /mozilla/i.test(browserName)) {
        return 'Chrome'
    } else if (/opera/i.test(browserName)) {
        return 'Opera'
    } else if (/webkit/i.test(browserName) && !(/chrome/i.test(browserName) && /webkit/i.test(browserName) && /mozilla/i.test(browserName))) {
        return 'Safari'
    } else {
        return ''
    }
}