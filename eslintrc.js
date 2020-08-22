const config = {
  root: true,
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  plugins: ['react', 'react-hooks', 'prettier', 'jsdoc'],
  rules: {
    // eslint
    'import/no-cycle': 0,
    'import/prefer-default-export': 0,
    'comma-dangle': 0,
    'class-methods-use-this': 0,
    'eslint-comments/no-unlimited-disable': 0,
    'no-prototype-builtins': 0,
    'import/extensions': 0,
    'no-underscore-dangle': [
      'error',
      {
        allowAfterThis: true,
      },
    ],
    // jsdoc
    'jsdoc/require-jsdoc': [
      'error',
      {
        require: {
          FunctionDeclaration: true,
          FunctionExpression: true,
          ClassDeclaration: true,
          ClassExpression: true,
          MethodDefinition: true,
          ArrowFunctionExpression: true,
        },
      },
    ],
    // react
    'react/static-property-placement': 0,
    'react/state-in-constructor': [1, 'never'],
    'react/sort-comp': [
      1,
      {
        order: [
          'type-annotation',
          'static-variables',
          'static-methods',
          'instance-variables',
          'setters',
          'getters',
          'lifecycle',
          'instance-methods',
          'everything-else',
          'render',
        ],
      },
    ],
    'react/jsx-props-no-spreading': 0,
    // prettier
    'prettier/prettier': 'error',
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  overrides: [],
};

const js = {
  files: ['**/*.js', '**/*.jsx'],
  parserOptions: {
    project: './jsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsdoc/recommended',
    'prettier',
    'prettier/react',
    'airbnb',
  ],
  rules: Object.assign(
    {
      // eslint
      'import/no-unresolved': 0,
      'no-use-before-define': 0,
      // jsdoc
      'jsdoc/require-returns-type': 0,
      'jsdoc/require-param-type': 0,
    },
    config.rules
  ),
};

config.overrides.push(js);

module.exports = config;
