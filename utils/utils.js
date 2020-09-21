!(function () {

    /**
     * 获取地址栏参数
    */
    let getUrlParam = function (url) {
        var temp1 = url.split('?');
        var pram = temp1[1];
        var keyValue = pram.split('&');
        var obj = {};
        for (var i = 0; i < keyValue.length; i++) {
            var item = keyValue[i].split('=');
            var key = item[0];
            var value = item[1];
            obj[key] = value;
        }

        return obj;
    }

    /**
     * 字符串首位是字母转大写
    */
    let gNameToCapitalize = (gname) => {
        let pattern = new RegExp("[A-Za-z]+");
        let str = gname.substr(0, 1);
        if (pattern.test(str)) {
            return `${str.toUpperCase()}${gname.substr(1)}`
        } else {
            let str1 = gname.substr(-1);
            return `${gname.substr(0, gname.length - 1)}${str1.toUpperCase()}`
        }
    }

    /**
     * 全屏
    */
    let toFullScreen = () => {
        let el = document.documentElement;
        let rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullScreen;

        //typeof rfs != "undefined" && rfs
        if (rfs) {
            rfs.call(el);
        } else if (typeof window.ActiveXObject !== "undefined") {
            //for IE，这里其实就是模拟了按下键盘的F11，使浏览器全屏
            let wscript = new ActiveXObject("WScript.Shell");
            if (wscript != null) {
                wscript.SendKeys("{F11}");
            }
        } else {
            alert("浏览器不支持全屏");
        }
    }

    /**
     * 退出全屏
    */
    let exitFullscreen = function () {
        let el = parent.document;
        let cfs = el.cancelFullScreen || el.webkitCancelFullScreen || el.mozCancelFullScreen || el.exitFullScreen;

        //typeof cfs != "undefined" && cfs
        if (cfs) {
            cfs.call(el);
        } else if (typeof window.ActiveXObject !== "undefined") {
            //for IE，这里和fullScreen相同，模拟按下F11键退出全屏
            let wscript = new ActiveXObject("WScript.Shell");
            if (wscript != null) {
                wscript.SendKeys("{F11}");
            }
        } else {
            alert("切换失败,可尝试Esc退出")
        }
    }

    /**
     * 生成一个唯一的guid
     * @return {string}
    */
    let guid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    /**
   * 获取两个高德坐标的距离, 后一个点，不传，默认为用户坐标
   * @return {null|number} 距离多少米，没有定位信息，返回null
   * @example
   * getDistance(31.282055633974, 121.379623888259)
   */
    let getDistance = function (endLat, endLon, startLat, startLon) {
        if (!startLat) {
            let address = Lizard.state.address

            if (address && address.lat) {
                startLat = address.lat
                startLon = address.lon
            }
        }

        // 没有定位
        if (!startLat) {
            return null
        }

        const PI = Math.PI
        let lon1 = (PI / 180) * startLon
        let lon2 = (PI / 180) * endLon
        let lat1 = (PI / 180) * startLat
        let lat2 = (PI / 180) * endLat
        // 地球半径  
        let R = 6378.137;

        // 两点间距离 km，如果想要米的话，结果*1000就可以了  
        let d = Math.acos(Math.sin(lat1) * Math.sin(lat2) + Math.cos(lat1) * Math.cos(lat2) * Math.cos(lon2 - lon1)) * R;

        return parseInt(d * 1000, 10)
    }

    /**
   * 传入字符串，和重复次数，返回结果字符串
   * @return {string} 
   * @param{string, number} str n 
   * @example
   * loadImg(url).then(console.log('加载完成')).catch(err => {console.log(err)})
   */
    let repeat = (str, n) => {
        let res = ''
        while (n) {
            if (n % 2 === 1) res += str
            if (n > 1) str += str
            n >>= 1
        }
        return res
    }

    /**
     * 实现base64解码
    */
    let base64_decode = function base64_decode(data) {
        var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        var o1, o2, o3, h1, h2, h3, h4, bits, i = 0, ac = 0, dec = "", tmp_arr = [];
        if (!data) { return data; } data += "";
        do {
            h1 = b64.indexOf(data.charAt(i++));
            h2 = b64.indexOf(data.charAt(i++));
            h3 = b64.indexOf(data.charAt(i++));
            h4 = b64.indexOf(data.charAt(i++));
            bits = (h1 << 18) | (h2 << 12) | (h3 << 6) | h4; o1 = (bits >> 16) & 0xff;
            o2 = (bits >> 8) & 0xff; o3 = bits & 0xff;
            if (h3 == 64) { tmp_arr[ac++] = String.fromCharCode(o1); }
            else if (h4 == 64) { tmp_arr[ac++] = String.fromCharCode(o1, o2); }
            else { tmp_arr[ac++] = String.fromCharCode(o1, o2, o3); }
        }
        while (i < data.length); dec = tmp_arr.join(""); dec = utf8_decode(dec); return dec;
    }

    /**
     * 获取cookie值
    */
    let getCookie = function (name) {
        var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
        if (arr != null) return unescape(arr[2]);
        return null;
    }

    /**
     * 获取页面高度
    */
    let getPageHeight = function () {
        var g = document,
            a = g.body,
            f = g.documentElement,
            d = g.compatMode == "BackCompat" ? a : g.documentElement;
        return Math.max(f.scrollHeight, a.scrollHeight, d.clientHeight);
    }

    /**
     * 获取页面可视高度
    */
    let getPageViewHeight = function () {
        var d = document,
            a = d.compatMode == "BackCompat" ? d.body : d.documentElement;
        return a.clientHeight;
    }

    /**
     * 判断是否安卓移动设备访问
    */
    let isAndroidMobileDevice = function () {
        return /android/i.test(navigator.userAgent.toLowerCase());
    }

    /**
     * 判断是否苹果移动设备访问
    */
    let isAppleMobileDevice = function () {
        return /iphone|ipod|ipad|Macintosh/i.test(navigator.userAgent.toLowerCase());
    }

    /**
     * LocalStorage 
    */
    const LocalStorage = {
        get(name) {
            let user = JSON.parse(localStorage.getItem('user')) || {};
            return user[name] || ''
        },
        set(name, value) {
            if (!name) return
            let user = JSON.parse(localStorage.getItem('user')) || {};
            user[name] = value
            localStorage.setItem('user', JSON.stringify(user));
        },
        remove(name) {
            let user = JSON.parse(localStorage.getItem('user')) || {};
            user[name] && delete user[name]
            localStorage.setItem(user, JSON.stringify(user));
        },
        clear() {
            localStorage.clear();
        },
    }

    /**
     * 节流
     * @param {*} func 执行函数
     * @param {*} delay 节流时间,毫秒
    */
    let throttle = function (func, delay) {
        let timer = null
        return function () {
            if (!timer) {
                timer = setTimeout(() => {
                    func.apply(this, arguments)
                    // 或者直接 func()
                    timer = null
                }, delay)
            }
        }
    }

    /**
     * 防抖
    */
    let debounce = function (fn, wait) {
        let timeout = null
        return function () {
            if (timeout !== null) clearTimeout(timeout)// 如果多次触发将上次记录延迟清除掉
            timeout = setTimeout(() => {
                fn.apply(this, arguments)
                // 或者直接 fn()
                timeout = null
            }, wait)
        }
    }

    /**
     * 获取 url 后面通过?传参的参数
     * @param {String} name
    */
    let getQueryString = function (name) {
        const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
        const url = window.location.href
        const search = url.substring(url.lastIndexOf('?') + 1)
        const r = search.match(reg)
        if (r != null) return unescape(r[2])
        return null
    }

    /**
     * 根据url地址下载
    */
    let download = function (url) {
        var isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
        var isSafari = navigator.userAgent.toLowerCase().indexOf('safari') > -1;
        if (isChrome || isSafari) {
            var link = document.createElement('a');
            link.href = url;
            if (link.download !== undefined) {
                var fileName = url.substring(url.lastIndexOf('/') + 1, url.length);
                link.download = fileName;
            }
            if (document.createEvent) {
                var e = document.createEvent('MouseEvents');
                e.initEvent('click', true, true);
                link.dispatchEvent(e);
                return true;
            }
        }
        if (url.indexOf('?') === -1) {
            url += '?download';
        }
        window.open(url, '_self');
        return true;
    }

    /**
     * 使用match方法实现模糊查询
     * @param  {Array}  list     进行查询的数组
     * @param  {String} keyWord  查询的关键词
     * @return {Array}           查询的结果
    */
    let fuzzyQuery = function (list, keyWord) {
        var arr = [];
        for (var i = 0; i < list.length; i++) {
            if (list[i].name.match(keyWord) != null) {
                arr.push(list[i]);
            }
        }
        return arr;
    }




    return {
        getUrlParam,                // 获取地址栏参数
        getQueryString,             // 获取 url 后面通过?传参的参数
        gNameToCapitalize,          // 首字母转大写
        toFullScreen,               // 全屏
        exitFullscreen,             // 退出全屏
        guid,                       // 生成一个唯一的guid 
        getDistance,                // 获取两个高德坐标的距离, 后一个点，不传，默认为用户坐标
        repeat,                     // 传入字符串，和重复次数，返回结果字符串
        base64_decode,              // 实现base64解码
        getCookie,                  // 获取cookie值
        getPageHeight,              // 获取页面高度
        getPageViewHeight,          // 获取页面可视高度
        isAndroidMobileDevice,      // 判断是否安卓移动设备访问
        isAppleMobileDevice,        // 判断是否苹果移动设备访问()
        throttle,                   // 截流
        debounce,                   // 防抖
        download,                   // 根据url地址下载
        fuzzyQuery,                 // 使用match方法实现模糊查询
        LocalStorage,
    }
})()