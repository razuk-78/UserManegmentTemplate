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
   
    $scope.obj = [{ id: 1, ch: [2, 3, 4], p: 0 }, { id: 2, ch: [13, 14], p: 1 }, { id: 3, ch: [40], p: 1 }, { id: 4, ch: [16, 15], p: 1 }, { id: 13, ch: [130], p: 2 }, { id: 14, ch: [140], p: 2 }, { id: 40, ch: [], p: 3 }, { id: 15, ch: [], p: 4 }, { id: 16, ch: [], p: 4 }, { id: 130, ch: [], p: 13 }, { id: 140, ch: [222], p: 14 }, { id: 111, ch: [666, 333, 444], p: 0 }, { id: 222, ch: [], p: 140 }];

});

app.directive('tree', function ($compile,$timeout) {

    return {

        scope: { obj: '=' },
        templateUrl: 'App/views/department/tree.html',

        link: function (s, el, attr) {
            var m;

            s.snd = function (m) { };


            $.each(s.obj, function (index, value) {
                var m = $('ul[data-id=0]').clone();
                m.attr('data-id', value.id);
                m.attr('data-p', value.p);
                m.children('li').attr('data-id', value.id);
                m.children('li').addClass('glyphicon glyphicon-minus');

                m.children('li').append(value.id);


                $('#cont').append(m);

            });
            //show pop massege
            //$('#cont >ul >li ').on('click', 'span', function (e) {

            //    $('#myModal').modal('show')

            //    return false;
            //});
            //show hide tree

            $('#cont >ul').on('click', 'li', function () {


                if ($(this).children('ul').css('display') !== "none" && $(this).children('ul').length > 0) {
                    $(this).removeClass('glyphicon glyphicon-minus');
                    $(this).addClass('glyphicon glyphicon-plus');
                    $(this).children('ul').css('display', 'none');

                } else {
                    $(this).children('ul').css('display', 'block');
                    $(this).removeClass('glyphicon glyphicon-plus');
                    $(this).addClass('glyphicon glyphicon-minus');

                }


                return false;
            });


            $('#cont >ul').each(function (i, v) {
                //console.log($(this).html());
                $(this).appendTo($('li[data-id=' + $(this).attr('data-p') + ']'));
            });
            function a(obj, l) {
                var s = { id: 1, ch: [2, 3, 4], p: 0 };
                var all = [{ id: 1, ch: [2, 3, 4], p: 0 }, { id: 2, ch: [13, 14], p: 1 }, { id: 3, ch: [40], p: 1 }, { id: 4, ch: [16, 15], p: 1 }, { id: 13, ch: [130], p: 2 }, { id: 14, ch: [140], p: 2 }, { id: 40, ch: [], p: 3 }, { id: 15, ch: [], p: 4 }, { id: 16, ch: [], p: 4 }, { id: 130, ch: [], p: 13 }, { id: 140, ch: [222], p: 14 }, { id: 111, ch: [666, 333, 444], p: 0 }, { id: 222, ch: [], p: 140 }];
                var ch = all;
                return {
                    search: function () {
                        var b = true;
                        var i = 0;
                        while (b) {

                            if (all[i] == l) {
                                b = false;
                                ch.push(all[i]);
                                this.rec(ch);

                            }
                            if (!b || i == all.length - 1)
                                break;
                            i++;


                        }
                    },
                    rec: function (ss) {
                        if (ch.length > 0) {
                            for (var i = 0; i < ch.length; i++) {
                                for (var ii = 0; ii < ch[i].ch.length; ii++) {
                                    for (var iii = 0; iii < all.length; ii++) {
                                        if (all[iii] == ch[i].ch[ii])
                                            ch.push(all[iii]);
                                        all.splice(iii, 1);
                                    }
                                }
                            }
                            var mch = ch;
                            this.rec1(mch);
                            ch = "";

                        }




                    },
                    rec1: function (ss) {
                        if (ch.length > 0) {
                            for (var i = 0; i < ch.length; i++) {
                                for (var ii = 0; ii < ch[i].ch.length; ii++) {
                                    for (var iii = 0; iii < all.length; ii++) {
                                        if (all[iii] == ch[i].ch[ii])
                                            ch.push(all[iii]);
                                        all.splice(iii, 1);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
                        //$('#cont >ul').each(function () { console.log($(this).html()); $(this).children('ul').css('display', 'none'); });

                    
                    
                    

    }
});