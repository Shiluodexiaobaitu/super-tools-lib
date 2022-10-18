module.exports = {
    'env': {
        'browser': true,
        'es6': true,
        'node': true
    },
    // 'extends': 'eslint:recommended',
    'parser': '@typescript-eslint/parser',
    'plugins': [
        '@typescript-eslint'
    ],
    'extends': [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly',
        'ENV': true
    },
    'parserOptions': {
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'rules': {
        // 'indent': [2, 4], // 强制使用一致的缩进
        'eqeqeq': [2, 'always'], // 要求使用 === 和 !==
        'quotes': [1, 'single'], //使用单引号，提示是警告
        'quotes': [0, 'double'], //使用双引号，关闭
        'linebreak-style': [0, 'error', 'windows'],
        'quotes': 'off',
        'semi': [2, 'never'], // 不允许加分号
        'comma-dangle': 'off',
        '@typescript-eslint/no-explicit-any': ['off'], // 关闭使用any类型警告
        '@typescript-eslint/explicit-module-boundary-types': 'off'
    }
}