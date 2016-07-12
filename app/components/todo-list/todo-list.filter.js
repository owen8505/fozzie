(function(angular) {
    'use strict';

    angular
        .module('todoList')
        .filter('orderByDate', function(){
        /**
         * Order tasks list by date
         * @return _spinningClasses
         */
        return function(tasks, reverse) {

            var filtered = [];

            angular.forEach(tasks, function(item) {
                if(item.getEndDate().diff(moment(), 'days') >= 0){
                    filtered.push(item);
                }
            });

            filtered.sort(function (a, b) {
                return (a.getEndDate() > b.getEndDate() ? 1 : -1);
            });

            if(reverse) filtered.reverse();

            return filtered;
        }
    });

})(window.angular);