/// <reference path="C:\Users\raeli1\Desktop\UserManegmentTemplate\UserManagementFrontEnd\UserManagementFrontEnd\Script/angular.js" />
/// <reference path="C:\Users\raeli1\Desktop\UserManegmentTemplate\UserManagementFrontEnd\UserManagementFrontEnd\Script/angularRout.js" />
/// <reference path="../mainApp/App.js" />
app.config(function ($routeProvider, $locationProvider) {
    //(function () { org.set(1); })();
    $locationProvider.hashPrefix('');
    $routeProvider.when('/index', {
        templateUrl: "index.html", caseInsensitiveMatch: false
    }).when('/user', { 
        templateUrl: '/app/Views/User/user.html', caseInsensitiveMatch: false
       
    }).when('/org', {
        templateUrl: "/app/Views/Org/Org.html", caseInsensitiveMatch: false
      
    }).when('/department', {
        templateUrl: "/app/Views/Department/Department.html", caseInsensitiveMatch: false
        
    }).when('/authentication', {
        templateUrl: "/app/Views/auth/authentication.html", caseInsensitiveMatch: false
        
    }).when('/login', {
        templateUrl: "/app/Views/LogIn/LogIn.html", caseInsensitiveMatch: false
       
    }).when('/userinorg', {
        templateUrl: "/app/Views/userinorg/userinorg.html", caseInsensitiveMatch: false

    }).when('/refresh', {
        templateUrl: "/app/Views/refresh/refresh.html", caseInsensitiveMatch: false
    })


});
