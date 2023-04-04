/**
 * 检查某个元素是否是另一个元素的后代
 * 
 * @since 1.62.0
 * @param {Node} child - 子级元素
 * @param {Node} parent - 父级元素
 * @return {*}
 */
export const isDescendant = (child: Node, parent: Node): boolean => parent.contains(child)
