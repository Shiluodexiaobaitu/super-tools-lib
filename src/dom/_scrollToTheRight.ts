import { throttle } from '../tools'

/**
 * 监听x轴滚动条滚动到底部
 * 
 * @since 1.76.0
 * @param {HTMLElement} ele - 元素
 * @param {Function} callback - 事件回调
 * @param {number} dis - 距离滚动条底部多远触发事件 默认0
 * @param {number} delay - 截流函数时间 默认200毫秒
 * @return {{remove}} - remove: 移除监听
 * @example
 * 
 * ```ts
 * import { scrollToTheRight } from 'super-tools-lib'
 * 
 * scrollToTheRight(dom, () => {
 *  console.log('到底部啦')
 * })
 * ```
 */
export const scrollToTheRight = (ele: HTMLElement, callback: () => void, dis = 0, delay = 200) => {
    const scrollFn = () => {
        const sh = ele.scrollWidth - dis

        const ch = ele.clientWidth
        const st = ele.scrollLeft
        if ((ch + st) >= sh) {
            callback()
        }
    }

    const th = throttle(scrollFn, delay)

    ele.addEventListener('scroll', th)
    return {
        remove: () => {
            ele.removeEventListener('scroll', th)
        },
    }
}