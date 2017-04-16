angular.module('video-player')

  // $scope.addClick () => {
  //   //$scope.
  //   //link search.js
  // }

.directive('app', function() {
  return {
    scope: {},
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function() {
      this.currentVideo = window.exampleVideoData[0];
      this.videos = window.exampleVideoData;
     
      this.selectVideo = (video) => {
        this.currentVideo = video;
        console.log('RUN THIS NOWWW', this.currentVideo)
      };
      this.searchResults = function() {

      }
      

    },
    templateUrl: "src/templates/app.html"
  };
});
