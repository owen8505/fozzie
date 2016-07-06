(function(angular) {
    'use strict';

    angular.module('task').factory('taskService', ['$http', '$q', 'API_URL_BASE', function ($http, $q, API_URL_BASE) {

        var task = undefined;

        var transformToObject = function(booking, task){
            try{
                var _booking = new Booking(booking.booking_id, booking.id, booking.customer_name, booking.customer_address, booking.customer_phone, booking.customer_city, booking.status, booking.total);
                var _task = new Task(task.id, booking, task.status_id, task.name, new moment(task.start_date), new moment(task.end_date));
            } catch(error){
                console.log(error);
            }

            return _task;
        };

        function callTask(bookingId, taskId) {
            var tasksServiceURL = API_URL_BASE + '/bookings/in_the_future_by_courier?name=Marco';
            return $http.get(tasksServiceURL)
                .then(function(response) {
                    var data = response.data;
                    if (typeof data === 'object') {
                        if(data.bookings){
                            task = transformToObject(data.bookings[0], data.items[0]);
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
            return angular.copy(task);
        }
        
        var service = {
            callTask: callTask,
            getTask: getTask
        };

        return service;

    }]);
})(window.angular);
