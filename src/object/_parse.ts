
/**
 * JSON.parse
 * @param {string} str - 需要解析的字符串
 * @return {*} 返回解析后的对象
 * @example
 * 
 * ```ts
 * import { parse } from 'lodash'
 * 
 * parse('{"a":1}') // => {a: 1}
 * parse('{"a":1') // => false
 * ```
 */
export const parse = (str: string) => {
    try {
        return JSON.parse(str)
    }

    catch {
        return false
    }
}