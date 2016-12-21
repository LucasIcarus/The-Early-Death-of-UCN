import _ from 'lodash'
import keystone from 'keystone'
import moment from 'moment'

const Types = keystone.Field.Types

/**
 * Slogan Model
 * =============
 */

const Slogan = new keystone.List('Slogan', {
    track: true,
    singular: 'Slogan',
    plural: 'Slogan',
    autokey: { path: 'key', from: 'content', unique: true },
    nocreate: true,
    nodelete: true
})

Slogan.add({
    name: { type: String, noedit: true },
    content: { type: String, initial: true, index: true, width: 'large', label: '标语内容', default: '...' },
    publishedAt: { type: Types.Datetime, index: true, label: '发布日期', required: true, default: moment.now() }
})

Slogan.defaultSort = '-publishedAt'
Slogan.defaultColumns = 'content|55%, publishedAt'
Slogan.register()

Slogan.model.find().remove((err) => {
    if (!err) {
        const indexSlogan = Slogan.model({
            name: 'Automatically create one single slogan for index page when then system reboot and editable down below',
            content: '2017年阿尔及利亚国际建筑建材展览会即将召开'
        })

        indexSlogan.save()
    } else {
        console.log(err)
    }
})
