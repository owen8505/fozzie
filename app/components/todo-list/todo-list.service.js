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

        function getTaskById(taskId) {
            for(var taskIndex=0; taskIndex<tasks.length; taskIndex++) {
                var task = tasks[taskIndex];
                if (task.getId() == taskId) {
                    return task;
                }
            }
            return undefined;
        }

        var tasks = [];

        var transformToObject = function(bookings, tasks){
            var list = [];

            try{
                for(var i=0; i<tasks.length; i++) {
                    var task = tasks[i];

                    var booking = undefined;
                    for(var j=0; j<bookings.length; j++){
                        if(task.booking_uid == bookings[j].id){
                            booking = new Booking(bookings[i].booking_id, bookings[i].id, bookings[i].customer_name, bookings[i].customer_address, bookings[i].customer_phone, bookings[i].customer_city, bookings[i].status, bookings[i].total);
                            break;
                        }
                    }

                    list.push(new Task(task.id, booking, task.status_id, task.name, new moment.unix(task.start_date), new moment.unix(task.end_date)));

                }
            } catch(error){
                console.log(error);
            }

            return list;
        };

        function callTasks() {
            var tasksServiceURL = API_URL_BASE + '/bookings/in_the_future_by_courier?name=Marco';
            return $http.get(tasksServiceURL)
                .then(function(response) {
                    var data = response.data;
                    if (typeof data === 'object') {
                        if(data.bookings){
                            tasks = transformToObject(data.bookings, data.items);
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

        var service = {
            getTasks: getTasks,
            callTasks: callTasks,
            getTaskById: getTaskById
        };

        return service;

    }]);
})(window.angular);
