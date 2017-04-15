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
      // this.videos.map = (video) => {

      // }
    },
    // template: `
    //   <ul>
    //     <li>

    //     //$index, as long as $index < videoList.length 
    //     //ng-repeat video in ctrl.videos (for in version for angular)
    //     // {{video}}

    //     </li>
    //   </ul>
    // `
  };
});
