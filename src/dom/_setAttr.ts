/**
 * 用于设置元素的属性值
 * 
 * @since 1.62.0
 * @param element - 需要设置属性值的元素
 * @param attrName - 属性名称
 * @param value - 属性值
 * @example
 * 
 * ```ts
 * import { setAttr } from 'super-tools-lib'
 * 
 * setAttr(dom1, 'id', 'box')
 * ```
 */
export const setAttr = (element: HTMLElement, attrName: string, value: string): void => {
    element.setAttribute(attrName, value)
}