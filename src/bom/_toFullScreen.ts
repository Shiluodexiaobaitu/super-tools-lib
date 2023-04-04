/**
 * 浏览器全屏
 * 
 * @since 1.0.0
 * @example
 * 
 * ```ts
 * import { toFullScreen } from 'super-tools-lib'
 * 
 * // 浏览器全屏显示
 * toFullScreen()
 * ```
 */
export const toFullScreen = (): void => {
    const el: any = document.documentElement
    const rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullScreen

    if (rfs) {
        rfs.call(el)
    } else if (typeof window.ActiveXObject !== 'undefined') {
        //for IE，这里其实就是模拟了按下键盘的F11，使浏览器全屏
        const wscript = new window.ActiveXObject('WScript.Shell')
        if (wscript !== null) {
            wscript.SendKeys('{F11}')
        }
    }
}