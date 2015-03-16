(function (module) {
	'use strict';

	module.exports = function (gulp, errorHandler, settings, gulpTaskManager) {
		var bower = require('gulp-bower');
		var config = settings.bower;

		gulp.task('bower', function () {
			return bower({ directory: config.dest })
				.on('error', errorHandler)
				.pipe(gulp.dest(config.dest));
		});

		gulp.task('bower:update', function () {
			return bower({
                    directory: config.dest,
					cmd: 'update'
				})
				.on('error', errorHandler)
				.pipe(gulp.dest('lib/'));
		});

		gulpTaskManager.subscribe('all', 'bower');
	};

}(module));
