angular.module('WordApp')
.factory('teachers', [function() {
	var o = [
		{
			name: 'Aaron'
		},
		{
			name: 'Colin'
		}
	];
	return o;
}])