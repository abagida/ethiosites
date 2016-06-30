(function () {

  angular
    .module('ethiosite')
    .controller('transmissionModalCtrl', transmissionModalCtrl);

  transmissionModalCtrl.$inject = ['$modalInstance', 'loc8rData', 'locationData'];
  function transmissionModalCtrl ($modalInstance, loc8rData, locationData) {
    var vm = this;
    vm.locationData = locationData;

    vm.onSubmit = function () {
      vm.formError = "";
      if (!vm.formData.transmissionText) {
        vm.formError = "All fields required, please try again";
        return false;
      } else {
        vm.doAddTransmission(vm.locationData.locationid, vm.formData);
      }
    };

    vm.doAddTransmission = function (locationid, formData) {
      loc8rData.addTransmissionById(locationid, {
        
        transmissionText : formData.transmissionText
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