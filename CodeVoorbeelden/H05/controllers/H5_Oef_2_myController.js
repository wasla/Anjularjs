// myController.js
(function () {
	'use strict';
	// 1. Controller toevoegen aan de module
	angular.module('myApp')
		.controller('myController', myController);

	// 2. Globals injecteren
	myController.$inject = ['AUTOGLOBALS', 'autoCompanyName'];
	function myController(AUTOGLOBALS, autoCompanyName) {
		var vm = this;
		// Gegevens uit de constante ophalen en toekennen aan variabelen

		vm.appVersion = AUTOGLOBALS.appVersion;
		vm.autoCompanyName = autoCompanyName;
	}
})();
