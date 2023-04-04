
/**
 * 将字符串转换为PascalCase
 * 
 * @since 1.62.0
 * @param {string} str - 要操作的字符串
 * @return {*}
 * @example
 * 
 * ```ts
 * import { toPascalCase } from 'super-tools-lib'
 * 
 * toPascalCase("hello world"); // 'HelloWorld'
 * toPascalCase("hello.world"); // 'HelloWorld'
 * toPascalCase("foo_bar-baz"); // FooBarBaz
 * ```
 */
export const toPascalCase = (str: string): string => (str.match(/[a-zA-Z0-9]+/g) || []).map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`).join('')
