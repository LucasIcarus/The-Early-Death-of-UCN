import { join } from 'path'

const root = process.cwd()
const port = process.env.PORT || 5000
const config = {

	// path
	path: {
		rootDir: root,
		srcDir: join(root, './src'),
		distDir: join(root, './dist'),
		publicDir: join(root, './dist/public'),
		bundleFile: join(root, './dist/server-bundle.js'),
		faviFile: join(root, './dist/public/logo.png'),
		viewsDir: join(root, './dist/views')
	},

	// server config
	port: port,
	host: process.env.WEBSITE_HOSTNAME || `localhost:${port}/`,

	// mongo settings
	mongo: {
		options: {
			user: 'ucn',
			pass: 'ucn',
		},
		uri: 'mongodb://127.0.0.1/UCN-Dev',
		dbName: 'UCN-Dev',
		seed: true,
		uriUser: 'mongodb://ucn-rw:ucn-rw@localhost:27017/ucn',
	},

	cloudinary: 'cloudinary://399194737659477:W0ReCPvrkeFoRvx3VlW28fX1u08@fancy-ucn',

	secret: '58813c20e6ae29b9f4c9cf7347143ee1c215009517d5e5b50714aae3e383e602326c5e9dc9bee8cb9e3cb11d0c78bc7b617b23da5dce5d9c34912864a58589f1',


}

export default config
