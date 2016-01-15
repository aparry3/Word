'use strict'
var app = angular.module('WordApp', [])
.factory('teachers', [function() {
	var o = [
		{
			name: 'Aaron'
		}
	];
	return o;
}])
.factory('classes', [function() {
	var o = {
		classes: []
	};
	return o;
}])
.factory('documents', [function() {
	var o = {
		documents: []
	};
	return o;
}])
.factory('users', [function() {
	var o = {
		users: [


		]
	};
	return o;
}])
.controller('WordCtrl', ['$scope', 'documents', 'teachers', 'classes', 'users', 
	function($scope, documents, teachers, classes, users) {
		$scope.documents = documents;
		$scope.teachers = teachers;
		console.log($scope.teachers);
		$scope.classes = classes;
}]);
