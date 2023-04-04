/**
 * 获取url?后参数
 * 
 * @since 1.62.0
 * @return {{}} 返回?后的参数 {xxx: xxxx}
 * @example
 * 
 * ```ts
 * import { getUrlParam } from 'super-tools-lib'
 * 
 * getUrlParam() // { type: 1 }
 * ```
 */
export const getUrlParam = function () {
    const url = document.location.toString()
    let arrObj = url.split('?')
    const params = Object.create(null)
    if (arrObj.length > 1) {
        arrObj = arrObj[1].split('&')
        arrObj.forEach((item: any) => {
            item = item.split('=')
            params[item[0]] = item[1]
        })
    }
    return params
}