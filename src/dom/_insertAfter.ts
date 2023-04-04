/**
 * 在目标元素之后插入一个新元素
 * 
 * @since 1.62.0
 * @param {Element} anotherEle - 目标元素
 * @param {Element} newEle - 新元素
 * @example
 * 
 * ```ts
 * import { insertAfter } from 'super-tools-lib'
 * 
 * insertAfter(dom1, dom2)
 * ```
 */
export const insertAfter = (anotherEle: Element, newEle: Element) => {
    anotherEle.insertAdjacentElement('afterend', newEle)
}