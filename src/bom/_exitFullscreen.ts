/**
 * 浏览器退出全屏
 * 
 * @since 1.0.0
 * @example
 * 
 * ```ts
 * import { exitFullscreen } from 'super-tools-lib'
 * 
 * // 退出全屏显示
 * exitFullscreen()
 * ```
 */
export const exitFullscreen = (): void => {
    const el: any = parent.document
    const cfs = el.cancelFullScreen || el.webkitCancelFullScreen || el.mozCancelFullScreen || el.exitFullScreen

    if (cfs) {
        cfs.call(el)
    } else if (typeof window.ActiveXObject !== 'undefined') {
        //for IE，这里和fullScreen相同，模拟按下F11键退出全屏
        const wscript = new window.ActiveXObject('WScript.Shell')
        if (wscript !== null) {
            wscript.SendKeys('{F11}')
        }
    }
}