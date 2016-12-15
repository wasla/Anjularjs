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
            templateUrl: 'views/h5_Oef_1_home.html',
            controller: 'homeOef1Controller',
            controllerAs: 'homeCtrl'
        })
            .when('/home', {
                templateUrl: 'views/h5_Oef_1_home.html',
                controller: 'homeOef1Controller',
                controllerAs: 'homeCtrl'
            })
            .when('/detail/:id', {
                templateUrl: 'views/h5_Oef_1_detail.html',
                controller: 'detailOef1Controller',
                controllerAs: 'detailCtrl'
            })
            .when('/partner', {
                templateUrl: 'views/h5_Oef_1_partners.html',
                controller: 'homeOef1Controller',
                controllerAs: 'homeCtrl'
            })
            .when('/add', {
                templateUrl: 'views/h5_Oef_1_add.html',
                controller: 'addOef1Controller',
                controllerAs: 'addCtrl'
            })
            .when('/del/:id', {
                templateUrl: 'views/h5_Oef_1_del.html',
                controller: 'deleteOef1Controller',
                controllerAs: 'delCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
})();