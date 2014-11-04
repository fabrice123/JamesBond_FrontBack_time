/**
 * Created by fabrice on 4/11/2014.
 */
angular.module('starter.service', [])

    .service('bondservice', function ($http, $q) {

console.log("k");
        this.getsinglebond = function (bondid) {
            var deferred = $q.defer();

console.log(bondid);

            $http.get('https://api.themoviedb.org/3/person/'+bondid+'?api_key=587a0b5335cd9ab61abe241c25591eb9').success(function (data) {
                deferred.resolve(data);
            console.log(data);
            });

            return deferred.promise;
        }
    });