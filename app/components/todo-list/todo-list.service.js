(function(angular) {
    'use strict';

    angular.module('todoList').factory('todoListService', ['$http', '$q', 'API_URL_BASE', function ($http, $q, API_URL_BASE) {

        var mockTasks = [
            { id: 1, description: 'Recolección Juan Martínez', completed: false, dueDate: new moment('2016-06-15T21:28:42.606Z'), completedDate: undefined },
            { id: 2, description: 'Recolección Juan Martínez', completed: false, dueDate: new moment('2016-06-21T21:28:42.606Z'), completedDate: undefined },
            { id: 3, description: 'Recolección Juan Martínez', completed: false, dueDate: new moment('2016-06-22T21:28:42.606Z'), completedDate: undefined },
            { id: 4, description: 'Recolección Juan Martínez', completed: false, dueDate: new moment('2016-06-14T21:28:42.606Z'), completedDate: undefined },
            { id: 5, description: 'Recolección Juan Martínez', completed: false, dueDate: new moment('2016-06-23T21:28:42.606Z'), completedDate: undefined },
            { id: 1, description: 'Recolección Juan Martínez', completed: false, dueDate: new moment('2016-06-15T21:28:42.606Z'), completedDate: undefined },
            { id: 2, description: 'Recolección Juan Martínez', completed: false, dueDate: new moment('2016-06-21T21:28:42.606Z'), completedDate: undefined },
            { id: 3, description: 'Recolección Juan Martínez', completed: false, dueDate: new moment('2016-06-22T21:28:42.606Z'), completedDate: undefined },
            { id: 4, description: 'Recolección Juan Martínez', completed: false, dueDate: new moment('2016-06-14T21:28:42.606Z'), completedDate: undefined },
            { id: 5, description: 'Recolección Juan Martínez', completed: false, dueDate: new moment('2016-06-23T21:28:42.606Z'), completedDate: undefined }
        ];

        var tasks = [];

        function callTasks() {
            var tasksServiceURL = API_URL_BASE + '/bookings/in_the_future_by_courier?name=Marco';
            return $http.get(tasksServiceURL)
                .then(function(response) {
                    var data = response.data;
                    if (typeof data === 'object') {
                        if(data.bookings){
                            tasks = data.bookings;
                        }
                        return data;
                    } else {
                        return $q.reject(data);
                    }

                }, function(error){
                    return $q.reject(error.data);
                });
        }

        function getTasks() {
            return angular.copy(tasks);
        }

        function getMockTasks() {
            return angular.copy(mockTasks);
        }
        
        var service = {
            getTasks: getTasks,
            callTasks: callTasks,
            getMockTasks: getMockTasks
        };

        return service;

    }]);
})(window.angular);
