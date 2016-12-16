// autoFactory.js
(function () {
	'use strict';

	// Definitie van de autoFactory
	angular.module('vehicleApp')
		.factory('vehicleFactory', vehicleFactory);

	// Implementatie van autoFactory
	function vehicleFactory() {
		// 1. Definieer (leeg) factory-object
		var factory = {};


		// 2. Definieer data voor deze factory (later zullen deze gegevens uit een database komen)

		var vehicles = [

			{ id: 0, name: "car", parts: { wheels: 4,doors: 4}},
			{id: 1,name: "plane", parts: { wings: 2, doors: 2}},
			{id: 2, name: "boat",parts: {doors: 1}}
		];


		// 3. Defineer een API met methods voor deze factory
		factory.getVehicles = function () {
			return vehicles;
		}




		// 4. Tot slot: retourneer factory-object
		return factory;
	}
})();
