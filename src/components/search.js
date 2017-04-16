angular.module('video-player')

.directive('search', function() {
 return {
   scope: {
   		result: '<'
   },
   templateUrl: "src/templates/search.html",
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function() {
      this.result = function() {}
 	},
 }
});
