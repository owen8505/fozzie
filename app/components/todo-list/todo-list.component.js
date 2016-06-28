(function(angular) {
    'use strict';

    function todoListController(todoListService, $location) {

        // Private variables

        var TASK_STATUS_STYLES = {
            completed: 'completed',
            deprecated: 'deprecated',
            expired: 'expired',
            warning: 'warning'
        };

        /**
         *
         * @type {todoListController}
         */
        var ctrl = this;

        /**
         *
         * @type {Array}
         */
        var tasks = [];

        /**
         *
         * @param date
         * @param format
         * @returns {number}
         */
        var getElapsedTime = function (date, format) {
            return moment().diff(date, format);
        };

        // Instance variables

        /**
         *
         * @returns {Array}
         */
        ctrl.getTasks = function () {
            return tasks;
        };

        /**
         *
         * @param task
         * @returns {*}
         */
        ctrl.getTaskStyle = function (task) {
            if(task.completed && getElapsedTime(task.dueDate, 'hours') < 24) {
                return TASK_STATUS_STYLES.completed;
            } else if(task.completed) {
                console.log(TASK_STATUS_STYLES.deprecated)
                return TASK_STATUS_STYLES.deprecated;
            } else if(getElapsedTime(task.dueDate, 'minutes') < -10) {
                return TASK_STATUS_STYLES.warning
            } else if(getElapsedTime(task.dueDate, 'minutes') >= 0) {
                return TASK_STATUS_STYLES.expired
            }
        };

        /**
         * 
         * @param taskId
         */
        ctrl.getTask = function (taskId) {
            $location.path('/task/' + taskId);
        };

        /**
         *
         * @param dueDate
         * @returns {string}
         */
        ctrl.getDueDate = function (task) {
            var elapsedTime = getElapsedTime(task.dueDate, 'hours');
            return (elapsedTime < 24 && elapsedTime > 0)? task.dueDate.format('HH:MM') : task.dueDate.format('D MMMM');
        };

        ctrl.viewDetail = function(task){
            $location.path('/task/' + task.id);
        };

        /**
         * Inits the controller
         */
        var init = function () {
            try {
                tasks = todoListService.getTasks();
            } catch (e) {
                console.log(e);
            }
        };

        init();
    }

    angular.module('todoList').component('todoList', {
        templateUrl: 'components/todo-list/todo-list.template.html',
        controller: todoListController,
        bindings: {

        }
    });

})(window.angular);
