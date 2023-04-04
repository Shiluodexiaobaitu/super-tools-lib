/**
 * 按 ASCII 正序排序
 * 
 * @ignore
 * @since 1.62.0
 * @param {*} data - 要操作的数组
 * @return {*}
 * @example
 * 
 * ```ts
 * import { sortAscii } from 'super-tools-lib'
 * 
 * sortAscii(['b', 'a']) // ['a', 'b']
 * ```
 */
export const sortAscii = (data: string[]) => {
    return data.sort((a, b) => {
        return (a + '').localeCompare(b + '')
    })
}