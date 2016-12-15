// homeController.js
 (function () {
 'use strict';
 // 1. Controller toevoegen aan de module
 angular.module('myApp')
 .controller('deleteOef3Controller', deleteOef3Controller);

 // 2. Service injecteren
  deleteOef3Controller.$inject = ['$routeParams','autoService'];
  
 function deleteOef3Controller($routeParams,autoService) {
 var vm = this,
  id = $routeParams.id;

 // Gegevens uit de factory ophalen en toekennen aan variabelen
 vm.auto = autoService.deleteAuto(id)
 }
 })();


/*
* detailOef1Controller.$inject = ['$routeParams','autoFactory'];



 function detailOef1Controller($routeParams,autoFactory) {
 var vm = this,
 id = $routeParams.id;
 vm.auto = autoFactory.getAuto(id);

 }
 })();
* */