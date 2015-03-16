(function (module) {
	'use strict';

	module.exports = function (gulp, errorHandler, settings, gulpTaskManager) {
		var imagemin = require('gulp-imagemin');
		var pngquant = require('imagemin-pngquant');
		var config = settings.images;

		gulp.task('imagemin', function () {
			return gulp.src(config.src)
				.pipe(imagemin({
					progressive: true,
					svgoPlugins: [{
						removeViewBox: false
					}],
					use: [pngquant()]
				}))
				.pipe(gulp.dest(config.dest));
		});

		gulpTaskManager.subscribe('all', 'imagemin');
	};

}(module));
