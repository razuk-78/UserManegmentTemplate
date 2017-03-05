/// <reference path="C:\Users\razuk\Desktop\github\UserManegmentTemplate2\UserManagementFrontEnd\UserManagementFrontEnd\Script/angular.js" />
/// <reference path="C:\Users\razuk\Desktop\github\UserManegmentTemplate2\UserManagementFrontEnd\UserManagementFrontEnd\Script/jquery-3.1.1.js" />
/// <reference path="../mainApp/App.js" />
app.controller('userCtrl', function (refresh,$scope, userLogIn, getAllUsers, editUser, deleteUser, addUser, $location, searchUser, authCheck) {
    $scope.user = {}; $scope.userList;
    getAllUsers.get().then(function (m) { $scope.userList = m });

    $scope.addUser = function () {addUser.post($scope.user).then(function () { refresh.send('/user'); }, function () { }); }
    $scope.active = [];
  
    $scope.chk = true;
    var index;
    $scope.editee = function (c, i) {
        index = i; authCheck.check('read', ['read', 'write'], function () {
            if ($scope.chk)
            { $.each($scope.active, function (i, v) { $scope.active[i] = false; }); $scope.active[index] = true; $scope.chk = false; }
            else {
                $scope.active[index] = false; $scope.chk = true;
            }
        }, function () { alert('access deny'); $.each($scope.active, function (i, v) { $scope.active[i] = false; }); });
    }
    $scope.saveeditee = function (user) {
        editUser.put(user)
            .then(function (userd)
            {
                $scope.userList = ""; $scope.userList = userd; alert('success');
                $.each($scope.active, function (i, v) { $scope.active[i] = false; })
            }, function () { alert('Error'); });
    }
   
    
    $scope.delete = function (user) {
        deleteUser.put(user).then(function (user) {
            $scope.userList = "";   $scope.userList = user;
        });
    }
  
   $scope.search = function (name) {
       if (!name) {
           getAllUsers.get()
               .then(function (m) { $scope.userList = m }); return;
       } searchUser.get(name).then(function (users) { $scope.userList = users });
   }

 

   

});