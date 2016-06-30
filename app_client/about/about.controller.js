(function () {

  angular
    .module('ethiosite')
    .controller('aboutCtrl', aboutCtrl);

  function aboutCtrl() {
    var vm = this;

    vm.pageHeader = {
      title: 'About Site In4mer'
    };
    vm.main = {
      content: 'Site In4mer is created to help Ethio-Telecom colleagues find locations and  informations of Network Elements .\n\n'
          };
  }

})();