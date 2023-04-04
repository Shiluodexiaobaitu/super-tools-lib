import { EventObserver } from './_EventObserver'

/**
 * 多线程
 * 
 * @since 1.62.0
 * @example
 * 
 * ```ts
 * import { RunWorker } from 'super-tools-lib'
 * 
 * 
 * const wok = new RunWorker()
 * 
 * const f = () => {
 *  self.onmessage = (evt) => {
 *   // 执行耗时运算...
 *    self.postMessage('运算完成')
 *  }
 * }
 * 
 * // 创建一个count子线程
 * wok.createWorker('count', f)
 * 
 * // 监听count线程返回的运算结果
 * wok.on('count', ‘message’, (data) => {
 *  console.log(data)
 * })
 * 
 * // 向count线程传递数据，count线程计算完成后会触发message事件
 * wok.postMessage('count',[1,2,3,4...])
 * 
 * // 关闭count线程
 * wok.close('count')
 * ```
 */
class RunWorker {

    private _eventPool: EventObserver
    private _workers: Map<string, Worker>
    constructor() {

        this._eventPool = new EventObserver()

        this._workers = new Map()
    }

    /**
     * 创建Worker
     * 
     * @param {string} name - 子线程名称
     * @param {any} f - 子线程函数
     */
    createWorker(name: string, f: any): void {
        const _worker = new Worker(URL.createObjectURL(new Blob([`(${f.toString()})()`])))
        this._workers.set(name, _worker)
    }

    /**
     * 向worker线程传入数据
     * 
     * @param {string} name - 子线程名称
     * @param {any} params - 传递数据
     * @param {StructuredSerializeOptions} options
     */
    postMessage(name: string, params: any, options?: StructuredSerializeOptions): void {
        const _worker = this._workers.get(name)
        _worker?.postMessage(params, options)
    }

    /**
     * 事件监听
     * 
     * @param {string} name - 子线程名称
     * @param {message} type - 主线程监听子线程返回消息
     * @param {error} type - 监听子线程报错
     * @param {messageerror} - type 当 Worker 对象接收到一条无法被反序列化的消息时， messageerror 事件将在该对象上被触发。
     * @param {function} cb - 回调函数
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
     * 
     * @param {string} name - 子线程名称
     */
    close(name: string): void {
        const _worker = this._workers.get(name)
        _worker?.terminate()
        this._workers.delete(name)
    }
}

export { RunWorker }