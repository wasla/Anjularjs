(function () {
    'use strict';
    // 1. Module definieren
    angular.module('myApp', ['ngRoute'])
        .config(moduleConfig);

    // 2. Inject dependencies
    moduleConfig.$inject = ['$routeProvider'];

    // 3. Routes configureren
    function moduleConfig($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'views/h5_Oef_4_home.html',
            controller: 'homeOef4Controller',
            controllerAs: 'homeCtrl'
        })
            .when('/home', {
                templateUrl: 'views/h5_Oef_4_home.html',
                controller: 'homeOef4Controller',
                controllerAs: 'homeCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
})();