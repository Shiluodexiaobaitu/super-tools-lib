/**
 * 在元素后插入给定的HTML
 * 
 * @since 1.62.0
 * @param {Element} ele - 元素
 * @param {string} html - html字符串
 * @example
 * 
 * ```ts
 * import { insertHtmlAfter } from 'super-tools-lib'
 * 
 * insertHtmlAfter(dom1, '<div></div>')
 * ```
 */
export const insertHtmlAfter = (ele: Element, html: string): void => {
    ele.insertAdjacentHTML('afterend', html)
}