const { defineConfig } = require('eslint-define-config')
module.exports = defineConfig({
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard',
    './.eslintrc-auto-import.json',
    'prettier'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'no-async-promise-executor': 'off',
    camelcase: 'off',
    'no-unused-vars': 'off'
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly'
  }
})
