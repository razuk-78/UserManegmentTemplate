/// <reference path="C:\Users\raeli1\Desktop\UserManegmentTemplate\UserManagementFrontEnd\UserManagementFrontEnd\Script/angular.js" />
/// <reference path="C:\Users\raeli1\Desktop\UserManegmentTemplate\UserManagementFrontEnd\UserManagementFrontEnd\Script/jquery-3.1.1.js" />


app.controller('departmentCtrl', function ($scope,org, $location, getAllDepBasedOrgId, getAllDepBasedOrgIdDepId, addDep, editDep, editDepParent, editAuthToDep, deleteDep, getUnregisterdUsers) {
    $scope.obj = [{ Child: [2, 3, 4], parentId: 0, Auth: ['read', 'write'], Dep: { Id: 1, Name: "soft", }, AdminId: 0 },
     { Id: 2, Child: [13, 14], parentId: 1, Name: "soft", Auth: ['read', 'write'], AdminId: 0 },
     { Dep: { Id: 3, Name: "hardware" }, Child: [40], parentId: 1, Auth: ['read', 'write'], AdminId: 0 },
     {  Dep: {Id: 4, Name: "c"}, Child: [16, 15], parentId: 1, Auth: ['read', 'write'], AdminId: 0 },
     { Dep: {Id: 13, Name: "f"}, Child: [130], parentId: 2, Auth: ['read', 'write'], AdminId: 0 },
     {Dep: { Id: 14,Name: "java"}, Child: [140], parentId: 2,  Auth: ['read', 'write'], AdminId: 0 },
     { Dep: {Id: 40, Name: "mobil"}, Child: [], parentId: 3, Auth: ['read', 'write'], AdminId: 0 },
     { Id: 15, Child: [], parentId: 4, Name: "tv", Auth: ['read', 'write'], AdminId: 0 },
     { Id: 16, Child: [], parentId: 4, Name: "c#", Auth: ['read', 'write'], AdminId: 0 },
     { Id: 130, Child: [], parentId: 13, Name: "hard", Auth: ['read', 'write'], AdminId: 0 },
     { Id: 140, Child: [222], parentId: 14, Name: "c++", Auth: ['read', 'write'], AdminId: 0 },
     { Id: 111, Child: [666, 333, 444], parentId: 0, Name: "angular", Auth: ['read', 'write'], AdminId: 0 },
     { Id: 222, Child: [], parentId: 140, Name: "api", Auth: ['read', 'write'], AdminId: 0 }];
    //check ?!
    $scope.edite = function (dep) { editDep.put(dep).then(function (deps) { }, function (response) { return response }) }
    $scope.editeParent = function (dep) { editDepParent.put(dep).then(function (deps) { }, function (response) { return response }) }
    $scope.add = function (dep) { addDep.post(dep).then(function (deps) { }, function (response) { return response }) }
    $scope.delete = function (dep) { deleteDep.put(dep).then(function (deps) { }, function (response) { return response }) }
    $scope.getAllDepBasedOrgId = function (orgid) { getAllDepBasedOrgId.get(org.get()).then(function (deps) { alert(deps[0].Id); $scope.obj = deps; }, function (response) { return response }) }
    $scope.getAllDepBasedOrgIdDepId = function (orgid, depid) { getAllDepBasedOrgIdDepId.get(orgid, depid).then(function (users) { }, function (response) { return response }) }
   
    $scope.parents = [];
    $scope.dep = [{ Id: 0, Name: '', AdminId: 0, OrgId: 0, parentId: 0, AuthType: [] }];
    //$scope.obj = [{ id: 1, ch: [2, 3, 4], p: 0 }, { id: 2, ch: [13, 14], p: 1 }, { id: 3, ch: [40], p: 1 }, { id: 4, ch: [16, 15], p: 1 }, { id: 13, ch: [130], p: 2 }, { id: 14, ch: [140], p: 2 }, { id: 40, ch: [], p: 3 }, { id: 15, ch: [], p: 4 }, { id: 16, ch: [], p: 4 }, { id: 130, ch: [], p: 13 }, { id: 140, ch: [222], p: 14 }, { id: 111, ch: [666, 333, 444], p: 0 }, { id: 222, ch: [], p: 140 }];
    
});

