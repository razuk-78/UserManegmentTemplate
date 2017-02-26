/// <reference path="C:\Users\raeli1\Desktop\UserManegmentTemplate\UserManagementFrontEnd\UserManagementFrontEnd\Script/angular.js" />
/// <reference path="C:\Users\raeli1\Desktop\UserManegmentTemplate\UserManagementFrontEnd\UserManagementFrontEnd\Script/angularRout.js" />
/// <reference path="../mainApp/App.js" />
 
// get all users in one org
(function myfunction() {
    //get 
    //getAllUsers.get().then(function(users){},function(response){});
    app.factory('getAllUsers', function ($http, webAddress, header) {
        return {
            get: function () { return $http.get(webAddress.get() + 'GetBaesdUsers', { headers: header.get() }).then(function (users) { return users.data }, function (response) {return response }) }
        }
    });
    //put
    //editUser.put(user).then(function(users){},function(response){});
    app.factory('editUser', function ($http, webAddress, header) {
        return {
            put: function (user) { return $http.put(webAddress.get() + 'EditUser', user, { headers: header.get() }).then(function (users) { return users.data }, function (response) { return response }) }
        }
    });
    //put
    //deleteUser.put(user).then(function (users) { }, function (response) { });
    app.factory('deleteUser', function ($http, webAddress, header) {
        return {
            put: function (user) { return $http.put(webAddress.get() + 'DeleteUser', user, { headers: header.get() }).then(function (users) { return users.data }, function (response) { return response }) }
        }
    });
    //post
    //addUser.post(user).then(function (users) { }, function (response) { });
    app.factory('addUser', function ($http, webAddress, header) {
        return {
            post: function (user) { return $http.post(webAddress.get() + 'AddUser', user, { headers: header.get() }).then(function (users) { return users.data }, function (response) { return response }) }
        }
    });
    //post
    //searchUser.get(name).then(function (users) { }, function (response) { });
    app.factory('searchUser', function ($http, webAddress, header) {
        return {
            get: function (name) { return $http.get(webAddress.get() + 'GetBaesdUsers?name=' + name, { headers: header.get() }).then(function (users) { return users.data }, function (response) { return response }) }
        }
    });
})();




//get add edite department department Functions
(function(){
    //get
    //getAllDepBasedOrgId.get(orgid).then(function(users){},function(response){return response})
    app.factory('getAllDepBasedOrgId', function ($http, webAddress, header) {
        return {
            get: function (orgid) { return $http.get(webAddress.get() + 'GetBasedDep?orgid=' + orgid, { headers: header.get() }).then(function (dep) { return dep.data }, function (response) { return response }) }
        }
    });
    //get
    //getAllDepBasedOrgIdDepId.get(orgid, depid).then(function(users){},function(response){return response})
    app.factory('getAllDepBasedOrgIdDepId', function ($http, webAddress, header) {
        return {
            get: function (orgid, depid) { return $http.get(webAddress.get() + 'GetBasedDep?orgid=' + orgid + '&departmentId=' + depid, { headers: header.get() }).then(function (dep) { return dep.data }, function (response) { return response }) }
        }
    });
    //post
    // parameter: DepAddEditeDelete.DepDetailes Dep
    //addDep.post(dep).then(function(deps){},function(response){return response})
    app.factory('addDep', function ($http, webAddress, header) {
        return {
            // parameter: DepAddEditeDelete.DepDetailes Dep
            post: function (dep) { return $http.post(webAddress.get() + 'AddDep', dep, { headers: header.get() }).then(function (dep) { return dep.data }) }
        }
    });
    //put
    // parameter: DepAddEditeDelete.DepDetailes Dep
    //editDep.put(dep).then(function(deps){},function(response){return response})
    app.factory('editDep', function ($http, webAddress, header) {
        return {
            // parameter: DepAddEditeDelete.DepDetailes Dep
            put: function (dep) { return $http.put(webAddress.get() + 'EditDep', dep, { headers: header.get() }).then(function (dep) { return dep.data }, function (response) { return response }) }
        }
    });
    //put
    // parameter: DepAddEditeDelete.DepDetailes Dep
    //editDepParent.put(dep).then(function(deps){},function(response){return response})
    app.factory('editDepParent', function ($http, webAddress, header) {
        return {
            // parameter: DepAddEditeDelete.DepDetailes Dep
            put: function (dep) { return $http.put(webAddress.get() + 'EditDepParent', dep, { headers: header.get() }).then(function (dep) { return dep.data }, function (response) { return response }) }
        }
    });
    //put
    // parameter: DepAddEditeDelete.DepDetailes Dep
    //editAuthToDep.put(dep).then(function(deps){},function(response){return response})
    app.factory('editAuthToDep', function ($http, webAddress, header) {
        return {
            // parameter: DepAddEditeDelete.DepDetailes Dep
            put: function (dep) { return $http.put(webAddress.get() + 'EditAuthToDep', dep, { headers: header.get() }).then(function (dep) { return dep.data }) }
        }
    });
    //put
    // parameter: DepAddEditeDelete.DepDetailes Dep
    //deleteDep.put(dep).then(function(deps){},function(response){return response})
    app.factory('deleteDep', function ($http, webAddress, header) {
        return {
            // parameter: DepAddEditeDelete.DepDetailes Dep
            put: function (dep) { return $http.put(webAddress.get() + 'DeleteDep', dep, { headers: header.get() }).then(function (dep) { return dep.data }) }
        }
    });

})();

