import _ from 'lodash'
import keystone from 'keystone'
import moment from 'moment'

const Types = keystone.Field.Types

/**
 * Slogan-Images Model
 * =============
 */

var Slogan = new keystone.List('Slogan', {
    track: true,
    singular: 'Slogan',
    plural: 'Slogan',
    autokey: { path: 'key', from: 'name', unique: true },
    nocreate: true
})

Slogan.add({
    name: { type: String },
    content: { type: String, initial: true, index: true, width: 'medium', label: '标语内容', default: '...' },
    publishedDate: { type: Types.Datetime, index: true, label: '发布日期', required: true, default: moment.now() }
})

Slogan.defaultSort = '-publishedDate'
Slogan.defaultColumns = 'name | 20% , content, publishedDate'
Slogan.register()

const indexSlogan = Slogan.model({
    name: 'Created when system run'
})

indexSlogan.save()
