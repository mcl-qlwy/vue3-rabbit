/*
 * @Author: mochenglong
 * @Date: 2024-06-05 22:20:02
 * @LastEditors: mochenglong
 * @LastEditTime: 2024-06-06 01:03:00
 * @Description: file content
 */
/* eslint-env node */
module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'vue/multi-word-component-names': 0,
  },
}
