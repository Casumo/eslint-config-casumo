module.exports = {
    rules: {
        'array-bracket-newline': [2, 'consistent'],
        'array-bracket-spacing': [2, 'never'],
        'array-element-newline': [2, 'consistent'],
        'block-spacing': 0,
        'brace-style': 2,
        'camelcase': 2,
        'capitalized-comments': 0,
        'comma-dangle': [2, 'never'],
        'comma-spacing': 0,
        'comma-style': [2, 'last'],
        'computed-property-spacing': 0,
        'consistent-this': 0,
        'eol-last': 2,
        'func-call-spacing': 0,
        'func-name-matching': 0,
        'func-names': 0,
        'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
        'function-paren-newline': [2, 'consistent'],
        'id-blacklist': 0,
        'id-length': 0,
        'id-match': 0,
        'implicit-arrow-linebreak': [2, 'beside'],
        'indent': [2, 4, { SwitchCase: 1 }],
        'jsx-quotes': 0,
        'key-spacing': [2, { afterColon: true }],
        'keyword-spacing': [2, {}],
        'line-comment-position': 0,
        'linebreak-style': 0,
        'lines-around-comment': 0,
        'lines-between-class-members': ['error', 'always'],
        'max-depth': ['error', 2],
        'max-len': [2, 110],
        'max-lines': 0,
        'max-lines-per-function': 0,
        'max-nested-callbacks': ['error', 3],
        'max-params': ['error', 10],
        'max-statements-per-line': 0,
        'max-statements': ['error', 20],
        'multiline-ternary': 0,
        'multiline-comment-style': 0,
        'new-cap': 2,
        'new-parens': 0,
        'newline-per-chained-call': 0,
        'no-array-constructor': 0,
        'no-bitwise': 2,
        'no-continue': 0,
        'no-inline-comments': 0,
        'no-lonely-if': 0,
        'no-mixed-operators': 0,
        'no-mixed-spaces-and-tabs': 2,
        'no-multi-assign': 2,
        'no-multiple-empty-lines': [2, { max: 1, maxEOF: 1 }],
        'no-negated-condition': 0,
        'no-nested-ternary': 0,
        'no-new-object': 0,
        'no-plusplus': 0,
        'no-restricted-syntax': 0,
        'no-tabs': 0,
        'no-ternary': 0,
        'no-trailing-spaces': 2,
        'no-underscore-dangle': 2,
        'no-unneeded-ternary': 0,
        'no-whitespace-before-property': 0,
        'nonblock-statement-body-position': 2,
        'object-curly-newline': 0,
        'object-curly-spacing': 0,
        'object-property-newline': 0,
        'one-var-declaration-per-line': 0,
        'one-var': [2, { var: 'always', let: 'never', const: 'never' }],
        'operator-assignment': 0,
        'operator-linebreak': [2, 'after'],
        'padded-blocks': 0,
        'padding-line-between-statements': [
            2,
            {
                blankLine: 'always',
                prev: ['const', 'let', 'var'],
                next: '*'
            },
            {
                blankLine: 'any',
                prev: ['const', 'let', 'var'],
                next: ['const', 'let', 'var']
            },
            {
                blankLine: 'always',
                prev: '*',
                next: 'return'
            }
        ],
        'prefer-object-spread': 2,
        'quote-props': 0,
        'quotes': [2, 'single'],
        'require-jsdoc': 0,
        'semi-spacing': 0,
        'semi-style': ['error', 'last'],
        'semi': 2,
        'sort-keys': 0,
        'sort-vars': 0,
        'space-before-blocks': [2, 'always'],
        'space-before-function-paren': [2, 'always'],
        'space-in-parens': [2, 'never'],
        'space-infix-ops': 2,
        'space-unary-ops': [2, { words: false, nonwords: false }],
        'spaced-comment': 0,
        'switch-colon-spacing': ['error', {'after': true, 'before': false}],
        'template-tag-spacing': [2, 'always'],
        'unicode-bom': 0,
        'wrap-regex': 0
    }
};
