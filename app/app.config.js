angular.
    module('dispatcher').
    config(['$locationProvider', '$routeProvider', '$mdThemingProvider',
        function config($locationProvider, $routeProvider, $mdThemingProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider.
                when('/todo', {
                    template: '<todo-list></todo-list>'
                }).
                when('/task/:taskId', {
                    template: '<task></task>'
                }).
                otherwise('/todo');

            $mdThemingProvider.theme('default')
                .primaryPalette('indigo')
                .accentPalette('orange');
        }
    ]);

