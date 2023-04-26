module.exports = {
    clearMocks: true,
    collectCoverageFrom: ['src/*.{js,ts}', 'src/**/*.{js,ts}'],
    coverageDirectory: 'coverage',
    coverageProvider: 'v8',
    coverageThreshold: {
        global: {
            branches: 90,
            functions: 95,
            lines: 95,
            statements: 95,
        },
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx', 'node'],
    preset: 'ts-jest',
    setupFilesAfterEnv: [ './test/index.test.ts'],
    globals: {
        'ts-jest': {
            isolatedModules: true,
        },
    },
    testEnvironment: 'jest-environment-jsdom',
    testRegex: './test/index.test.ts',
}