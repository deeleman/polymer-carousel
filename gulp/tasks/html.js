(function (module) {
	'use strict';

	module.exports = function (gulp, errorHandler, settings, gulpTaskManager) {
		var config = settings.html;

		gulp.task('html:build', function () {
			return gulp.src(config.src)
				.on('error', errorHandler)
				.pipe(gulp.dest(config.dest));
		});

		gulp.task('html:dev', ['html:build'], function () {
			return gulp.watch(config.src, ['html:build'])
				.on('change', function (event) {
					console.log('File ' + event.path + ' was ' + event.type +
						', running build...');
				});
		});

		gulpTaskManager.subscribe('dev', 'html:dev');
		gulpTaskManager.subscribe('build', 'html:build');
	};

}(module));