//get add edite userInOrg

(function () {
    //put
    //editUserInOrg.put(user).then(function(user){},function(response){return response})
    app.factory('editUserInOrg', function ($http, webAddress, header) {
        return {
            //parameter: AddEditDeleteUser.UserDetailes User
            put: function (user) { return $http.put(webAddress.get() + 'EditUserInOrg', user, { headers: header.get() }).then(function (user) { return user.data }, function (response) { return response }) }
        }
    });
    //put
    //deleteUserInOrg.put(user).then(function(user){},function(response){return response});
    app.factory('deleteUserInOrg', function ($http, webAddress, header) {
        return {
            //parameter: AddEditDeleteUser.UserDetailes User
            put: function (user) { return $http.put(webAddress.get() + 'DeleteUserInOrg', user, { headers: header.get() }).then(function (user) { return user.data }, function (response) { return response }) }
        }
    });
    //post
    //addUserInOrg.post(user).then(function(user){},function(response){return response})
    app.factory('addUserInOrg', function ($http, webAddress, header) {
        return {
            //parameter: AddEditDeleteUser.UserDetailes User
            post: function (user) { return $http.post(webAddress.get() + 'addUserInOrg', user, { headers: header.get() }).then(function (user) { return user.data }) }
        }
    });
    //get
    //getUIOBasedOrg.get(OrgId).then(function(user){},function(response){return response})
    app.factory('getUIOBasedOrg', function ($http, webAddress, header) {
        return {
            //parameter: int orgid
            //GetUserBasedOrgId
            get: function (OrgId) { return $http.get(webAddress.get() + 'getBasedOrg?OrgId=' + OrgId, { headers: header.get() }).then(function (user) { return user.data }) }
        }
    });
    //getUserBasedAuthOrgId.get(OrgId, auth).then(function(user){},function(response){return response})
    app.factory('getUserBasedAuthOrgId', function ($http, webAddress, header) {
        return {
            //parameter: string auth, int Orgid
            //function : GetAuthOrg
            get: function (OrgId, auth) { return $http.get(webAddress.get() + 'GetBasedAuth?OrgId=' + OrgId + '&auth=' + auth, { headers: header.get() }).then(function (user) { return user.data }) }
        }
    });
    //getBasedAuth.get(OrgId, auth, Dep).then(function(user){},function(response){return response})
    app.factory('getBasedAuth', function ($http, webAddress, header) {
        return {
            //parameter: string auth, int Orgid
            //function : GetAuthOrgDep(string auth, int Orgid, int Dep)
            get: function (OrgId, auth, Depid) { return $http.get(webAddress.get() + 'GetBasedAuth?OrgId=' + OrgId + '&auth=' + auth + '&Dep=' + Depid, { headers: header.get() }).then(function (user) { return user.data }, function (response) { return response }) }
        }
    });

})();
//get add edite Org
(function () {
    //get
    //getAllOrg.get().then(function(orgs){},function(response){return response})
    app.factory('getAllOrg', function ($http, webAddress, header) {
        return {

            get: function () { return $http.get(webAddress.get() + 'GetBasedOrg', { headers: header.get() }).then(function (user) { return user.data }, function (response) { return response }) }
        }
    });
    //post
    //addOrg.post(org).then(function(orgs){},function(response){return response})
    app.factory('addOrg', function ($http, webAddress, header) {
        return {
            //parameter: org
            post: function (org) { return $http.post(webAddress.get() + 'AddOrg', org, { headers: header.get() }).then(function (user) { return user.data }, function (response) { return response }) }
        }
    });
    //put
    //editOrg.put(org).then(function(orgs){},function(response){return response})
    app.factory('editOrg', function ($http, webAddress, header) {
        return {
            //parameter: org
            put: function (org) { return $http.put(webAddress.get() + 'EditOrg', org, { headers: header.get() }).then(function (org) { return org.data }, function (response) { return response }) }
        }
    });
    //put
    //deleteOrg.put(org).then(function(orgs){},function(response){return response})
    app.factory('deleteOrg', function ($http, webAddress, header) {
        return {
            //parameter: org
            put: function (org) { return $http.put(webAddress.get() + 'deleteOrg', org, { headers: header.get() }).then(function (user) { return user.data }, function (response) { return response }) }
        }
    });
})();
//get log in
(function () {
    //get
    //getLogIn.get().then(function(username,orgid){},function(response){return response})
    app.factory('getLogIn', function ($http, webAddress, header) {
        return {
            get: function (username, orgid) { return $http.get(webAddress.get() + 'GetLogIn', { headers: header.get() }).then(function (user) { return user.data }, function (response) { return response }) }
        }
    });
})();
