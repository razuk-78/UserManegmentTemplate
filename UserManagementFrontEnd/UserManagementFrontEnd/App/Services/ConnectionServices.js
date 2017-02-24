/// <reference path="C:\Users\raeli1\Desktop\UserManegmentTemplate\UserManagementFrontEnd\UserManagementFrontEnd\Script/angular.js" />
/// <reference path="C:\Users\raeli1\Desktop\UserManegmentTemplate\UserManagementFrontEnd\UserManagementFrontEnd\Script/angularRout.js" />
/// <reference path="../mainApp/App.js" />

// get all users in one org

app.factory('getAllUsers', function ($http,webAddress,header) {
    return {
        get: function () { return $http.get(webAddress.get() + 'GetBaesdUsers', { headers: header.get() }).then(function (users) { return users.data }) }
           }
});

app.factory('editUser', function ($http, webAddress, header) {
    return {
        get: function (user) { return $http.put(webAddress.get() + 'EditUser', user, { headers: header.get() }).then(function (users) { return users.data }) }
    }
});
app.factory('deleteUser', function ($http, webAddress, header) {
    return {
        get: function (user) { return $http.put(webAddress.get() + 'DeleteUser', user, { headers: header.get() }).then(function (users) { return users.data }) }
    }
});
app.factory('addUser', function ($http, webAddress, header) {
    return {
        get: function (user) { return $http.post(webAddress.get() + 'AddUser', user, { headers: header.get() }).then(function (users) { return users.data }) }
    }
});

app.factory('searchUser', function ($http, webAddress, header) {
    return {
        get: function (name) { return $http.get(webAddress.get() + 'GetBaesdUsers?name='+name , { headers: header.get() }).then(function (users) { return users.data }) }
    }
});




