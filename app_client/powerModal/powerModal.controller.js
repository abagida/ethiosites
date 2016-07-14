(function () {

  angular
    .module('ethiosite')
    .controller('powerModalCtrl', powerModalCtrl);

  powerModalCtrl.$inject = ['$modalInstance', 'loc8rData', 'locationData'];
  function powerModalCtrl ($modalInstance, loc8rData, locationData) {
    var vm = this;
    vm.locationData = locationData;

    vm.onSubmit = function () {
      vm.formError = "";
      if (!vm.formData.powerText) {
        vm.formError = "All fields required, please try again";
        return false;
      } else {
        vm.doAddPower(vm.locationData.locationid, vm.formData);
      }
    };

    vm.doAddPower = function (locationid, formData) {
      loc8rData.addPowerById(locationid, {
        
        powerText : formData.powerText
      })
        .success(function (data) {
          vm.modal.close(data);
        })
        .error(function (data) {
          vm.formError = "Your review has not been saved, please try again";
        });
      return false;
    };

    vm.modal = {
      close : function (result) {
        $modalInstance.close(result);
      },
      cancel : function () {
        $modalInstance.dismiss('cancel');
      }
    };

  }

})();