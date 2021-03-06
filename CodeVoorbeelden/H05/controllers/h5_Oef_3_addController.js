(function () {
	'use strict';
	// 1. Controller toevoegen aan de module
	angular.module('myApp')
		.controller('addOef3Controller', addOef3Controller);

	addOef3Controller.$inject = ['autoServicey', '$location'];
	function addOef3Controller(autoService, $location) {
		var vm = this;

		// 1. Nieuwe auto maken op basis van formulier.
		// ID is uiteraard niet bekend, wordt in de Service berekend.
		vm.addAuto = function () {
			var newAuto = {
				omschrijving: vm.auto.omschrijving,
				prijs: vm.auto.prijs,
				type: vm.auto.type,
				Basisprijs: vm.auto.Basisprijs,
				Verkeersbelasting: vm.auto.Verkeersbelasting,
				inverkeerstelling: vm.auto.inverkeerstelling,
				gemid: vm.auto.gemid,
				pic: vm.auto.pic
			};

			// 2. Toevoegen via service
			autoService.addAuto(newAuto);

			// 3. Terug/doorsturen naar de homepage
			$location.path('/');
		}
	}
})();

//id: 1, omschrijving: 'A 180', prijs: '24.242 Euro ', type: 'A', Basisprijs: 24800, Verkeersbelasting:250.00, inverkeerstelling: 500,gemid:5.20 , pic: '../img/A.png'