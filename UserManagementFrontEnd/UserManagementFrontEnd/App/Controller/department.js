/// <reference path="C:\Users\raeli1\Desktop\UserManegmentTemplate\UserManagementFrontEnd\UserManagementFrontEnd\Script/angular.js" />
/// <reference path="C:\Users\raeli1\Desktop\UserManegmentTemplate\UserManagementFrontEnd\UserManagementFrontEnd\Script/jquery-3.1.1.js" />


app.controller('departmentCtrl', function (refresh,$scope, org, $location, getAllDepBasedOrgId, getAllDepBasedOrgIdDepId, addDep, editDep, editDepParent, editAuthToDep, deleteDep, getUnregisterdUsers) {
 
    //check ?!

    $scope.edite = function (dep) { editDep.put(dep).then(function (deps) { }, function (response) { return response }) }
    $scope.editeParent = function (dep) { editDepParent.put(dep).then(function (deps) { }, function (response) { return response }) }
    //$scope.add = function (dep) { addDep.post(dep).then(function (deps) { }, function (response) { return response }) }
    $scope.delete = function (dep) { deleteDep.put(dep).then(function (deps) { }, function (response) { return response }) }
    $scope.getAllDepBasedOrgId = function (orgid) { getAllDepBasedOrgId.get(org.get()).then(function (deps) { $scope.obj = deps; }, function (response) { return response }) }
    $scope.getAllDepBasedOrgIdDepId = function (orgid, depid) { getAllDepBasedOrgIdDepId.get(orgid, depid).then(function (users) { }, function (response) { return response }) }
    //getDepBasedId.get(id).then(function (dep) { }, function (response) { return response })
    
    $scope.parents = [];
    $scope.dep = [{ Id: 0, Name: '', AdminId: 0, OrgId: 0, Parent: 0, AuthType: [] }];
   
    
});

