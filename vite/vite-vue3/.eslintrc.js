module.exports = {
  extends: 'standard',
  global: {
    import: 'off',
  }
  rules: {
    'comma-dangle': ['error', 'always-multiline'], // 允许在多行数组或对象字面量中使用尾随逗号
  },
}
