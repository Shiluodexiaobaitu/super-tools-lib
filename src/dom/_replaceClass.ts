import { removeClass } from './_removeClass'
import { addClass } from './_addClass'

/**
 * 替换类名
 * 
 * @since 1.0.0
 * @param {*} ele - 元素
 * @param {*} newName - 新类名
 * @param {*} oldName - 旧类名
 * @example
 * 
 * ```ts
 * import { replaceClass } from 'super-tools-lib'
 * 
 * replaceClass(dom, 'active', 'oldName')
 * ```
 */
export const replaceClass = (ele: HTMLElement, newName: string, oldName: string) => {
    removeClass(ele, oldName)
    addClass(ele, newName)
}