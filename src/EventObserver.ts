/*
 * @Author: zhangce
 * @Date: 2022-12-30 11:41:36
 * @Email: zhangce@fengmap.com
 * @LastEditTime: 2023-01-06 16:38:20
 * @LastEditors: zhangce
 * @LastEditorsEmail: zhangce@fengmap.com
 * @Description: 
 *  Copyright: Copyright 2014 - 2022, FengMap, Ltd. All rights reserved.
 */

import { isObjectExistsKey } from './is'

/**
 * 自定义事件观察者
 * @return {*}
 */
class EventObserver {
    private _listener: Record<string, any[]> = {}
    constructor() {

        this._listener = {}
    }

    /**
     * 监听事件
    */
    on(type: string, cb: (...rest: any[]) => void) {
        this._on(type, cb)
    }

    /**
     * 移除事件
    */
    off(type: string, cb: (...rest: any[]) => void) {
        this._off(type, cb)
    }

    /**
     * 触发事件
    */
    spread(type: string, ...rest) {
        if (!isObjectExistsKey(this._listener, type)) {
            return new Error('not found ' + type)
        }
        this._spread(type, ...rest)
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
 * @param {string} type
 * @param {function} cb
 * @return {*}
 */
const addEventListener = (type: string, cb: (...rest: any[]) => void) => {
    _eventPool.on(type, cb)
}

/**
 * 移除监听器
 * @param {string} type
 * @param {function} cb
 * @return {*}
 */
const removeEventListener = (type: string, cb: (...rest: any[]) => void) => {
    _eventPool.off(type, cb)
}

/**
 * 触发监听器
 * @param {string} type
 * @param {array} rest
 * @return {*}
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