app.directive('tree', function (getBasedUIOBasedDepId, dep, getDepBasedId, refresh, $timeout, org, $location,deleteUserInOrg, getAllDepBasedOrgId, getAllDepBasedOrgIdDepId, addDep, editDep, editDepParent, editAuthToDep, deleteDep, getUnregisterdUsers, addUserInOrg,editUserInOrg) {

    return {

        templateUrl: 'App/views/department/tree.html',

        link: function (s, el, attr) {
            //test
            s.changeParent;
            s.obj = []; s.parents = []; s.users = []; s.depId; s.parentId = 0; s.Name; s.deps = []; s.dep = []; s.usersInOrg = [];
            getAllDepBasedOrgId.get(org.get()).then(function (deps) { s.obj = deps; start(); return false; }, function (response) { return response });
            //var ref = function () { getAllDepBasedOrgId.get(org.get()).then(function (deps) { s.obj = deps; start(); return false; }, function (response) { return response }); }
            //var m;
           
            var matchChk = function (dep) {
                $('#editdep input[t]').prop('checked',false);
                $.each(dep.Auth, function (i, v) {

                    $('#editdep input[t]').each(function () {
                       
                        if ($(this).attr('t') == v.Type) {
                            $(this).prop('checked', true);
                        } 
                    });
                  
                });
            }
            var getAuth = function () {
                var type = [];
                $('#editdep input[t]').each(function () {
                    if ($(this).prop('checked')) {
                        type.push($(this).attr('t'));
                    }
                });
                return type;
            }
               
                
               function start() { 
               
                
                    $.each(s.obj, function (index, value) {
                        var m = $('ul[data-id=0]').clone();
                        m.attr('data-id', value.Dep.Id);
                        m.attr('data-p', value.Parent);
                        m.children('li').attr('data-id', value.Dep.Id);
                        m.children('li').children('div').children('span[data-id]').attr('data-id', value.Dep.Id);
                        m.children('li').children('span[show]').html(value.Dep.Id + " " + value.Dep.Name);

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
                                s.parents = [];
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
                                $('#changeparent h4[t]').html("change parent for( "+  $(this).parent('div').parent('li').children('span[show]').html()+')'); $('#changeparent').modal('show'); s.depId = $(this).attr('data-id');
                            });
                            $('span[addUser]').click(function () {
                                s.depId = $(this).attr('data-id');
                                getUnregisterdUsers.get()
                                    .then(function (users) { s.users = users; $('#adduser').modal('show'); },
                                    function () { });
                            });
                            $('span[adddep]').click(function () {
                                s.depId = $(this).attr('data-id');
                                $('#adddepartment').modal('show');
                            });
                            $('span[editdep]').click(function () {
                                s.depId = $(this).attr('data-id');
                                
                                getDepBasedId.get(s.depId).then(function (dep) {
                                    s.Name = dep.Name; matchChk(dep);
                                    
                                    $('#editdep').modal('show');  return;
                                }, function (response) { return response });
                            });
                            $('span[deletedep]').click(function () {
                           s.depId = $(this).attr('data-id');
                           $('#deletedep').modal('show');
                            });
                            $('span[gotousers]').click(function () { s.depId = $(this).attr('data-id'); s.goToUsers(s.depId); });
                        }, 300);
                        //fill all parents
                        function fillParent(a) {
                            for (var ii = 0; ii < a.length; ii++) {
                                for (var i = 0; i < s.parents.length; i++) {
                                    //console.log(a[ii] + 'aaa');
                                    if (s.parents[i].Dep.Id == a[ii]) {
                                        console.log(s.parents[i].Dep.Id + 'child');
                                        s.parents.splice(i, 1);
                                        break;
                                    }
                                }
                            }
                            s.parents.push({Dep:{ Id: 0, Name:'No Parent'}, AdminId: 0, OrgId: 0, Parent: 0, AuthType: [] });
                        }
                        //hide unwonted elements
                        (function () {
                            $('ul >li[data-id=0]  >div').hide();
                            $('ul >li[data-id=0]  >span[show]').hide();
                        })();
                        s.changeParent = function (id) {
                            var dep = { Id: s.depId, Name: '', AdminId: 0, OrgId: org.get(), parentId: id, AuthType: [] };
                            editDepParent.put(dep).then(function () { $('#changeparent').modal('hide'); refresh.send("/department"); return;});
                            
                        }
                        // ds.changeParent
                        s.addUser = function (userid) {
                            var user = { UserId: userid, OrgId: org.get(), departmentId: s.depId };
                            addUserInOrg.post(user).then(
                                function (user) { },
                                function (response) { return response });  $('#adduser').modal('hide');
                        }
                        s.deleteDep = function () {
                            var dep = { Id: s.depId, OrgId :org.get()};
                            deleteDep.put(dep)
                                .then(function (deps) {
                                    $('deletedep').modal('hide');
                                    refresh.send('/department'); return;
                                }, function (response) { return response })
                        };
                        s.addDep = function () {
                            var dep = { parentId: s.depId, OrgId: org.get(), Name: s.Name };
                            addDep.post(dep)
                           .then(function (deps)
                           {refresh.send('/department')  },
                           
                            function (response) { return response })
                        }
                        s.editDep = function () {
                            var dep = { Id: s.depId, Name: s.Name, AdminId: 0, OrgId: org.get(), AuthType: getAuth() }
                            editDep.put(dep)
                                .then(function (deps) { refresh.send('/department') },
                                function (response) { return response })
                        }
                        s.goToUsers = function () {
                        getBasedUIOBasedDepId.get(s.depId)
                        .then(function (users) { s.usersInOrg = users; $('#gotousers').modal('show');s.checkType() },
                        function (error) { });
                        }
                        s.deleteUser = function (i, uio) { var user = { UserInOrgId: uio }; deleteUserInOrg.put(user).then(function (user) { refresh.send('/department'); }, function (response) { return response }); }
                        s.editeUserAuth = function (i, uio) { var user = { UserInOrgId: uio, Auth: getuserAuth(i) }; editUserInOrg.put(user).then(function (user) { refresh.send('/department'); }, function (response) { return response }) }
                        s.checkType = function () {
                          
                            $timeout(function () {
                                $('#gotousers input[ind]').each(function () {
                                  
                                });
                                $('#gotousers input[t]').prop('checked',false);
                                $.each(s.usersInOrg, function (i, v) {
                                    $.each(v.Auth,function(ii,vv){
                                        $('#gotousers input[ind='+i+']').each(function ()
                                        {
                                            if($(this).attr('t')==vv.Type){
                                               $(this).prop('checked',true);
                                            }
                                              
                                        });
                                        
                                    });

                            

                                });})
                           
                           
                           
                            
                            return false;
                        }
                        var getuserAuth = function (i) {
                            var m = [];
                            $('#gotousers input[ind=' + i + ']').each(function () {
                                if ($(this).prop('checked')) {
                                    m.push($(this).attr('t'));
                                }
                            });
                            return m;
                        };
                    });
       
                }
            
          
         
           
           
           
        }
    }
});