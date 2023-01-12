/*
 * @Author: zhangce
 * @Date: 2021-11-04 17:11:40
 * @LastEditors: zhangce
 * @LastEditTime: 2023-01-11 15:30:41
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
        s = date.getSeconds()
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
        year = parseInt(String(month / 12))
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
    const startDate = new Date() //开始时间
    const endDate = new Date(endTime) //结束时间
    const t = endDate.getTime() - startDate.getTime() //时间差
    let d = 0,
        h = 0,
        m = 0,
        s = 0
    if (t >= 0) {
        d = Math.floor(t / 1000 / 3600 / 24)
        h = Math.floor(t / 1000 / 60 / 60 % 24)
        m = Math.floor(t / 1000 / 60 % 60)
        s = Math.floor(t / 1000 % 60)
    }
    return d + '天' + h + '小时' + m + '分钟 ' + s + '秒'
}

/**
 * @desc: 计算两日期之间相差的天数
 * @param {Date} date1
 * @param {Date} date2
 * @return {*} 天数
 */
const dayDiff = (date1: Date, date2: Date): number => {
    return Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000)
}

/**
 * @desc: 计算两个日期之间的月数
 * @param {Date} startDate
 * @param {Date} endDate
 * @return {*}
 */
const monthDiff = (startDate: Date, endDate: Date): number => {
    return Math.max(0, (endDate.getFullYear() - startDate.getFullYear()) * 12 - startDate.getMonth() + endDate.getMonth())
}

/**
 * @desc: 比较两个日期
 * @param {Date} a
 * @param {Date} b
 * @return {*}
 */
const compareDate = (a: Date, b: Date): boolean => {
    return a.getTime() > b.getTime()
}

/**
 * @desc: 将秒转换为hh:mm:ss格式
 * @param {number} s
 * @return {*}
 */
const formatSeconds = (s: number): string => {
    return new Date(s * 1000).toISOString().substr(11, 8)
}

/**
 * @desc: 获取日期的当前季度
 * @param {*} d
 * @return {*}
 */
const getQuarter = (d = new Date()): number => {
    return Math.ceil((d.getMonth() + 1) / 3)
}

/**
 * @desc: 获取传入的日期当月的最后一个日期
 * @param {*} d
 * @return {*}
 */
const getLastDate = (d = new Date()): Date => {
    return new Date(d.getFullYear(), d.getMonth() + 1, 0)
}

/**
 * @desc: 获取传入的日期当月的第一个日期
 * @param {*} d
 * @return {*}
 */
const getFirstDate = (d = new Date()): Date => new Date(d.getFullYear(), d.getMonth(), 1)


/**
 * @desc: 获取当前时间戳（秒）
 * @param {*} number
 * @return {*}
 */
const getCurrentSecond = (): number => Math.floor(new Date().getTime() / 1000)


export {
    dateFormater,
    formatPassTime,
    formatRemainTime,
    dayDiff,
    monthDiff,
    compareDate,
    formatSeconds,
    getQuarter,
    getLastDate,
    getCurrentSecond,
    getFirstDate,
}