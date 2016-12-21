module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = require("keystone");

/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = require("lodash");

/***/ },
/* 2 */
/***/ function(module, exports) {

module.exports = require("moment");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _path = __webpack_require__(6);

var root = process.cwd();
var port = process.env.PORT || 5000;
var config = {

	// path
	path: {
		rootDir: root,
		srcDir: (0, _path.join)(root, './src'),
		distDir: (0, _path.join)(root, './dist'),
		publicDir: (0, _path.join)(root, './dist/public'),
		bundleFile: (0, _path.join)(root, './dist/server-bundle.js'),
		faviFile: (0, _path.join)(root, './dist/public/logo.png'),
		viewsDir: (0, _path.join)(root, './dist/views')
	},

	// server config
	port: port,
	host: process.env.WEBSITE_HOSTNAME || 'localhost:' + port + '/',

	// mongo settings
	mongo: {
		options: {
			user: 'ucn',
			pass: 'ucn'
		},
		uri: 'mongodb://127.0.0.1/UCN-Dev',
		dbName: 'UCN-Dev',
		seed: true,
		uriUser: 'mongodb://ucn-rw:ucn-rw@localhost:27017/ucn'
	},

	cloudinary: 'cloudinary://399194737659477:W0ReCPvrkeFoRvx3VlW28fX1u08@fancy-ucn',

	secret: '58813c20e6ae29b9f4c9cf7347143ee1c215009517d5e5b50714aae3e383e602326c5e9dc9bee8cb9e3cb11d0c78bc7b617b23da5dce5d9c34912864a58589f1'

};

exports.default = config;

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = require("fs");

/***/ },
/* 5 */
/***/ function(module, exports) {

module.exports = require("graphql");

/***/ },
/* 6 */
/***/ function(module, exports) {

module.exports = require("path");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var _keystone = __webpack_require__(0);

var _keystone2 = _interopRequireDefault(_keystone);

var _config = __webpack_require__(3);

var _config2 = _interopRequireDefault(_config);

var _fs = __webpack_require__(4);

var _fs2 = _interopRequireDefault(_fs);

var _path = __webpack_require__(6);

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

process.env.VUE_ENV = 'server';

_keystone2.default.init({

    'name': 'UCN-誉华会展',
    'env': 'development',
    'brand': 'UCN-Admin',

    'port': _config2.default.port,

    'favicon': 'public/favicon.ico',
    'less': 'public',
    'static': 'public',

    'views': 'templates/views',
    'view engine': 'jade',

    'auto update': true,
    'mongo': _config2.default.mongo.uriUser,
    'cloudinary config': _config2.default.cloudinary,

    'session': true,
    'auth': true,
    'user model': 'User',
    'cookie secret': _config2.default.secret,

    'ga property': process.env.GA_PROPERTY,
    'ga domain': process.env.GA_DOMAIN,

    'chartbeat property': process.env.CHARTBEAT_PROPERTY,
    'chartbeat domain': process.env.CHARTBEAT_DOMAIN

});

var imported = {
    Carousel: __webpack_require__(12),
    Slogan: __webpack_require__(13),
    Footprint: __webpack_require__(11),
    ExhibCard: __webpack_require__(10),
    User: __webpack_require__(14)
};

_keystone2.default.set('locals', {
    _: __webpack_require__(1),
    env: _keystone2.default.get('env'),
    utils: _keystone2.default.utils,
    editable: _keystone2.default.content.editable,
    ga_property: _keystone2.default.get('ga property'),
    ga_domain: _keystone2.default.get('ga domain'),
    chartbeat_property: _keystone2.default.get('chartbeat property'),
    chartbeat_domain: _keystone2.default.get('chartbeat domain')
});

_keystone2.default.set('routes', __webpack_require__(15));

_keystone2.default.set('nav', {
    '主页': ['carousel-images', 'slogans', 'exhib-cards', 'footprints'],
    // 'posts': ['posts', 'post-comments', 'post-categories'],
    '系统控制': ['users']
});

_keystone2.default.start();

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = __webpack_require__(5);

var _keystoneTypes = __webpack_require__(9);

var keystoneTypes = _interopRequireWildcard(_keystoneTypes);

var _keystone = __webpack_require__(0);

var _keystone2 = _interopRequireDefault(_keystone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var Carousel = _keystone2.default.list('Carousel-Image');
var Slogan = _keystone2.default.list('Slogan');
var ExhibCard = _keystone2.default.list('Exhib-Card');
var Footprint = _keystone2.default.list('Footprint');
var returnEmptyObj = function returnEmptyObj() {
    return {};
};

var CarouselImageType = new _graphql.GraphQLObjectType({
    name: 'CarouselImage',
    fields: function fields() {
        return {
            id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLID) },
            srcLocation: { type: _graphql.GraphQLString }
        };
    }
});

