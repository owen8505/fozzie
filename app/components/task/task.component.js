(function(angular) {
    'use strict';

    function taskController(taskService, $routeParams) {

        /**
         *
         * @type {taskController}
         */
        var ctrl = this;


        /**
         * Inits the controller
         */
        var init = function () {
            try {
                ctrl.taskId = $routeParams.taskId;
                console.log(ctrl.taskId);
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
