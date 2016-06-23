(function(angular, sessionService) {
    'use strict';

    angular.module('login').factory('loginService', ['$http', '$q', 'sessionService', 'API_URL_BASE', function ($http, $q, sessionService, API_URL_BASE) {

        var login = function(user){
            var loginServiceURL = API_URL_BASE + '/users/sign_in';
            return $http.post(loginServiceURL, { user: user })
                .then(function(response) {
                    var data = response.data;
                    if (typeof data === 'object') {

                        if(data.user){

                            var headers = {
                                'accessToken' : response.headers('access-token'),
                                'expiry': response.headers('expiry'),
                                'tokenType': response.headers('token-type'),
                                'uid': response.headers('uid'),
                                'client': response.headers('client')
                            };

                            sessionService.setHttpHeaders(headers);

                            var user = data.user;
                            sessionService.createSession(user);
                        }

                        return data;
                    } else {
                        return $q.reject(data);
                    }

                }, function(error){
                    return $q.reject(error.data);
                });
        };

        var logout = function(){
            var logoutServiceURL = API_URL_BASE + '/logout.json';
            return $http.get(logoutServiceURL)
                .then(function(response) {
                    var data = response.data;

                    sessionService.destroySession();
                    sessionService.unsetHttpHeaders();

                    return data;

                }, function(error){
                    return $q.reject(error.data);
                });
        };

        var getCurrentSession = function(){
            var sessionServiceURL = API_URL_BASE + '/session';
            return $http.get(sessionServiceURL, {})
                .then(function(response){
                    var data = response.data;
                    if (typeof data === 'object') {

                        if(data.user){
                            var headers = {
                                'accessToken' : response.headers('access-token'),
                                'expiry': response.headers('expiry'),
                                'tokenType': response.headers('token-type'),
                                'uid': response.headers('uid'),
                                'client': response.headers('client')
                            };

                            sessionService.setHttpHeaders(headers);

                            var user = data.user;
                            sessionService.createSession(user);
                        }

                        return data;
                    } else {
                        return $q.reject(data);
                    }
                },
                function(error){
                    return $q.reject(error.data);
                });
        };

        var service = {
            login: login,
            logout: logout,
            getCurrentSession: getCurrentSession
        };

        return service;

    }]);
})(window.angular);
