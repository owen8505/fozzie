'use strict';

// Moment configuration
moment.locale("es");
moment.tz.setDefault('America/Mexico_City');

// Declare app level module which depends on views, and components
angular.module('dispatcher', [
    'ngRoute',
    'ngResource',
    'ngMaterial',
    'LocalStorageModule',
    'navigation',
    'login',
    'todoList',
    'task'
]);

angular.module('dispatcher')
    .constant('AUTH_API_URL_BASE', 'http://198.61.202.55:8080')
    .constant('API_URL_BASE', 'http://lavader.herokuapp.com')
    .constant('ORDER_STATUSES', {
        'HOLD': ['RECOL'],
        'RECOL': ['CO12']
    });

angular.module('dispatcher')
    .run(['$rootScope', '$route', 'routingService', function($rootScope, $route, routingService) {
        $rootScope.$on('$routeChangeSuccess', function() {
            routingService.setView($route.current.view);
        });
    }]);