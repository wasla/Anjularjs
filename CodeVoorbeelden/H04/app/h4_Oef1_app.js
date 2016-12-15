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
            templateUrl: 'views/h4_Oef_1_home.html',
            controller: 'homeOefController',
            controllerAs: 'homeCtrl'
        })
            .when('/home', {
                templateUrl: 'views/h4_Oef_1_home.html',
                controller: 'homeOefController',
                controllerAs: 'homeCtrl'
            })
            .when('/detail/:id', {
                templateUrl: 'views/h4_Oef_1_detail.html',
                controller: 'detailOefController',
                controllerAs: 'detailCtrl'
            })
            .when('/partner', {
                templateUrl: 'views/h4_Oef_1_partners.html',
                controller: 'homeOefController',
                controllerAs: 'homeCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
})();