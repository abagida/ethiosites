(function () {

  angular
    .module('ethiosite')
    .controller('staffModalCtrl', staffModalCtrl);

  staffModalCtrl.$inject = ['$modalInstance', 'loc8rData', 'locationData'];
  function staffModalCtrl ($modalInstance, loc8rData, locationData) {
    var vm = this;
    vm.locationData = locationData;

    vm.onSubmit = function () {
      vm.formError = "";
      if (!vm.formData.staffText) {
        vm.formError = "All fields required, please try again";
        return false;
      } else {
        vm.doAddStaff(vm.locationData.locationid, vm.formData);
      }
    };

    vm.doAddStaff = function (locationid, formData) {
      loc8rData.addStaffById(locationid, {
        
        staffText : formData.staffText
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