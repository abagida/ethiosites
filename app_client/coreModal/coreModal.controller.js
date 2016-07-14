(function () {

  angular
    .module('ethiosite')
    .controller('coreModalCtrl', coreModalCtrl);

  coreModalCtrl.$inject = ['$modalInstance', 'loc8rData', 'locationData'];
  function coreModalCtrl ($modalInstance, loc8rData, locationData) {
    var vm = this;
    vm.locationData = locationData;

    vm.onSubmit = function () {
      vm.formError = "";
      if (!vm.formData.coreText) {
        vm.formError = "All fields required, please try again";
        return false;
      } else {
        vm.doAddCore(vm.locationData.locationid, vm.formData);
      }
    };

    vm.doAddCore = function (locationid, formData) {
      loc8rData.addCoreById(locationid, {
        
        coreText : formData.coreText
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