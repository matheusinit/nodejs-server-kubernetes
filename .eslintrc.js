module.exports = {
    "env": {
        "es2021": true,
        "node": true
    },
    "extends": "standard-with-typescript",
    "overrides": [],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.json"
    },
    "rules": {
      '@typescript-eslint/indent': [
        'error',
        2,
        {
          SwitchCase: 1,
          ObjectExpression: 1,
          MemberExpression: 1,
          CallExpression: {
            arguments: 1,
          },
          'ignoredNodes': [
            'PropertyDefinition[decorators]',
            'TSUnionType',
            'FunctionExpression[params]',
            'CallExpression[arguments]',              // !!!! VERY IMPORTANT !!!!
          ],
        }
      ]
    }
}
