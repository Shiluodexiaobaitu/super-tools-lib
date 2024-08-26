/**
 * 获取粘贴板内容
 * 
 * @since 1.76.0
 * @example
 * 
 * ```ts
 * import { pasteText } from 'super-tools-lib'
 * 
 * pasteText().then(text=>{
 *  console.log(text)
 * })
 * ```
 */
//获取权限并复制文本到剪贴板 
export const pasteText = () => {
    // 请求剪贴板权限
    return navigator.clipboard.readText()
}