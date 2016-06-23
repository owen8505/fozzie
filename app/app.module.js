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
    'login',
    'todoList',
    'task'
]);

angular.module('dispatcher')
    .constant('API_URL_BASE', 'http://198.61.202.55');