(function () {
	'use strict';

	var gulp = require('gulp');
	var settings = require('./gulp/settings');
	var errorHandler = require('./gulp/utils/errorHandler');
	var gulpTaskManager = require('./gulp/utils/gulpTaskManager');
	var fs = require('fs');

	fs.readdirSync(__dirname + '/gulp/tasks').forEach(function (task) {
		require('./gulp/tasks/' + task)(gulp, errorHandler, settings, gulpTaskManager);
	});

	gulpTaskManager.initialize(gulp);

}());