app.directive('tree', function ($timeout, getUnregisterdUsers, org, addUserInOrg, editDepParent, addDep) {

    return {

        scope: { obj: '=', parents: '=', },
        
        templateUrl: 'App/views/department/tree.html',

        link: function (s, el, attr) {
            //test
            s.users = []; s.depId; s.parentId = 0; s.Name;
            
            var m;
            //gather tree elements
            $.each(s.obj, function (index, value) {
                var m = $('ul[data-id=0]').clone();
                m.attr('data-id', value.Id);
                m.attr('data-p', value.parentId);
                m.children('li').attr('data-id', value.Id);
                m.children('li').children('div').children('span[data-id]').attr('data-id', value.Id);
                m.children('li').children('span[show]').html(value.Id + " " + value.Name);

                //m.children('li').append(value.id);


                $('#cont').append(m);

            });
          
            $('#cont >ul').each(function (i, v) {
                $(this).appendTo($('li[data-id=' + $(this).attr('data-p') + ']'));
            });


            $(document).ready(function () {
                var ids = [];
                $timeout(function () {
                    $('span[show]').click(function () {
                      

                        if ($(this).parent('li').children('ul').css('display') !== "none" && $(this).parent('li').children('ul').length > 0) {
                            $(this).removeClass('glyphicon glyphicon-minus');
                            $(this).addClass('glyphicon glyphicon-plus');
                            $(this).parent('li').children('ul').css('display', 'none');

                        } else {
                            $(this).parent('li').children('ul').css('display', 'block');
                            $(this).removeClass('glyphicon glyphicon-plus');
                            $(this).addClass('glyphicon glyphicon-minus');

                        }


                        return false;
                    });
                }, 100);
                //changeParents function
                $timeout(function () {

                    $('span[parent]').click(function () {
                        s.parents=[];
                        $.each(s.obj, function (i, v) { s.parents.push(v); });
                        //s.parents.reverse();
                        var ids = [];
                        var c = 0;
                        var vb;
                        $('#sec').html($(this).parent('div').parent('li').parent('ul').clone());

                        $(document).ready(function () {
                            $timeout(function () {
                                ids = [];
                                $('#sec li').each(function () {
                                    
                                    ids.push($(this).attr('data-id'))
                                });
                                fillParent(ids);
                            }, 100);
                        });
                        $('#changeparent').modal('show');
                    })
                    $('span[addUser]').click(function () { s.depId = $(this).attr('data-id');  getUnregisterdUsers.get().then(function (users) { s.users = users; $('#adduser').modal('show'); }, function () { }); });
                    $('span[adddep]').click(function () { alert($(this).attr('data-id')); s.depId = $(this).attr('data-id'); $('#adddepartment').modal('show'); });
                }, 300);
                //fill all parents
                function fillParent(a) {        
                     for (var ii = 0; ii < a.length; ii++) {
                        for (var i = 0; i < s.parents.length; i++) {
                            //console.log(a[ii] + 'aaa');
                            if (s.parents[i].Id == a[ii]) {
                                console.log(s.parents[i].Id + 'child');
                                s.parents.splice(i,1);
                                break;
                            }
                        }
                    }
                     $.each(s.parents, function (i, v) { console.log(v.Id + 'parent') })
                }
                //hide unwonted elements
                (function () {
                    $('ul >li[data-id=0]  >div').hide();
                    $('ul >li[data-id=0]  >span[show]').hide();
                })();
            s.changeParent = function (m) { alert(m); $('#changeparent').modal('hide'); }
            s.addUser = function (userid) { var user = { UserId: userid, OrgId: org.get(), departmentId: s.depId }; addUserInOrg.post(user).then(function (user) { }, function (response) { return response }); $('#adduser').modal('hide'); }
            s.deleteDep = function () { };
            s.addDep = function () { alert(s.Name); var dep = { parentId: s.depId, OrgId: org.get(), Name: s.Name }; addDep.post(dep).then(function (deps) { }, function (response) { return response }) }

            });
          
           
           
           
        }
    }
});