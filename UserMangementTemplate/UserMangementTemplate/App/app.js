var app = angular.module('myApp', ['ngRoute']);

app.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {

    
    $locationProvider.hashPrefix('');
    // default route


    $routeProvider.when('/login', { //Routing for show list of employee
        templateUrl: 'App/Views/Home/login.html',
        controller: ''
    })
    $routeProvider.when('/home', { //Routing for show list of employee
        templateUrl: 'App/Views/Home/Home.html',
        controller: ''
    })
}]);
