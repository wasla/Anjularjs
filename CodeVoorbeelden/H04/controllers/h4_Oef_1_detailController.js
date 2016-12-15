// detailController.js
(function () {
	'use strict';

	angular.module('myApp')
		.controller('detailOefController', detailOefController);

	detailOefController.$inject = ['$routeParams'];

	var autos = [
		{id: 1, omschrijving: 'A 180', prijs: '24.242 Euro', type: 'A'},
		{id: 2, omschrijving: 'A 180 CDI BlueEFFICIENCY', prijs: '26.015 Euro ', type: 'A'},
		{id: 3, omschrijving: 'B 200 CDI BlueEFFICIENCY', prijs: '30.129 Euro ', type: 'B'},
		{id: 4, omschrijving: 'C 250 CGI BlueEFFICIENCY', prijs: '40.414 Euro ', type: 'C'},
		{id: 5, omschrijving: 'C 300 CDI 4MATIC BlueEFFICIENCY', prijs: '48.642 Euro ', type: 'C'},
		{id: 6, omschrijving: 'C 350 CGI 4MATIC BlueEFFICIENCY' ,prijs: '50.941 Euro ', type: 'C'},
		{id: 7, omschrijving: 'CL 500 CDI 4MATIC BlueEFFICIENCY', prijs: '129.954 Euro ', type: 'CL'},
		{id: 8, omschrijving: 'CL 600', prijs: '170.489 Euro' , type: 'CL'}



	];
	var autos1 = [
		{id: 1, omschrijving: 'A 180', Basisprijs: 24800, Verkeersbelasting:250.00, inverkeerstelling: 500,gemid:5.20 , pic: '../img/A.png'},
		{id: 2, omschrijving: 'A 180 CDI BlueEFFICIENCY', Basisprijs: 26100, Verkeersbelasting:260.00, inverkeerstelling: 600,gemid:6.20 , pic:  '../img/A.png'},
		{id: 3,  omschrijving: 'B 200 CDI BlueEFFICIENCY', Basisprijs: 30130, Verkeersbelasting:300.00, inverkeerstelling: 700,gemid:7.20 , pic:  '../img/B.png'},
		{id: 4, omschrijving: 'C 250 CGI BlueEFFICIENCY', Basisprijs: 40430, Verkeersbelasting:400.00, inverkeerstelling: 800,gemid:8.20 , pic:  '../img/C.png'},
		{id: 5,  omschrijving: 'C 300 CDI 4MATIC BlueEFFICIENCY', Basisprijs: 48670, Verkeersbelasting:486.00, inverkeerstelling: 900,gemid:9.20 , pic:  '../img/C.png'},
		{id: 6,  omschrijving: 'C 350 CGI 4MATIC BlueEFFICIENCY' , Basisprijs: 50950, Verkeersbelasting:500.00, inverkeerstelling: 1000,gemid:10.20 , pic:  '../img/C.png'},
		{id: 7,  omschrijving: 'CL 500 CDI 4MATIC BlueEFFICIENCY', Basisprijs: 12996, Verkeersbelasting:900.00, inverkeerstelling: 1100,gemid:11.20 , pic:  '../img/CL.png'},
		{id: 8, omschrijving: 'CL 600', Basisprijs: 170495, Verkeersbelasting:950.00, inverkeerstelling: 1200,gemid:12.20 , pic:  '../img/CL.png'},




	];

	function detailOefController($routeParams) {
		var vm = this,
			id = $routeParams.id;
		vm.auto = autos1[id - 1];

	}
})();

