angular.module('video-player')
.directive('videoListEntry', function() {
  return {
    // TODO
    scope: {
    	video: '<',
    },
    restrict: 'E',
    templateUrl: "src/templates/videoListEntry.html",
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function() {}
  };

});
