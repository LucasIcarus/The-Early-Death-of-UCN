const webpack = require('webpack')
const { join } = require('path')
const AssetsPlugin = require('assets-webpack-plugin')
const merge = require('webpack-merge')
const nodeExt = require('webpack-node-externals')
const config = require('./config.js')

const DEBUG = !process.argv.includes('--release')
const VERBOSE = process.argv.includes('--verbose')
const { path, AUTOPREFIXER_BROWSERS } = config
const GLOBALS = {
    'process.env.NODE_ENV': DEBUG ?
        '"development"' : '"production"',
    __DEV__: DEBUG,
}

const baseConfig = {
    output: {
        publicPath: '/',
        sourcePrefix: '  ',
    },
    cache: DEBUG,

    stats: {
        colors: true,
        reasons: DEBUG,
        hash: VERBOSE,
        version: VERBOSE,
        timings: true,
        chunks: VERBOSE,
        chunkModules: VERBOSE,
        cached: VERBOSE,
        cachedAssets: VERBOSE,
    },
    resolve: {
        extensions: ['.js', '.vue', '.css', '.json']
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: { loader: 'babel-loader' },
            include: path.srcDir,
            exclude: /keen-ui\/(helpers|lib|mixins)/
        }, {
            test: /\.json$/,
            use: { loader: 'json-loader' }
        }, {
            test: /\.vue$/,
            use: {
                loader: 'vue-loader'
            }
        }, {
            test: /\.(png|jpg|gif|svg)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'public/images/[hash].[ext]',
                },
            },
            include: path.srcDir,
        }, {
            test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
            use: { loader: 'url-loader' },
            include: path.srcDir,
        }]
    },
}

const clientConfig = merge(baseConfig, {
    entry: ['./src/client/main.js'],
    output: {
        path: path.pulicDir,
        filename: DEBUG ?
            '[name].js?[hash]' : '[name].[hash].js',
    },
    devtool: DEBUG ?
        'cheap-module-eval-source-map' : false,
    plugins: [
        new webpack.DefinePlugin(Object.assign({
            'process.env.BROWSER': true
        }, GLOBALS)),
        new AssetsPlugin({
            path: path.distDir,
            filename: 'assets.js',
            processOutput: x => `module.exports = ${JSON.stringify(x)}`
        }),
        new webpack.LoaderOptionsPlugin({
            vue: {
                postcss: [require('autoprefixer')({ browsers: AUTOPREFIXER_BROWSERS })]
            }
        })
    ].concat(!DEBUG ? [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                screw_ie8: true,
                warnings: VERBOSE,
            }
        }),
        new webpack.optimize.AggressiveMergingPlugin(),
    ] : [])
})

const serverConfig = merge(baseConfig, {
    entry: ['./src/server/keystone.js'],
    output: {
        path: path.distDir,
        filename: 'server.js',
        libraryTarget: 'commonjs2',
    },
    target: 'node',
    node: {
        console: false,
        global: false,
        process: false,
        Buffer: false,
        __filename: false,
        __dirname: false,
    },
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin(Object.assign({
            'process.env.BROWSER': false
        }, GLOBALS)),
    ],
    externals: [nodeExt(), /\.\/assets$/]
})

const serverBundleConfig = merge(baseConfig, {
    entry: ['./src/client/server-entry.js'],
    target: 'node',
    output: {
        path: path.distDir,
        filename: 'server-bundle.js',
        libraryTarget: 'commonjs2',
    },
    devtool: false,
    plugins: [
        new webpack.DefinePlugin(Object.assign({
            'process.env.BROWSER': false,
            'process.env.VUE_ENV': '"server"'
        }, GLOBALS)),
        new webpack.LoaderOptionsPlugin({
            vue: {
                postcss: [require('autoprefixer')({ browsers: AUTOPREFIXER_BROWSERS })]
            }
        })
    ],
    externals: [Object.keys(require('../package.json').dependencies)],
})

module.exports = [clientConfig, serverConfig, serverBundleConfig]
