import LRU from 'lru-cache'
import localFetch, { Request, Headers, Response } from 'node-fetch'
import config from '../src/core/config'

const inBrowser = typeof window !== 'undefined'
const createCache = () => LRU({
	max: 1000,
	maxAge: 1000 * 60 * 15 // 15 min cache
})
const cache = createCache()
	// const createServerSideAPI = () => {
	// 	function warmCache() {
	//
	// 	}
	// 	const api = {}
	// 	api.__ids__ = {}
	// }

const localUrl = (url) => {
	if (url.startsWith('//')) {
		return `https:${url}`
	}
	if (url.startsWith('http')) {
		return url
	}
	return `http://${config.host}${url}`
}

const fetch = (child) => {
	if (cache && cache.has(child.name)) {
		return Promise.resolve(cache.get(child.name))
	} else {
		return new Promise((resolve, reject) => {
			localFetch(localUrl('api/' + child.query)).then(res => res.json()).then(json => {
				const val = json
				val.__lastUpdated = Date.now()
				cache && cache.set(child.name, val)
				resolve(val)
			})
		})
	}
}

fetch({ name: 'test', query: 'graphql?query={posts{state, publishedDate}}' }).then(val => {
	console.log(val.data)
})
