(function() {

  angular
  .module('ethiosite')
  .service('loc8rData', loc8rData);

  loc8rData.$inject = ['$http', 'authentication'];
  function loc8rData ($http, authentication) {
    var locationByCoords = function (lat, lng) {
      return $http.get('/api/locations?lng=' + lng + '&lat=' + lat + '&maxDistance=20000');
    };

    var locationById = function (locationid) {
      return $http.get('/api/locations/' + locationid);
    };

    var addReviewById = function (locationid, data) {
      return $http.post('/api/locations/' + locationid + '/reviews', data, {
        headers: {
          Authorization: 'Bearer '+ authentication.getToken()
        }
      });
    };
    var addGeneralById = function (locationid, data) {
      return $http.post('/api/locations/' + locationid + '/generals', data, {
        headers: {
          Authorization: 'Bearer '+ authentication.getToken()
        }
      });
    };
    var addTransmissionById = function (locationid, data) {
      return $http.post('/api/locations/' + locationid + '/transmissions', data, {
        headers: {
          Authorization: 'Bearer '+ authentication.getToken()
        }
      });
    };
    var addCoreById = function (locationid, data) {
      return $http.post('/api/locations/' + locationid + '/cores', data, {
        headers: {
          Authorization: 'Bearer '+ authentication.getToken()
        }
      });
    };

 var addRanById = function (locationid, data) {
      return $http.post('/api/locations/' + locationid + '/rans', data, {
        headers: {
          Authorization: 'Bearer '+ authentication.getToken()
        }
      });
    };

    var addIpById = function (locationid, data) {
      return $http.post('/api/locations/' + locationid + '/ips', data, {
        headers: {
          Authorization: 'Bearer '+ authentication.getToken()
        }
      });
    };

var addPowerById = function (locationid, data) {
      return $http.post('/api/locations/' + locationid + '/powers', data, {
        headers: {
          Authorization: 'Bearer '+ authentication.getToken()
        }
      });
    };

    var addStaffById = function (locationid, data) {
      return $http.post('/api/locations/' + locationid + '/staffs', data, {
        headers: {
          Authorization: 'Bearer '+ authentication.getToken()
        }
      });
    };

    return {
      locationByCoords : locationByCoords,
      locationById : locationById,
      addReviewById : addReviewById,
      addGeneralById : addGeneralById,
      addTransmissionById : addTransmissionById,
      addCoreById : addCoreById,
      addRanById : addRanById,
      addIpById : addIpById,
      addPowerById : addPowerById,
      addStaffById : addStaffById

    };
  }

})();