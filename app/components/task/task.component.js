(function(angular) {
    'use strict';

    function taskController(taskService, $routeParams, $sce, todoListService) {

        /**
         *
         * @type {taskController}
         */
        var ctrl = this;

        /**
         * 
         */
        ctrl.task = undefined;

        /**
         * 
         */
        ctrl.booking = undefined;

        ctrl.getTaskTitle = function () {
            return (ctrl.task)?  $sce.trustAsHtml(ctrl.task.getName() + "<br> De " + moment.unix(ctrl.task.getStartDate()).format('HH:MM') + " a " + moment.unix(ctrl.task.getEndDate()).format('HH:MM')) : "";

        };

        /**
         * Inits the controller
         */
        var init = function () {
            try {
                var taskId = $routeParams.taskId;
                ctrl.task = todoListService.getTaskById(taskId);
                if(ctrl.task) {
                    ctrl.booking = ctrl.task.getBooking();
                }                                
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
