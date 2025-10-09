self.__BUILD_MANIFEST = {
	'/': ['./static/chunks/de9ba05d656c54d4.js'],
	'/404': ['./static/chunks/04333c4847c33594.js'],
	'/500': ['./static/chunks/862bed21a447737b.js'],
	'/_error': ['./static/chunks/dab2c1340bfd9e66.js'],
	'/posts': ['./static/chunks/ac075dd92ab6abd1.js'],
	'/posts/[...id]': ['./static/chunks/586fffdecdf3443f.js'],
	__rewrites: {
		afterFiles: [],
		beforeFiles: [],
		fallback: [],
	},
	sortedPages: [
		'/',
		'/404',
		'/500',
		'/_app',
		'/_error',
		'/posts',
		'/posts/[...id]',
	],
};
self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
