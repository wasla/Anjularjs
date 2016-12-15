// homeController.js
 (function () {
 'use strict';
 // 1. Controller toevoegen aan de module
 angular.module('myApp')
 .controller('homeOef1Controller', homeOef1Controller);

 // 2. Factory injecteren
 homeOef1Controller.$inject = ['autoFactory'];
 function homeOef1Controller(autoFactory) {
 var vm = this;

 // Gegevens uit de factory ophalen en toekennen aan variabelen
 vm.autos = autoFactory.getAutos();
 }
 })();


