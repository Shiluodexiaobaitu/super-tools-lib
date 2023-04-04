/**
 * 节流
 * - 频繁触发，但只执行规定时间内的第一次
 * 
 * @since 1.62.0
 * @param {*} func - 执行函数
 * @param {*} delay - 节流时间,毫秒
 * @returns {function} 返回截流函数
 * @example
 * 
 * ```ts
 * import { throttle } from 'super-tools-lib'
 * 
 * 
 * const fn = throttle((e)=>console.log(e),3000)
 * 
 * // 连续多次触发会过滤掉规定时间内的第二次及以后的调用
 * fn(1)
 * fn(2)
 * fn(3)
 * 
 * // => 1
 * ```
*/
export const throttle = function (fn: <T> (...rest: T[]) => void, delay = 200): <T> (...rest: T[]) => void {
    let timer: any = null
    return function (...rest) {
        if (!timer) {
            timer = setTimeout(() => {
                // 或者直接 func()
                fn(...rest)
                timer = null
            }, delay)
        }
    }
}