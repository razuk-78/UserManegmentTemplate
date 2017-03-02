/// <reference path="C:\Users\raeli1\Desktop\UserManegmentTemplate\UserManagementFrontEnd\UserManagementFrontEnd\Script/angular.js" />
/// <reference path="C:\Users\raeli1\Desktop\UserManegmentTemplate\UserManagementFrontEnd\UserManagementFrontEnd\Script/jquery-3.1.1.js" />


app.controller('departmentCtrl', function ($scope, $location, getAllDepBasedOrgId, getAllDepBasedOrgIdDepId, addDep, editDep, editDepParent, editAuthToDep, deleteDep) {

    //check ?!
    $scope.edite = function (dep) { editDep.put(dep).then(function (deps) { }, function (response) { return response }) }
    $scope.editeParent = function (dep) { editDepParent.put(dep).then(function (deps) { }, function (response) { return response }) }
    $scope.add = function (dep) { addDep.post(dep).then(function (deps) { }, function (response) { return response }) }
    $scope.delete = function (dep) { deleteDep.put(dep).then(function (deps) { }, function (response) { return response }) }
    $scope.getAllDepBasedOrgId = function (orgid) { getAllDepBasedOrgId.get(orgid).then(function (users) { }, function (response) { return response }) }
    $scope.getAllDepBasedOrgIdDepId = function (orgid, depid) { getAllDepBasedOrgIdDepId.get(orgid, depid).then(function (users) { }, function (response) { return response }) }
    $scope.obj = [{ Id: 1, ch: [2, 3, 4], parentId: 0 ,Name:"soft",Auth:['read','write']},
      { Id: 2, ch: [13, 14], parentId: 1 },
      { Id: 3, ch: [40], parentId: 1, Name: "soft", Auth: ['read', 'write'] ,AdminId: 0 },
      { Id: 4, ch: [16, 15], parentId: 1, Name: "c", Auth: ['read', 'write'], AdminId: 0 },
      { Id: 13, ch: [130], parentId: 2, Name: "f", Auth: ['read', 'write'], AdminId: 0 },
      { Id: 14, ch: [140], parentId: 2, Name: "java", Auth: ['read', 'write'], AdminId: 0 },
      { Id: 40, ch: [], parentId: 3, Name: "mobil", Auth: ['read', 'write'], AdminId: 0 },
      { Id: 15, ch: [], parentId: 4, Name: "tv", Auth: ['read', 'write'], AdminId: 0 },
      { Id: 16, ch: [], parentId: 4, Name: "c#", Auth: ['read', 'write'], AdminId: 0 },
      { Id: 130, ch: [], parentId: 13, Name: "hard", Auth: ['read', 'write'], AdminId: 0 },
      { Id: 140, ch: [222], parentId: 14, Name: "c++", Auth: ['read', 'write'], AdminId: 0 },
      { Id: 111, ch: [666, 333, 444], parentId: 0, Name: "angular", Auth: ['read', 'write'], AdminId: 0 },
      { Id: 222, ch: [], parentId: 140, Name: "api", Auth: ['read', 'write'], AdminId: 0 }];
    $scope.dep = [{ Id: 0, Name: '', AdminId: 0, OrgId: 0, parentId: 0, AuthType: [] }];
    //$scope.obj = [{ id: 1, ch: [2, 3, 4], p: 0 }, { id: 2, ch: [13, 14], p: 1 }, { id: 3, ch: [40], p: 1 }, { id: 4, ch: [16, 15], p: 1 }, { id: 13, ch: [130], p: 2 }, { id: 14, ch: [140], p: 2 }, { id: 40, ch: [], p: 3 }, { id: 15, ch: [], p: 4 }, { id: 16, ch: [], p: 4 }, { id: 130, ch: [], p: 13 }, { id: 140, ch: [222], p: 14 }, { id: 111, ch: [666, 333, 444], p: 0 }, { id: 222, ch: [], p: 140 }];

});

app.directive('tree', function ($timeout) {

    return {

        scope: { obj: '=', parentId: '=' },
        templateUrl: 'App/views/department/tree.html',

        link: function (s, el, attr) {
            var m;

            s.snd = function (m) { };

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
            //show pop massege
            //$('#cont >ul >li ').on('click', 'span', function (e) {
            //create tree
            $('#cont >ul').each(function (i, v) {
                $(this).appendTo($('li[data-id=' + $(this).attr('data-p') + ']'));
            });


            //    $('#myModal').modal('show')

            //    return false;
            //});
            //show hide tree



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
                            }, 10);
                        });
                    })
                }, 30);


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
                $('ul >li[data-id=0]  >div').hide();
                $('ul >li[data-id=0]  >span[show]').hide();
            });











        }
    }
});