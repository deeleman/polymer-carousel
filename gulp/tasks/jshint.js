(function (module) {
    'use strict';

	module.exports = function (gulp, errorHandler, settings, gulpTaskManager) {
		var jshint = require('gulp-jshint');
		var config = settings;
		var reporter = config.jshint.stylishReporter ? 'jshint-stylish' : 'default';

		gulp.task('jshint', function () {
			var stream = gulp.src(config.js.src)
				.pipe(jshint())
                .on('error', errorHandler)
				.pipe(jshint.reporter(reporter));

		     if(config.jshint.stopOnError) {
                 return stream.pipe(jshint.reporter('fail'));
             }

             return stream;
        });

        gulpTaskManager.subscribe('all', 'jshint');
	};

}(module));
