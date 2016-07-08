(function(angular) {
    'use strict';

    angular.module('todoList').factory('todoListService', ['$http', '$q', 'API_URL_BASE', function ($http, $q, API_URL_BASE) {

        var tasks = [];

        var transformToObject = function(bookings, tasks){
            var list = [];

            try{
                for(var i=0; i<tasks.length; i++) {
                    var task = tasks[i];

                    var booking = undefined;
                    for(var j=0; j<bookings.length; j++){
                        if(task.booking_uid == bookings[j].id){
                            bookings[i].fields.comentario = {'val': 'test'};
                            bookings[i].fields.prov2 = {'val': 'test'};
                            bookings[i].fields.info_cli = {'val': 'test'};
                            bookings[i].fields.info_notas = {'val': 'test'};
                            booking = new Booking(bookings[i].booking_id, bookings[i].id, bookings[i].customer_name, bookings[i].customer_address, bookings[i].fields.interior.val, bookings[i].fields.entrecalles.val, bookings[i].fields.comentario.val, bookings[i].fields.portero.val, bookings[i].customer_phone, bookings[i].customer_city, bookings[i].fields.prov.val, bookings[i].fields.prov2.val, bookings[i].fields.servicios.val, bookings[i].fields.especificaciones.val, bookings[i].fields.info_cli.val, bookings[i].fields.info_notas.val, bookings[i].status_id, bookings[i].fields.formapago.val, bookings[i].total);
                            break;
                        }
                    }

                    list.push(new Task(task.id, booking, task.name, new moment.unix(task.start_date), new moment.unix(task.end_date)));

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
            callTasks: callTasks
        };

        return service;

    }]);
})(window.angular);
