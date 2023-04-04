/**
 * Dom 类
 * 
 * @since 1.62.0
 * @example
 * 
 * ```ts
 * import { Dom, $ } from 'super-tools-lib'
 * 
 * const dom = new Dom('selector')
 * 
 * dom.setCss({color: 'red'})
 * 
 * // 或者使用已经封装好的 $方法
 * 
 * $('selector').setCss({color: 'red'})
 * ```
 */
class Dom {
    /**
     * Dom 类的私有属性
     */
    private _element: HTMLElement

    /**
     * 构造函数
     * @param selector - 选择器
     */
    constructor(selector: string) {
        this._element = document.querySelector(selector)
    }

    /**
     * 获取dom 节点
     * @return {HTMLElement} 返回 dom 节点
     */
    getDom(): HTMLElement {
        return this._element
    }

    /**
     * 设置css 方法
     * @param styles - 样式对象
     * @returns 返回 Dom 实例
     */
    setCss(styles: object): Dom {
        Object.assign(this._element.style, styles)
        return this
    }

    /**
     * on 方法
     * @param eventType - 事件类型
     * @param callback - 回调函数
     * @returns 返回 Dom 实例
     */
    on(eventType: string, callback: () => void): Dom {
        this._element.addEventListener(eventType, callback)
        return this
    }

    /**
     * 设置html 方法
     * @param html - html 字符串
     * @returns 返回 Dom 实例
     */
    setHtml(html: string): Dom {
        this._element.innerHTML = html
        return this
    }

    /**
     * 获取子级html 方法
     * @return {*}
     */
    getHtml(): string {
        return this._element.innerHTML
    }

    /**
     * 获取表单元素的值
     * @return {*}
     */
    getVal(): string {
        return (this._element as HTMLInputElement).value
    }

    /**
     * 设置表单元素的值
     * @param {string} value
     * @return {*}
     */
    setVal(value: string): Dom {
        (this._element as HTMLInputElement).value = value
        return this
    }

    /**
     * 在元素后插入给定的HTML
     * @param {string} html - html 字符串
     * @return {*} 返回 Dom 实例
     */
    insertHtmlAfter(html: string): Dom {
        this._element.insertAdjacentHTML('afterend', html)
        return this
    }

    /**
     * 在元素前插入给定的HTML
     * @param {string} html - html 字符串
     * @return {*} 返回 Dom 实例
     */
    insertHtmlBefore(html: string): Dom {
        this._element.insertAdjacentHTML('beforebegin', html)
        return this
    }

    /**
     * 添加类名
     * @param {string} className - 要添加的类名
     * @return {*} 返回 Dom 实例
     */
    addClass(className: string): Dom {
        this._element.classList.add(className)
        return this
    }

    /**
     * 移除类名
     * @param {string} className - 要移除的类名
     * @return {*} 返回 Dom 实例
     */
    removeClass(className: string): Dom {
        this._element.classList.remove(className)
        return this
    }

    /**
     * 获取下一个同级别元素
     * @return {*}
     */
    next() {
        let nextSibling = this._element.nextSibling
        while (nextSibling && nextSibling.nodeType !== 1) {
            nextSibling = nextSibling.nextSibling
        }
        return nextSibling
    }

    /**
     * 获取上一个同级别元素
     * @return {*}
     */
    prev(): ChildNode | null {
        let prevSibling = this._element.previousSibling
        while (prevSibling && prevSibling.nodeType !== 1) {
            prevSibling = prevSibling.previousSibling
        }
        return prevSibling
    }

    /**
     * 获取同级别最后一个元素
     * @return {*}
     */
    last(): ChildNode | null {
        let sibling = this._element.parentNode.firstChild
        const siblings: ChildNode[] = []
        while (sibling) {
            if (sibling.nodeType === 1 && sibling !== this._element) {
                siblings.push(sibling)
            }
            sibling = sibling.nextSibling
        }
        return siblings[siblings.length - 1]
    }

    /**
     * 获取同级别第一个元素
     * @return {*}
     */    
    first(): ChildNode | null {
        const parent = this._element.parentNode
        const siblings = parent.children
        const index = Array.prototype.indexOf.call(siblings, this._element)
        return siblings[index + 1]
    }
}

/**
 * 链式dom操作
 * @param {string} selector class, id, 标签名
 */
const $ = (selector: string) => new Dom(selector)

export { Dom, $ }