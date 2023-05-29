// 节点
class Node {
    public value: any
    public prev: Node | null
    public next: Node | null
    constructor(value) {
        // 节点的值
        this.value = value
        // 指向上一个节点的指针
        this.prev = null
        // 指向下一个节点的指针
        this.next = null
    }
}

/**
 * 双向链表
 * 
 * @since 1.65.0
 * @class
 * @example
 * 
 * ```ts
 * import { DoublyLinkedList } from 'super-tools-lib'
 * 
 * const doublyLinkedList = new DoublyLinkedList()
 * 
 * doublyLinkedList.add(1)
 * doublyLinkedList.add(2)
 * doublyLinkedList.add(3)
 * 
 * doublyLinkedList.insert(0, 0)
 * doublyLinkedList.insert(4, 4)
 * doublyLinkedList.insert(2, 1.5)
 * 
 * doublyLinkedList.remove(0)
 * doublyLinkedList.remove(4)
 * doublyLinkedList.remove(2)
 * 
 * doublyLinkedList.indexOf(1) // 0
 * 
 * doublyLinkedList.isEmpty() // false
 * 
 * doublyLinkedList.size() // 3
 * 
 * doublyLinkedList.toArray() // [1, 2, 3]
 * 
 * ```
 */
export class DoublyLinkedList {
    public _head: Node | null
    public _tail: Node | null
    public _length: number
    constructor() {
        // 双向链表的头部
        this._head = null
        // 双向链表的尾部
        this._tail = null
        // 双向链表的长度
        this._length = 0
    }

    /**
     * 向双向链表尾部追加节点
     * @param {*} value - 节点的值
     */
    add(value) {
        const node = new Node(value)

        if (!this._head) {
            this._head = node
            this._tail = node
        } else {
            // 每次新追加节点都进行的操作
            // 1，先将新追加的节点上一个节点指向当前尾部节点
            // 2，将当前尾部节点的下一个节点指向新追加的节点
            // 3，将新节点设置为当前链表的尾部

            // 将新节点的上一个节点指向当前尾部
            node.prev = this._tail
            // 将当前尾部的下一个节点指向新节点
            this._tail.next = node
            // 将新节点设置为尾部
            this._tail = node
        }

        this._length++
    }

    /**
     * 向双向链表的指定位置插入节点
     * @param {*} position - 要插入的位置
     * @param {*} value - 要插入的值
     * @return {Boolean} - 插入成功返回true，失败返回false
     */
    insert(position, value) {
        if (position < 0 || position > this._length) {
            return false
        }

        const node = new Node(value)

        if (position === 0) {
            if (!this._head) {
                this._head = node
                this._tail = node
            } else {
                node.next = this._head
                this._head.prev = node
                this._head = node
            }
        } else if (position === this._length) {
            node.prev = this._tail
            this._tail.next = node
            this._tail = node
        } else {
            if (position <= this._length / 2) {
                let current = this._head
                let index = 0

                while (index < position) {
                    current = current.next
                    index++
                }

                node.prev = current.prev
                node.next = current
                current.prev.next = node
                current.prev = node
            } else {
                let current = this._tail
                let index = this._length - 1

                while (index > position) {
                    current = current.prev
                    index--
                }

                node.prev = current.prev
                node.next = current
                current.prev.next = node
                current.prev = node
            }
        }

        this._length++

        return true
    }

    /**
     * 根据位置获取双向链表的节点
     * @param {*} position - 要获取的节点的位置
     * @return {*} - 获取到的节点的值
     */
    get(position) {
        if (position < 0 || position >= this._length) {
            return null
        }

        // position 小于结点数的一半，从前往后查，反则从后往前查
        if (position <= this._length / 2) {
            let current = this._head
            let index = 0

            while (index < position) {
                current = current.next
                index++
            }

            return current.value
        } else {
            let current = this._tail
            let index = this._length - 1

            while (index > position) {
                current = current.prev
                index--
            }

            return current.value
        }
    }

    update(position, value) {
        if (position < 0 || position >= this._length) {
            return null
        }

        const node = new Node(value)

        if (position === 0) {
            node.next = this._head
            this._head.prev = node
            this._head = node
        } else if (position === this._length) {
            node.prev = this._tail
            this._tail.next = node
            this._tail = node
        } else {
            if (position <= this._length / 2) {
                let current = this._head
                let index = 0

                while (index < position) {
                    current = current.next
                    index++
                }

                node.prev = current.prev
                node.next = current.next
                current.prev.next = node
                current.next.prev = node
            } else {
                let current = this._tail
                let index = this._length - 1

                while (index > position) {
                    current = current.prev
                    index--
                }

                node.prev = current.prev
                node.next = current.next
                current.prev.next = node
                current.next.prev = node
            }
        }

    }

    /**
     * 根据位置删除双向链表的节点
     * @param {*} position
     * @return {*}
     */
    remove(position) {
        if (position < 0 || position >= this._length) {
            return null
        }

        let current = this._head

        if (position === 0) {
            this._head = current.next

            if (this._length === 1) {
                this._tail = null
            } else {
                this._head.prev = null
            }
        } else if (position === this._length - 1) {
            current = this._tail
            this._tail = current.prev
            this._tail.next = null
        } else {
            if (position <= this._length / 2) {
                let current = this._head
                let index = 0

                while (index < position) {
                    current = current.next
                    index++
                }

                current.prev.next = current.next
                current.next.prev = current.prev
            } else {
                let current = this._tail
                let index = this._length - 1

                while (index > position) {
                    current = current.prev
                    index--
                }

                current.prev.next = current.next
                current.next.prev = current.prev
            }
        }

        this._length--

        return current.value
    }

    /**
     * 检查双向链表是否包含某个值
     * @param {*} value
     * @return {*}
     */
    indexOf(value) {
        let current = this._head
        let index = 0

        while (current) {
            if (current.value === value) {
                return index
            }

            current = current.next
            index++
        }

        return -1
    }

    /**
     * 是否为空
     * @return {*}
     */
    isEmpty() {
        return this._length === 0
    }

    /**
     * 链表的长度
     * @return {*}
     */
    size() {
        return this._length
    }

    /**
     * 遍历链表
     * @param {*} iteratee - 每次迭代调用的函数
     * @param {*} reverse - 反向遍历链表 默认值 false
     * @return {*}
     */
    forEach(iteratee, reverse = false) {
        if (reverse) {
            let current = this._tail
            let index = this._length - 1
            while (current) {
                iteratee(current.value, index)
                current = current.prev
                index--
            }
        } else {
            let current = this._head
            let index = 0

            while (current) {
                iteratee(current.value, index)
                current = current.next
                index++
            }
        }
    }

    toArray() {
        let current = this._head
        const arr = []

        while (current) {
            arr.push(current.value)
            current = current.next
        }

        return arr
    }

    get head() {
        return this._head
    }

    get tail() {
        return this._tail
    }
}
