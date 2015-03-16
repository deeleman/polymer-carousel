(function (module) {
    'use strict';

    var GulpTaskManager = function () {
		var tasks = {
			all: []
		};
		return {
			subscribe: function (taskGroup, name) {
				tasks[taskGroup] = tasks[taskGroup] || [];
				tasks[taskGroup].push(name);
			},
			getTasks: function (taskGroup) {
				return tasks.all.concat(tasks[taskGroup]);
			},
			initialize: function (gulp) {
				var self = this;
                for (var taskGroupName in tasks) {
					if (tasks.hasOwnProperty(taskGroupName)) {
                        gulp.task(taskGroupName, self.getTasks(taskGroupName));
					}
				}
			}
		};
	};

    var gulpTaskManager = new GulpTaskManager();

	module.exports = gulpTaskManager;

}(module));
