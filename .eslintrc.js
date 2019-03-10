module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  extends: [
    // @nuxtjs/eslint-config
    '@nuxtjs',
    // eslint-config-airbnb-base
    // 'airbnb-base',
    // eslint-config-prettier
    'plugin:prettier/recommended',
    'plugin:vue/recommended'
  ],
  // plugins: ['vue'],
  settings: {
    // 需要裝 eslint-plugin-import
    'import/resolver': {
      // 需要裝 eslint-import-resolver-alias
      alias: [['~', __dirname]],
    },
    // 目的是讓 import Vue from 'vue' 不會報錯
    'import/core-modules': [
      'vue'
    ],
  },
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'linebreak-style': 0
  }
}
