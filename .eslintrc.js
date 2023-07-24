module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['airbnb', 'plugin:storybook/recommended'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
        'react/jsx-filename-extension': [2, {
            extensions: ['.js', '.jsx', '.tsx'],
        }],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'react/forbid-prop-types': 'off',
        'react/button-has-type': 'off',
        'react/jsx-no-constructed-context-values': 'off',
        'no-restricted-exports': 'off',
        camelcase: 'off',
        'default-param-last': 'off',
        'react/prop-types': 'off',
        'no-underscore-dangle': 'off',
        'max-len': ['error', {
            ignoreComments: true,
            code: 100,
        }],
    },
};
