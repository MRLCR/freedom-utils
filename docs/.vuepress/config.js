const sidebar = [
  ['../guide/', '介绍'],
  ['../guide/getting-started', '快速上手'],
];

const webpackConfigExtend = {
  resolve: {
    alias: {
      '@image': 'assets/image'
    }
  }
}

const head = [
  ['link', { rel: 'icon', href: '/image/logo.png' }],
]

const config = {
  title: 'freedom-utils',
  description: '一个工具类函数的杂货间',
  themeConfig: {
    sidebar,
  },
  configureWebpack: webpackConfigExtend,
  head,
};

module.exports = config;
