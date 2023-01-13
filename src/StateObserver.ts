/*
 * @Author: zhangce
 * @Date: 2022-12-30 10:34:48
 * @Email: zhangce@fengmap.com
 * @LastEditTime: 2022-12-30 11:59:39
 * @LastEditors: zhangce
 * @LastEditorsEmail: zhangce@fengmap.com
 * @Description: 
 *  Copyright: Copyright 2014 - 2022, FengMap, Ltd. All rights reserved.
 */
import { isObjectIncludeSpecifiedKey, isObjectExistsKey } from './is'

type State = Record<string, unknown>

/**
 * @desc: 自定义状态观察者
 * @return {*}
 */
class StateObserver {

    private _state: State = {}
    private _listener: Record<string, any[]> = {}
    constructor(state: State) {
        this._listener = {}
        this._state = state
    }

    on(type, cb) {
        if (!isObjectExistsKey(this._state, type)) {
            return new Error('not found ' + type)
        }
        this._on(type, cb)
    }

    off(type, cb) {
        this._off(type, cb)
    }

    setState(state: State) {
        if (!isObjectIncludeSpecifiedKey(this._state, state)) {
            return new Error('not found key')
        }
        this._state = {
            ...this._state,
            ...state,
        }

        for (const key in state) {
            this._spread(key, state[key])
        }
    }

    getState(key?: string) {
        if (key) {
            return this._state[key]
        }
        return this._state
    }


    _on(type, cb) {

        if (this._listener[type]) {
            if (this._listener[type].includes(cb)) return
            this._listener[type].push(cb)
        } else {
            this._listener[type] = [cb]
        }
    }

    _off(type, cb) {
        if (this._listener[type]) {
            this._listener[type] = this._listener[type].filter(i => i !== cb)
        }
    }

    _spread(type, ...rest) {
        if (this._listener[type]) {
            this._listener[type].forEach(cb => {
                cb(...rest)
            })
        }
    }
}

export { StateObserver }