
/**
 * 监听对象值的变化
 * 
 * @since 1.67.0
 * @param {Record} obj - 要监听的对象
 * @param {string} prop - 要监听的属性
 * @param {function} callback - 回调函数
 * @example
 * 
 * ```ts
 * import { watch } from 'super-tools-lib'
 * 
 * const obj = {a: 1}
 * 
 * watch(obj, 'a', (val) => {
 *    console.log(val)
 * })
 * 
 * obj.a = 2 // 2
 * ```
 */
export const watch = (obj: Record<string, any>, prop: string, callback: (val: any) => void) => {
    let value = obj[prop]
    Object.defineProperty(obj, prop, {
        get: function () {
            return value
        },
        set: function (newValue) {
            value = newValue
            callback(newValue)
        },
    })
}