var SloganType = new _graphql.GraphQLObjectType({
    name: 'Slogan',
    fields: function fields() {
        return {
            id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLID) },
            content: { type: _graphql.GraphQLString }
        };
    }
});

var ExhibCardType = new _graphql.GraphQLObjectType({
    name: 'ExhibCard',
    fields: function fields() {
        return {
            id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLID) },
            name: { type: _graphql.GraphQLString },
            imageSrc: { type: _graphql.GraphQLString }
        };
    }
});

var FootprintType = new _graphql.GraphQLObjectType({
    name: 'Footprint',
    fields: function fields() {
        return {
            id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLID) },
            name: { type: _graphql.GraphQLString },
            longitude: { type: _graphql.GraphQLString },
            latitude: { type: _graphql.GraphQLString }
        };
    }
});

var IndexType = new _graphql.GraphQLObjectType({
    name: 'Index',
    fields: function fields() {
        return {
            carouselImages: {
                type: new _graphql.GraphQLList(CarouselImageType),
                resolve: function resolve(_, args) {
                    return Carousel.model.find().sort('+publishedAt').select('srcLocation').exec();
                }
            },
            slogan: {
                type: SloganType,
                resolve: function resolve(_, args) {
                    return Slogan.model.findOne().select('content').exec();
                }
            },
            exhibCards: {
                type: new _graphql.GraphQLList(ExhibCardType),
                resolve: function resolve(_, args) {
                    return ExhibCard.model.find().sort('+publishedAt').select('name imageSrc').exec();
                }
            },
            footprints: {
                type: new _graphql.GraphQLList(FootprintType),
                resolve: function resolve(_, args) {
                    return Footprint.model.find().sort('-publishedAt').select('name longitude latitude').exec();
                }
            }
        };
    }
});

var queryRootType = new _graphql.GraphQLObjectType({
    name: 'Query',
    fields: {
        index: {
            type: IndexType,
            resolve: function resolve(_, args) {
                return returnEmptyObj();
            }
        }
    }
});

exports.default = new _graphql.GraphQLSchema({
    query: queryRootType
});

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.email = exports.markdown = exports.link = exports.datetime = exports.date = exports.location = exports.cloudinaryImage = exports.name = undefined;

var _graphql = __webpack_require__(5);

var name = exports.name = new _graphql.GraphQLObjectType({
	name: 'KeystoneName',
	fields: {
		first: {
			type: _graphql.GraphQLString
		},
		last: {
			type: _graphql.GraphQLString
		},
		full: {
			type: _graphql.GraphQLString
		}
	}
});

var cloudinaryImage = exports.cloudinaryImage = new _graphql.GraphQLObjectType({
	name: 'KeystoneCloudinaryImage',
	fields: {
		public_id: {
			type: _graphql.GraphQLString
		},
		version: {
			type: _graphql.GraphQLInt
		},
		signature: {
			type: _graphql.GraphQLString
		},
		format: {
			type: _graphql.GraphQLString
		},
		resource_type: {
			type: _graphql.GraphQLString
		},
		url: {
			type: _graphql.GraphQLString
		},
		width: {
			type: _graphql.GraphQLInt
		},
		height: {
			type: _graphql.GraphQLInt
		},
		secure_url: {
			type: _graphql.GraphQLString
		}
	}
});

var location = exports.location = new _graphql.GraphQLObjectType({
	name: 'KeystoneLocation',
	fields: {
		name: {
			type: _graphql.GraphQLString
		},
		number: {
			type: _graphql.GraphQLInt
		},
		street1: {
			type: _graphql.GraphQLString
		},
		street2: {
			type: _graphql.GraphQLString
		},
		suburb: {
			type: _graphql.GraphQLString
		},
		state: {
			type: _graphql.GraphQLString
		},
		postcode: {
			type: _graphql.GraphQLInt
		},
		country: {
			type: _graphql.GraphQLInt
		},
		geo: {
			type: new _graphql.GraphQLList(_graphql.GraphQLString),
			description: 'An array [longitude, latitude]'
		}
	}
});

