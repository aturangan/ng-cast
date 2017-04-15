angular.module('video-player')

.directive('app', function() {
  return {
    scope: {},
    controllerAs: 'ctrl',
    bindController: true,
    controller: function($window) {
      this.selectVideo = function() {};
      this.searchResults = function() {}
      this.currentVideo = exampleVideoData[0];
      this.videos = $window.exampleVideoData;
    },
    templateUrl: "src/templates/app.html"
  };
});
