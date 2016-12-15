// detailController.js
(function () {
	'use strict';

	angular.module('myApp')
		.controller('detailOef3Controller', detailOef3Controller);

	detailOef3Controller.$inject = ['$routeParams','autoService'];



	function detailOef3Controller($routeParams,autoService) {
		var vm = this,
			id = $routeParams.id;
		vm.auto = autoService.getAuto(id);

	}
})();


