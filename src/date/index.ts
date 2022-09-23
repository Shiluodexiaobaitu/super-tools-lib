/*
 * @Author: zhangce
 * @Date: 2021-11-04 17:11:40
 * @LastEditors: zhangce
 * @LastEditTime: 2022-09-23 13:56:31
 * @Description: 
 */
/**
 * 格式化时间
*/
const dateFormater = (formater: string, time?: number): string => {
    const date = time ? new Date(time) : new Date(),
        Y = date.getFullYear() + '',
        M = date.getMonth() + 1,
        D = date.getDate(),
        H = date.getHours(),
        m = date.getMinutes(),
        s = date.getSeconds();
    return formater.replace(/YYYY|yyyy/g, Y)
        .replace(/YY|yy/g, Y.substr(2, 2))
        .replace(/MM/g, (M < 10 ? '0' : '') + M)
        .replace(/DD/g, (D < 10 ? '0' : '') + D)
        .replace(/HH|hh/g, (H < 10 ? '0' : '') + H)
        .replace(/mm/g, (m < 10 ? '0' : '') + m)
        .replace(/ss/g, (s < 10 ? '0' : '') + s)
}

/**
 * @description: 格式化${startTime}距现在的已过时间(距离传入的时间经多了多久)
 * @param {*} startTime 以前的时间
 * @return {*}
 */
const formatPassTime = (startTime) => {
    const currentTime = Date.parse(String(new Date())),
        time = currentTime - startTime,
        day = parseInt(String(time / (1000 * 60 * 60 * 24))),
        hour = parseInt(String(time / (1000 * 60 * 60))),
        min = parseInt(String(time / (1000 * 60))),
        month = parseInt(String(day / 30)),
        year = parseInt(String(month / 12));
    if (year) return year + '年前'
    if (month) return month + '个月前'
    if (day) return day + '天前'
    if (hour) return hour + '小时前'
    if (min) return min + '分钟前'
    else return '刚刚'
}

/**
 * @description: 格式化现在距${endTime}的剩余时间
 * @param {*} endTime 未来的时间
 * @return {*}
 */
const formatRemainTime = (endTime) => {
    const startDate = new Date(); //开始时间
    const endDate = new Date(endTime); //结束时间
    const t = endDate.getTime() - startDate.getTime(); //时间差
    let d = 0,
        h = 0,
        m = 0,
        s = 0;
    if (t >= 0) {
        d = Math.floor(t / 1000 / 3600 / 24);
        h = Math.floor(t / 1000 / 60 / 60 % 24);
        m = Math.floor(t / 1000 / 60 % 60);
        s = Math.floor(t / 1000 % 60);
    }
    return d + '天' + h + '小时' + m + '分钟 ' + s + '秒';
}

/**
 * @desc: 两日期之间相差的天数
 * @param {Date} date1
 * @param {Date} date2
 * @return {*} 天数
 */
const dayDiff = (date1: Date, date2: Date): number => {
    return Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000)
}


export {
    dateFormater,
    formatPassTime,
    formatRemainTime,
    dayDiff,
}