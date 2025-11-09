self.__BUILD_MANIFEST = {
	'/': ['static/chunks/cc9a65648e56206d.js'],
	'/404': ['static/chunks/7110c50bb0c1ba1a.js'],
	'/500': ['static/chunks/7bc4902d9a0effef.js'],
	'/_error': ['static/chunks/e8ead21942d4ea5c.js'],
	'/posts': ['static/chunks/06346167ca60c65e.js'],
	'/posts/[...id]': ['static/chunks/510a71598fb7482e.js'],
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
