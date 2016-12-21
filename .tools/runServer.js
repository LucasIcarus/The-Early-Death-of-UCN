const { join } = require('path')
const cp = require('child_process')
const webpackConfig = require('./webpack.config.js')

const RUNNING_REGEXP = /is ready on port (.*?)\n/
let server
const { output } = webpackConfig[1]
const serverPath = join(output.path, output.filename)

function runServer(cb) {
    function onStdOut(data) {
        const time = new Date().toTimeString()
        const match = data.toString('utf8').match(RUNNING_REGEXP)

        process.stdout.write(`${time.replace(/.*(\d{2}:\d{2}:\d{2}).*/, '[$1] ')} ${data}`)
        if (match) {
            server.stdout.removeListener('data', onStdOut)
            server.stdout.on('data', x => process.stdout.write(x))
            if (cb) {
                cb(null, `localhost:${match[1]}/`)
            }
        }
    }

    if (server) {
        server.kill('SIGTERM')
    }

    server = cp.spawn('node', [serverPath], {
        env: Object.assign({
            NODE_ENV: 'development'
        }, process.env),
        silent: false,
    })

    server.stdout.on('data', onStdOut)
    server.stderr.on('data', x => process.stderr.write(x))
}

process.on('exit', () => {
    if (server) {
        server.kill('SIGTERM')
    }
})

module.exports = runServer
