/// <reference path="C:\Users\razuk\Desktop\github\UserManegmentTemplate2\UserManagementFrontEnd\UserManagementFrontEnd\Script/angular.js" />
/// <reference path="C:\Users\razuk\Desktop\github\UserManegmentTemplate2\UserManagementFrontEnd\UserManagementFrontEnd\Script/jquery-3.1.1.js" />
/// <reference path="../mainApp/App.js" />
app.controller('orgCtrl', function ($scope, userAuth, authCheck, getAllOrg, addOrg, editOrg, deleteOrg,$location) {
    //
    authCheck.check('read', userAuth.get(), function () { console.log('trueeeeeeeeeeeee'); return; }, function () { console.log('falseeeeeeeeeeeeee'); $location.path("/login"); return; });

    //$scope.getOrgs = getAllOrg.get().then(function (orgs) { }, function (response) { return response });
    //$scope.addOrg = addOrg.post(org).then(function (orgs) { }, function (response) { return response });
    //$scope.editeOrg = editOrg.put(org).then(function (orgs) { }, function (response) { return response });
    //$scope.delete = deleteOrg.put(org).then(function (orgs) { }, function (response) { return response });

});