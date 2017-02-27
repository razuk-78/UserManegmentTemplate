/// <reference path="C:\Users\razuk\Desktop\github\UserManegmentTemplate2\UserManagementFrontEnd\UserManagementFrontEnd\Script/angular.js" />
/// <reference path="C:\Users\razuk\Desktop\github\UserManegmentTemplate2\UserManagementFrontEnd\UserManagementFrontEnd\Script/jquery-3.1.1.js" />
/// <reference path="../mainApp/App.js" />

app.controller('departmentCtrl', function ($scope, $location, getAllDepBasedOrgId, getAllDepBasedOrgIdDepId, addDep, editDep, editDepParent, editAuthToDep, deleteDep) {

   //check ?!
    $scope.edite = function (dep) { editDep.put(dep).then(function (deps) { }, function (response) { return response }) }
    $scope.editeParent = function (dep) { editDepParent.put(dep).then(function (deps) { }, function (response) { return response }) }
    $scope.add = function (dep) { addDep.post(dep).then(function (deps) { }, function (response) { return response }) }
    $scope.delete = function (dep) { deleteDep.put(dep).then(function (deps) { }, function (response) { return response }) }
    $scope.getAllDepBasedOrgId = function (orgid) { getAllDepBasedOrgId.get(orgid).then(function (users) { }, function (response) { return response }) }
    $scope.getAllDepBasedOrgIdDepId = function (orgid, depid) { getAllDepBasedOrgIdDepId.get(orgid, depid).then(function (users) { }, function (response) { return response }) }
   
    

});