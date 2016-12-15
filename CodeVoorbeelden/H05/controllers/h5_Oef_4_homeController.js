// homeController.js
 (function () {
 'use strict';
 // 1. Controller toevoegen aan de module
 angular.module('myApp')
 .controller('homeOef4Controller', homeOef4Controller);

 // 2. Factory injecteren
 homeOef4Controller.$inject = ['vehicleFactory'];
 function homeOef4Controller(vehicleFactory) {
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