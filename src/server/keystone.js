import keystone from 'keystone'
import config from '../core/config.js'
import fs from 'fs'
import path from 'path'

process.env.VUE_ENV = 'server'

keystone.init({

    'name': 'UCN-誉华会展',
    'env': 'development',
    'brand': 'UCN-Admin',

    'port': config.port,

    'favicon': 'public/favicon.ico',
    'less': 'public',
    'static': 'public',

    'views': 'templates/views',
    'view engine': 'jade',

    'auto update': true,
    'mongo': config.mongo.uriUser,
    'cloudinary config': config.cloudinary,

    'session': true,
    'auth': true,
    'user model': 'User',
    'cookie secret': config.secret,

    'ga property': process.env.GA_PROPERTY,
    'ga domain': process.env.GA_DOMAIN,

    'chartbeat property': process.env.CHARTBEAT_PROPERTY,
    'chartbeat domain': process.env.CHARTBEAT_DOMAIN

});

const imported = {
    Carousel: require('./models/IndexCarousel.js'),
    Slogan: require('./models/Slogan.js'),
    Footprint: require('./models/Footprint.js'),
    ExhibCard: require('./models/ExhibCard.js'),
    User: require('./models/User.js')
}

keystone.set('locals', {
    _: require('lodash'),
    env: keystone.get('env'),
    utils: keystone.utils,
    editable: keystone.content.editable,
    ga_property: keystone.get('ga property'),
    ga_domain: keystone.get('ga domain'),
    chartbeat_property: keystone.get('chartbeat property'),
    chartbeat_domain: keystone.get('chartbeat domain')
});

keystone.set('routes', require('./routes'));

keystone.set('nav', {
    '主页': ['carousel-images', 'slogans', 'exhib-cards', 'footprints'],
    // 'posts': ['posts', 'post-comments', 'post-categories'],
    '系统控制': ['users']
});

keystone.start()
