/**
 * 在元素前插入给定的HTML
 * 
 * @since 1.62.0
 * @param {Element} ele - 元素
 * @param {string} html - html字符串
 * @example
 * 
 * ```ts
 * import { insertHtmlBefore } from 'super-tools-lib'
 * 
 * insertHtmlBefore(dom1, '<div></div>')
 * ```
 */
export const insertHtmlBefore = (ele: Element, html: string): void => {
    ele.insertAdjacentHTML('beforebegin', html)
}