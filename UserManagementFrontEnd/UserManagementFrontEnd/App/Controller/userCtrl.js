/// <reference path="C:\Users\raeli1\Desktop\UserManegmentTemplate\UserManagementFrontEnd\UserManagementFrontEnd\Script/angular.js" />
/// <reference path="C:\Users\raeli1\Desktop\UserManegmentTemplate\UserManagementFrontEnd\UserManagementFrontEnd\Script/angularRout.js" />
/// <reference path="../mainApp/App.js" />
app.controller('userCtrl', function ($scope, $http, userLogIn) {
    $scope.userList;
    $scope.searchAllUsers = function () {
        $http.get('http://localhost:64492/api/GetBaesdUsers').then(function (users) {
            $scope.userList = users.data;
        }, function () { });
    }

    $scope.searchAllUsersBasedOrgId = function (id) {
        $http.get('http://localhost:64492/api/GetBasedorg?orgid=' + id,{
            headers: { 'Authorization': 'Basic '+userLogIn.get().userName+':'+userLogIn.get().passWord }
        }).then(function (users) {
            $scope.userList = users.data;
        }, function () { });
    }

   

});