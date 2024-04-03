
/**
 * 无刷新删除url？后的参数
 * 
 * @since 1.75.0
 * @example
 * 
 * ```ts
 * import { removeUrlParam } from 'super-tools-lib'
 * 
 * removeUrlParam(‘id’)
 * ```
 */
export const removeUrlParam = (paramKey) => {
    let url = window.location.href

    const reg = new RegExp('([?&])' + paramKey + '=[^&#]*', 'g')
    
    url = url.replace(reg, '$1')

    url = url.replace(/[?&]$/, '')

    history.replaceState(null, '', url)
}