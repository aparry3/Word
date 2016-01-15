'use strict'
app.controller('WordCtrl', ['$scope', 'documents', 'teachers', 'classes', 'users', 
	function($scope, documents, teachers, classes, users) {
		$scope.documents = documents;
		$scope.teachers = teachers;
		$scope.classes = classes;
}]);