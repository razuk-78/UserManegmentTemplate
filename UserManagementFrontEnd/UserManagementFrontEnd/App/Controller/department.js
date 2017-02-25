/// <reference path="C:\Users\razuk\Desktop\github\UserManegmentTemplate2\UserManagementFrontEnd\UserManagementFrontEnd\Script/angular.js" />
/// <reference path="C:\Users\razuk\Desktop\github\UserManegmentTemplate2\UserManagementFrontEnd\UserManagementFrontEnd\Script/jquery-3.1.1.js" />
/// <reference path="../mainApp/App.js" />
app.controller('departmentCtrl', function ($scope, $location, editUserInOrg, deleteUserInOrg, getUIOBasedOrg, getBasedAuth, getUserBasedAuthOrgId) {

    //parameter: AddEditDeleteUser.UserDetailes User
   $scope.edite=  editUserInOrg.put(user).then(function(user){},function(response){return response})
   $scope.delete=  deleteUserInOrg.put(user).then(function(user){},function(response){return response});
   $scope.add=     addUserInOrg.post(user).then(function(user){},function(response){return response})
   $scope.getUBO = getUIOBasedOrg.get(OrgId).then(function (user) { }, function (response) { return response })
   $scope.getUBAO = getUserBasedAuthOrgId.get(OrgId, auth).then(function (user) { }, function (response) { return response })
   $scope.getUBAOD=  getBasedAuth.get(OrgId, auth, Dep).then(function(user){},function(response){return response})
    

});