/**
 * 根据身份证号获取性别
 * 
 * @since 1.62.0
 * @param {string} id - 身份证号
 * @return {string} 返回性别
 * @example
 * 
 * ```ts
 * import { getSex } from 'super-tools-lib'
 * 
 * getSex("xxxxxxxxxxxxxxxxx"); // '男'
 * ```
 */
export const getSex = (id: string) => {
    // 1、先判断身份证号的正确性
    const sex = Number(id.substr(16, 1))
    return sex % 2 ? '男' : '女'
}