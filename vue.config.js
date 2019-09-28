const path = require('path')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const nodeExternals = require('webpack-node-externals')
const ISSERVER = process.env.WEBPACK_TARGET === 'node'
module.exports = {
  configureWebpack: () => {
    if (ISSERVER) {
      return {
        target: 'node',
        entry: path.join(__dirname, './src/components/skeleton-entry.js'),
        devtool: 'source-map',
        output: {
          libraryTarget: 'commonjs2'
        },
        externals: nodeExternals({
          whitelist: /\.css$/
        }),
        plugins: [
          new VueSSRServerPlugin()
        ]
      }
    }
  }
}