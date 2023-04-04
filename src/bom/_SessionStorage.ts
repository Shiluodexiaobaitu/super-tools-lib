/**
 * SessionStorage 
 * - 存储的数据的生命周期是一个会话
 * 
 * @since 1.60.0
 * @example
 * 
 * ```ts
 * import { SessionStorage } from 'super-tools-lib'
 * 
 * // 设置值
 * SessionStorage.set('container', 'data', {name: '张三', age: 12})
 * 
 * // 查询值
 * SessionStorage.get('container', 'data') // {name: '张三', age: 12}
 * 
 * // 遍历SessionStorage
 * SessionStorage.forEach((value, key)=>{
 *  console.log(value, key) // {data:{name: '张三', age: 12}} container
 * })
 * 
 * // 删除
 * SessionStorage.remove('container', 'data')
 * 
 * // 清空SessionStorage
 * SessionStorage.clear()
 * ```
 */
export const SessionStorage = {
    /**
     * 获取本地存储
     * 
     * @since 1.57.0
     * @param {string} container - 容器
     * @param {string} key - 键
     * @return {*} 返回对应键的存储值
     */    
    get(container: string, key: string): string {
        const mapStorage = JSON.parse(sessionStorage.getItem(container)) || {}
        return mapStorage[key] || ''
    },

    /**
     * 设置本地存储
     * 
     * @since 1.57.0
     * @param {string} container - 容器
     * @param {string} key - 键
     * @param {any} value - 值
     */    
    set(container: string, key: string, value: any): void {
        if (!key) return
        const mapStorage = JSON.parse(sessionStorage.getItem(container)) || {}
        mapStorage[key] = value
        sessionStorage.setItem(container, JSON.stringify(mapStorage))
    },

    /**
     * 删除
     * 
     * @since 1.57.0
     * @param {string} container - 容器
     * @param {string} key - 键
     */    
    remove(container: string, key: string): void {
        const mapStorage = JSON.parse(sessionStorage.getItem(container)) || {}
        mapStorage[key] && delete mapStorage[key]
        sessionStorage.setItem(container, JSON.stringify(mapStorage))
    },

    /**
     * 清空
     * 
     * @since 1.57.0
     */    
    clear(): void {
        sessionStorage.clear()
    },

    /**
     * 遍历本地存储
     * 
     * @since 1.57.0
     * @param {function} iteratee - 每次迭代调用的函数
     * @return {*}
     */    
    forEach(iteratee: (value: any, key: string) => void) {
        for (const key in sessionStorage) {
            if (sessionStorage.hasOwnProperty(key)) {
                const value = JSON.parse(sessionStorage.getItem(key)) || {}
                iteratee(value, key)
            }
        }
    },
}