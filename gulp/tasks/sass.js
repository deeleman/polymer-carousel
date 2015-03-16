(function (module) {
    'use strict';

	module.exports = function (gulp, errorHandler, settings, gulpTaskManager) {
		var sass = require('gulp-sass');
		var autoprefixer = require('gulp-autoprefixer');
		var sourcemaps = require('gulp-sourcemaps');
		var config = settings.sass;

		gulp.task('sass:build', function () {
			return gulp.src(config.src)
				.pipe(sourcemaps.init())
				.pipe(sass(config.options))
				.on('error', errorHandler)
				.pipe(autoprefixer({
					cascade: false
				}))
				.pipe(sourcemaps.write())
				.pipe(gulp.dest(config.dest));
		});

		gulp.task('sass:dev', ['sass:build'], function () {
			return gulp.watch(config.src, ['sass:build'])
				.on('change', function (event) {
					console.log('File ' + event.path + ' was ' + event.type +
						', running build...');
				});
		});

        gulpTaskManager.subscribe('dev', 'sass:dev');
        gulpTaskManager.subscribe('build', 'sass:build');

	};
}(module));
