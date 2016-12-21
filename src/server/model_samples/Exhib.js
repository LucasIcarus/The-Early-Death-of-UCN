import _  from 'lodash'
var keystone = require('keystone')
var moment = require('moment')
var Types = keystone.Field.Types

/**
 * Exhibs Model
 * =============
 */

var Exhib = new keystone.List('Plan', {
    track: true,
    autokey: { path: 'key', from: 'name', unique: true }
})

Exhib.add({
    name: { type: String, required: true, label: '展会名称'},
    publishedDate: { type: Types.Date, index: true, label: '发布日期'},
    state: { type: Types.Select, options: '计划中, 准备出发, 进行中, 已结束', label:'进度'},
    startDate: { type: Types.Datetime, initial: true, index: true, width: 'short', note: '例如: 2014-07-15 / 6:00pm', label:'开始时间'},
    endDate: { type: Types.Datetime, initial: true, index: true, width: 'short', note: '例如: 2014-07-15 / 9:00pm', label: '结束时间'},
    location: { type: String, initial: true, index: true, width: 'medium', note: '例如: 吉隆坡', label: '地点'},
    description: { type: Types.Html, wysiwyg: true, label:'描述'},

    maxRSVPs: { type: Number, default: 100, label:'最大席位'},
    totalRSVPs: { type: Number, noedit: true, label:'总席位'},
    legacy: { type: Boolean, noedit: true, collapse: true },
})

Exhib.defaultSort = '-startDate'
Exhib.defaultColumns = 'name, state|10%, startDate|20%, publishedDate|20%, location|15%'

Exhib.register()
