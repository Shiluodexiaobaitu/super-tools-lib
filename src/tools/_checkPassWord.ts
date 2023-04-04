/**
 * 检测密码强度
 * 
 * @since 1.62.0
 * @param {*} str - 要检测的密码
 * @return {number} 返回密码强度等级  1：密码弱 2：密码中等 3：密码强 4：密码很强
 * @example
 * 
 * ```ts
 * import { checkPassWord } from 'super-tools-lib'
 * 
 * checkPassWord("ssssss@1Sdddd"); // 4
 * ```
 */
export const checkPassWord = (str: string): number => {
    let level = 0
    if (str.length < 6) {
        return level
    }
    if (/[0-9]/.test(str)) {
        level++
    }
    if (/[a-z]/.test(str)) {
        level++
    }
    if (/[A-Z]/.test(str)) {
        level++
    }
    if (/\W/.test(str)) {
        level++
    }
    return level
}