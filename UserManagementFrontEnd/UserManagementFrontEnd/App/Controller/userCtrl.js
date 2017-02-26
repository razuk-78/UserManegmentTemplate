/// <reference path="C:\Users\razuk\Desktop\github\UserManegmentTemplate2\UserManagementFrontEnd\UserManagementFrontEnd\Script/angular.js" />
/// <reference path="C:\Users\razuk\Desktop\github\UserManegmentTemplate2\UserManagementFrontEnd\UserManagementFrontEnd\Script/jquery-3.1.1.js" />
/// <reference path="../mainApp/App.js" />
app.controller('userCtrl', function ($scope, userLogIn, getAllUsers, editUser, deleteUser, addUser, $location, searchUser) {
    $scope.userList;
    $scope.user="";
    getAllUsers.get().then(function (m) { $scope.userList = m });
    $scope.edite = function (user) { editUser.put(user).then(function () { }); }
    $scope.delete = function (user) {
        deleteUser.put(user).then(function (user) {
            $scope.userList = user;
        });
    }
    $scope.add = function () { addUser.get($scope.user).then(function (users) { $scope.userList = users; $scope.user =""; });}
    $scope.search = function (name) { searchUser.get(name).then(function (users) { $scope.userList=users }); }

 

   

});