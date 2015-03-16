(function (module) {
	'use strict';

	module.exports = function (gulp, errorHandler, settings, gulpTaskManager) {
		var vulcanize = require('gulp-vulcanize');
		var config = settings.vulcanize;

		gulp.task('vulcanize', ['dev'], function () {
			return gulp.src(config.src)
				.pipe(vulcanize(config.options))
				.pipe(gulp.dest(config.options.dest));
		});

		gulpTaskManager.subscribe('package', 'vulcanize');
	};

}(module));
