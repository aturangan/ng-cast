angular.module('video-player')

.directive('videoPlayer', function() {
  return {
    scope: {
    	video: '<'
    },
    restrict: 'E',
    bindToController: true,
    controllerAs: 'ctrl',
    templateUrl: "src/templates/videoPlayer.html",
    controller: function () {}
  };
});

