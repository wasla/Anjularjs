// homeController.js
 (function () {
 'use strict';
 // 1. Controller toevoegen aan de module
 angular.module('myApp')
 .controller('deleteOef1Controller', deleteOef1Controller);

 // 2. Factory injecteren


  deleteOef1Controller.$inject = ['$routeParams','autoFactory'];
  function   deleteOef1Controller($routeParams,autoFactory) {

   var vm = this,
       id = $routeParams.id;
   vm.auto = autoFactory.deleteAuto(id);
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