

/**
 * 打开一个新的窗口
 * - 会自动创建一个a标签，然后点击a标签，完成跳转
 * - 规避了在异步中window.open浏览器的拦截
 * 
 * @since 1.65.0
 * @example
 * 
 * ```ts
 * import { newWin } from 'super-tools-lib'
 * 
 * newWin('https://www.baidu.com')
 * ```
 */
export const newWin = (url) => {
    const a = document.createElement('a')
    a.setAttribute('href', url)
    a.setAttribute('target', '_blank')
    a.setAttribute('id', 'camnpr')
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}