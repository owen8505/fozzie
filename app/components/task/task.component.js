(function(angular) {
    'use strict';

    function taskController(taskService, $routeParams, todoListService) {

        /**
         *
         * @type {taskController}
         */
        var ctrl = this;

        ctrl.task = undefined;

        /**
         * Inits the controller
         */
        var init = function () {
            try {
                var taskId = $routeParams.taskId;
                ctrl.task = todoListService.getTaskById(taskId);                
            } catch (e) {
                console.log(e);
            }
        };

        init();
    }

    angular
        .module('task')
        .component('task', {
            templateUrl: 'components/task/task.template.html',
            controller: taskController,
            bindings: {

            }
        });

})(window.angular);
