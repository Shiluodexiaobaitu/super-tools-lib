/*
 * @Author: zhangce
 * @Date: 2022-01-14 17:53:01
 * @LastEditors: zhangce
 * @LastEditTime: 2022-01-17 09:53:02
 * @Description: 
 */
/**
 * 原因: 在计算机二进制无法正确表示十进制的 0.1 ，因此需要做相关转换
 * 此文件中方法是解决js中浮点数 0.1 无法正确的运算。
 * 未处理之前为如下结果
 * 0.1 + 0.2 == 0.3 》 false
 * 0.5 - 0.4 == 0.1 》 false
 * 0.1 * 3 == 0.3 》 false
 * 0.3 / 3 == 0.1 》 false
 */

/**
 * 浮点数加法运算 0.1 + 0.2 = 0.3
 * JSCT.accAdd(0.1, 0.2) 之和等于 0.3 ，即（0.1 + 0.2 == 0.3） true
 * @param num1
 * @param num2
 */
const accAdd = function (num1, num2: number): number {
    num1 = Number(num1)
    num2 = Number(num2)
    let dec1 = 0;
    let dec2 = 0;
    try {
        dec1 = countDecimals(num1) + 1
    } catch (e) {
        dec1 = 0
    }
    try {
        dec2 = countDecimals(num2) + 1
    } catch (e) {
        dec2 = 0
    }
    const times = Math.pow(10, Math.max(dec1, dec2))
    const result = (accMul(num1, times) + accMul(num2, times)) / times
    return getCorrectResult('add', num1, num2, result)
}

/**
 * 浮点数减法运算 0.5 - 0.4 = 0.1
 * JSCT.accSub(0.5, 0.4) 之差等于 0.1 ，即(0.5 - 0.4 == 0.1) true
 * @param num1
 * @param num2
 */
const accSub = function (num1: number, num2: number): Number {
    num1 = Number(num1)
    num2 = Number(num2)
    let dec1 = 0;
    let dec2 = 0;
    try {
        dec1 = countDecimals(num1) + 1
    } catch (e) {
        dec1 = 0
    }
    try {
        dec2 = countDecimals(num2) + 1
    } catch (e) {
        dec2 = 0
    }
    const times = Math.pow(10, Math.max(dec1, dec2))
    const result = Number((accMul(num1, times) - accMul(num2, times)) / times)
    return getCorrectResult('sub', num1, num2, result)
}

/**
 * 浮点数乘法运算 0.1 * 3 = 0.3
 * JSCT.accMul(0.1, 3) 之积等于 0.3 ，即(0.1 * 3 == 0.3) true
 * @param num1
 * @param num2
 */
const accMul = function (num1: number, num2: number): number {
    num1 = Number(num1)
    num2 = Number(num2)
    let times = 0
    const s1 = num1.toString()
    const s2 = num2.toString()
    try {
        times += countDecimals(s1)
    } catch (e) {
    }
    try {
        times += countDecimals(s2)
    } catch (e) {
    }
    const result = convertToInt(s1) * convertToInt(s2) / Math.pow(10, times)
    return getCorrectResult('mul', num1, num2, result)
}
/**
 * 浮点数除法运算 0.3 / 3 = 0.1
 * JSCT.accDiv(0.3, 3) 之商等于 0.1, 即(0.3 / 3 == 0.1) true
 * @param num1
 * @param num2
 */
const accDiv = function (num1: Number, num2: Number): Number {
    num1 = Number(num1)
    num2 = Number(num2)
    let t1 = 0
    let t2 = 0
    let dec1 = 0;
    let dec2 = 0;
    try {
        t1 = countDecimals(num1)
    } catch (e) {
    }
    try {
        t2 = countDecimals(num2)
    } catch (e) {
    }
    dec1 = convertToInt(num1)
    dec2 = convertToInt(num2)
    const result = accMul((dec1 / dec2), Math.pow(10, t2 - t1))
    return getCorrectResult('div', num1, num2, result)
}

/**
 * 小数位计数
 * @param num
 * @returns {number}
 */
const countDecimals = function (num) {
    let len = 0
    try {
        num = Number(num)
        let str = num.toString().toUpperCase()
        if (str.split('E').length === 2) {
            let isDecimal = false
            if (str.split('.').length === 2) {
                str = str.split('.')[1]
                if (Number.parseInt(str.split('E')[0], 10) !== 0) {
                    isDecimal = true
                }
            }
            const x = str.split('E')
            if (isDecimal) {
                len = x[0].length
            }
            len -= Number.parseInt(x[1], 10)
        } else if (str.split('.').length === 2) { // decimal
            if (Number.parseInt(str.split('.')[1], 10) !== 0) {
                len = str.split('.')[1].length
            }
        }
    } catch (e) {
        throw e
    } finally {
        if (isNaN(len) || len < 0) {
            len = 0
        }
    }
    return len
}
/**
 * 转换位整型
 * @param num
 * @returns {number|*}
 */
const convertToInt = function (num) {
    num = Number(num)
    let newNum = num
    const times = countDecimals(num)
    const tempNum = num.toString().toUpperCase()
    if (tempNum.split('E').length === 2) {
        newNum = Math.round(num * Math.pow(10, times))
    } else {
        newNum = Number(tempNum.replace('.', ''))
    }
    return newNum
}
/**
 * 获取正确结果
 * @param type
 * @param num1
 * @param num2
 * @param result
 * @returns {*}
 */
const getCorrectResult = function (type, num1, num2, result) {
    let tempResult = 0
    switch (type) {
        case 'add':
            tempResult = num1 + num2
            break
        case 'sub':
            tempResult = num1 - num2
            break
        case 'div':
            tempResult = num1 / num2
            break
        case 'mul':
            tempResult = num1 * num2
            break
    }
    if (Math.abs(result - tempResult) > 1) {
        return tempResult
    }
    return result
}

export {
    accAdd,
    accSub,
    accMul,
    accDiv
}