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
    autokey: { path: 'key', from: 'name', unique: true }
})

Carousel.add({
    mark: { type: String, required: true, label: '图片标记' },
    publishedDate: { type: Types.Datetime, index: true, label: '发布日期' },
    location: { type: String, initial: true, index: true, width: 'medium', note: '拍摄地点, 例如: 吉隆坡', label: '地点' },
    srcLocation: { type: String, required: true, note: '图片引用地址, 例如: http://fancy-oss.oss-cn-shenzhen.aliyuncs.com/404-bg.jpg', label: '图片地址' },
    legacy: { type: Boolean, noedit: true, collapse: true },
})

Exhib.defaultSort = '-publishedDate'

Exhib.register()
