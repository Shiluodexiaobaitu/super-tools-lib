
/**
 * 返回一个字符串，其中包含所有非空参数的类名，这些参数可以是字符串或对象。
 * @param {array} args - 一个包含类名的数组
 * @return {*} 返回一个类名字符串
 * @example
 * 
 * ```ts
 * import { classnames } from 'super-tools-lib'
 * 
 * classnames('foo', 'bar'); // 'foo bar'
 * 
 * classnames('foo', { bar: true }); // 'foo bar'
 */
export const classnames = (...args) => {
    args = args.map((item) => {
        if (typeof item === 'string') {
            return item
        } else if (typeof item === 'object') {
            return Object.keys(item).filter((key) => item[key]).join(' ')
        }
    })
    return args.filter(Boolean).join(' ')
}