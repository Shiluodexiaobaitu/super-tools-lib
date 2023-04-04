/**
 * 阻止冒泡事件
 * 
 * @since 1.0.0
 * @param {Event} e - Event
 * @example
 * 
 * ```ts
 * import { stopPropagation } from 'super-tools-lib'
 * 
 * stopPropagation(dom)
 * ```
 */
export const stopPropagation = (e: Event) => {
    e = e || window.event
    if (e.stopPropagation) {    // W3C阻止冒泡方法 
        e.stopPropagation()
    } else {
        e.cancelBubble = true // IE阻止冒泡方法 
    }
}