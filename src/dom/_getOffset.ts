/**
 * 获取一个元素距离浏览器左上角的偏移量
 * 
 * @since 1.0.0
 * @param {HTMLElement} ele - 元素
 * @return {{left: number, top: number }} 返回元素距离浏览器左上角的偏移量
 * @example
 * 
 * ```ts
 * import { getOffset } from 'super-tools-lib'
 * 
 * getOffset(ele) // { left: 0, top: 20 }
 * ```
 */
export const getOffset = function (ele: HTMLElement): { left: number, top: number } {
    let left = ele.offsetLeft // 左偏移
    let top = ele.offsetTop // 上偏移
    let parent: any = ele.offsetParent

    // 只要找到的父级参照物不是body 就继续往上查找（一直循环下去 一直到body为止）
    while (parent && parent.nodeName.toLowerCase() !== 'body') {
        left += parent.offsetLeft + parent.clientLeft
        top += parent.offsetTop + parent.clientTop
        parent = parent.offsetParent
    }
    return { left, top }
}