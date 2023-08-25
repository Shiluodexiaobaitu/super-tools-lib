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
export const getSex = (id: string): '男' | '女' => {
    const sex = Number(id.charAt(16)) % 2
    return sex ? '男' : '女'
}