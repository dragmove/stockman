const path = require('path'),
  dirName = path.resolve('./'),
  webpack = require('webpack'),
  UglifyJsPlugin = require('uglifyjs-webpack-plugin');

function createConfig(isDebug, options = {banner: ''}) {
  let devTool = '',
    plugins = [];

  const appEntry = {
    "stockman": ['./stockman.js']
  };

  if (isDebug) {
    devTool = 'eval-source-map';

    plugins.push(new UglifyJsPlugin({
      sourceMap: false,
      uglifyOptions: {
        warnings: true,
        compress: {
          drop_console: false,
          unused: false,
          warnings: true
        },
        mangle: false,
        output: {
          beautify: true,
          comments: true
        }
      }
    }), new webpack.HotModuleReplacementPlugin());

  } else {
    devTool = 'source-map';

    plugins.push(new UglifyJsPlugin({
      sourceMap: false,
      uglifyOptions: {
        warnings: true,
        compress: {
          drop_console: true,
          unused: true,
          warnings: true
        },
        mangle: true,
        output: {
          beautify: false,
          comments: false
        }
      }
    }), new webpack.BannerPlugin({
      banner: (options.banner || ''),
      raw: true
    }));
  }

  return {
    target: 'web',

    entry: appEntry,

    output: {
      path: path.resolve(dirName),
      filename: "stockman.min.js",
      library: 'stockman',
      libraryTarget: 'umd',
      libraryExport: 'default'
    },

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },

        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
        }
      ]
    },

    devtool: devTool,

    externals: {},

    plugins: plugins,

    devServer: {
      contentBase: './',
      noInfo: false,
      port: 9000,
      hot: true,
      inline: true
    }
  };
}

module.exports = createConfig;