declare global {
    interface Window { ActiveXObject: any; }
}

/**
 * 浏览器全屏
*/
const toFullScreen = (): void => {
    const el: any = document.documentElement;
    const rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullScreen;

    //typeof rfs != "undefined" && rfs
    if (rfs) {
        rfs.call(el);
    } else if (typeof window.ActiveXObject !== 'undefined') {
        //for IE，这里其实就是模拟了按下键盘的F11，使浏览器全屏
        const wscript = new window.ActiveXObject('WScript.Shell');
        if (wscript !== null) {
            wscript.SendKeys('{F11}');
        }
    } else {
        alert('浏览器不支持全屏');
    }
}

/**
 * 浏览器退出全屏
*/
const exitFullscreen = (): void => {
    const el: any = parent.document;
    const cfs = el.cancelFullScreen || el.webkitCancelFullScreen || el.mozCancelFullScreen || el.exitFullScreen;

    //typeof cfs != "undefined" && cfs
    if (cfs) {
        cfs.call(el);
    } else if (typeof window.ActiveXObject !== 'undefined') {
        //for IE，这里和fullScreen相同，模拟按下F11键退出全屏
        const wscript = new window.ActiveXObject('WScript.Shell');
        if (wscript !== null) {
            wscript.SendKeys('{F11}');
        }
    } else {
        alert('切换失败,可尝试Esc退出')
    }
}

/**
 * LocalStorage 
*/
const LocalStorage = {
    get(name: string) {
        const user = JSON.parse(localStorage.getItem('user')) || {};
        return user[name] || ''
    },
    set(name: string, value: string) {
        if (!name) return
        const user = JSON.parse(localStorage.getItem('user')) || {};
        user[name] = value
        localStorage.setItem('user', JSON.stringify(user));
    },
    remove(name: string) {
        const user = JSON.parse(localStorage.getItem('user')) || {};
        user[name] && delete user[name]
        localStorage.setItem(user, JSON.stringify(user));
    },
    clear() {
        localStorage.clear();
    },
}

/**
  * H5 获取地理位置
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
            accuracy: loc.coords.accuracy // 精确度
        }
        resolve(location)
    }

    const error = () => reject('出错了')
    // 方法用来获取设备当前位置  需要https
    navigator.geolocation.getCurrentPosition(success, error, {
        // enableHighAcuracy: false,  // 指示浏览器获取高精度的位置，默认为false
        timeout,  // 指定获取地理位置的超时时间，默认不限时，单位为毫秒
        maximumAge // 最长有效期，在重复获取地理位置时，此参数指定多久再次获取位置。
    })
})

// 使用示例
// getPosition()
//     .then(pos => {
//         console.log('pos', pos)
//     })
//     .catch(err => console.log(err))

/**
 * 禁止/开启：右键、选择、复制
*/
const winCopy = (flag) => {
    ['contextmenu', 'selectstart', 'copy'].forEach(function (ev) {
        document.addEventListener(ev, function (event) {
            return event.returnValue = flag
        })
    });
}

const browser = {
    toFullScreen,
    exitFullscreen,
    LocalStorage,
    getPosition,
    winCopy
}

export default browser;