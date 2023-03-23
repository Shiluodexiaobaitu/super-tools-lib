/*
 * @Author: zhangce
 * @Date: 2022-12-30 10:34:48
 * @Email: zhangce@fengmap.com
 * @LastEditTime: 2023-03-14 17:04:17
 * @LastEditors: 张策
 * @LastEditorsEmail: zhangce@fengmap.com
 * @Description: 
 *  Copyright: Copyright 2014 - 2022, FengMap, Ltd. All rights reserved.
 */

/**
 * 自定义状态观察者
 * @return {*}
 */
class StateObserver {

    private _state: Map<string, unknown>
    private _listener: Record<string, any[]> = {}
    constructor() {

        this._listener = {}
        this._state = new Map()
    }

    /**
     * 设置值
     * @param {string} key
     * @param {unknown} value
     * @return {*}
     */
    set(key: string, value: unknown): void {

        this._state.set(key, value)

        this._spread(key, value)
    }

    /**
     * 查询
     * @param {string} key
     * @return {*}
     */
    get(key: string): unknown {

        return this._state.get(key)
    }

    /**
     * 删除
     * @param {string} key
     * @return {*}
     */
    delete(key: string): void {
        this._state.delete(key)
    }

    /**
     * 如果键存在，则返回 true
     * @param {string} key
     * @return {*}
     */
    has(key: string): boolean {
        return this._state.has(key)
    }

    /**
     * 返回 Map 对象中键的数组
     * @return {*}
     */
    keys() {
        return this._state.keys()
    }

    /**
     * 返回 Map 对象中值的数组
     * @return {*}
     */
    values() {
        return this._state.values()
    }

    /**
     * 遍历对象
     * @param {*} cb
     * @return {*}
     */
    forEach(cb: (value: unknown, key: string) => void): void {
        this._state.forEach((value, key) => {
            cb(value, key)
        })
    }

    size() {
        return this._state.size
    }

    /**
     * 删除 Map 中的所有元素
     * @return {*}
     */
    clear(): void {
        this._state.clear()
        this._listener = {}
    }

    /**
     * 监听状态变化
     * @param {string} type
     * @param {*} cb
     * @return {*}
     */
    on(type: string, cb: (...rest: any[]) => void) {

        this._on(type, cb)
    }

    /**
     * 移除监听状态变化
     * @param {*} type
     * @param {*} cb
     * @return {*}
     */
    off(type: any, cb: (...rest: any[]) => void) {
        this._off(type, cb)
    }

    _on(type: string | number, cb: (...rest: any[]) => void) {

        if (this._listener[type]) {
            if (this._listener[type].includes(cb)) return
            this._listener[type].push(cb)
        } else {
            this._listener[type] = [cb]
        }
    }

    _off(type: string | number, cb: any) {
        if (this._listener[type]) {
            this._listener[type] = this._listener[type].filter(i => i !== cb)
        }
    }

    _spread(type: string | number, ...rest: any[]) {
        if (this._listener[type]) {
            this._listener[type].forEach(cb => {
                cb(...rest)
            })
        }
    }
}

const _stateObserver = new StateObserver()

/**
 * 查询全局共享状态
 * @param {string} key
 * @return {*}
 */
const getState = (key: any) => {
    return _stateObserver.get(key)
}

/**
 * 设置全局共享状态
 * @param {State} state
 * @return {*}
 */
const setState = (key: any, value: any) => {
    _stateObserver.set(key, value)
}

/**
 * 删除全局共享状态
 * @param {string} key
 * @return {*}
 */
const deleteState = (key: string) => {
    _stateObserver.delete(key)
}

/**
 * 注册全局状态监听器
 * @param {string} type
 * @param {function} cb
 * @return {*}
 */
const addStateListener = (type: string, cb: (...rest: any[]) => void) => {
    _stateObserver.on(type, cb)
}

/**
 * 移除全局状态监听器
 * @param {string} type
 * @param {function} cb
 * @return {*}
 */
const removeStateListener = (type: string, cb: (...rest: any[]) => void) => {
    _stateObserver.off(type, cb)
}

export { StateObserver, getState, setState, deleteState, addStateListener, removeStateListener }