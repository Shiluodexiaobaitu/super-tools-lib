!(function () {

    /**
     * 身份证号正则
    */
    let verificationCP = function (id) {
        // 身份证号（18位）正则
        var cP = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
        return cP.test(id)
    }

    /**
     * 车牌号正则
    */
    let licensePlateNumber = function (value) {
        //车牌号正则
        var cPattern = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;
        return cPattern.test(value)
    }

    /**
     * url正则
    */
    let urlReg = function (url) {
        //URL正则
        var urlP = /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
        //输出 true
        urlP.test(url)
    }

    /**
     * 密码正则
    */  
    //    /^[0-9A-Za-z]{4,20}$/    数字 / 字母 / 数字和字母组合


    return {
        verificationCP,         // 身份证号正则
        licensePlateNumber,     // 车牌号正则
        urlReg,                 // url正则
    }
})()