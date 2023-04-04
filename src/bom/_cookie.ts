/**
 * cookie增删改查
 * 
 * @since 1.62.0
 * @example
 * 
 * ```ts
 * import { cookie } from 'super-tools-lib'
 * 
 * cookie.set('token', 'NSBSNAKSA2771HS11212', 1680078662360)
 * 
 * cookie.get('token') // NSBSNAKSA2771HS11212
 * 
 * cookie.delete('token')
 * ```
 */
export const cookie = {
    /**
     * 设置cookie属性及时间
     * - 注意：只能逐条设置
     * 
     * @param {string} key - 属性名
     * @param {string} value - 属性值
     * @param {number} expTime - 过期时间 时间戳
     */
    set: (key: string, value: string, expTime?: number) => {
        document.cookie = key + '=' + value + ';max-age=' + expTime
    },

    /**
     * 删除cookie属性
     * 
     * @param {string} key - 属性名
     */
    delete: (key: string) => {
        document.cookie = key + '=' + '' + ';max-age=' + -1
    },

    /**
     * 查询cookie属性
     * 
     * @param {*} key - 属性名 
     * @returns 
     */
    get: (key: string) => {
        const CookiesArray = document.cookie.split('; ')
        let value: string | undefined = undefined
        for (let i = 0; i < CookiesArray.length; i++) {
            const CookieItem = CookiesArray[i]
            const CookieItemArray = CookieItem.split('=')

            if (CookieItemArray[0] === key) {
                value = CookieItemArray[1]
            }
        }
        return value
    },
}