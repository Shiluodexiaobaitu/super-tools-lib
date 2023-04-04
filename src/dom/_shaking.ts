/**
 * 抖动函数
 * 
 * @since 1.0.0
 * @param {object} params
 * @param {HTMLElement} params.ele - 抖动的dom元素
 * @param {string} params.attr - 抖动的方向 left top
 * @param {function} params.cb - 抖动的完成回调
 * @param {number} params.rate - 抖动次数 默认20次
 * @param {number} params.time - 每次抖动需要的时间 默认每次50毫秒
 * @example
 * 
 * ```ts
 * import { shaking } from 'super-tools-lib'
 * 
 * shaking({ele: dom, attr: 'left' })
 * ```
 */
export const shaking = ({ ele, attr, cb, rate = 20, time = 50 }: { ele: HTMLElement, attr: string, cb: () => void, time?: number, rate?: number }): void => {

    function getStyle(ele, attr) {
        if (ele.currentStyle) {
            return ele.currentStyle[attr]
        } else {
            return window.getComputedStyle(ele)[attr]
        }
    }
    const pos = parseInt(getStyle(ele, attr))
    const arr = []
    let timer = null
    let num = 0
    for (let i = rate; i > 0; i -= 2) {
        arr.push(i, -i)
    }
    arr.push(0)
    clearInterval(timer)
    timer = setInterval(function () {
        ele.style[attr] = pos + arr[num] + 'px'
        num++
        if (num === arr.length) {
            clearInterval(timer)
            cb && cb()
        }
    }, time)
}