
/**
 * 将promise的错误转换为数组
 * @param {Promise<T>} promise - promise对象
 * @param {object} errorExt - 额外的错误信息
 * @return {Promise<[U, undefined] | [null, T]>}
 * @example
 * 
 * ```ts
 * import { awaitTo } from 'super-tools-lib'
 * 
 * const [err, res] = await awaitTo(fetch('https://www.baidu.com'))
 * 
 * if (err) {
 *    console.log(err)
 * } else {
 *   console.log(res)
 * }
 * ```
 */
export function awaitTo<T, U = Error>(
    promise: Promise<T>,
    errorExt?: object,
): Promise<[U, undefined] | [null, T]> {
    return promise
        .then<[null, T]>((data: T) => [null, data])
        .catch<[U, undefined]>((err: U) => {
            if (errorExt) {
                const parsedError = Object.assign({}, err, errorExt)
                return [parsedError, undefined]
            }

            return [err, undefined]
        })
}