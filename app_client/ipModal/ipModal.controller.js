(function () {

  angular
    .module('ethiosite')
    .controller('ipModalCtrl', ipModalCtrl);

  ipModalCtrl.$inject = ['$modalInstance', 'loc8rData', 'locationData'];
  function ipModalCtrl ($modalInstance, loc8rData, locationData) {
    var vm = this;
    vm.locationData = locationData;

    vm.onSubmit = function () {
      vm.formError = "";
      if (!vm.formData.ipText) {
        vm.formError = "All fields required, please try again";
        return false;
      } else {
        vm.doAddIp(vm.locationData.locationid, vm.formData);
      }
    };

    vm.doAddIp = function (locationid, formData) {
      loc8rData.addIpById(locationid, {
        
        ipText : formData.ipText
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