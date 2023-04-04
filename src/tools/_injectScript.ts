/**
 * 动态引入js
 * 
 * @since 1.62.0
 * @param {string} src - js链接地址
 * @example
 * 
 * ```ts
 * import { injectScript } from 'super-tools-lib'
 * 
 * injectScript(src)
 * ```
 */
export const injectScript = (src: string) => {
    const s = document.createElement('script')
    s.type = 'text/javascript'
    s.async = true
    s.src = src
    const t = document.getElementsByTagName('script')[0]
    t.parentNode.insertBefore(s, t)
}