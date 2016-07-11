(function(angular) {
    'use strict';

    function taskController(taskService, $routeParams, $sce, TASK_VIEW_DEFINITION) {

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
            return (_task)?  $sce.trustAsHtml(_task.getName() + "<br> De " + _task.getStartDate().format('HH:mm') + " a " + _task.getEndDate().format('HH:mm')) : "";
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
            var futureStatus = 'RECOL';
            if(taskService.validateStatusChange(_task, futureStatus)){
                taskService.updateTaskStatus(_task, futureStatus)
                    .then(function(data){
                        if(data.bookings){
                            _task = taskService.getTask();
                        }
                    }, function(error) {
                        console.log(error);
                    });
            }

        };

        /**
         *
         */
        ctrl.endTask = function() {
            var futureStatus = 'CO12';
            if(taskService.validateStatusChange(_task, futureStatus)){
                taskService.updateTaskStatus(_task, futureStatus)
                    .then(function(data){
                        if(data.bookings){
                            _task = taskService.getTask();
                        }
                    }, function(error) {
                        console.log(error);
                    });
            }

        };

        /**
         *
         */
        ctrl.getTaskView = function() {

            var taskView = "";
            if(_task){
                var viewElements = TASK_VIEW_DEFINITION[_task.getCode()];

                taskView += '<caption>Datos de la orden</caption>';

                if ( viewElements.indexOf('order_number') != -1 ){
                    taskView += '<tr><td class="order-number">' + _task.getBooking().getOrderNumber() + '</td></tr>';
                }

                if ( viewElements.indexOf('customer_name') != -1 ){
                    taskView += '<tr><td>' + _task.getBooking().getCustomerName() + '</td></tr>';
                }

                if ( viewElements.indexOf('customer_address') != -1 ){
                    taskView += '<tr><td>' + _task.getBooking().getCustomerAddress() + '</td></tr>';
                    taskView += '<tr><td>' + _task.getBooking().getCustomerInterior() + '</td></tr>';
                    taskView += '<tr><td>' + _task.getBooking().getCustomerEntreCalles() + '</td></tr>';
                    taskView += '<tr><td>' + _task.getBooking().getCustomerCity() + '</td></tr>';
                    taskView += '<tr><td>' + _task.getBooking().getCustomerComentario() + '</td></tr>';

                    if(_task.getBooking().getCustomerPortero()) {
                        var portero = _task.getBooking().getCustomerPortero();
                        if (portero.substr(0, 2).toLowerCase() == 'sí') {
                            taskView += '<tr><td>' + _task.getBooking().getCustomerPortero() + '</td></tr>';
                        }
                    }

                    taskView += '<tr><td><a href="tel:' + _task.getBooking().getCustomerPhone() + '">' + _task.getBooking().getCustomerPhone() + '</a></td></tr>';
                }

                if ( viewElements.indexOf('proveedores') != -1 ){
                    taskView += '<tr><td>' + _task.getBooking().getProv() + '</td></tr>';
                    taskView += '<tr><td>' + _task.getBooking().getProv2() + '</td></tr>';
                }

                if ( viewElements.indexOf('servicios') != -1 ){
                    taskView += '<tr><td>' + _task.getBooking().getServicios() + '</td></tr>';
                }

                if ( viewElements.indexOf('especificaciones') != -1 ){
                    taskView += '<tr><td>' + _task.getBooking().getEspecificaciones() + '</td></tr>';
                }

                if ( viewElements.indexOf('payment_info') != -1 ){
                    if(_task.getBooking().getCustomerPortero()) {
                        var formaPago = _task.getBooking().getFormaPago();
                        if (formaPago.toLowerCase() == 'efectivo') {
                            taskView += '<tr><td>' + _task.getBooking().getFormaPago() + '</td></tr>';
                            taskView += '<tr><td>' + _task.getBooking().getTotal() + '</td></tr>';
                        }
                    }
                }

                if ( viewElements.indexOf('info') != -1 ){
                    taskView += '<tr><td>' + _task.getBooking().getInfoCliente() + '</td></tr>';
                    taskView += '<tr><td>' + _task.getBooking().getInfoNotas() + '</td></tr>';
                }

                taskView += '<tr><td>' + _task.getBooking().getStatus() + '</td></tr>'
            }

            return $sce.trustAsHtml(taskView);
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
