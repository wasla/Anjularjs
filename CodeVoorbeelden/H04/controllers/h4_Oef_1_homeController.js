// homeController.js
(function () {
	'use strict';
	angular.module('myApp')
		.controller('homeOefController', homeOefController);

	function homeOefController() {
		var vm = this;
		vm.autos = [
			{id: 1, omschrijving: 'A 180', prijs: '24.242 Euro ', type: 'A'},
			{id: 2, omschrijving: 'A 180 CDI BlueEFFICIENCY', prijs: '26.015 Euro ', type: 'A'},
			{id: 3, omschrijving: 'B 200 CDI BlueEFFICIENCY', prijs: '30.129 Euro ', type: 'B'},
			{id: 4, omschrijving: 'C 250 CGI BlueEFFICIENCY', prijs: '40.414 Euro ', type: 'C'},
			{id: 5, omschrijving: 'C 300 CDI 4MATIC BlueEFFICIENCY', prijs: '48.642 Euro ', type: 'C'},
			{id: 6, omschrijving: 'C 350 CGI 4MATIC BlueEFFICIENCY' ,prijs: '50.941 Euro ', type: 'C'},
			{id: 7, omschrijving: 'CL 500 CDI 4MATIC BlueEFFICIENCY', prijs: '129.954 Euro ', type: 'CL'},
			{id: 8, omschrijving: 'CL 600', prijs: '170.489 Euro' , type: 'CL'}



		];
	}
})();
