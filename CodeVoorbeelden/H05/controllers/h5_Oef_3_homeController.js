// homeController.js
 (function () {
 'use strict';
 // 1. Controller toevoegen aan de module
 angular.module('myApp')
 .controller('homeOef3Controller', homeOef3Controller);

 // 2. Service injecteren
 homeOef3Controller.$inject = ['autoService'];
 function homeOef3Controller(autoService) {
 var vm = this;

 // Gegevens uit de factory ophalen en toekennen aan variabelen
 vm.autos = autoService.getAutos();
 }
 })();


