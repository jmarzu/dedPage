var app = angular.module('DedElectric', ['ui.router', 'ui.materialize']);
console.log('gurame gurame');

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .state('shows', {
      url: '/shows',
      templateUrl: 'views/shows.html',
      controller: 'ShowsCtrl'
    })
    .state('music', {
      url: '/music',
      templateUrl: 'views/music.html',
      controller: 'MusicCtrl'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'views/contact.html',
      controller: 'ContactCtrl' 
    })
    .state('merch', {
      url: '/merch',
      templateUrl: 'views/merch.html',
      controller: 'MerchCtrl'
    })
    .state('art', {
      url: '/art',
      templateUrl: 'app/views/art.html',
      controller: 'ArtCtrl'
    });
    // $locationProvider.html5Mode(true);

}]);
