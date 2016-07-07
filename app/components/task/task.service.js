(function(angular) {
    'use strict';

    angular.module('task').factory('taskService', ['$http', '$q', 'API_URL_BASE', 'ORDER_STATUSES', function ($http, $q, API_URL_BASE, ORDER_STATUSES) {

        var _task = undefined;

        var transformToObject = function(booking, task){
            try{
                var booking = new Booking(booking.booking_id, booking.id, booking.customer_name, booking.customer_address, booking.customer_phone, booking.customer_city, booking.status_id, booking.total);
                var task = new Task(task.id, booking, task.name, new moment.unix(task.start_date), new moment.unix(task.end_date));
            } catch(error){
                console.log(error);
            }

            return task;
        };

        function callTask(bookingId, taskId) {
            var tasksServiceURL = API_URL_BASE + '/bookings/in_the_future_by_courier?name=Marco';
            return $http.get(tasksServiceURL)
                .then(function(response) {
                    var data = response.data;
                    if (typeof data === 'object') {
                        if(data.bookings){
                            _task = transformToObject(data.bookings[0], data.items[0]);
                        }
                        return data;
                    } else {
                        return $q.reject(data);
                    }

                }, function(error){
                    return $q.reject(error.data);
                });
        }

        function getTask() {
            return angular.copy(_task);
        }

        function updateTaskStatus(task, status) {

            var futureStatusOptions = ORDER_STATUSES[task.getBooking().getStatus()];

            if( futureStatusOptions.indexOf(status) != -1 ) {
                var tasksServiceURL = API_URL_BASE + '/bookings/in_the_future_by_courier?name=Marco';
                return $http.get(tasksServiceURL)
                    .then(function(response) {
                        var data = response.data;
                        if (typeof data === 'object') {
                            if(data.bookings){
                                _task = transformToObject(data.bookings[0], data.items[0]);
                                _task.getBooking().setStatus(status);
                            }
                            return data;
                        } else {
                            return $q.reject(data);
                        }

                    }, function(error){
                        return $q.reject(error.data);
                    });
            }

        }
        
        var service = {
            callTask: callTask,
            getTask: getTask,
            updateTaskStatus: updateTaskStatus
        };

        return service;

    }]);
})(window.angular);
