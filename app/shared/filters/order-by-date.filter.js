(function(angular) {
    'use strict';

    angular
        .module('dispatcher')
        .filter('orderByDate', function(){
        /**
         * Order tasks list by date
         * @return _spinningClasses
         */
        return function(tasks, reverse) {

            var filtered = [];

            angular.forEach(tasks, function(item) {
                filtered.push(item);
            });

            filtered.sort(function (a, b) {
                return (a.getEndDate() > b.getEndDate() ? 1 : -1);
            });

            if(reverse) filtered.reverse();

            return filtered;
        }
    });

})(window.angular);