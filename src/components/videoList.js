angular.module('video-player')
.directive('videoList', function() {
  return {
    // // TODO
    scope: {
      videos: '<',//all the videos
      onClick: '<'
    },

    templateUrl: "src/templates/videoList.html",
    restrict: 'E', 
    controllerAs: 'ctrl', 
    bindToController: true, 
    controller: function() {}
    }
  });

