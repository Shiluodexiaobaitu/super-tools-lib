
/**
 * ajax
 * - 支持get、post、put、delete
 * 
 * @since 1.63.0
 * @example
 * @returns {object} 返回一个对象，包含get、post、put、delete方法
 * 
 * ```ts
 * import { ajax } from 'super-tools-lib'
 * 
 * ajax().get('https://xxxxxxx').then(res=>{
 * 
 * })
 * ```
 */
export const ajax = () => {
    const request = (url: string, method: string, data: any) => {
        const xhr = new XMLHttpRequest()
        xhr.open(method, url, true)
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.send(JSON.stringify(data))
        return new Promise((resolve, reject) => {
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(xhr.responseText)
                    } else {
                        reject(xhr.responseText)
                    }
                }
            }
        })
    }
    return {
        get: (url: string) => request(url, 'get', null),
        post: (url: string, data: any) => request(url, 'post', data),
        put: (url: string, data: any) => request(url, 'put', data),
        delete: (url: string, data: any) => request(url, 'delete', data),
    }
}