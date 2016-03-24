(function () {

  angular
    .module('loc8rApp')
    .service('geolocation', geolocation);

  function geolocation () {
    var getPosition = function (cbSuccess, cbError, cbNoGeo) {
      if (navigator.geolocation) {
        
      }
      else {
        cbNoGeo();
      }
    };
    return {
      getPosition : getPosition
    };
  }


})();