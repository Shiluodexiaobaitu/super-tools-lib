/**
 * 解码JWT令牌
 * 
 * @since 1.62.0
 * @param {string} token - 字符串
 * @return {string} 返回解析后的数据
 * @example
 * 
 * ```ts
 * import { decode } from 'super-tools-lib'
 * 
 * decode(`
    eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
    eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0I
    joxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
`); // '{"sub":"1234567890","name":"John Doe","iat":1516239022}'
 * ```
 */
export const decode = (token: string): string => {
    return decodeURIComponent(
        atob(token.split('.')[1].replace('-', '+').replace('_', '/'))
            .split('')
            .map((c) => `%${('00' + c.charCodeAt(0).toString(16)).slice(-2)}`)
            .join(''),
    )
}