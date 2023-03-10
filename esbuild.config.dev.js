import { build } from "esbuild"

build({
    entryPoints: ['./src/index.ts'],
    outfile: "./lib/index.js",
    bundle: true, // 多文件打包
    minify: true, // 压缩代码
    format: 'esm',
    loader: { ".ts": "ts" },
})
    .then((res, s) => {
        console.log("⚡ Done", res, s)
    })
    .catch(() => process.exit(1))