(function(angular) {
    'use strict';

    function navigationController($location, navigationService, sessionService) {

        /**
         *
         * @type {navigationController}
         */
        var ctrl = this;

        ctrl.isAuthenticated = function() {
            return sessionService.isAuthenticated();
        };

        /**
         * Closes user's session
         */
        ctrl.logout = function() {
            navigationService.logout()
                .then(function(data) {
                    $location.path('/login');
                }, function(error) {
                    if(error && error.errors){
                        console.log(error.errors[0].title);
                    }
                });
        };

        /**
         * Inits the controller
         */
        var init = function () {

        };

        init();
    }

    angular
        .module('navigation')
        .component('navigation', {
            templateUrl: 'components/navigation/navigation.template.html',
            controller: navigationController,
            bindings: {

            }
        });

})(window.angular);