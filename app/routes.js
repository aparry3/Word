angular.module('WordApp').config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/home', {
			templateUrl: 'app/components/home/home.html',
			controller: 'WordCtrl'
		})
		.when('/classes/:classId', {
			templateUrl: 'app/components/classes/class.html',
			controller: 'ClassCtrl'
		})
		.otherwise({
			redirectTo:'/home'
		})
}]);