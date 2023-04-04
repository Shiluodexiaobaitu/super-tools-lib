/**
 * 模糊查询
 * 
 * @since 1.62.0
 * @param  {Array}  list - 进行查询的数组
 * @param  {String}  key - 进行查询的数组的字段
 * @param  {String} keyWord - 查询的关键词
 * @return {Array} 返回查询的结果
 * @example
 * 
 * ```ts
 * import { fuzzyQuery } from 'super-tools-lib'
 * 
 * const arr = [{id: 1}, {id: 2}, {id: 3}]
 * fuzzyQuery(arr,'id', 2) // [{id: 2}]
 * ```
*/
export const fuzzyQuery = <T>(list: T[], key: string, keyWord: string): T[] => {
    return list.filter(item => item[key].match(keyWord) !== null)
}