var date = exports.date = function date(field) {
	return {
		type: _graphql.GraphQLString,
		args: {
			format: {
				type: _graphql.GraphQLString,
				description: 'A formated time using Moment.js tokens ' + 'http://momentjs.com/docs/#/displaying/format/'
			}
		},
		resolve: function resolve(source, args) {
			if (args.format) {
				return field.format(source, args.format);
			}
			return source.get(field.path);
		}
	};
};

var datetime = exports.datetime = function datetime(field) {
	return {
		type: _graphql.GraphQLString,
		args: {
			format: {
				type: _graphql.GraphQLString,
				description: 'A formated datetime using Moment.js tokens ' + 'http://momentjs.com/docs/#/displaying/format/'
			}
		},
		resolve: function resolve(source, args) {
			if (args.format) {
				return field.format(source, args.format);
			}
			return source.get(field.path);
		}
	};
};

var link = exports.link = new _graphql.GraphQLObjectType({
	name: 'KeystoneLink',
	fields: {
		raw: {
			type: _graphql.GraphQLString,
			description: 'The raw unformmated URL'
		},
		format: {
			type: _graphql.GraphQLString,
			description: 'The URL after being passed through the `format Function` option'
		}
	}
});

var markdown = exports.markdown = new _graphql.GraphQLObjectType({
	name: 'KeystoneMarkdown',
	fields: {
		md: {
			type: _graphql.GraphQLString,
			description: 'source markdown text'
		},
		html: {
			type: _graphql.GraphQLString,
			description: 'generated html code'
		}
	}
});

var email = exports.email = new _graphql.GraphQLObjectType({
	name: 'KeystoneEmail',
	fields: {
		email: {
			type: _graphql.GraphQLString
		},
		gravatarUrl: {
			type: _graphql.GraphQLString,
			args: {
				size: {
					type: _graphql.GraphQLInt,
					defaultValue: 80,
					description: 'Size of images ranging from 1 to 2048 pixels, square'
				},
				defaultImage: {
					type: _graphql.GraphQLString,
					defaultValue: 'identicon',
					description: 'default image url encoded href or one of the built ' + 'in options: 404, mm, identicon, monsterid, wavatar, retro, blank'
				},
				rating: {
					type: _graphql.GraphQLString,
					defaultValue: 'g',
					description: 'the rating of the image, either rating, g, pg, r or x'
				}
			},
			description: 'Protocol-less Gravatar image request URL',
			resolve: function resolve(source, args) {
				return source.gravatarUrl(args.size, args.defaultImage, args.rating);
			}
		}
	}
});

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _keystone = __webpack_require__(0);

var _keystone2 = _interopRequireDefault(_keystone);

var _moment = __webpack_require__(2);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Types = _keystone2.default.Field.Types;

/**
 * ExhibCard Model
 * =============
 */

var ExhibCard = new _keystone2.default.List('Exhib-Card', {
    track: true,
    autokey: { path: 'key', from: 'name', unique: true }
});

ExhibCard.add({
    name: { type: String, required: true, index: true, initial: true, default: '**展会', label: '展会名称', note: '例如: 某某展会' },
    imageSrc: { type: String, required: true, note: '图片引用地址, 例如: http://fancy-oss.oss-cn-shenzhen.aliyuncs.com/404-bg.jpg', label: '展会封面', default: 'http://' },
    publishedAt: { type: Types.Datetime, index: true, label: '发布日期', required: true, default: _moment2.default.now() }
});

ExhibCard.defaultSort = '+publishedAt';
ExhibCard.defaultColumns = 'name, imageSrc, publishedAt';
ExhibCard.register();

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _keystone = __webpack_require__(0);

var _keystone2 = _interopRequireDefault(_keystone);

var _moment = __webpack_require__(2);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Types = _keystone2.default.Field.Types;

/**
 * Footprint Model
 * =============
 */

var Footprint = new _keystone2.default.List('Footprint', {
    track: true,
    autokey: { path: 'key', from: 'name', unique: true }
});

