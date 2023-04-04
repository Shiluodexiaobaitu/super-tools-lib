/**
 * 自定义状态观察者
 * 
 * @since 1.0.0
 * @example
 * 
 * ```ts
 * import { StateObserver } from 'super-tools-lib'
 * 
 * const state = new StateObserver()
 * 
 * state.set('token', 'ASASADANSJA7272NDAD')
 * 
 * state.get('token') // ASASADANSJA7272NDAD
 * 
 * state.has('token') // true
 * 
 * state.on('token', () => {
 * 
 * })
 * 
 * state.delete('token')
 * ```
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
     * 
     * @param {string} key - 键
     * @param {unknown} value - 值
     */
    set(key: string, value: unknown): void {

        this._state.set(key, value)

        this._spread(key, value)
    }

    /**
     * 查询
     * 
     * @param {string} key - 键
     */
    get(key: string): unknown {

        return this._state.get(key)
    }

    /**
     * 删除
     * 
     * @param {string} key - 键
     */
    delete(key: string): void {
        this._state.delete(key)
    }

    /**
     * 检测键是否存在
     * 
     * @param {string} key - 键
     * @return {boolean} 返回是否存在
     */
    has(key: string): boolean {
        return this._state.has(key)
    }

    /**
     * 返回 Map 对象中键的数组
     * @return {array} 返回键数组
     */
    keys() {
        return this._state.keys()
    }

    /**
     * 返回 Map 对象中值的数组
     * 
     * @return {array} 返回值数组
     */
    values() {
        return this._state.values()
    }

    /**
     * 遍历对象
     * 
     * @param {function} iteratee - 每次迭代调用的函数
     */
    forEach(iteratee: (value: unknown, key: string) => void): void {
        this._state.forEach((value, key) => {
            iteratee(value, key)
        })
    }

    /**
     * 长度
     * @return {number} 返回长度
     */    
    size() {
        return this._state.size
    }

    /**
     * 删除 Map 中的所有元素
     */
    clear(): void {
        this._state.clear()
        this._listener = {}
    }

    /**
     * 监听状态变化
     * 
     * @param {string} type - 事件名
     * @param {function} cb - 事件回调
     */
    on(type: string, cb: (...rest: any[]) => void) {

        this._on(type, cb)
    }

    /**
     * 移除监听状态变化
     * 
     * @param {*} type - 事件名
     * @param {*} cb - 对应注册时的事件回调
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
 * 
 * @param {string} key - 键
 * @return {any} 返回值
 * @example
 * 
 * ```ts
 * import { getState } from 'super-tools-lib'
 * 
 * getState('token') // ASASADANSJA7272NDAD
 * ```
 */
const getState = (key: string) => {
    return _stateObserver.get(key)
}

/**
 * 设置全局共享状态
 * 
 * @since 1.0.0
 * @param {string} key - 键
 * @param {any} value - 值
 * @example
 * 
 * ```ts
 * import { setState } from 'super-tools-lib'
 * 
 * setState('token', 'ASASADANSJA7272NDAD')
 * ```
 */
const setState = (key: string, value: any) => {
    _stateObserver.set(key, value)
}

/**
 * 删除全局共享状态
 * 
 * @since 1.0.0
 * @param {string} key - 键
 * @example
 * 
 * ```ts
 * import { deleteState } from 'super-tools-lib'
 * 
 * deleteState('token')
 * ```
 */
const deleteState = (key: string) => {
    _stateObserver.delete(key)
}

/**
 * 注册全局状态监听器
 * 
 * @since 1.0.0
 * @param {string} state - 状态名
 * @param {function} cb - 状态值改变后的回调
 * @example
 * 
 * ```ts
 * import { addStateListener } from 'super-tools-lib'
 * 
 * addStateListener('token', ()=>{})
 * ```
 */
const addStateListener = (type: string, cb: (...rest: any[]) => void) => {
    _stateObserver.on(type, cb)
}

/**
 * 移除全局状态监听器
 * 
 * @since 1.0.0
 * @param {string} type - 状态名
 * @param {function} cb - 对应状态值改变后的回调
 * @example
 * 
 * ```ts
 * import { removeStateListener } from 'super-tools-lib'
 * 
 * removeStateListener('token')
 * ```
 */
const removeStateListener = (type: string, cb: (...rest: any[]) => void) => {
    _stateObserver.off(type, cb)
}

export { StateObserver, getState, setState, deleteState, addStateListener, removeStateListener }