angular.module('video-player')
.directive('videoList', function() {
  return {
    // TODO
    scope: {
    videos: '<',//class="todos"
    onClick: '<'
  },

    templateUrl: "src/templates/videoList.html",
    restrict: 'E', 
    controllerAs: 'ctrl', 
    bindToController: true, 
    controller: function() {
    //   console.log(videos[0]);
    }
  };
});
