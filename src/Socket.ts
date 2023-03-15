/*
 * @Author: 张策
 * @Date: 2023-01-13 17:04:56
 * @Email: zhangce@fengmap.com
 * @LastEditTime: 2023-03-15 10:48:52
 * @LastEditors: 张策
 * @LastEditorsEmail: zhangce@fengmap.com
 * @Copyright: Copyright 2014 - 2023, FengMap, Ltd. All rights reserved.
 */
import { EventObserver } from './EventObserver'
interface IProps {
    url: string
    reconnectCount?: number
    heartTime?: number
}

class Socket {

    private _ws: WebSocket
    private _url: string
    private _sendTimer: any
    private _heartTimer: any
    private _eventPool: EventObserver
    private _reconnectCount: number
    private _heartTime: number

    constructor(props: IProps) {
        const { url, reconnectCount, heartTime } = props

        this._url = url
        this._sendTimer = null
        this._heartTimer = null
        //重连次数
        this._reconnectCount = reconnectCount || 3000
        //心跳检测时间
        this._heartTime = heartTime || 5000

        this._eventPool = new EventObserver()
    }

    /**
     * 启动
     * @return {*}
     */    
    start(): void {
        this._init()
    }

    /**
     * 发送消息
     * @param {string | ArrayBufferLike | Blob | ArrayBufferView} message
     * @return {*}
     */
    send(message: string | ArrayBufferLike | Blob | ArrayBufferView): void {
        this._ws.onopen = () => {
            this._ws.send(message)
        }
    }

    /**
     * 关闭通信
     * @return {*}
     */
    close(): void {
        this._ws.close()
        clearInterval(this._heartTimer)
    }

    /**
     * 事件监听
     * @param {*} type
     * @param {*} cb
     * @return {*}
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
     * @return {*}
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