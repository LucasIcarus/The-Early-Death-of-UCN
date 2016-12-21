const { join, resolve } = require('path')

const root = process.cwd()
const config = {

    // path for webpack
    path: {
        rootDir: root,
        srcDir: join(root, './src'),
        distDir: join(root, './dist'),
        publicDir: join(root, './dist/public'),
    },

    // autoprefixer option
    AUTOPREFIXER_BROWSERS: [
        'Android 2.3',
        'Android >= 4',
        'Firefox >= 31',
        'Explorer >= 9',
        'Chrome >= 35',
        'iOS >= 7',
        'Opera >= 12',
        'Safari >= 7.1'
    ],
}

module.exports = config
