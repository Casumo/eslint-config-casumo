module.exports = {
    extends: [
        './es5.js',
        '../rules/eslint/ecma-script-6/on.js'
    ],
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            impliedStrict: true
        }
    },
    env: {
        es6: true
    },
    globals: {},
    rules: {}
};
