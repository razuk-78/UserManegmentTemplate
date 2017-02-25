/// <reference path="C:\Users\raeli1\Desktop\UserManegmentTemplate\UserManagementFrontEnd\UserManagementFrontEnd\Script/angular.js" />
/// <reference path="C:\Users\raeli1\Desktop\UserManegmentTemplate\UserManagementFrontEnd\UserManagementFrontEnd\Script/angularRout.js" />
/// <reference path="../mainApp/App.js" />
app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider.when('/index', {
     templateUrl: "index.html",
    }).when('/user', { 
       templateUrl: '/app/Views/User/user.html',
       
    }).when('/org', {
        templateUrl: "/app/Views/Org/Org.html",
      
    }).when('/department', {
        templateUrl: "/app/Views/Department/Department.html",
        
    }).when('/authentication', {
        templateUrl: "/app/Views/auth/authentication.html",
        
    }).when('/login', {
        templateUrl: "/app/Views/LogIn/LogIn.html",
       
    })


});
