declare global {
    interface Window { ActiveXObject: any; }
}

// 浏览器全屏
export { toFullScreen } from './_toFullScreen'

// LocalStorage
export { LocalStorage } from './_LocalStorage'

// SessionStorage
export { SessionStorage } from './_SessionStorage'

// 获取地理位置
export { getPosition } from './_getPosition'

// 禁止/开启：右键、选择、复制
export { disableContext } from './_disableContext'

// 打印屏幕
export { print } from './_print'

// 复制文本
export { copyText } from './_copyText'

// 平滑滚动到页面顶部
export { scrollToTop } from './_scrollToTop'

// 返回当前浏览器是什么类型的浏览器
export { userBrowser } from './_userBrowser'

// 获取localStorage使用容量
export { getLocalStorageSize } from './_getLocalStorageSize'

// 获取url?后参数
export { getUrlParam } from './_getUrlParam'

// cookie增删改查
export { cookie } from './_cookie'

// 无刷新去除url参数
export { noRefdelUrlParam } from './_noRefdelUrlParam'

// 获取窗口四个角的坐标
export { getWindowCorners } from './_getWindowCorners'

// 获取窗口中心点
export { getWindowCenter } from './_getWindowCenter'

// 打开一个新的窗口
export { newWin } from './_newWin'

// 滚动页面title
export { titleTex } from './_titleTex'

// 创建或加入某个频道
export { mBroadcastChannel } from './_mBroadcastChannel'

export { onVisibilityChange } from './_onVisibilityChange'

// 无刷新删除url？后的参数
export { removeUrlParam } from './_removeUrlParam'

// 监听浏览器全屏状态
export { onFullscreenchange } from './_onFullscreenchange'

// 获取粘贴板内容
export { pasteText } from './_pasteText'