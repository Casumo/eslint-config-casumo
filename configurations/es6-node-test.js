module.exports = {
    extends: [
        './es6-test.js'
    ],
    env: {
        mocha: true,
        phantomjs: true
    },
    globals: {
        expect: true,
        sandbox: true
    },
    rules: {
        'max-nested-callbacks': 0,
        'no-unused-expressions': 0,
        'no-magic-numbers': 0
    }
};
