/*
 * @Author: zhangce
 * @Date: 2022-07-05 13:47:24
 * @Email: zhangce@fengmap.com
 * @LastEditTime: 2022-10-26 12:15:01
 * @LastEditors: zhangce
 * @LastEditorsEmail: zhangce@fengmap.com
 * @Description: 
 *  Copyright: Copyright 2014 - 2022, FengMap, Ltd. All rights reserved.
 */
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import eslint from '@rollup/plugin-eslint'
import json from '@rollup/plugin-json'
import typescript from 'rollup-plugin-typescript2'
import filesize from 'rollup-plugin-filesize'

export default [
    {
        input: 'src/index.ts',
        external: ['ms'],
        output: [
            {
                file: './lib/super-tools-lib.js',
                name: 'superToolsLib',
                format: 'umd',
                exports: 'default',
            },
        ],
        plugins: [
            typescript(),
            json(),
            resolve({ browser: true }),  // 这样 Rollup 能找到 `ms`
            commonjs(), // 这样 Rollup 能转换 `ms` 为一个ES模块
            eslint({
                throwOnError: true,
                throwOnWarning: true,
                include: ['src/**'],
                exclude: ['node_modules/**'],
            }),
            filesize(),
            babel({
                exclude: 'node_modules/**', // 防止打包node_modules下的文件
                runtimeHelpers: true,       // 使plugin-transform-runtime生效
            }),
            terser({
                compress: {
                    passes: 10,
                    // compress options 
                    // drop_console: true //去除log
                },
                keep_classnames: false,
            }), // 压缩代码
        ],
    },
]