Footprint.add({
    name: { type: String, required: true, label: '城市名称', note: '例如: 厦门' },
    longitude: { type: String, required: true, index: true, width: 'medium', default: '0E', label: '经度', note: '例如: 23.45833E(东经), 23.45833W(西经)' },
    latitude: { type: String, required: true, index: true, width: 'medium', default: '0N', label: '纬度', note: '例如: 30.000N(北纬), 30.000S(南纬)' },
    publishedAt: { type: Types.Datetime, index: true, label: '发布日期', required: true, default: _moment2.default.now() }
});

Footprint.defaultSort = '-publishedAt';
Footprint.defaultColumns = 'name, longitude, latitude, publishedAt';
Footprint.schema.pre('save', function (next) {
    if (/E|W/.test(this.longitude) && /S|N/.test(this.latitude)) {
        next();
    }
});
Footprint.register();

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _keystone = __webpack_require__(0);

var _keystone2 = _interopRequireDefault(_keystone);

var _moment = __webpack_require__(2);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Types = _keystone2.default.Field.Types;

/**
 * Carousel-Images Model
 * =============
 */

var Carousel = new _keystone2.default.List('Carousel-Image', {
    track: true,
    autokey: { path: 'key', from: 'mark', unique: true }
});

Carousel.add({
    mark: { type: String, required: true, index: true, initial: true, default: '16-11-26-0', label: '图片标记', note: '例如: year-month-day-no.' },
    location: { type: String, initial: true, index: true, width: 'medium', note: '例如: 吉隆坡', label: '拍摄地点', default: '厦门' },
    publishedAt: { type: Types.Datetime, index: true, label: '发布日期', required: true, default: _moment2.default.now() },
    srcLocation: { type: String, required: true, note: '图片引用地址, 例如: http://fancy-oss.oss-cn-shenzhen.aliyuncs.com/404-bg.jpg', label: '图片地址', default: 'http://' },
    legacy: { type: Boolean, noedit: true, collapse: true }
});

Carousel.defaultSort = '-publishedAt';
Carousel.defaultColumns = 'mark, location, publishedAt';
Carousel.register();

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _keystone = __webpack_require__(0);

var _keystone2 = _interopRequireDefault(_keystone);

var _moment = __webpack_require__(2);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Types = _keystone2.default.Field.Types;

/**
 * Slogan Model
 * =============
 */

var Slogan = new _keystone2.default.List('Slogan', {
    track: true,
    singular: 'Slogan',
    plural: 'Slogan',
    autokey: { path: 'key', from: 'content', unique: true },
    nocreate: true,
    nodelete: true
});

Slogan.add({
    name: { type: String, noedit: true },
    content: { type: String, initial: true, index: true, width: 'large', label: '标语内容', default: '...' },
    publishedAt: { type: Types.Datetime, index: true, label: '发布日期', required: true, default: _moment2.default.now() }
});

Slogan.defaultSort = '-publishedAt';
Slogan.defaultColumns = 'content|55%, publishedAt';
Slogan.register();

Slogan.model.find().remove(function (err) {
    if (!err) {
        var indexSlogan = Slogan.model({
            name: 'Automatically create one single slogan for index page when then system reboot and editable down below',
            content: '2017年阿尔及利亚国际建筑建材展览会即将召开'
        });

        indexSlogan.save();
    } else {
        console.log(err);
    }
});

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var keystone = __webpack_require__(0);
var Types = keystone.Field.Types;

var User = new keystone.List('User', {
	// nodelete prevents people deleting the demo admin user
	nodelete: true
});

User.add({
	name: { type: Types.Name, required: true, index: true },
	email: { type: Types.Email, initial: true, required: true, index: true, unique: true },
	phone: { type: String, width: 'short' },
	photo: { type: Types.CloudinaryImage, collapse: true },
	password: { type: Types.Password, initial: true, required: false }
}, 'Permissions', {
	isProtected: { type: Boolean, noedit: true, hidden: true }
});

// Provide access to Keystone
User.schema.virtual('canAccessKeystone').get(function () {
	return true;
});

User.relationship({ ref: 'Post', path: 'posts', refPath: 'author' });

User.schema.methods.wasActive = function () {
	this.lastActiveOn = new Date();
	return this;
};

/**
 * DEMO USER PROTECTION
 * The following code prevents anyone updating the default admin user
 * and breaking access to the demo
 */

function protect(path) {
	var user = this;
	User.schema.path(path).set(function (value) {
		return user.isProtected ? user.get(path) : value;
	});
}

['name.first', 'name.last', 'email'].forEach(protect);

