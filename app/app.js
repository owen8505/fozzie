'use strict';

// Moment configuration
moment.locale("es")
moment.tz.setDefault('America/Mexico_City');

// Declare app level module which depends on views, and components
var cftest = angular.module('cftest', [
    'ngRoute',
    'ngResource',
    'ngMaterial'
]);

cftest.constant('checkfront_keys', {
    "consumer_key": "b55cf51805b6db592f5bddd204322992b39ce11a",
    "consumer_secret": "80e0cf1e9c33567b76882333ce4da055c34e76c2da218511a20936aa7055bc66",
    "authorize_token_URL": "https://coderia.checkfront.com/oauth/",
    "access_token_URL": "https://coderia.checkfront.com/oauth/token/"
});

cftest.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
      .primaryPalette('indigo')
      .accentPalette('orange');
});

