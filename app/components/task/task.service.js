(function(angular) {
    'use strict';

    angular.module('task').factory('taskService', ['$http', function ($http) {

        function getSomething() {
            return 'something';
        }
        
        var service = {
            getSomething: getSomething
        };

        return service;

    }]);
})(window.angular);
