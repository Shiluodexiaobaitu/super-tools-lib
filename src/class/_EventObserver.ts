import { isObjectExistsKey } from '../is'

/**
 * 自定义事件观察者
 * 
 * @since 1.62.0
 * @example
 * 
 * ```ts
 * import { EventObserver } from 'super-tools-lib'
 * 
 * const _eventPool = new EventObserver()
 * 
 * const click = () => {}
 * _eventPool.on('myclick', click)
 * 
 * // 触发已经注册好的myclick事件
 * _eventPool.spread('myclick', {name:1})
 * ```
 */
class EventObserver {
    private _listener: Record<string, any[]> = {}
    constructor() {

        this._listener = {}
    }

    /**
     * 监听事件
     * 
     * @param {string} type - 事件名
     * @param {function} cb - 回调函数
     */
    on(type: string, cb: (...rest: any[]) => void) {
        this._on(type, cb)
    }

    /**
     * 移除事件
     * 
     * @param {string} type - 事件名
     * @param {function} cb - 对应监听时的回调函数
     */
    off(type: string, cb: (...rest: any[]) => void) {
        this._off(type, cb)
    }

    /**
     * 触发事件
     * 
     * @param {string} type - 事件名
     * @param {rest} rest - 传递的参数
     */
    spread(type: string, ...rest): void {
        if (isObjectExistsKey(this._listener, type)) {
            this._spread(type, ...rest)
        }
    }

    _on(type: string, cb: (...rest: any[]) => void) {

        if (this._listener[type]) {
            if (this._listener[type].includes(cb)) return
            this._listener[type].push(cb)
        } else {
            this._listener[type] = [cb]
        }
    }

    _off(type: string, cb: (...rest: any) => void) {
        if (this._listener[type]) {
            this._listener[type] = this._listener[type].filter(i => i !== cb)
        }
    }

    _spread(type: string, ...rest) {
        if (this._listener[type]) {
            this._listener[type].forEach(cb => {
                cb(...rest)
            })
        }
    }
}

const _eventPool = new EventObserver()

/**
 * 注册监听器
 * - 是基于EventObserver二次封装的全局监听器可以在任何页面注册使用
 * 
 * @since 1.62.0
 * @param {string} type - 事件名
 * @param {function} cb - 回调函数
 * @example
 * 
 * ```ts
 * import { addEventListener } from 'super-tools-lib'
 * 
 * const fn = () => {}
 * addEventListener('myclick', fn)
 * ```
 */
const addEventListener = (type: string, cb: (...rest: any[]) => void) => {
    _eventPool.on(type, cb)
}

/**
 * 移除监听器
 * 
 * @since 1.62.0
 * @param {string} type - 事件名
 * @param {function} cb - 回调函数
 * @example
 * 
 * ```ts
 * import { removeEventListener } from 'super-tools-lib'
 * 
 * removeEventListener('myclick', fn)
 * ```
 */
const removeEventListener = (type: string, cb: (...rest: any[]) => void) => {
    _eventPool.off(type, cb)
}

/**
 * 触发监听器
 * 
 * @since 1.62.0
 * @param {string} type - 事件名
 * @param {array} rest - 传递的参数
 * @example
 * 
 * ```ts
 * import { dispatchEvent } from 'super-tools-lib'
 * 
 * dispatchEvent('myclick', '触发事件传递的参数')
 * ```
 */
const dispatchEvent = (type: string, ...rest) => {
    _eventPool.spread(type, ...rest)
}

export {
    EventObserver,
    addEventListener,
    dispatchEvent,
    removeEventListener,
}