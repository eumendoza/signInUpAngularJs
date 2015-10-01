angular.module('registerApp').controller('loginCtrl', ['$scope', function($scope) {
	$scope.user = {};
	$scope.login = function(isValid) {
		if(isValid){
			console.log($scope.user);
		}
	};
}]);