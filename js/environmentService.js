angular.module('rtfmApp')
  .factory('environmentService', function environmentService($window) {
    return {
      getEnv: function () {
        return $window.env;
      }
    }
  });