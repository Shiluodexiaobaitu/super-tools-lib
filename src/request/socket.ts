/*
 * @Author: zhangce
 * @Date: 2021-08-16 18:09:23
 * @Email: zhangce@fengmap.com
 * @LastEditTime: 2022-07-05 13:46:11
 * @LastEditors: zhangce
 * @LastEditorsEmail: zhangce@fengmap.com
 * @Description: 
 *  Copyright: Copyright 2014 - 2022, FengMap, Ltd. All rights reserved.
 */
interface IProps {
    url: string;
    reconnectCount?: number
    heartTime?: number
}

class Socket {

    private ws: any;
    private url: string;
    private sendTimer: any;
    private heartTimer: any;
    private reconnectCount: number;
    private heartTime: number;

    constructor(props: IProps) {
        const { url, reconnectCount, heartTime } = props;

        this.ws = null;
        this.url = url;
        this.sendTimer = null;
        this.heartTimer = null;
        //重连次数
        this.reconnectCount = reconnectCount || 3000;
        //心跳检测时间
        this.heartTime = heartTime || 5000;

    }

    createWebSocket(message: any, cb: (data:any)=>void) {

        this.ws = new WebSocket(this.url);
        message = JSON.stringify(message);

        this.ws.onopen = () => {
            this.sendTimer = setInterval(() => {
                this.ws.send(message)
            }, 1000)
            this.heartbeat(message, cb)
            console.log('ws连接成功!' + new Date().toLocaleString());
        };

        this.ws.onclose = (evt:any) => {
            console.log('关闭ws',evt);
            this.ws.close();
        };

        this.ws.onmessage = (evt:any) => {
            this.heartbeat(message, cb)
            const data = JSON.parse(evt.data);
            if (cb && typeof cb === 'function') {
                cb(data);
            }
        };

        //报错
        this.ws.onerror = (evt:any) => {
            console.log('error:' + evt);
            this.heartbeat(message, cb)
        };

    }

    /**
    * 重连机制
    */
    heartbeat(message, cb) {
        clearInterval(this.heartTimer);

        this.heartTimer = setInterval(() => {
            if (this.reconnectCount === 0) {
                clearInterval(this.heartTimer)
                // console.log('到达最多重连次数,禁止重新连接')
                return;
            }
            // console.log('超过心跳检测时间触发重连', this.reconnectCount);
            this.ws.close()
            clearInterval(this.sendTimer)
            this.createWebSocket(message, cb)
            --this.reconnectCount;
        }, this.heartTime)
    }
}

export default Socket;