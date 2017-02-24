/// <reference path="C:\Users\raeli1\Desktop\UserManegmentTemplate\UserManagementFrontEnd\UserManagementFrontEnd\Script/angular.js" />
/// <reference path="C:\Users\raeli1\Desktop\UserManegmentTemplate\UserManagementFrontEnd\UserManagementFrontEnd\Script/angularRout.js" />
/// <reference path="../mainApp/App.js" />
app.controller('userCtrl', function ($scope, $http, userLogIn, getAllUsers, editUser, deleteUser, addUser, $location, searchUser) {
    $scope.userList;
    $scope.user={};
    getAllUsers.get().then(function (m) { $scope.userList = m });
    $scope.edite = function (user) { editUser.get(user).then(function () { $location.path("/org"); }); }
    $scope.delete = function (user) {
        deleteUser.get(user).then(function (user) {
            $scope.userList = user;
        });
    }
    $scope.add = function () { addUser.get($scope.user).then(function (users) { $scope.userList = users; $scope.user =""; });}
    $scope.search = function (name) { searchUser.get(name).then(function (users) { $scope.userList=users }); }

 

   

});