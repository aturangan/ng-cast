angular.module('video-player')
.directive('videoListEntry', function() {
  return {
    // TODO
    scope: {
    	video: '<'
    },
    templateUrl: "src/templates/videoListEntry.html"
    controllerAs: 'ctrl',
    bindController: true,
    controller: function() {}
  };

});
