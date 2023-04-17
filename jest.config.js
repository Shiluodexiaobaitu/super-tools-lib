module.exports = {
    clearMocks: true, // 是否每次运行清除mock
    collectCoverageFrom: ['src/*.{js,ts}', 'src/**/*.{js,ts}'], //覆盖率文件
    coverageDirectory: 'coverage', // 生成覆盖率的文件名
    coverageProvider: 'v8',
    coverageThreshold: { // 覆盖率阈值
        global: {
            branches: 90,
            functions: 95,
            lines: 95,
            statements: 95,
        },
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx', 'node'], // 文件扩展
    preset: 'ts-jest', //ts
    setupFilesAfterEnv: [ './test/index.test.ts'],
    globals: {
        'ts-jest': {
            isolatedModules: true,
        },
    },
    testEnvironment: 'jest-environment-jsdom', // js
    testRegex: './test/index.test.ts', // 要进行test的文件正则
}