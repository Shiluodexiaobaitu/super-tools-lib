/**
 * LocalStorage 
 * - 存储的数据的生命周期是永久，除非主动删除数据，否则永远不会过期
 * 
 * @since 1.0.0
 * @example
 * 
 * ```ts
 * import { LocalStorage } from 'super-tools-lib'
 * 
 * // 设置值 
 * LocalStorage.set('container', 'data', {name: '张三', age: 12})
 * 
 * // 查询值
 * LocalStorage.get('container', 'data') // {name: '张三', age: 12}
 * 
 * // 遍历LocalStorage
 * LocalStorage.forEach((value, key)=>{
 *  console.log(value, key) // {data:{name: '张三', age: 12}} container
 * })
 * 
 * // 删除
 * LocalStorage.remove('container', 'data')
 * 
 * // 清空LocalStorage
 * LocalStorage.clear()
 * ```
 */
export const LocalStorage = {
    /**
     * 获取本地存储
     * 
     * @since 1.0.0
     * @param {string} container - 容器
     * @param {string} key - 键
     * @return {*} 返回对应键的存储值
     */    
    get(container: string, key: string): string {
        const mapStorage = JSON.parse(localStorage.getItem(container)) || {}
        return mapStorage[key] || ''
    },

    /**
     * 设置本地存储
     * 
     * @since 1.0.0
     * @param {string} container - 容器
     * @param {string} key - 键
     * @param {any} value - 值
     */    
    set(container: string, key: string, value: any): void {
        if (!key) return
        const mapStorage = JSON.parse(localStorage.getItem(container)) || {}
        mapStorage[key] = value
        localStorage.setItem(container, JSON.stringify(mapStorage))
    },

    /**
     * 删除
     * 
     * @since 1.0.0
     * @param {string} container - 容器
     * @param {string} key - 键
     */    
    remove(container: string, key: string): void {
        const mapStorage = JSON.parse(localStorage.getItem(container)) || {}
        mapStorage[key] && delete mapStorage[key]
        localStorage.setItem(container, JSON.stringify(mapStorage))
    },

    /**
     * 清空全部本地存储
     * 
     * @since 1.0.0
     */    
    clear(): void {
        localStorage.clear()
    },

    /**
     * 遍历本地存储
     * 
     * @since 1.57.0
     * @param {function} iteratee - 每次迭代调用的函数
     */    
    forEach(iteratee: (value: any, key: string) => void) {
        for (const key in localStorage) {
            if (localStorage.hasOwnProperty(key)) {
                const value = JSON.parse(localStorage.getItem(key)) || {}
                iteratee(value, key)
            }
        }
    },
}