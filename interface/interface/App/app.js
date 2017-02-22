

var app = angular.module('myApp', ['ngRoute']);
//angular.module('Authentication', []);
//angular.module('Home', []);

app.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {

    
    $locationProvider.hashPrefix('');
    // default route


    $routeProvider.when('/login', { //Routing for show list of Login
        templateUrl: 'App/Views/Home/login.html',
        controller: ''
    })
    $routeProvider.when('/home', { //Routing for show list of Home

        templateUrl: 'App/Views/Home/Home.html',
        controller: ''
    })

    $routeProvider.when('/UserList', { //Routing for show list of User
        
        templateUrl: '/App/Views/User/UserList.html',
        controller: 'UserController'
    })
    $routeProvider.when('/DepartmentList', { //Routing for show list of DepartmentList
        templateUrl: '/App/Views/Department/DepartmentList.html',
        controller: 'DepartmentController'
    })
    $routeProvider.when('/AuthList', { //Routing for show list of DepartmentList
        templateUrl: '/App/Views/Department/AuthList.html',
        controller: 'AuthController'
    })
    $routeProvider.when('/Admin', { //Routing for show list of DepartmentList
        templateUrl: '/App/Views/Mangment/AdminBoard.html',
       
    })
    $routeProvider.when('/AddUserToDepartment', { //Routing for show list of DepartmentList
        templateUrl: '/App/Views/Department/AddUserToDepartment.html',

    })
  
    $routeProvider.when('/OrganiztionList', { //Routing for show list of DepartmentList
        templateUrl: '/App/Views/Mangment/OrganiztionList.html',
        controller: 'OrganiztionController'

    })
    .when('/AddOrganiztion', { //Routing for add Organiztion
        templateUrl: '/App/Views/Mangment/AddOrganiztion.html',
        controller: 'OrganiztionController'
    })
//    $routeProvider
//       .when('/login', {
//           controller: 'LoginController',
//           templateUrl: '/App/Views/Login/modules/authentication/views/login1.html',
//           hideMenus: true
//       })

//       .when('/', {
//           controller: 'HomeController',
//           templateUrl: '/App/Views/Login/modules/home/views/home.html'
//       })

//       .otherwise({ redirectTo: '/login' });
//}])

//.run(['$rootScope', '$location', '$cookieStore', '$http',
//    function ($rootScope, $location, $cookieStore, $http) {
//        // keep user logged in after page refresh
//        $rootScope.globals = $cookieStore.get('globals') || {};
//        if ($rootScope.globals.currentUser) {
//            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
//        }

//        $rootScope.$on('$locationChangeStart', function (event, next, current) {
//            // redirect to login page if not logged in
//            if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
//                $location.path('/login');
//            }
//        });
}]);



