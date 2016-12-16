// homeController.js
(function() {
 "use strict";
 angular.module("vehicleApp")
 .controller('vehicleController', vehicleController);

 // 2. Factory injecteren
 vehicleController.$inject = ['vehicleFactory'];
 function vehicleController(vehicleFactory) {
 var vm = this;

 // Gegevens uit de factory ophalen en toekennen aan variabelen
 vm.vehicles = vehicleFactory.getVehicles();
 }
 })();


/*
* (function() {
 "use strict";
 angular.module("myApp", ['ng-slide-down']).controller('MyCtrl', function($scope) {});

 }).call(this);
* */