(function () {

  angular
    .module('ethiosite')
    .controller('ranModalCtrl', ranModalCtrl);

  ranModalCtrl.$inject = ['$modalInstance', 'loc8rData', 'locationData'];
  function ranModalCtrl ($modalInstance, loc8rData, locationData) {
    var vm = this;
    vm.locationData = locationData;

    vm.onSubmit = function () {
      vm.formError = "";
      if (!vm.formData.ranText) {
        vm.formError = "All fields required, please try again";
        return false;
      } else {
        vm.doAddRan(vm.locationData.locationid, vm.formData);
      }
    };

    vm.doAddRan = function (locationid, formData) {
      loc8rData.addRanById(locationid, {
        
        ranText : formData.ranText
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