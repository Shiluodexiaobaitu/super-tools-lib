declare global {
    interface Window {
        webkitIndexedDB: any;
        mozIndexedDB: any;
    }
}

export type IndexedDBProps = {
    dbName: string
    storeName: string
    version: number
}


/**
 * 数据库
 * 
 * @since 1.62.0
 * @example
 * 
 * ```ts
 * import { IndexedDB } from 'super-tools-lib'
 * 
 * const db = new IndexedDB({dbName: '数据库名称', storeName: '容器名称', version: '1.0.0'})
 * 
 * // 设置数据
 * db.set('data', {value: '80'})
 * 
 * // 查询数据
 * db.get('data', (val) => {console.log(val)}) // {value: '80'}
 * 
 * // 更新数据，如果key值不存在则是添加
 * db.update('data', {value: 70})
 * 
 * // 删除数据
 * db.remove('data')
 * 
 * // 清空数据库
 * db.close()
 * ```
 */
export class IndexedDB {
    private storeName: string
    public db: any
    public store: any

    constructor(props: IndexedDBProps) {
        const { dbName, storeName, version } = props
        this.storeName = storeName
        const indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB
        const request = indexedDB.open(dbName, version)

        request.onsuccess = e => {
            this.db = e.target.result
            console.log('Init indexedDB successfully')
        }
        request.onupgradeneeded = e => {
            this.db = e.target.result
            if (!this.db.objectStoreNames.contains(storeName)) {
                this.store = this.db.createObjectStore(storeName)
            }
            console.log('DB version changed, db version: ', this.db.version)
        }
        request.onerror = e => { console.info('Can not open indexedDB', e) }
    }

    /**
     * 获取数据库数据
     * 
     * @param {string} key - 键
     * @param {function} callback - 回调函数
     */   
    get(key: string, callback: (data) => void) {
        const transaction = this.db.transaction(this.storeName)
        const objectStore = transaction.objectStore(this.storeName)
        const request = objectStore.get(key)

        request.onerror = e => { console.info('Can not get value', e) }
        request.onsuccess = e => { callback(e.target.result) }
    }

    /**
     * 设置数据
     * 
     * @param {string} key - 键
     * @param {any} value - 值
     */   
    set(key: string, value: any) {
        let oldValue
        this.get(key, function (res) { oldValue = res })

        if (oldValue) {
            console.info('You should use function update')
        } else {
            const transaction = this.db.transaction(this.storeName, 'readwrite')
            const objectStore = transaction.objectStore(this.storeName)
            const request = objectStore.add(value, key)

            request.onerror = e => { console.info('Can not add value', e) }
        }
    }
   
    /**
     * 更新数据 （数据库中有key数据则更新，没有则添加）
     * 
     * @param {string} key - 键
     * @param {any} newValue - 值
     */    
    update(key: string, newValue: any) {
        const transaction = this.db.transaction(this.storeName, 'readwrite')
        const objectStore = transaction.objectStore(this.storeName)
        const request = objectStore.put(newValue, key)

        request.onerror = e => { console.info('Can not update value', e) }
    }

    /**
     * 删除指定数据
     * @param {string} key
     */    
    remove(key: string) {
        const request = this.db.transaction(this.storeName, 'readwrite')
            .objectStore(this.storeName)
            .delete(key)
        request.onerror = e => { console.info('Can not remove value', e) }
    }

    /**
     * 清空数据库
    */
    close() {
        this.db.close()
    }
}
