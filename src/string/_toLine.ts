/**
 * 驼峰转下划线
 * 
 * @since 1.62.0
 * @param {*} val - 要操作的字符串
 * @param {*} isLowercase - 是否转换为小写字母 默认值 true
 * @return {string} 返回转换后的字符串
 * @example
 * 
 * ```ts
 * import { toLine } from 'super-tools-lib'
 * 
 * toLine("contBeginDate", false); // 'CONT_BEGIN_DATE'
 * ```
 */
export const toLine = (val: string, isLowercase = true): string => {
    const text = val.replace(/([A-Z])/g, '_$1')
    if (isLowercase) {
        return text.toLowerCase()
    }
    return text.toUpperCase()
}