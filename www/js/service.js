/**
 * Created by fabrice on 4/11/2014.
 */
angular.module('starter.service', [])

    .service('bondservice', function ($http, $q) {

console.log("k");
        this.getbonds = function () {
            var deferred = $q.defer();
            $http.get('https://api.themoviedb.org/3/movie/tt1074638?api_key=587a0b5335cd9ab61abe241c25591eb9&append_to_response=releases%2Ctrailers%2Ccredits').success(function (data) {
                deferred.resolve(data);
            console.log(data);
            });

            return deferred.promise;
        }
    });