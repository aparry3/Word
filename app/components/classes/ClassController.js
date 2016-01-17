/**
 * Created by aparry2 on 1/17/16.
 */
'use strict'

angular.module('WordApp').controller('ClassCtrl', ['$scope', '$routeParams', 'documents', 'teachers', 'classes', 'users',
    function($scope, $routeParams, documents, teachers, classes, users) {
        $scope.class = classes[$routeParams.classId];
        console.log($scope.class);
    }]);