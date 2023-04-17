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
                file: './lib/super-tools-lib.cjs.js',
                format: 'cjs',
                exports: 'named',
            },
            {
                file: './lib/super-tools-lib.esm.js',
                format: 'esm',
                exports: 'named',
            },
            {
                file: './lib/super-tools-lib.min.js',
                format: 'iife',
                name: 'superToolsLib',
                exports: 'named',
            },
        ],
        plugins: [
            typescript(),
            json(),
            resolve({ browser: true }),
            commonjs(),
            filesize(),
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
            terser(),
        ],
    },
]