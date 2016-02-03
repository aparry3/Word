'use strict'

angular.module('WordApp').controller('WordCtrl', ['$scope', '$http', '$window', 'documents', 'teachers', 'classes', 'users', 
	function($scope, $http, $window, documents, teachers, classes, users) {
		$scope.documents = documents;
		$scope.teachers = teachers;
		console.log($scope.teachers);
		$scope.classes = classes;
		$scope.showClass = true;
    	
}]);