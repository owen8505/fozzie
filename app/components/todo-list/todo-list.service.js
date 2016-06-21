(function(angular) {
    'use strict';

    angular.module('todoList').factory('todoListService', ['$http', function ($http) {

        var tasks = [
            { id: 1, description: 'Recolección Juan Martínez', completed: false, dueDate: new moment('2016-06-15T21:28:42.606Z'), completedDate: undefined, order_info: {} },
            { id: 1, description: 'Recolección Juan Martínez', completed: false, dueDate: new moment('2016-06-21T21:28:42.606Z'), completedDate: undefined, order_info: {} },
            { id: 1, description: 'Recolección Juan Martínez', completed: false, dueDate: new moment('2016-06-22T21:28:42.606Z'), completedDate: undefined, order_info: {} },
            { id: 1, description: 'Recolección Juan Martínez', completed: false, dueDate: new moment('2016-06-14T21:28:42.606Z'), completedDate: undefined, order_info: {} },
            { id: 1, description: 'Recolección Juan Martínez', completed: false, dueDate: new moment('2016-06-23T21:28:42.606Z'), completedDate: undefined, order_info: {} }
        ];

        function getTasks() {
            return tasks;
        }
        
        var service = {
            getTasks: getTasks
        };

        return service;

    }]);
})(window.angular);
