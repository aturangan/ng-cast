angular.module('video-player')

.directive('search', function() {
 return {
    scope: {},
    controllerAs: 'ctrl',
    controller: function($scope) {
      $scope.result = function() {}
    },
   
  };
});
