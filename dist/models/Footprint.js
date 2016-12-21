import _ from 'lodash'
import keystone from 'keystone'
import moment from 'moment'

const Types = keystone.Field.Types

/**
 * Footprint Model
 * =============
 */

const Footprint = new keystone.List('Footprint', {
    track: true,
    autokey: { path: 'key', from: 'name', unique: true }
})

Footprint.add({
    name: { type: String, required: true, label: '城市名称', note: '例如: 厦门' },
    longitude: { type: String, required: true, index: true, width: 'medium', default: '0E', label: '经度', note: '例如: 23.45833E(东经), 23.45833W(西经)' },
    latitude: { type: String, required: true, index: true, width: 'medium', default: '0N', label: '纬度', note: '例如: 30.000N(北纬), 30.000S(南纬)' },
    publishedAt: { type: Types.Datetime, index: true, label: '发布日期', required: true, default: moment.now() }
})

Footprint.defaultSort = '-publishedAt'
Footprint.defaultColumns = 'name, longitude, latitude, publishedAt'
Footprint.schema.pre('save', function (next) {
    if (/E|W/.test(this.longitude) && /S|N/.test(this.latitude)) {
        next()
    }
})
Footprint.register()
