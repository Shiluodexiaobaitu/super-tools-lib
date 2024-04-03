
/**
 * 判断传入值是否为dom元素
 * 
 * @since 1.75.0
 * @param {unknown} v - 要检查的值
 * @return {boolean} 返回true | false
 * @example
 * 
 * ```ts
 * import { isDom } from 'super-tools-lib'
 * 
 * const div = document.createElement('div')
 * 
 * isDom(div) // true
 * ```
 */
export const isDom = (v: unknown) => {
    return v instanceof HTMLElement
}