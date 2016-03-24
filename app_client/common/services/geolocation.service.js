(function () {

  angular
    .module('loc8rApp')
    .service('geolocation', geolocation);

  function geolocation () {
    
    return {
      getPosition : getPosition
    };
  }


})();