import { EventObserver } from './_EventObserver'
interface SocketProps {
    url: string
    reconnectCount?: number
    heartTime?: number
}

/**
 * Socket
 * 
 * @since 1.0.0
 * @example
 * 
 * ```ts
 * import { Socket } from 'super-tools-lib'
 * 
 * // 初始化
 * const sok = new Socket({url: 'ws:xxxx'})
 * 
 * // 启动通信
 * sok.start()
 * 
 * // 发送消息
 * sok.send(JSON.stringify({name: 1}))
 * 
 * // 监听相应
 * sok.on('message', () => {})
 * 
 * // 关闭通信
 * sok.close()
 * ```
 */
class Socket {

    private _ws: WebSocket
    private _url: string
    private _sendTimer: any
    private _heartTimer: any
    private _eventPool: EventObserver
    private _reconnectCount: number
    private _heartTime: number

    /**
     * 构造体
     * 
     * @param {string} props.url - url地址
     * @param {number} props.reconnectCount - 断线重连次数 默认3000次
     * @param {number} props.heartTime - 心跳检测时间 默认5s
     */    
    constructor(props: SocketProps) {
        const { url, reconnectCount = 3000, heartTime = 5000 } = props

        this._url = url
        this._sendTimer = null
        this._heartTimer = null
        // 重连次数
        this._reconnectCount = reconnectCount
        // 心跳检测时间
        this._heartTime = heartTime

        this._eventPool = new EventObserver()
    }

    /**
     * 启动
     */    
    start(): void {
        this._init()
    }

    /**
     * 发送消息
     * @param {string | ArrayBufferLike | Blob | ArrayBufferView} message - 发送的消息
     */
    send(message: string | ArrayBufferLike | Blob | ArrayBufferView): void {
        this._ws.onopen = () => {
            this._ws.send(message)
        }
    }

    /**
     * 关闭通信
     */
    close(): void {
        this._ws.close()
        clearInterval(this._heartTimer)
    }

    /**
     * 事件监听
     * @param {string} type - 事件名
     * @param {function} cb - 事件回调
     */
    on(type: 'message' | 'error', cb: (...rest: any[]) => void): void {
        this._eventPool.on(type, cb)
    }

    _init() {

        this._ws = new WebSocket(this._url)

        this._ws.onclose = (evt: any) => {
            console.log('关闭_ws', evt)
            this._ws.close()
        }

        this._ws.onmessage = (evt: any) => {
            this._heartbeat()
            const data = JSON.parse(evt.data)
            this._eventPool.spread('message', data)
        }

        //报错
        this._ws.onerror = (evt: any) => {
            console.log('error:' + evt)
            this._eventPool.spread('error', evt)
            this._heartbeat()
        }
    }

    /**
     * 重连机制
     */
    _heartbeat(): void {
        clearInterval(this._heartTimer)

        this._heartTimer = setInterval(() => {
            if (this._reconnectCount === 0) {
                clearInterval(this._heartTimer)
                // console.log('到达最多重连次数,禁止重新连接')
                return
            }
            // console.log('超过心跳检测时间触发重连', this._reconnectCount)
            this._ws.close()
            clearInterval(this._sendTimer)
            this._init()
            --this._reconnectCount
        }, this._heartTime)
    }
}

export { Socket }