angular.module('WordApp').config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/home', {
			templateUrl: 'app/components/home/home.html',
			controller: 'app/components/home/WordController.js'
		})
		.otherwise({
			redirectTo:'/home'
		})
}]);