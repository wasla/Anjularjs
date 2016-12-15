// autoFactory.js
(function () {
	'use strict';

	// Definitie van de autoFactory
	angular.module('myApp')
		.factory('autoFactory', autoFactory);

	// Implementatie van autoFactory
	function autoFactory() {
		// 1. Definieer (leeg) factory-object
		var factory = {};

		// 2. Definieer data voor deze factory (later zullen deze gegevens uit een database komen)
		var autos = [
			{id: 1, omschrijving: 'A 180', prijs: '24.242 Euro ', type: 'A', Basisprijs: 24800, Verkeersbelasting:250.00, inverkeerstelling: 500,gemid:5.20 , pic: '../img/A.png'},
			{id: 2, omschrijving: 'A 180 CDI BlueEFFICIENCY', prijs: '26.015 Euro ', type: 'A',Basisprijs: 26100, Verkeersbelasting:260.00, inverkeerstelling: 600,gemid:6.20 , pic:  '../img/A.png'},
			{id: 3, omschrijving: 'B 200 CDI BlueEFFICIENCY', prijs: '30.129 Euro ', type: 'B',Basisprijs: 30130, Verkeersbelasting:300.00, inverkeerstelling: 700,gemid:7.20 , pic:  '../img/B.png'},
			{id: 4, omschrijving: 'C 250 CGI BlueEFFICIENCY', prijs: '40.414 Euro ', type: 'C',Basisprijs: 40430, Verkeersbelasting:400.00, inverkeerstelling: 800,gemid:8.20 , pic:  '../img/C.png'},
			{id: 5, omschrijving: 'C 300 CDI 4MATIC BlueEFFICIENCY', prijs: '48.642 Euro ', type: 'C',Basisprijs: 48670, Verkeersbelasting:486.00, inverkeerstelling: 900,gemid:9.20 , pic:  '../img/C.png'},
			{id: 6, omschrijving: 'C 350 CGI 4MATIC BlueEFFICIENCY' ,prijs: '50.941 Euro ', type: 'C',Basisprijs: 50950, Verkeersbelasting:500.00, inverkeerstelling: 1000,gemid:10.20 , pic:  '../img/C.png'},
			{id: 7, omschrijving: 'CL 500 CDI 4MATIC BlueEFFICIENCY', prijs: '129.954 Euro ', type: 'CL',Basisprijs: 12996, Verkeersbelasting:900.00, inverkeerstelling: 1100,gemid:11.20 , pic:  '../img/CL.png'},
			{id: 8, omschrijving: 'CL 600', prijs: '170.489 Euro' , type: 'CL' , Basisprijs: 170495, Verkeersbelasting:950.00, inverkeerstelling: 1200,gemid:12.20 , pic:  '../img/CL.png'}



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


		// 3. Defineer een API met methods voor deze factory
		factory.getAutos = function () {
			return autos;
		}

		factory.getAuto = function (id) {
			return autos[id - 1]; // -1 omdat de array zero-based is
		}

		factory.addAuto = function (newAuto) {
			// Het nieuwe persoon heeft nog geen ID. Nu Quick&Dirty het hoogste huidige ID
			// uit de array opzoeken en deze toekennen aan newAuto
			var id = 0;
			for (var i = 0; i < autos.length; i++) {
				if (autos[i].id >= id) {
					id = autos[i].id + 1;
				}
			}
			newAuto.id = id;
			autos.push(newAuto);
		}
		//delete the selected auto
		factory.deleteAuto = function (index) {

			autos.splice(autos.indexOf(index),1);
		}

		// 4. Tot slot: retourneer factory-object
		return factory;
	}
})();
