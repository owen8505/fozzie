'use strict';

// Moment configuration
moment.locale("es");
moment.tz.setDefault('America/Mexico_City');

// Declare app level module which depends on views, and components
angular.module('dispatcher', [
    'ngRoute',
    'ngResource',
    'ngMaterial',
    'todoList',
    'task'
]);