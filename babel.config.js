module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        // ~ + 自定义路径
        styleLibraryName: '~src/assets/css/element-ui'
      }
    ]
  ]
}
