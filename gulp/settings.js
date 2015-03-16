(function (module) {
	'use strict';

	module.exports = {
		js: {
            src: {
				vendor: [],
				component: './src/js/*.js'
			},
            filename: 'main.js',
			dest: './component/js'
		},
		jshint: {
			lookup: true,
			stylishReporter: true,
			stopOnError: false
		},
		sass: {
			src: ['./src/sass/*.scss', './src/sass/**/*.scss'],
            filename: 'polymer_carousel.css',
			dest: './component/css',
			options: {
				outputStyle: 'compressed', // 'nested' || 'compressed'
				sourceComments: false
			}
		},
		images: {
			src: './src/images/*',
			dest: './component/images',
		}
	};

}(module));
