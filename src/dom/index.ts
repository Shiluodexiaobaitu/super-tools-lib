import { throttle } from '../tools'

/**
 * @desc: 获取一个元素距离浏览器左上角的偏移量
 * @param {HTMLElement} ele
 * @return {*}
 */
const getOffset = function (ele: HTMLElement): { left: number, top: number } {
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

/**
 * @desc: 抖动函数
 * @param {ele} 抖动的dom元素
 * @param {attr} 抖动的方向 left top
 * @param {cb} 抖动的完成回调
 * @param {rate} 抖动次数
 * @param {time} 每次抖动需要的时间
*/
const shaking = ({ ele, attr, cb, rate = 20, time = 50 }: { ele: HTMLElement, attr: string, cb: () => void, time?: number, rate?: number }): void => {

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
 * @desc: 阻止冒泡事件
 * @param e 
 */
const stopPropagation = (e: Event) => {
    e = e || window.event
    if (e.stopPropagation) {    // W3C阻止冒泡方法 
        e.stopPropagation()
    } else {
        e.cancelBubble = true // IE阻止冒泡方法 
    }
}

/**
 * @desc: 检测类名
 * @param ele dom
 * @param name 类名
 * @returns {boolean}
 */
const hasClass = (ele: HTMLElement, name: string): boolean => {
    return !!ele.className.match(new RegExp('(\\s|^)' + name + '(\\s|$)'))
}

/**
 * @desc: 添加类名
 * @param {*} ele
 * @param {*} name
 * @return {*}
 */
const addClass = (ele: HTMLElement, name: string) => {
    if (!hasClass(ele, name)) ele.className += ' ' + name
}

/**
 * @desc: 删除类名
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
 * @desc: 替换类名
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
 * @desc: 滚动条是否滚动到底部
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

/**
 * @desc: 获取transform translate中矩阵x，y坐标
 * @param {string} transform
 * @return {*}
 */
const getTransformMatrix = (transform: string): { x: number, y: number } => {
    const matrix = new WebKitCSSMatrix(transform)
    if (matrix) {
        return { x: matrix.m41, y: matrix.m42 }
    }
    return { x: -1, y: -1 }
}

/**
 * @desc: 检查某个元素是否是另一个元素的后代
 * @param {Node} child
 * @param {Node} parent
 * @return {*}
 */
const isDescendant = (child: Node, parent: Node): boolean => parent.contains(child)

/**
 * @desc: 获取鼠标所选文本
 * @return {*}
 */
const getSelectedText = () => window.getSelection().toString()

/**
 * @desc: 在其他元素之后插入一个元素
 * @param {Element} newEle
 * @param {Element} anotherEle
 * @return {*}
 */
const insertAfter = (newEle: Element, anotherEle: Element): Element | null => {
    return anotherEle.insertAdjacentElement('afterend', newEle)
}

/**
 * @desc: 在其他元素之前插入一个元素
 * @param {Element} newEle
 * @param {Element} anotherEle
 * @return {*}
 */
const insertBefore = (newEle: Element, anotherEle: Element) => {
    return anotherEle.insertAdjacentElement('beforebegin', newEle)
}

/**
 * @desc: 在元素后插入给定的HTML
 * @param {string} html
 * @param {Element} ele
 * @return {*}
 */
const insertHtmlAfter = (html: string, ele: Element): void => {
    ele.insertAdjacentHTML('afterend', html)
}

/**
 * @desc: 在元素前插入给定的HTML
 * @param {string} html
 * @param {Element} ele
 * @return {*}
 */
const insertHtmlBefore = (html: string, ele: Element): void => {
    ele.insertAdjacentHTML('beforebegin', html)
}

/**
 * @desc: 替换dom元素
 * @param {Element} oldEle
 * @param {Element} newEle
 * @return {*}
 */
const eleReplace = (oldEle: Element, newEle: Element): Element | null => {
    return (oldEle.parentNode ? oldEle.parentNode.replaceChild(newEle, oldEle) : null)
}

export {
    getOffset,
    shaking,
    stopPropagation,
    hasClass,
    addClass,
    removeClass,
    replaceClass,
    scrollToTheBottom,
    textVisibilityChange,
    getTransformMatrix,
    isDescendant,
    getSelectedText,
    insertAfter,
    insertBefore,
    insertHtmlAfter,
    insertHtmlBefore,
    eleReplace,
}