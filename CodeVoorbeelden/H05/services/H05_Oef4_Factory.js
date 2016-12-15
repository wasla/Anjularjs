// autoFactory.js
(function () {
	'use strict';

	// Definitie van de autoFactory
	angular.module('myApp')
		.factory('vehicleFactory', vehicleFactory);

	// Implementatie van autoFactory
	function vehicleFactory() {
		// 1. Definieer (leeg) factory-object
		var factory = {};

		/*

		 var vehicleApp = angular.module("vehicleApp", []);

		 vehicleApp.controller('VehicleController',
		 function ($scope) {
		 $scope.vehicles = [
		 { id: 0, name: "car", parts: { wheels: 4,doors: 4}},
		 {id: 1,name: "plane", parts: { wings: 2, doors: 2}},
		 {id: 2, name: "boat",parts: {doors: 1}}]; });

		* */

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

		factory.getVehicle = function (id) {
			return vehicles[id - 1]; // -1 omdat de array zero-based is
		}

		factory.addVehicle = function (newVehicle) {
			// Het nieuwe persoon heeft nog geen ID. Nu Quick&Dirty het hoogste huidige ID
			// uit de array opzoeken en deze toekennen aan newAuto
			var id = 0;
			for (var i = 0; i < vehicles.length; i++) {
				if (vehicles[i].id >= id) {
					id = vehicles[i].id + 1;
				}
			}
			newVehilce.id = id;
			vehicles.push(newVehicle);
		}
		//delete the selected vehilce
		factory.deleteVehicle = function (auto) {
			var index = autos.indexOf(auto);
			if(index != -1)
			{
				vehicles.splice(index,1);
			}
			// -1 omdat de array zero-based is
		}

		// 4. Tot slot: retourneer factory-object
		return factory;
	}
})();
