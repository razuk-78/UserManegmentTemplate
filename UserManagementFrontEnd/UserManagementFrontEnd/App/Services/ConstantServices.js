

app.factory('header', function (userLogIn) {
    var header = {};
    return {
        
        get:function(){
            header = { 'Authorization': 'Basic ' + userLogIn.userName + ':' + userLogIn.passWord }
           return header;
         
     
    }
    }
   

});
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