User.schema.path('password').set(function (value) {
	return this.isProtected ? '$2a$10$b4vkksMQaQwKKlSQSfxRwO/9JI7Fclw6SKMv92qfaNJB9PlclaONK' : value;
});

/**
 * END DEMO USER PROTECTION
 */

User.track = true;
User.defaultColumns = 'name, email, phone, photo';
User.register();

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var _regenerator = __webpack_require__(19);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(17);

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(18);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _keystone = __webpack_require__(0);

var _keystone2 = _interopRequireDefault(_keystone);

var _fs = __webpack_require__(4);

var _fs2 = _interopRequireDefault(_fs);

var _expressGraphql = __webpack_require__(20);

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _basicSchema = __webpack_require__(8);

var _basicSchema2 = _interopRequireDefault(_basicSchema);

var _lruCache = __webpack_require__(21);

var _lruCache2 = _interopRequireDefault(_lruCache);

var _serializeJavascript = __webpack_require__(23);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _prettyError = __webpack_require__(22);

var _prettyError2 = _interopRequireDefault(_prettyError);

var _vueServerRenderer = __webpack_require__(24);

var _config = __webpack_require__(3);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var importRoutes = _keystone2.default.importer(__dirname);
var bundlePath = _config2.default.path.bundleFile;
var renderer = (0, _vueServerRenderer.createBundleRenderer)(_fs2.default.readFileSync(bundlePath, 'utf-8'), {
    cache: (0, _lruCache2.default)({ max: 10000 })
});
var assets = __webpack_require__(16);
var pe = new _prettyError2.default();

pe.skipNodeFiles();
pe.skipPackage('express');

exports = module.exports = function (app) {
    app.use('/api/graphql', (0, _expressGraphql2.default)({ schema: _basicSchema2.default, graphiql: true }));

    app.get('*', function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(req, res, next) {
            var _this = this;

            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.prev = 0;
                            return _context2.delegateYield(_regenerator2.default.mark(function _callee() {
                                var statusCode, data, context;
                                return _regenerator2.default.wrap(function _callee$(_context) {
                                    while (1) {
                                        switch (_context.prev = _context.next) {
                                            case 0:
                                                statusCode = 200;
                                                data = {
                                                    title: 'Vuepack-SSR',
                                                    // description: '',
                                                    // css: '',
                                                    body: '',
                                                    entry: assets.main.js
                                                };
                                                context = { url: req.url };
                                                _context.next = 5;
                                                return new _promise2.default(function (resolve, reject) {
                                                    renderer.renderToString(context, function (err, html) {
                                                        if (err) {
                                                            reject(err);
                                                        }
                                                        resolve(html);
                                                    });
                                                });

                                            case 5:
                                                data.body = _context.sent;

                                                data.initialState = (0, _serializeJavascript2.default)(context.initialState, { isJSON: true });
                                                res.status(statusCode);
                                                res.render('index', data);

                                            case 9:
                                            case 'end':
                                                return _context.stop();
                                        }
                                    }
                                }, _callee, _this);
                            })(), 't0', 2);

                        case 2:
                            _context2.next = 7;
                            break;

                        case 4:
                            _context2.prev = 4;
                            _context2.t1 = _context2['catch'](0);

                            next(_context2.t1);

                        case 7:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this, [[0, 4]]);
        }));

        return function (_x, _x2, _x3) {
            return _ref.apply(this, arguments);
        };
    }());

    app.use(function (err, req, res, next) {
        console.log(pe.render(err));
        var statusCode = err.status || 500;
        res.status(statusCode);
        res.render('error', {
            title: 'Error',
            message: err.message,
            stack:  false ? '' : err.stack
        });
        next();
    });
};

/***/ },
/* 16 */
/***/ function(module, exports) {

module.exports = require("./assets");

/***/ },
/* 17 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/core-js/promise");

/***/ },
/* 18 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ },
/* 19 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ },
/* 20 */
/***/ function(module, exports) {

module.exports = require("express-graphql");

/***/ },
/* 21 */
/***/ function(module, exports) {

module.exports = require("lru-cache");

/***/ },
/* 22 */
/***/ function(module, exports) {

module.exports = require("pretty-error");

/***/ },
/* 23 */
/***/ function(module, exports) {

module.exports = require("serialize-javascript");

/***/ },
/* 24 */
/***/ function(module, exports) {

module.exports = require("vue-server-renderer");

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }
/******/ ]);
//# sourceMappingURL=server.js.map