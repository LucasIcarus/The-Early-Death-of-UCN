import _ from 'lodash'
import keystone from 'keystone'
import moment from 'moment'

const Types = keystone.Field.Types

/**
 * ExhibCard Model
 * =============
 */

var ExhibCard = new keystone.List('Exhib-Card', {
    track: true,
    autokey: { path: 'key', from: 'name', unique: true }
})

ExhibCard.add({
    name: { type: String, required: true, index: true, initial: true, default: '**展会', label: '展会名称', note: '例如: 某某展会' },
    imageSrc: { type: String, required: true, note: '图片引用地址, 例如: http://fancy-oss.oss-cn-shenzhen.aliyuncs.com/404-bg.jpg', label: '展会封面', default: 'http://' },
    publishedAt: { type: Types.Datetime, index: true, label: '发布日期', required: true, default: moment.now() },
})

ExhibCard.defaultSort = '+publishedAt'
ExhibCard.defaultColumns = 'name, imageSrc, publishedAt'
ExhibCard.register()
