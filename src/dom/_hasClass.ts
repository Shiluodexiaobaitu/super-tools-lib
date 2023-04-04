/**
 * 判断元素是否包含某个class
 * 
 * @since 1.0.0
 * @param element - 需要判断的元素
 * @param className -  class名称
 * @return 返回true / false
 * @example
 * 
 * ```ts
 * import { hasClass } from 'super-tools-lib'
 * 
 * 
 * hasClass(dom, 'active') // false
 * ```
 */
export const hasClass = (element: HTMLElement, className: string): boolean => {
    return element.classList.contains(className)
}