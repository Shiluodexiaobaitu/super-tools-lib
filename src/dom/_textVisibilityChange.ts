/**
 * 计算文字是否溢出容器
 * 
 * @since 1.62.0
 * @param {HTMLElement} dom - 承载文字的元素
 * @return {boolean} 返回 true / false
 * @example
 * 
 * ```ts
 * import { textVisibilityChange } from 'super-tools-lib'
 * 
 * textVisibilityChange(textDom) // true
 * ```
 */
export const textVisibilityChange = (dom: HTMLElement): boolean => {
    // const ev = event.target.parentElement
    const ev_weight = dom.scrollWidth // 文本的实际宽度   scrollWidth：对象的实际内容的宽度，不包边线宽度，会随对象中内容超过可视区后而变大。
    const content_weight = dom.clientWidth // 文本的可视宽度 clientWidth：对象内容的可视区的宽度，不包滚动条等边线，会随对象显示大小的变化而改变。
    if (ev_weight > content_weight) {
        // 实际宽度 > 可视宽度  文字溢出
        return true
    } else {
        // 否则为不溢出
        return false
    }
}