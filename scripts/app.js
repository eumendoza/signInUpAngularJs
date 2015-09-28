angular.module('registerApp', ['ngRoute']);

angular.module('registerApp').config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/login', {
			templateUrl: 'views/login.html',
			controller: 'loginCtrl'
		})
		.when('/register', {
			templateUrl: '',
			controller: ''
		})
		.otherwise({
			redirectTo: '/login'
		});
}])