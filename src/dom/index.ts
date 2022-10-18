import { throttle } from '../tools'

/**
 * 获取一个元素距离浏览器左上角的偏移量
 * @param {ele} dom元素
*/
const getOffset = function (ele: any): any {
    let left = ele.offsetLeft // 左偏移
    let top = ele.offsetTop // 上偏移
    let parent = ele.offsetParent

    // 只要找到的父级参照物不是body 就继续往上查找（一直循环下去 一直到body为止）
    while (parent && parent.nodeName.toLowerCase() !== 'body') {
        left += parent.offsetLeft + parent.clientLeft
        top += parent.offsetTop + parent.clientTop
        parent = parent.offsetParent
    }
    return {
        left,
        top
    }
}

/**
 * 抖动函数
 * @param {ele} 抖动的dom元素
 * @param {attr} 抖动的方向 left top
 * @param {cb} 抖动的完成回调
 * @param {rate} 抖动次数
 * @param {time} 每次抖动需要的时间
*/
const shaking = ({ ele, attr, cb, rate = 20, time = 50 }: { ele: any, attr: string, cb: () => void, time?: number, rate?: number }): void => {

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

/**
 * 阻止冒泡事件
 * @param e 
 */
const stopPropagation = (e) => {
    e = e || window.event
    if (e.stopPropagation) {    // W3C阻止冒泡方法 
        e.stopPropagation()
    } else {
        e.cancelBubble = true // IE阻止冒泡方法 
    }
}

/**
 * 检测类名
 * @param ele dom
 * @param name 类名
 * @returns {boolean}
 */
const hasClass = (ele: HTMLElement, name: string) => {
    return ele.className.match(new RegExp('(\\s|^)' + name + '(\\s|$)'))
}

/**
 * @description: 添加类名
 * @param {*} ele
 * @param {*} name
 * @return {*}
 */
const addClass = (ele: HTMLElement, name: string) => {
    if (!hasClass(ele, name)) ele.className += ' ' + name
}

/**
 * @description: 删除类名
 * @param {*} ele
 * @param {*} name
 * @return {*}
 */
const removeClass = (ele: HTMLElement, name: string) => {
    if (hasClass(ele, name)) {
        const reg = new RegExp('(\\s|^)' + name + '(\\s|$)')
        ele.className = ele.className.replace(reg, '')
    }
}

/**
 * @description: 替换类名
 * @param {*} ele
 * @param {*} newName
 * @param {*} oldName
 * @return {*}
 */
const replaceClass = (ele: HTMLElement, newName: string, oldName: string) => {
    removeClass(ele, oldName)
    addClass(ele, newName)
}

/**
 * 数字滚动封装，滚动到指定的数字
 * @param {*} ele 目标dom元素
 * @param {*} targetNumber 要滚动到的数字
 * @param {*} duration 动画时间
 */
const numberRoll = (ele: any, targetNumber: number, duration: number) => {
    const type = ele.tagName
    let firstValue

    const frequency = duration / 1000
    if (type === 'INPUT') {
        if (isNaN(Number(targetNumber))) {
            throw new Error('目标数字传递错误')
        }
        if (!isNaN(Number(ele.value))) {
            firstValue = !!ele.value ? Number(ele.value) : 0
        }
    } else {
        if (isNaN(Number(targetNumber))) {
            throw new Error('目标数字传递错误')
        }
        if (!isNaN(Number(ele.innerHTML))) {
            firstValue = Number(ele.innerHTML)
        }
    }
    const step = (Number(targetNumber) - firstValue) / 1000
    if (type === 'INPUT') {
        const numberTimer = setInterval(function () {
            firstValue += step
            ele.value = firstValue
            if (Math.abs(Number(targetNumber) - firstValue) <= step) {
                ele.value = targetNumber
                clearInterval(numberTimer)
            }
        }, frequency)
    } else {
        const numberTimer = setInterval(function () {
            firstValue += step
            ele.innerHTML = firstValue
            if (Math.abs(Number(targetNumber) - firstValue) <= step) {
                ele.innerHTML = targetNumber
                clearInterval(numberTimer)
            }
        }, frequency)
    }

}

/**
 * @description: 滚动条是否滚动到底部
 * @param {HTMLElement} ele
 * @param {Function} callback
 * @param {number} delay
 * @return {*}
 */
const scrollToTheBottom = (ele: HTMLElement, callback: () => void, delay = 200) => {
    const scrollFn = () => {
        const sh = ele.scrollHeight

        const ch = ele.clientHeight
        const st = ele.scrollTop
        if ((ch + st) >= sh) {
            callback()
        }
    }

    ele.addEventListener('scroll', throttle(scrollFn, delay))

}

/**
 * @desc: 计算文字是否溢出容器
 * @param {HTMLElement} dom 承载文字的容器
 * @return {*}
 */
const textVisibilityChange = (dom: HTMLElement): boolean => {
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

export {
    getOffset,
    shaking,
    stopPropagation,
    hasClass,
    addClass,
    removeClass,
    replaceClass,
    numberRoll,
    scrollToTheBottom,
    textVisibilityChange
}