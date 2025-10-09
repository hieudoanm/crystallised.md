self.__BUILD_MANIFEST = {
	'/': ['./static/chunks/0a2c983ae38e4d36.js'],
	'/404': ['./static/chunks/ddd6d109f1edf31c.js'],
	'/500': ['./static/chunks/9d44f07f28885b21.js'],
	'/_error': ['./static/chunks/fdd3850b51a4d20a.js'],
	'/posts': ['./static/chunks/3afd0f6b9b063932.js'],
	'/posts/[...id]': ['./static/chunks/d81ba620856e1b8d.js'],
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
