/**
 * 打印屏幕
 * 
 * @since 1.62.0
 * @hidden
 * @param {string} printEleId - 打印区域dom id
 * @param {string} rootEleId - 根节点dom id
 * @param {string} style - 样式
 */
export const print = (printEleId: string, rootEleId: string, style: string) => {

    const containerDiv = document.createElement('div')
    containerDiv.setAttribute('id', 'containerDiv')
    containerDiv.style.cssText = style ? style : 'width: 100vw;height:100vh'
    const box = document.getElementById(printEleId)
    const root = document.getElementById(rootEleId)

    const _p = box.style.position
    const _o = box.style.overflowY

    box.style.position = 'static'
    box.style.overflowY = 'visible'

    root.style.visibility = 'hidden'
    containerDiv.innerHTML = box.outerHTML
    root.parentNode.insertBefore(containerDiv, root)
    window.print()
    root.style.visibility = 'visible'
    box.style.position = _p
    box.style.overflowY = _o
    if (document.body.contains(document.getElementById('containerDiv'))) {
        document.body.removeChild(document.getElementById('containerDiv'))
    }
    return false
}