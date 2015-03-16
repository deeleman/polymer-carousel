(function (module) {
	'use strict';

	module.exports = function (gulp, errorHandler, settings, gulpTaskManager) {
		var concat = require('gulp-concat');
		var uglify = require('gulp-uglify');
		var sourcemaps = require('gulp-sourcemaps');
		var config = settings.js;

		gulp.task('js:build', function () {
			return gulp.src(config.src)
				.on('error', errorHandler)
				.pipe(uglify())
				.pipe(gulp.dest(config.dest));
		});

		gulp.task('js:dev', ['js:build'], function () {
			return gulp.watch(config.src, ['js:build'])
				.on('change', function (event) {
					console.log('File ' + event.path + ' was ' + event.type +
						', running build...');
				});
		});

		gulpTaskManager.subscribe('dev', 'js:dev');
		gulpTaskManager.subscribe('build', 'js:build');
	};

}(module));
