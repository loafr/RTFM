angular.module('rtfmApp').controller('LoginCtrl', function($scope, environmentService) {
	$scope.env = environmentService.getEnv();
});

