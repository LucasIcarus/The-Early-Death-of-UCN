const path = require('path')
const gaze = require('gaze')
const replace = require('replace')
const Promise = require('bluebird')
const ncp = Promise.promisify(require('ncp'))

const copy = ({ watch }) => new Promise((resolve, reject) => {
    Promise.all([
        ncp('src/public', 'dist/public'),
            ncp('src/server/templates', 'dist/templates'),
            ncp('src/server/models', 'dist/models'),
            ncp('src/server/updates', 'dist/updates'),
            ncp('package.json', 'dist/package.json'), ])
        .then(() => {
            replace({
                regex: '"start".*',
                replacement: '"start": "node server.js"',
                paths: ['dist/package.json'],
                recursive: false,
                silent: false,
            })
            if (watch) {
                const watcher = new Promise((resolve, reject) => {
                    gaze('src/server/templates/**/*.*', (err, val) => err ? reject(err) : resolve(val))
                })
                watcher.then((watcher) => {
                    watcher.on('changed', () => new Promise((resolve, reject) => {
                        const relPath = file.substr(path.join(__dirname, '../src/server/templates/').length)
                        return ncp(`src/server/templates/${relPath}`, `dist/templates/${relPath}`)
                    }))
                })
            }
        })
        .then(() => {
            resolve()
        })

})

module.exports = copy
