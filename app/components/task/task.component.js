(function(angular) {
    'use strict';

    function taskController(taskService, $routeParams) {

        /**
         *
         * @type {taskController}
         */
        var ctrl = this;

        var _task = undefined;

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
