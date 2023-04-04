import { _objectEach } from '../loop'


/**
 * 快速的Map
 * - api的使用方式与原声Map相同
 * - 注意为了提速FastMap 的key值不支持引用数据类型
 * 
 * @since 1.62.0
 * @example
 * 
 * ```ts
 * import { FastMap } from 'super-tools-lib'
 * 
 * const map = new FastMap()
 * 
 * map.set('name', '张三')
 * 
 * map.get('name') // 张三
 * ```
 */
class FastMap {
    private _map: { [key: string]: any }

    constructor() {
        this._map = Object.create(null)
    }

    /**
     * 设置键值对
     * @param key - 键
     * @param value - 值
    */
    set(key: string, value: any): void {
        this._map[key] = value
    }

    /**
     * 获取键对应的值
     * @param key - 键
     * @returns - 值
     */
    get(key: string): any {
        return this._map[key]
    }

    /**
     * 判断是否存在某个键
     * @param key - 键
     * @returns - 是否存在
     */
    has(key: string): boolean {
        return key in this._map
    }

    /**
     * 删除某个键值对
     * @param key - 键
     * @returns 是否删除成功
     */
    delete(key: string): boolean {
        const hasKey = this.has(key)
        if (hasKey) {
            delete this._map[key]
        }
        return hasKey
    }

    /**
     * 清空所有键值对
     */
    clear(): void {
        this._map = {}
    }

    /**
     * 获取所有键
     * @returns 键数组
     */
    keys(): string[] {
        return Object.keys(this._map)
    }

    /**
     * 获取所有值
     * @returns 值数组
     */
    values(): any[] {
        return Object.values(this._map)
    }

    /**
     * 获取所有键值对
     * @returns 键值对数组
     */
    entries(): [string, any][] {
        return Object.entries(this._map)
    }

    /**
     * 遍历所有键值对
     * @param {*} iteratee - 每次迭代调用的函数
     */
    forEach(iteratee: (value: any, key?: string) => void | boolean): void {
        _objectEach(this._map, iteratee)
    }

    /**
    * 获取键值对数量
    * @returns 数量
    */
    get size() {
        return Object.keys(this._map).length
    }
}

export { FastMap }
