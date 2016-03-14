(function () {

  angular
    .module('loc8rApp')
    .controller('aboutCtrl', aboutCtrl);

  function aboutCtrl() {
    var vm = this;

    vm.pageHeader = {
      title: 'About Site-Locator'
    };
    vm.main = {
      content: 'Site-Locator is created to help Ethio-Telecom colleagues find locations and  informations of Network sites .\n\n'
          };
  }

})();