import { hasClass } from './_hasClass'

/**
 * 删除类名
 * 
 * @since 1.0.0
 * @param {*} ele - 元素
 * @param {*} className - 类名
 * @example
 * 
 * ```ts
 * import { removeClass } from 'super-tools-lib'
 * 
 * removeClass(dom, 'active')
 * ```
 */
export const removeClass = (ele: HTMLElement, className: string) => {
    if (hasClass(ele, className)) {
        const reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
        ele.className = ele.className.replace(reg, '')
    }
}