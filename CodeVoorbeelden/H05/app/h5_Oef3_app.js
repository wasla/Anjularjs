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
            templateUrl: 'views/h5_Oef_3_home.html',
            controller: 'homeOef3Controller',
            controllerAs: 'homeCtrl'
        })
            .when('/home', {
                templateUrl: 'views/h5_Oef_3_home.html',
                controller: 'homeOef3Controller',
                controllerAs: 'homeCtrl'
            })
            .when('/detail/:id', {
                templateUrl: 'views/h5_Oef_3_detail.html',
                controller: 'detailOef3Controller',
                controllerAs: 'detailCtrl'
            })
            .when('/partner', {
                templateUrl: 'views/h5_Oef_3_partners.html',
                controller: 'homeOef3Controller',
                controllerAs: 'homeCtrl'
            })
            .when('/add', {
                templateUrl: 'views/h5_Oef_3_add.html',
                controller: 'addOef3Controller',
                controllerAs: 'addCtrl'
            })
            .when('/del/:id', {
                templateUrl: 'views/h5_Oef_3_del.html',
                controller: 'deleteOef3Controller',
                controllerAs: 'delCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
})();