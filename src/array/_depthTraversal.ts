
/**
 * 深度优先遍历
 * 
 * @since 1.63.0
 * @param {any[]} data - 需要遍历的数组
 * @param {function} callback - 回调函数
 * @param {*} childrenKey - 子节点的key
 * @example
 * 
 * ```ts
 * import { depthTraversal } from 'super-tools-lib'
 * 
const data = [
    {
        name: '1',
        children: [
            {
                name: '1-1',
                children: [
                    {
                        name: '1-1-1',
                        children: [
                            { name: '1-1-1-1' },
                        ],
                    },
                ],
            },
        ],
    },
    {
        name: '2',
    },
]

depthTraversal(data, (item, index, arr) => {
    console.log(item.name)
})
// 1
// 1-1
// 1-1-1
// 1-1-1-1
// 2
 * ```
 */
export const depthTraversal = (data: any[], callback: (item: any, index: number, arr: any[]) => void, childrenKey = 'children') => {
    const stack = [...data]

    while (stack.length) {
        const item = stack.shift()
        callback(item, data.indexOf(item), data)
        if (item[childrenKey]) {
            stack.unshift(...item[childrenKey])
        }
    }
}