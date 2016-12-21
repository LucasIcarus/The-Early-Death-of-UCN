import api from './api'
import localFetch from 'isomorphic-fetch'
import config from '../config'

const inBrowser = typeof window !== 'undefined'

if (api.cached) {
    warmCache()
}

function warmCache() {
    fetchIndexData()
    setTimeout(warmCache, 1000 * 60 * 15)
}

function localUrl(url) {
    if (url.startsWith('//')) {
        return `https:${url}`
    }
    if (url.startsWith('http')) {
        return url
    }
    return `http://${config.host}${url}`
}

function fetch(child) {
    if (inBrowser) {
        return null
    }
    const cache = api.cached
    if (cache && cache.has(child.name)) {
        return Promise.resolve(cache.get(child.name))
    } else {
        return new Promise((resolve, reject) => {
            localFetch(localUrl('api/graphql?query=' + child.query)).then(res => res.json()).then(json => {
                const val = json.data[child.name]
                val.__lastUpdated = Date.now()
                cache && cache.set(child.name, val)
                resolve(val)
            }).catch(err => {
                if (err) {
                    reject(err)
                    throw new Error({ message: 'something went wrong with fetch stack' })
                }
            })
        })
    }
}

export function fetchIndexData() {
    return fetch({ name: 'index', query: '{index{carouselImages{srcLocation},slogan{content},exhibCards{name, imageSrc},footprints{name, longitude, latitude}}}' })
}
