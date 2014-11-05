// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','starter.service'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.bonds', {
      url: "/bonds",
      views: {
        'menuContent' :{
          templateUrl: "templates/bonds.html",
            controller: 'BondsCtrl'
        }
      }
    })

    .state('app.map', {
      url: "/map",
      views: {
        'menuContent' :{
          templateUrl: "templates/map.html"
        }
      }
    })


    .state('app.enkelebond', {
      url: "/bonds/whoami/:bondId",
      views: {
        'menuContent' :{
          templateUrl: "templates/bond.html",
          controller: 'SingleBondCtrl'
        }
      }
    })

      .state('app.pictures', {
          url: "/bonds/pics/:bondId",
          views: {
              'menuContent' :{
                  templateUrl: "templates/bondpictures.html",
                  controller: 'SingleBondPictureCtrl'
              }
          }
      })

      .state('app.moviesbond', {
          url: "/bonds/movies/:bondId",
          views: {
              'menuContent' :{
                  templateUrl: "templates/bondmovies.html",
                  controller: 'SingleBondMovieCtrl'
              }
          }
      })

    .state('girls', {
        url: "/girls",
        abstract: true,
        templateUrl: "templates/menuGirl.html",
        controller: 'GirlsCtrl'
    })

      .state('girls.bondgirls', {
          url: "/bondgirls",
          views: {
              'menuContent' :{
                  templateUrl: "templates/girls.html",
                  controller: 'BondgirlsCtrl'
              }
          }
      });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/bonds');
});

