(function () {

  angular
    .module('ethiosite')
    .controller('homeCtrl', homeCtrl);

  homeCtrl.$inject = ['$scope', 'loc8rData'];
  function homeCtrl ($scope, loc8rData) {
    // Nasty IE9 redirect hack (not recommended)
    if (window.location.pathname !== '/') {
      window.location.href = '/#' + window.location.pathname;
    }
    var vm = this;
    console.log(window.location);
    vm.pageHeader = {
      title: 'Ethio Telecom Sites',
      strapline: 'Find ET sites down here ↓↓↓'
    };
    vm.sidebar = {
      content: "Looking for information about ET network elements? Sit back and relax and this web-app  will do it for you!"
    };
    vm.message = "Checking your location";

   
      var lat = 7.675962781072586,
          lng = 36.829471254492215;
      vm.message = "Searching for nearby places";
      loc8rData.locationByCoords(lat, lng)
        .success(function(data) {
          vm.message = data.length > 0 ? "" : "No locations found nearby";
          vm.data = { locations: data };
          console.log(vm.data);
        })
        .error(function (e) {
          vm.message = "Sorry, something's gone wrong, please try again later";
        });
  }

})();