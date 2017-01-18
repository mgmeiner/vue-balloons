var path = require('path')
var projectRoot = path.resolve(__dirname, '../')

var env = process.env.NODE_ENV
var useCssSourceMap = env === 'development' || false;

module.exports = {
  resolve: {
    extensions: ['', '.js', '.vue', '.json'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      'src': path.resolve(__dirname, '../src'),
      'components': path.resolve(__dirname, '../src/components')
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: [
          path.join(projectRoot, 'lib')
        ],
        exclude: /node_modules/
      }
    ]
  },
  vue: {
    loaders: {
      less: 'vue-style-loader!css-loader!less-loader'
    },
    postcss: [
      require('autoprefixer')({
        browsers: ['last 2 versions']
      })
    ]
  }
}
