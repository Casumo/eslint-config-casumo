module.exports = {
    extends: [
        '../configurations/es6.js',
        '../rules/eslint/node/on.js'
    ],
    env: {
        node: true
    },
    parserOptions: {
        sourceType: 'script',
        ecmaFeatures: {
            impliedStrict: false
        }
    },
    globals: {},
    rules: {
        'constructor-super': 0,
        'no-class-assign': 0,
        'no-dupe-class-members': 0,
        'no-this-before-super': 0,
        'prefer-reflect': 0,
        strict: [2, 'global']
    }
};
