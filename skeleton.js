const fs = require('fs')
const {
  resolve
} = require('path')
const bundle = require('./dist/vue-ssr-server-bundle.json')

const createBundleRenderer = require('vue-server-renderer').createBundleRenderer

// 读取`skeleton.json`，以`index.html`为模板写入内容
const renderer = createBundleRenderer(bundle, {
  template: fs.readFileSync(resolve(__dirname, './public/index.html'), 'utf-8')
})

// 把上一步模板完成的内容写入（替换）`index.html`
renderer.renderToString({}, (err, html) => {
  fs.writeFileSync('./public/index.html', html, 'utf-8')
})