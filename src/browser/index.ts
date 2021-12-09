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
    get(user: string, name: string): string {
        const mapStorage = JSON.parse(localStorage.getItem(user)) || {};
        return mapStorage[name] || ''
    },
    set(user: string, name: string, value: string): void {
        if (!name) return
        const mapStorage = JSON.parse(localStorage.getItem(user)) || {};
        mapStorage[name] = value
        localStorage.setItem(user, JSON.stringify(mapStorage));
    },
    remove(user: string, name: string): void {
        const mapStorage = JSON.parse(localStorage.getItem(user)) || {};
        mapStorage[name] && delete mapStorage[name]
        localStorage.setItem(user, JSON.stringify(mapStorage));
    },
    clear(): void {
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

/**
 * 打印屏幕
*/
const print = (id: string, src: string) => {
    const el = document.getElementById(id);
    const iframe: any = document.createElement('IFRAME');
    let doc = null;
    iframe.setAttribute('style', 'position:fixed;width:100%;height:100%;left:0;top:0;');
    document.body.appendChild(iframe);
    doc = iframe.contentWindow.document;
    const img = new Image();
    img.src = src;
    doc.body.appendChild(img);
    // 引入打印的专有CSS样式，根据实际修改
    // doc.write('<LINK rel="stylesheet" type="text/css" href="css/print.css">');
    //doc.write(img);
    doc.close(el);
    doc.write(img)
    // 获取iframe的焦点，从iframe开始打印
    iframe.contentWindow.focus();
    iframe.contentWindow.print();
    if (navigator.userAgent.indexOf('MSIE') > 0) {
        document.body.removeChild(iframe);
    }
}

const setVibration = () => {
    window.navigator.vibrate([100, 30, 100, 30, 100, 200, 200, 30, 200, 30, 200, 200, 100, 30, 100, 30, 100])
}

/**
 * 复制文本
*/
const copy = (str: string): void => {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    el.style.top = '-9999px';
    document.body.appendChild(el);
    const selected =
        document.getSelection().rangeCount > 0
            ? document.getSelection().getRangeAt(0)
            : false;
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    if (selected) {
        document.getSelection().removeAllRanges();
        document.getSelection().addRange(selected);
    }
}

/**
 * 平滑滚动到页面顶部
*/
const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop)
        window.scrollTo(0, c - c / 8)
    }
}

const browser = {
    toFullScreen,
    exitFullscreen,
    LocalStorage,
    getPosition,
    winCopy,
    print,
    setVibration,
    copy,
    scrollToTop
}

export default browser;