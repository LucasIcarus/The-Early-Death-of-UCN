import keystone from 'keystone'
import fs from 'fs'
import graphqlHTTP from 'express-graphql'
import graphQLSchema from '../graphql/basicSchema'
import cache from 'lru-cache'
import serialize from 'serialize-javascript'
import PrettyError from 'pretty-error'
import { createBundleRenderer } from 'vue-server-renderer'
import config from '../../core/config'

const importRoutes = keystone.importer(__dirname)
const bundlePath = config.path.bundleFile
const renderer = createBundleRenderer(fs.readFileSync(bundlePath, 'utf-8'), {
    cache: cache({ max: 10000 })
})
const assets = require('./assets')
const pe = new PrettyError()

pe.skipNodeFiles()
pe.skipPackage('express')

exports = module.exports = function (app) {
    app.use('/api/graphql', graphqlHTTP({ schema: graphQLSchema, graphiql: true }))

    app.get('*', async function (req, res, next) {
        try {
            let statusCode = 200
            const data = {
                title: 'Vuepack-SSR',
                // description: '',
                // css: '',
                body: '',
                entry: assets.main.js,
            }
            const context = { url: req.url }
            data.body = await new Promise((resolve, reject) => {
                renderer.renderToString(context, (err, html) => {
                    if (err) {
                        reject(err)
                    }
                    resolve(html)
                })
            })
            data.initialState = serialize(context.initialState, { isJSON: true })
            res.status(statusCode)
            res.render('index', data)
        } catch (err) {
            next(err)
        }
    })

    app.use((err, req, res, next) => {
        console.log(pe.render(err))
        const statusCode = err.status || 500
        res.status(statusCode)
        res.render('error', {
            title: 'Error',
            message: err.message,
            stack: process.env.NODE_ENV === 'production' ? '' : err.stack
        })
        next()
    })
}
