(function(angular) {
    'use strict';

    angular.module('todoList').factory('todoListService', ['$http', function ($http) {

        var tasks = [
            { id: 1, booking: { id: 'NTAH-150616' }, description: 'Recolección Juan Martínez', completed: false, dueDate: new moment('2016-06-22T21:28:42.606Z'), completedDate: undefined, order_info: {} },
            { id: 2, booking: { id: 'NTAH-150616' }, description: 'Recolección Juan Martínez', completed: false, dueDate: new moment('2016-06-21T21:28:42.606Z'), completedDate: undefined, order_info: {} },
            { id: 3, booking: { id: 'NTAH-150616' }, description: 'Recolección Juan Martínez', completed: false, dueDate: new moment('2016-06-21T21:28:42.606Z'), completedDate: undefined, order_info: {} },
            { id: 4, booking: { id: 'NTAH-150616' }, description: 'Recolección Juan Martínez', completed: false, dueDate: new moment('2016-06-22T21:28:42.606Z'), completedDate: undefined, order_info: {} }
        ];

        function getTaskById(taskId) {
            for(var taskIndex=0; taskIndex<tasks.length; taskIndex++) {
                var task = tasks[taskIndex];
                if (task.id == taskId) {
                    return task;
                }
            }
            return undefined;
        };

        function getTasks() {
            return angular.copy(tasks);
        }

        var service = {
            getTasks: getTasks,
            getTaskById: getTaskById
        };

        return service;

    }]);
})(window.angular);
