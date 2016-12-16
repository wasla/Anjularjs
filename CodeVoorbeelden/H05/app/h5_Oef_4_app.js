(function () {
    'use strict';
    // 1. Module definieren
    angular.module('vehicleApp', ['ngRoute' ,'ng-slide-down'])
        .config(moduleConfig);

    // 2. Inject dependencies
    moduleConfig.$inject = ['$routeProvider'];

    // 3. Routes configureren
    function moduleConfig($routeProvider) {

        $routeProvider.when('/', {
            templateUrl: 'views/h5_Oef_4_home.html',
            controller: 'vehicleController',
            controllerAs: 'vehicleCtrl'
        })
            .when('/home', {
                templateUrl: 'views/h5_Oef_4_home.html',
                controller: 'vehicleController',
                controllerAs: 'vehicleCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
})();

