/// <reference path="C:\Users\razuk\Desktop\github\UserManegmentTemplate2\UserManagementFrontEnd\UserManagementFrontEnd\Script/angular.js" />
/// <reference path="C:\Users\razuk\Desktop\github\UserManegmentTemplate2\UserManagementFrontEnd\UserManagementFrontEnd\Script/angularRout.js" />
/// <reference path="C:\Users\razuk\Desktop\github\UserManegmentTemplate2\UserManagementFrontEnd\UserManagementFrontEnd\Script/jquery-3.1.1.js" />
/// <reference path="Objects.js" />


app.factory('userLogIn', function () {
    var orgId;
    var userl = { userName: 0, passWord: 0 };
    return {

        set: function (user, pass) {
            userl.userName = user;
            userl.passWord = pass;
        },
        get: function () {
            return userl;
        }
    }

});
app.factory('header', function (userLogIn) {
    var header = {};
    return {
        
        get:function(){
            header = { 'Authorization': 'Basic ' + userLogIn.userName + ':' + userLogIn.passWord }
           return header;
         
     
    }
    }
   

});
app.factory('org', function () {
    var orgid;
    return {
        set: function (id) { orgid = id },
        get: function () { return orgid }
    }
});
app.factory('webAddress', function () {
    var address ='http://localhost:64492/api/';
    return {
        get: function () {
            return address;
        }
    }

});
app.factory('userAuth',function (){
               var auth="";
               return {
                   set: function (ath) { auth = ath; },
                   get: function () { return auth;}
               }
});
app.service('authCheck', function () {
    
    
   this.check= function (type, auth, T, E) {
            var b = false;
            if (auth) {
                for (var i = 0; i < auth.length; i++) {
                    if (auth[0] == type) {
                        T();
                        return;
                    }

                }
                if (!b) { E(); return; }
            } else {
               E();
               return;
            }

            
        }
   
    
})
app.factory('refresh', function ($location) {
    var meUrl = ""; var toUrl = ""
    return {
        send: function (me) { meUrl = me; $location.path("/refresh"); }, resend: function () { $location.path(meUrl);  }
    }
});