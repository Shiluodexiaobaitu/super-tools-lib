/**
 * 复制文本
 * 
 * @since 1.62.0
 * @param {string} text - 文本
 * @example
 * 
 * ```ts
 * import { copyText } from 'super-tools-lib'
 * 
 * copyText('复制的内容')
 * ```
 */
export const copyText = (text: string): void => {
    const el = document.createElement('textarea')
    el.value = text
    el.setAttribute('readonly', '')
    el.style.position = 'absolute'
    el.style.left = '-9999px'
    el.style.top = '-9999px'
    document.body.appendChild(el)
    const selected =
        document.getSelection().rangeCount > 0
            ? document.getSelection().getRangeAt(0)
            : false
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
    if (selected) {
        document.getSelection().removeAllRanges()
        document.getSelection().addRange(selected)
    }
}