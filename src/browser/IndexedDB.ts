/*
 * @Author: zhangce
 * @Date: 2022-05-17 10:15:46
 * @Email: zhangce@fengmap.com
 * @LastEditTime: 2022-10-26 11:33:32
 * @LastEditors: zhangce
 * @LastEditorsEmail: zhangce@fengmap.com
 * @Description: 
 *  Copyright: Copyright 2014 - 2022, FengMap, Ltd. All rights reserved.
 */
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
  */
  get(key: string, callback: (data: any) => void) {
      const transaction = this.db.transaction(this.storeName)
      const objectStore = transaction.objectStore(this.storeName)
      const request = objectStore.get(key)

      request.onerror = e => { console.info('Can not get value', e) }
      request.onsuccess = e => { callback(e.target.result) }
  }

  /**
   * 设置数据
  */
  set(key: any, value: any) {
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
  */
  update(key: any, newValue: any) {
      const transaction = this.db.transaction(this.storeName, 'readwrite')
      const objectStore = transaction.objectStore(this.storeName)
      const request = objectStore.put(newValue, key)

      request.onerror = e => { console.info('Can not update value', e) }
      // }
  }

  /**
   * 删除指定数据
  */
  remove(key: any) {
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
