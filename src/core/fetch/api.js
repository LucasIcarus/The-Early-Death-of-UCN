import LRU from 'lru-cache'

let api = {}

if (process.__API__) {
    api = process.__API__
} else {
    process.__API__ = api

    // fetched item cache
    api.cached = LRU({
        max: 1000,
        maxAge: 1000 * 60 * 5 // 5 min cache
    })
}

export default api
