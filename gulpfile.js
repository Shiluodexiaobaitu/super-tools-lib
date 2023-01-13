/*
 * @Author: zhangce
 * @Date: 2022-02-25 10:27:13
 * @Email: zhangce@fengmap.com
 * @LastEditTime: 2022-10-26 12:21:15
 * @LastEditors: zhangce
 * @LastEditorsEmail: zhangce@fengmap.com
 * @Description: 
 *  Copyright: Copyright 2014 - 2022, FengMap, Ltd. All rights reserved.
 */

const { src, dest, series, parallel } = require("gulp")
const uglify = require("gulp-uglify")
const concat = require('gulp-concat')
const javascriptObfuscator = require('gulp-javascript-obfuscator')


function js() {
    return src("./lib/super-tools-lib.js")
        .pipe(javascriptObfuscator({
            unicodeEscapeSequence: true,
            selfDefending: true,
            // debugProtection: true
        }))
        .pipe(
            uglify({
                mangle: true,
            }),
        )
        .pipe(concat('super-tools-lib.min.js'))
        .pipe(dest("./lib"))
}

exports.default = series(parallel(js))
