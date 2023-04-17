module.exports = {
    'env': {
        'browser': true,
        'es6': true,
        'node': true,
    },
    // 'extends': 'eslint:recommended',
    'parser': '@typescript-eslint/parser',
    'plugins': [
        '@typescript-eslint',
    ],
    'extends': [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly',
        'ENV': true,
    },
    'parserOptions': {
        'ecmaVersion': 2018,
        'sourceType': 'module',
    },
    'rules': {
        "indent": ["error", 4, { SwitchCase: 1 }], // 强制使用一致的缩进 4个空格
        'eqeqeq': [2, 'always'], // 要求使用 === 和 !==
        'quotes': [1, 'single'], //使用单引号，提示是警告
        'quotes': [0, 'double'], //使用双引号，关闭
        'linebreak-style': [0, 'error', 'windows'],
        'quotes': 'off',
        'semi': ['error', 'never'], // 不允许加分号
        // 'comma-dangle': 'off',
        "comma-dangle": [
            2,
            {
                "arrays": "always-multiline", // 当最后一个元素或属性与闭括号 ] 或 } 在 不同的行时，要求使用拖尾逗号；当在 同一行时，禁止使用拖尾逗号。
                "objects": "always-multiline",
                "imports": "always-multiline", // "never" (默认) 禁用拖尾逗号s
                "exports": "always-multiline",
                "functions": "always-multiline",
            },
        ],
        '@typescript-eslint/no-explicit-any': ['off'], // 关闭使用any类型警告
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-unused-vars': [2],
    // "no-unused-vars": [2, { "vars": "all", "args": "after-used" }],//不能有声明后未被使用的变量或参数
    },
}