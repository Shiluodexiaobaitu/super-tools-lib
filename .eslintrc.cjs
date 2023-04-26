module.exports = {
    'env': {
        'browser': true,
        'es6': true,
        'node': true,
    },
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
        "indent": ["error", 4, { SwitchCase: 1 }],
        'eqeqeq': [2, 'always'],
        'quotes': [1, 'single'],
        'quotes': [0, 'double'],
        'linebreak-style': [0, 'error', 'windows'],
        'quotes': 'off',
        'semi': ['error', 'never'],
        "comma-dangle": [
            2,
            {
                "arrays": "always-multiline",
                "objects": "always-multiline",
                "imports": "always-multiline",
                "exports": "always-multiline",
                "functions": "always-multiline",
            },
        ],
        '@typescript-eslint/no-explicit-any': ['off'],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-unused-vars': [2],
    },
}