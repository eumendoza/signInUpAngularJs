angular.module('registerApp').controller('registerCtrl', ['$scope', function($scope) {
	$scope.uregister = {}
	$scope.register = function(isValid){
		if(isValid){
			console.log($scope.uregister);
		}
	}
}]);