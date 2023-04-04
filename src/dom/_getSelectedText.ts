/**
 * 获取鼠标所选文本
 * 
 * @since 1.62.0
 * @return {string} 返回鼠标选择的文本
 * @example
 * 
 * ```ts
 * import { getSelectedText } from 'super-tools-lib'
 * 
 * getSelectedText() // 1111
 * ```
 */
export const getSelectedText = () => window.getSelection().toString()
