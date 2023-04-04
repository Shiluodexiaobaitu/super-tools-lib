/**
 * 防抖
 * - 频繁触发，但只执行规定时间内的最后一次调用
 * 
 * @since 1.62.0
 * @param {*} function
 * @param {number} delay
 * @return {*}
 * @example
 * 
 * ```ts
 * import { debounce } from 'super-tools-lib'
 * 
 * const fn = debounce((e)=>console.log(e),3000)
 * 
 * fn(1)
 * fn(2)
 * fn(3)
 * 
 * // => 3
 * ```
 */
export const debounce = function (fn: <T> (...rest: T[]) => void, delay: number): <T> (...rest: T[]) => void {
    let timeout: any = null
    return function (...rest) {
        if (timeout !== null) clearTimeout(timeout)// 如果多次触发将上次记录延迟清除掉
        timeout = setTimeout(() => {
            // 或者直接 fn()
            fn(...rest)
            timeout = null
        }, delay)
    }
}