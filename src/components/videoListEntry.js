angular.module('video-player')
.directive('videoListEntry', function() {
  return {
    // TODO
    scope: {
    	video: '<',
        onClick: '<'
    },
    restrict: 'E',
    templateUrl: "src/templates/videoListEntry.html",
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function() {}
    // controller: function('myCtrl', ['$scope', function($scope) {
    //     $scope.linkVideo = () => {
    //         //link video corresponding to title
    //         //probably have to search in the video list object for title 
    //         //make the clicked video the main video 
    //     }
    // }]) {}
  };

  //click for the ng-click

});
