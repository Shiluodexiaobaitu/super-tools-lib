
/**
 * 创建或加入某个频道
 * - Broadcast Channel API 可以实现同 源 下浏览器不同窗口，Tab 页，frame 或者 iframe 下的 浏览器上下文 (通常是同一个网站下不同的页面) 之间的简单通讯。
 * 
 * @since 1.67.0
 * @param {string} name - 频道名称
 * @return {BroadcastChannel} 返回一个频道
 * @example
 * 
 * ```ts
 * import { mBroadcastChannel } from 'super-tools-lib'
 * 
 * const channel = mBroadcastChannel('channel')
 * 
 * channel.postMessage('hello')
 * 
 * channel.onmessage = (message) => {
 * console.log(message)
 * }
 * 
 * channel.close()
 * ```
 */
function mBroadcastChannel(name: string): BroadcastChannel {
    return new BroadcastChannel(name)
}

/**
 * 发送消息
 * @param {any} message
 */

mBroadcastChannel.prototype.postMessage = function (message) {
    this.postMessage(message)
}

/**
 * 接收消息
 * @param {any} message
 */
mBroadcastChannel.prototype.onmessage = function (message) {
    this.onmessage(message)
}

/**
 * 关闭频道
 */
mBroadcastChannel.prototype.close = function () {
    this.close()
}

export {
    mBroadcastChannel,
}