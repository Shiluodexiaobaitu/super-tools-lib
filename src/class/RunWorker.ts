/*
 * @Author: zhangce
 * @Date: 2023-03-13 16:07:09
 * @Email: zhangce@fengmap.com
 * @LastEditTime: 2023-03-14 16:03:24
 * @LastEditors: 张策
 * @LastEditorsEmail: zhangce@fengmap.com
 * @Description: 
 *  Copyright: Copyright 2014 - 2022, FengMap, Ltd. All rights reserved.
 */
import { EventObserver } from './EventObserver'

class RunWorker {

    private _eventPool: EventObserver
    private _workers: Map<string, Worker>
    constructor() {

        this._eventPool = new EventObserver()

        this._workers = new Map()
    }

    /**
     * 创建Worker
     * @param {string} name
     * @param {any} f
     * @return {*}
     */
    createWorker(name: string, f: any): void {
        const _worker = new Worker(URL.createObjectURL(new Blob([`(${f.toString()})()`])))
        this._workers.set(name, _worker)
    }

    /**
     * 向worker线程传入数据
     * @param {string} name
     * @param {any} params
     * @param {StructuredSerializeOptions} options
     * @return {*}
     */
    postMessage(name: string, params: any, options?: StructuredSerializeOptions): void {
        const _worker = this._workers.get(name)
        _worker?.postMessage(params, options)
    }

    /**
     * 事件监听
     * @param {string} name
     * @param {message} type 主线程监听子线程返回消息
     * @param {error} type  监听子线程报错
     * @param {messageerror} type 当 Worker 对象接收到一条无法被反序列化的消息时， messageerror 事件将在该对象上被触发。
     * @param {function} cb
     * @return {*}
     */
    on(name: string, type: 'message' | 'error' | 'messageerror', cb: (...rest: any[]) => void): void {
        this._eventPool.on(type, cb)
        const _worker = this._workers.get(name)
        if (!_worker) return
        if (type === 'message') {
            _worker.onmessage = (evt: MessageEvent) => {
                this._eventPool.spread(type, evt)
            }
        } if (type === 'messageerror') {
            _worker.onmessageerror = (evt: MessageEvent) => {
                this._eventPool.spread(type, evt)
            }
        } else {
            _worker.onerror = (evt: ErrorEvent) => {
                this._eventPool.spread(type, evt)
            }
        }
    }

    /**
     * 关闭worker线程
     * @param {string} name
     * @return {*}
     */
    close(name: string): void {
        const _worker = this._workers.get(name)
        _worker?.terminate()
        this._workers.delete(name)
    }
}

export { RunWorker }