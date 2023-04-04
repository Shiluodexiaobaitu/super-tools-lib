/**
 * 用于获取元素的属性值
 * 
 * @since 1.62.0
 * @param element - 需要获取属性值的元素
 * @param attrName - 属性名称
 * @return 返回属性值
 * @example
 * 
 * ```ts
 * import { getAttr } from 'super-tools-lib'
 * 
 * getAttr(dom1, 'id')
 * ```
 */
export const getAttr = (element: HTMLElement, attrName: string): string => {
    return element.getAttribute(attrName)
}