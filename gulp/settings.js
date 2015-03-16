(function (module) {
	'use strict';

	var buildPath = './components';

	module.exports = {
		js: {
            src: './src/**/*.js',
			dest: buildPath
		},
		jshint: {
			lookup: true,
			stylishReporter: true,
			stopOnError: false
		},
		sass: {
			src: './src/**/*.scss',
			dest: buildPath,
			options: {
				outputStyle: 'compressed',
				sourceComments: false
			}
		},
		html: {
			src: './src/**/*.html',
			dest: buildPath
		},
		images: {
			src: './src/images/*',
			dest: './components/images',
		},
		bower: {
			dest: buildPath
		},
		vulcanize: {
			src: './components/carousel-slideshow/carousel-slideshow.html',
			options: {
				dest: buildPath + '/packaged',
				inline: true,
				strip: false
			}
		}
	};

}(module));
