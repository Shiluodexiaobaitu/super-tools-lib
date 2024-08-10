
/**
 * 监听容器变化
 * 
 * @since 1.75.0
 * @param {unknown} v - 要检查的值
 * @return {boolean} 返回true | false
 * @example
 * 
 * ```ts
 * import { isDom } from 'super-tools-lib'
 * 
 * const div = document.createElement('div')
 * 
 * isDom(div) // true
 * ```
 */


export interface MutationObserverInit {
    /** 要监视的特定属性名称的数组，如果未包含此属性，则对所有属性的更改都会触发变动通知 */
    attributeFilter?: string[];
    /** 在attributes属性已经设为true的前提下, 将发生变化的属性节点之前的属性值记录下来(记录在MutationRecord对象的oldValue属性中)； */
    attributeOldValue?: boolean;
    /** 观察目标节点的属性节点(新增或删除了某个属性，以及某个属性的属性值发生了变化) */
    attributes?: boolean;
    /** 如果目标节点为characterData节点(一种抽象接口，具体可以为文本节点、注释节点，以及处理指令节点)时，也要观察该节点的文本内容是否发生变化； */
    characterData?: boolean;
    /** 在characterData属性已经设为true的前提下，将发生变化characterData节点之前的文本内容记录下来(记录在MutationRecord对象的oldValue属性中)； */
    characterDataOldValue?: boolean;
    /** 观察目标节点的子节点的新增和删除； */
    childList?: boolean;
    /** 观察目标节点的所有后代节点(观察目标节点所包含的整棵DOM树上的上述三种节点变化)； */
    subtree?: boolean;
}

export const observeContainerChange = (
    target: HTMLElement | string,
    callback: MutationCallback,
    options?: MutationObserverInit,
) => {
    let _target: HTMLElement
    if (typeof target === 'string') {
        _target = document.querySelector(target)
    } else {
        _target = target
    }
    const observer = new MutationObserver(callback)

    // 观察器的配置（需要观察什么变动）
    const config = { attributes: true, childList: true, subtree: true, ...options }
    observer.observe(_target, config)
    return observer
}
