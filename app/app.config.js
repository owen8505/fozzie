angular.
    module('dispatcher').
    config(['$locationProvider', '$routeProvider', '$mdThemingProvider', 'localStorageServiceProvider',
        function config($locationProvider, $routeProvider, $mdThemingProvider, localStorageServiceProvider) {

            $mdThemingProvider.theme('default')
                .primaryPalette('indigo')
                .accentPalette('orange');

            localStorageServiceProvider.setPrefix('');
            localStorageServiceProvider.setStorageCookie(45, '/');
            localStorageServiceProvider.setStorageCookieDomain('');

            var authenticate = ['$q', '$location', 'sessionService', 'loginService', function ($q, $location, sessionService, loginService) {
                var deferred = $q.defer();

                if(sessionService.isHttpHeaders()){
                    sessionService.configHttpHeaders();

                    loginService.getCurrentSession()
                        .then(function(data){

                            if(data.user){
                                deferred.resolve();
                            }else{
                                deferred.reject('Not logged in');
                                $location.path("/login");
                            }
                        }, function(response){
                            deferred.reject('Not logged in');
                            $location.path("/login");
                        });

                } else {

                    deferred.reject('Not logged in');
                    $location.path("/login");
                }

                return deferred.promise;
            }];

            var autoLogin = ['$q', '$location', 'sessionService', 'loginService', function ($q, $location, sessionService, loginService) {
                var deferred = $q.defer();

                if(sessionService.isHttpHeaders()){
                    sessionService.configHttpHeaders();

                    loginService.getCurrentSession()
                        .then(function(data){

                            if(data.user){
                                deferred.resolve();
                                $location.path("/todo");
                            }else{
                                deferred.resolve();

                            }
                        }, function(response){
                            deferred.resolve();
                        });

                } else {

                    deferred.resolve();
                }

                return deferred.promise;
            }];

            $locationProvider.hashPrefix('!');

            $routeProvider.
                when('/login', {
                    template: '<login></login>',
                    resolve: autoLogin,
                    view: 'login'
                }).
                when('/todo', {
                    template: '<todo-list></todo-list>',
                    resolve: authenticate,
                    view: 'todo'
                }).
                when('/task/:taskId', {
                    template: '<task></task>',
                    resolve: authenticate,
                    view: 'task'
                }).
                otherwise('/login');


        }
    ]);

