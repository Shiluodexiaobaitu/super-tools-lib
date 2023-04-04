/**
 * 在目标元素之前插入一个新元素
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
export const insertBefore = (anotherEle: Element, newEle: Element) => {
    anotherEle.insertAdjacentElement('beforebegin', newEle)
}