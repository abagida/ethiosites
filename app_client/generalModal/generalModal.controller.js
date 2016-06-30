(function () {

  angular
    .module('ethiosite')
    .controller('generalModalCtrl', generalModalCtrl);

  generalModalCtrl.$inject = ['$modalInstance', 'loc8rData', 'locationData'];
  function generalModalCtrl ($modalInstance, loc8rData, locationData) {
    var vm = this;
    vm.locationData = locationData;

    vm.onSubmit = function () {
      vm.formError = "";
      if (!vm.formData.generalText) {
        vm.formError = "All fields required, please try again";
        return false;
      } else {
        vm.doAddGeneral(vm.locationData.locationid, vm.formData);
      }
    };

    vm.doAddGeneral = function (locationid, formData) {
      loc8rData.addGeneralById(locationid, {
        
        generalText : formData.generalText
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