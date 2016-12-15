// AppValue.js
(function () {
	'use strict';
	// Value in deze app
	angular.module('myApp')
		.value('autoCompanyName', "AutoService APP")
		.constant('AUTOGLOBALS', {
			appVersion: '1.0.0'});
})();