import { hasClass } from './_hasClass'

/**
 * 添加类名
 * 
 * @since 1.0.0
 * @param {*} ele - 元素
 * @param {*} className - 类名
 * @example
 * 
 * ```ts
 * import { addClass } from 'super-tools-lib'
 * 
 * addClass('dom', 'active')
 * ```
 */
export const addClass = (ele: HTMLElement, className: string) => {
    if (!hasClass(ele, className)) ele.className += ' ' + className
}