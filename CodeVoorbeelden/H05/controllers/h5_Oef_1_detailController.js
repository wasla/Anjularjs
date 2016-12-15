// detailController.js
(function () {
	'use strict';

	angular.module('myApp')
		.controller('detailOef1Controller', detailOef1Controller);

	detailOef1Controller.$inject = ['$routeParams','autoFactory'];



	function detailOef1Controller($routeParams,autoFactory) {
		var vm = this,
			id = $routeParams.id;
		vm.auto = autoFactory.getAuto(id);

	}
})();


