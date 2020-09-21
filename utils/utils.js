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
    const gNameToCapitalize = (gname) => {
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
    const toFullScreen = () => {
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
    const exitFullscreen = function () {
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


    return {
        getUrlParam,
        gNameToCapitalize,
        toFullScreen,
        exitFullscreen
    }
})()