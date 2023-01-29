declare global {
    interface Window { ActiveXObject: any; }
}

/**
 * @desc: 浏览器全屏
 * @param {*} void
 * @return {*}
 */
const toFullScreen = (): void => {
    const el: any = document.documentElement
    const rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullScreen

    if (rfs) {
        rfs.call(el)
    } else if (typeof window.ActiveXObject !== 'undefined') {
        //for IE，这里其实就是模拟了按下键盘的F11，使浏览器全屏
        const wscript = new window.ActiveXObject('WScript.Shell')
        if (wscript !== null) {
            wscript.SendKeys('{F11}')
        }
    } else {
        alert('浏览器不支持全屏')
    }
}

/**
 * @desc: 浏览器退出全屏
 * @param {*} void
 * @return {*}
 */
const exitFullscreen = (): void => {
    const el: any = parent.document
    const cfs = el.cancelFullScreen || el.webkitCancelFullScreen || el.mozCancelFullScreen || el.exitFullScreen

    if (cfs) {
        cfs.call(el)
    } else if (typeof window.ActiveXObject !== 'undefined') {
        //for IE，这里和fullScreen相同，模拟按下F11键退出全屏
        const wscript = new window.ActiveXObject('WScript.Shell')
        if (wscript !== null) {
            wscript.SendKeys('{F11}')
        }
    } else {
        alert('切换失败,可尝试Esc退出')
    }
}

/**
 * @desc: LocalStorage 
 * @return {*}
 */
const LocalStorage = {
    get(user: string, name: string): string {
        const mapStorage = JSON.parse(localStorage.getItem(user)) || {}
        return mapStorage[name] || ''
    },
    set(user: string, name: string, value: any): void {
        if (!name) return
        const mapStorage = JSON.parse(localStorage.getItem(user)) || {}
        mapStorage[name] = value
        localStorage.setItem(user, JSON.stringify(mapStorage))
    },
    remove(user: string, name: string): void {
        const mapStorage = JSON.parse(localStorage.getItem(user)) || {}
        mapStorage[name] && delete mapStorage[name]
        localStorage.setItem(user, JSON.stringify(mapStorage))
    },
    clear(): void {
        localStorage.clear()
    },
}

/**
 * @desc: H5 获取地理位置
 * @return {*}
 */
const getPosition = (
    timeout = 10000,
    maximumAge = 60000,
) => new Promise((resolve, reject) => {
    if (!navigator && !navigator.geolocation) {
        return reject(new Error('geolocation api not supported'))
    }

    const success = (loc) => {
        const location = {
            latitude: loc.coords.latitude,  // 纬度
            longitude: loc.coords.longitude,  // 经度
            accuracy: loc.coords.accuracy, // 精确度
        }
        resolve(location)
    }

    const error = () => reject('出错了')
    // 方法用来获取设备当前位置  需要https
    navigator.geolocation.getCurrentPosition(success, error, {
        // enableHighAcuracy: false,  // 指示浏览器获取高精度的位置，默认为false
        timeout,  // 指定获取地理位置的超时时间，默认不限时，单位为毫秒
        maximumAge, // 最长有效期，在重复获取地理位置时，此参数指定多久再次获取位置。
    })
})

// 使用示例
// getPosition()
//     .then(pos => {
//         console.log('pos', pos)
//     })
//     .catch(err => console.log(err))


/**
 * @desc:  禁止/开启：右键、选择、复制
 * @param {boolean} flag
 * @return {*}
 */
const winCopy = (flag: boolean) => {
    ['contextmenu', 'selectstart', 'copy'].forEach(function (ev) {
        document.addEventListener(ev, function (event) {
            return event.returnValue = flag
        })
    })
}

/**
 * @desc: 打印屏幕
 * @param {string} printEleId
 * @param {string} rootEleId
 * @param {string} style
 * @return {*}
 */
const print = (printEleId: string, rootEleId: string, style: string) => {

    const containerDiv = document.createElement('div')
    containerDiv.setAttribute('id', 'containerDiv')
    containerDiv.style.cssText = style ? style : 'width: 100vw;height:100vh'
    const box = document.getElementById(printEleId)
    const root = document.getElementById(rootEleId)

    const _p = box.style.position
    const _o = box.style.overflowY

    box.style.position = 'static'
    box.style.overflowY = 'visible'

    root.style.visibility = 'hidden'
    containerDiv.innerHTML = box.outerHTML
    root.parentNode.insertBefore(containerDiv, root)
    window.print()
    root.style.visibility = 'visible'
    box.style.position = _p
    box.style.overflowY = _o
    if (document.body.contains(document.getElementById('containerDiv'))) {
        document.body.removeChild(document.getElementById('containerDiv'))
    }
    return false
}

