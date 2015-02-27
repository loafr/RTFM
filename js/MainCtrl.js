angular.module('rtfmApp').controller('MainCtrl', function($scope, $firebase, mainService) {

	var ref = new Firebase("https://lrdevmtn.firebaseio.com/");
    // create an AngularFire reference to the data
    var sync = $firebase(ref);
    // download the data into a local object
    $scope.data = sync.$asObject();

    //

});