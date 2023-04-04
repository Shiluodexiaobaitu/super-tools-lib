/**
 * 禁止/开启：右键、选择、复制
 * 
 * @since 1.62.0
 * @param {boolean} flag - true禁止 false开启
 * @example
 * 
 * ```ts
 * import { disableContext } from 'super-tools-lib'
 * 
 * // 禁止浏览器右键、选择、复制
 * disableContext(true)
 * 
 * // 开启浏览器右键、选择、复制
 * disableContext(false)
 * ```
 */
export const disableContext = (flag: boolean) => {

    if (flag) {
        document.oncontextmenu = (e) => e.preventDefault()
        document.onselectstart = (e) => e.preventDefault()
        document.oncopy = (e) => e.preventDefault()
    } else {
        document.oncontextmenu = null
        document.onselectstart = null
        document.oncopy = null
    }
}