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

            var authenticated = ['$q', '$location', 'sessionService', 'loginService', function ($q, $location, sessionService, loginService) {
                var deferred = $q.defer();

                if(!sessionService.isAuthenticated()){
                    loginService.getCurrentSession()
                        .then(function(data){
                            console.log(data);
                            if(data.data.success){
                                var result = data.data.result;
                                sessionService.createSession(result.id, result.first_name, result.last_name, result.email);
                                deferred.resolve();
                            }else{
                                deferred.reject('Not logged in');
                            }
                        }, function(response){
                            deferred.reject('Not logged in');
                        });

                } else {
                    deferred.resolve();
                }

                return deferred.promise;
            }];

            $locationProvider.hashPrefix('!');

            $routeProvider.
                when('/login', {
                    template: '<login></login>'
                }).
                when('/todo', {
                    template: '<todo-list></todo-list>'
                }).
                when('/task/:taskId', {
                    template: '<task></task>'
                }).
                otherwise('/login');


        }
    ]);