/**
 * @desc: 复制文本
 * @param {string} str
 * @return {*}
 */
const copy = (str: string): void => {
    const el = document.createElement('textarea')
    el.value = str
    el.setAttribute('readonly', '')
    el.style.position = 'absolute'
    el.style.left = '-9999px'
    el.style.top = '-9999px'
    document.body.appendChild(el)
    const selected =
        document.getSelection().rangeCount > 0
            ? document.getSelection().getRangeAt(0)
            : false
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
    if (selected) {
        document.getSelection().removeAllRanges()
        document.getSelection().addRange(selected)
    }
}

/**
 * @desc: 平滑滚动到页面顶部
 * @return {*}
 */
const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop)
        window.scrollTo(0, c - c / 8)
    }
}

/**
 * @desc: 返回当前浏览器是什么类型的浏览器
 * @param {*} string
 * @return {*} 
 */
const userBrowser = (): string => {
    const browserName = navigator.userAgent.toLowerCase()
    if (/msie/i.test(browserName) && !/opera/.test(browserName)) {
        return 'IE'
    } else if (/firefox/i.test(browserName)) {
        return 'Firefox'
    } else if (/chrome/i.test(browserName) && /webkit/i.test(browserName) && /mozilla/i.test(browserName)) {
        return 'Chrome'
    } else if (/opera/i.test(browserName)) {
        return 'Opera'
    } else if (/webkit/i.test(browserName) && !(/chrome/i.test(browserName) && /webkit/i.test(browserName) && /mozilla/i.test(browserName))) {
        return 'Safari'
    } else {
        return ''
    }
}

/**
 * @desc: 获取localStorage使用容量
 * @return {*}
 */
const getLocalStorageSize = (): string => {
    if (!window.localStorage) {
        console.log('浏览器不支持localStorage')
    }
    let size = 0
    for (const item in window.localStorage) {
        if (window.localStorage.hasOwnProperty(item)) {
            size += window.localStorage.getItem(item).length
        }
    }
    return (size / 1024).toFixed(2) + 'KB'
}

/**
 * @desc: 获取url参数 返回一个{}
 * @return {*}
 */
const getUrlParam = function () {
    const url = document.location.toString()
    let arrObj = url.split('?')
    const params = Object.create(null)
    if (arrObj.length > 1) {
        arrObj = arrObj[1].split('&')
        arrObj.forEach((item: any) => {
            item = item.split('=')
            params[item[0]] = item[1]
        })
    }
    return params
}

/**
 * @desc: 封装cookie增删改查的函数
 * @return {*}
 */
const cookie = {
    /**
     * 设置cookie属性及时间
     * 注意：只能逐条设置
     * @param {*} key 属性名
     * @param {*} value 属性值
     * @param {*} expTime 过期时间
     * @returns 
     */
    set: (key: string, value: string, expTime?: number) => {
        document.cookie = key + '=' + value + ';max-age=' + expTime
    },

    /**
     * 删除cookie属性
     * @param {*} key 被删的属性
     */
    delete: (key: string) => {
        document.cookie = key + '=' + '' + ';max-age=' + -1
    },

    /**
     * 查询cookie属性
     * 使用：get('hobby', function(data){console.log(data)})
     * @param {*} key 
     * @param {*} cb 
     * @returns 
     */
    get: (key: string) => {
        const CookiesArray = document.cookie.split('; ')
        let value: string | undefined = undefined
        for (let i = 0; i < CookiesArray.length; i++) {
            const CookieItem = CookiesArray[i]
            const CookieItemArray = CookieItem.split('=')

            if (CookieItemArray[0] === key) {
                value = CookieItemArray[1]
            }
        }
        return value
    },
}

export {
    toFullScreen,
    exitFullscreen,
    LocalStorage,
    getPosition,
    winCopy,
    print,
    copy,
    scrollToTop,
    userBrowser,
    getLocalStorageSize,
    getUrlParam,
    cookie,
}