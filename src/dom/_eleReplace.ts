/**
 * 替换dom元素
 * 
 * @since 1.62.0
 * @param {Element} oldEle - 旧元素
 * @param {Element} newEle - 新元素
 * @example
 * 
 * ```ts
 * import { eleReplace } from 'super-tools-lib'
 * 
 * eleReplace(dom1, dom2)
 * ```
 */
export const eleReplace = (oldEle: Element, newEle: Element) => {
    (oldEle.parentNode ? oldEle.parentNode.replaceChild(newEle, oldEle) : null)
}