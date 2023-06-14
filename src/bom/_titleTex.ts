
/**
 * 滚动页面title
 * 
 * @since 1.67.0
 * @param {string} title - 标题
 * @return {object} - 返回一个对象，包含start和end方法
 * @example
 * 
 * ```ts
 * import { titleTex } from 'super-tools-lib'
 * 
 * const tex = titleTex('我是标题')
 * tex.start()
 * tex.end()
 * ```
 */
export const titleTex = (title: string) => {
    let position = 0
    let timer: any = null
    const message = title
    const x = 2 * (60 / message.length)
    let newStr = ''
    for (let i = 0; i < x; i++) {
        newStr += message
    }
    return {
        start: (time?: number) => {
            timer = setInterval(() => {
                const title = newStr.substring(position, position + 60)
                position++
                if (position === 60) {
                    position = 0
                }
                document.title = title
            }, time || 150)
        },
        end: () => {
            clearInterval(timer)
        },
    }
}