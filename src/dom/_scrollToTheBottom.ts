import { throttle } from '../tools'

/**
 * 监听滚动条滚动到底部
 * 
 * @since 1.62.0
 * @param {HTMLElement} ele - 元素
 * @param {Function} callback - 事件回调
 * @param {number} dis - 距离滚动条底部多远触发事件 默认0
 * @param {number} delay - 截流函数时间 默认200毫秒
 * @example
 * 
 * ```ts
 * import { scrollToTheBottom } from 'super-tools-lib'
 * 
 * scrollToTheBottom(dom, () => {
 *  console.log('到底部啦')
 * })
 * ```
 */
export const scrollToTheBottom = (ele: HTMLElement, callback: () => void, dis = 0, delay = 200) => {
    const scrollFn = () => {
        const sh = ele.scrollHeight - dis

        const ch = ele.clientHeight
        const st = ele.scrollTop
        if ((ch + st) >= sh) {
            callback()
        }
    }

    ele.addEventListener('scroll', throttle(scrollFn, delay))

}