/// <reference path="C:\Users\raeli1\Desktop\UserManegmentTemplate\UserManagementFrontEnd\UserManagementFrontEnd\Script/angular.js" />
/// <reference path="C:\Users\raeli1\Desktop\UserManegmentTemplate\UserManagementFrontEnd\UserManagementFrontEnd\Script/angularRout.js" />
/// <reference path="../mainApp/App.js" />

// get all users in one org
app.factory('userLogIn', function () {
    var orgId;
    var userl = [{username:0,passWord:0}];
    return {
        
        set: function (user,pass) {
            userl.username = user;
            userl.passWord = pass;
        },
    get:function () {
        return  userl;
    }
}

});
app.factory('org', function () {
    var orgid;
    return {
        set: function (id) {orgid=id},
        get:function(){return orgid}
    }
});