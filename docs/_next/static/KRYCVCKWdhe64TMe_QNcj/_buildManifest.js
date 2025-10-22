self.__BUILD_MANIFEST = {
	'/': ['static/chunks/fed508af610344f6.js'],
	'/404': ['static/chunks/e30607c063cc709a.js'],
	'/500': ['static/chunks/93c35fa501f0dbec.js'],
	'/_error': ['static/chunks/eb0aeb3d82c7b2b5.js'],
	'/posts': ['static/chunks/9b25598793cce182.js'],
	'/posts/[...id]': ['static/chunks/8d476aad1e90e57e.js'],
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
