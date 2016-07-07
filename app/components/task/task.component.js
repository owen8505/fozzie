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
         * @type {undefined}
         * @private
         */
        var _task = undefined;

        ctrl.getTaskTitle = function () {
            return (_task)?  $sce.trustAsHtml(_task.getName() + "<br> De " + _task.getStartDate().format('HH:MM') + " a " + _task.getEndDate().format('HH:MM')) : "";
        };

        /**
         *
         */
        var callTask = function(bookingId, taskId) {
            taskService.callTask()
                .then(function(data) {
                    if(data.bookings){
                        _task = taskService.getTask();
                    }
                }, function(error) {
                    console.log(error);
                });
        };

        /**
         *
         */
        ctrl.getTask = function() {
            return _task;
        };

        /**
         *
         */
        ctrl.startTask = function() {
            taskService.updateTaskStatus(_task, 'RECOL')
                .then(function(data){
                    if(data.bookings){
                        _task = taskService.getTask();
                        console.log(_task.toString());
                    }
                }, function(error) {
                    console.log(error);
                });
        };

        /**
         *
         */
        this.$onInit = function() {
            callTask($routeParams.bookingId, $routeParams.taskId);
        }
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
