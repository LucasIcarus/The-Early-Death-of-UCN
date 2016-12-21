import _ from 'lodash'
import keystone from 'keystone'
import moment from 'moment'

const Types = keystone.Field.Types

/**
 * Carousel-Images Model
 * =============
 */

var Carousel = new keystone.List('Carousel-Image', {
    track: true,
    autokey: { path: 'key', from: 'mark', unique: true }
})

Carousel.add({
    mark: { type: String, required: true, index: true, initial: true, default: '16-11-26-0', label: '图片标记', note: '例如: year-month-day-no.' },
    location: { type: String, initial: true, index: true, width: 'medium', note: '例如: 吉隆坡', label: '拍摄地点', default: '厦门' },
    publishedAt: { type: Types.Datetime, index: true, label: '发布日期', required: true, default: moment.now() },
    srcLocation: { type: String, required: true, note: '图片引用地址, 例如: http://fancy-oss.oss-cn-shenzhen.aliyuncs.com/404-bg.jpg', label: '图片地址', default: 'http://' },
    legacy: { type: Boolean, noedit: true, collapse: true },
})

Carousel.defaultSort = '-publishedAt'
Carousel.defaultColumns = 'mark, location, publishedAt'
Carousel.register()
