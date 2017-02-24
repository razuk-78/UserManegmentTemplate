/// <reference path="C:\Users\raeli1\Desktop\UserManegmentTemplate\UserManagementFrontEnd\UserManagementFrontEnd\Script/angular.js" />
/// <reference path="C:\Users\raeli1\Desktop\UserManegmentTemplate\UserManagementFrontEnd\UserManagementFrontEnd\Script/angularRout.js" />
/// <reference path="../mainApp/App.js" />
app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider.when('/index', {
     templateUrl: "index.html",
    }).when('/user', { 
       templateUrl: '/app/Views/User/user.html',
       controller:'userCtrl'
    }).when('/org', {
        templateUrl: "/app/Views/Org/Org.html",
        controller: "orgCtrl"
    }).when('/department', {
        templateUrl: "/app/Views/Department/Department.html",
        controller: "departmentCtrl"
    }).when('/authentication', {
        templateUrl: "/app/Views/auth/authentication.html",
        controller: "authCtrl"
    }).when('/logIn', {
        templateUrl: "/app/Views/LogIn/LogIn.html",
        controller: "logInCtrl"
    })


});
