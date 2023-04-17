import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from "rollup-plugin-babel"
import eslint from '@rollup/plugin-eslint'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import json from '@rollup/plugin-json'
import typescript from 'rollup-plugin-typescript2'


export default [
    {
        input: 'src/index.ts',
        external: ['ms'],
        output: {
            file: './lib/super-tools-lib.js',
            format: 'iife',
            name: 'superToolsLib',
            exports: 'named',
        },
        plugins: [
            typescript(),
            json(),
            resolve({ browser: true }),
            commonjs(),
            eslint({
                throwOnError: true,
                throwOnWarning: true,
                include: ['src/**'],
                exclude: ['node_modules/**'],
            }),
            babel({
                exclude: 'node_modules/**',
                runtimeHelpers: true,
            }),
            livereload(),
            serve({
                open: true,
                port: '8888',
                contentBase: '',
            }),
        ],
    },
]