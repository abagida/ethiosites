(function () {

  angular
  .module('ethiosite')
  .controller('locationDetailCtrl', locationDetailCtrl);

  locationDetailCtrl.$inject = ['$routeParams', '$location', '$modal', 'loc8rData', 'authentication'];
  function locationDetailCtrl ($routeParams, $location, $modal, loc8rData, authentication) {
    var vm = this;
    vm.locationid = $routeParams.locationid;

    vm.isLoggedIn = authentication.isLoggedIn();

    vm.currentPath = $location.path();

    loc8rData.locationById(vm.locationid)
    .success(function(data) {
      vm.data = { location: data };
      vm.pageHeader = {
        title: vm.data.location.name
      };
    })
    .error(function (e) {
      console.log(e);
    });

   

    vm.popupReviewForm = function () {
      var modalInstance = $modal.open({
        templateUrl: '/reviewModal/reviewModal.view.html',
        controller: 'reviewModalCtrl as vm',
        resolve : {
          locationData : function () {
            return {
              locationid : vm.locationid,
              locationName : vm.data.location.name
            };
          }
        }
      });

      modalInstance.result.then(function (data) {
        vm.data.location.reviews.push(data);
      });
    };
    vm.popupGeneralForm = function () {
      var modalInstance = $modal.open({
        templateUrl: '/generalModal/generalModal.view.html',
        controller: 'generalModalCtrl as vm',
        resolve : {
          locationData : function () {
            return {
              locationid : vm.locationid,
              locationName : vm.data.location.name
            };
          }
        }
      });

      modalInstance.result.then(function (data) {
        vm.data.location.generals.push(data);
      });
    };
    vm.popupTransmissionForm = function () {
      var modalInstance = $modal.open({
        templateUrl: '/transmissionModal/transmissionModal.view.html',
        controller: 'transmissionModalCtrl as vm',
        resolve : {
          locationData : function () {
            return {
              locationid : vm.locationid,
              locationName : vm.data.location.name
            };
          }
        }
      });

      modalInstance.result.then(function (data) {
        vm.data.location.transmissions.push(data);
      });
    };
    vm.popupCoreForm = function () {
      var modalInstance = $modal.open({
        templateUrl: '/coreModal/coreModal.view.html',
        controller: 'coreModalCtrl as vm',
        resolve : {
          locationData : function () {
            return {
              locationid : vm.locationid,
              locationName : vm.data.location.name
            };
          }
        }
      });

      modalInstance.result.then(function (data) {
        vm.data.location.cores.push(data);
      });
    };

    vm.popupIpForm = function () {
      var modalInstance = $modal.open({
        templateUrl: '/ipModal/ipModal.view.html',
        controller: 'ipModalCtrl as vm',
        resolve : {
          locationData : function () {
            return {
              locationid : vm.locationid,
              locationName : vm.data.location.name
            };
          }
        }
      });

      modalInstance.result.then(function (data) {
        vm.data.location.ips.push(data);
      });
    };

    vm.popupPowerForm = function () {
      var modalInstance = $modal.open({
        templateUrl: '/powerModal/powerModal.view.html',
        controller: 'powerModalCtrl as vm',
        resolve : {
          locationData : function () {
            return {
              locationid : vm.locationid,
              locationName : vm.data.location.name
            };
          }
        }
      });

      modalInstance.result.then(function (data) {
        vm.data.location.powers.push(data);
      });
    };

    vm.popupStaffForm = function () {
      var modalInstance = $modal.open({
        templateUrl: '/staffModal/staffModal.view.html',
        controller: 'staffModalCtrl as vm',
        resolve : {
          locationData : function () {
            return {
              locationid : vm.locationid,
              locationName : vm.data.location.name
            };
          }
        }
      });

      modalInstance.result.then(function (data) {
        vm.data.location.staffs.push(data);
      });
    };


    vm.popupRanForm = function () {
      var modalInstance = $modal.open({
        templateUrl: '/ranModal/ranModal.view.html',
        controller: 'ranModalCtrl as vm',
        resolve : {
          locationData : function () {
            return {
              locationid : vm.locationid,
              locationName : vm.data.location.name
            };
          }
        }
      });

      modalInstance.result.then(function (data) {
        vm.data.location.rans.push(data);
      });
    };
  }

})();