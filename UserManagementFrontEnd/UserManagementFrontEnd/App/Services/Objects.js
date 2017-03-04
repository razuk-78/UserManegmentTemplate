var objects={
 auth : {
    id: 0,
    UserInOrgId: null,
    departmentId: null,
    Type: null,
    UserInOrg: userinorg = {
        Id: 0,
        UserId: 0,
        OrgId: 0,
        departmentId: 0,
        LogInRegistry: null,
        TeamMember: null,
        Auth: {
            id: 0,
            UserInOrgId: null,
            departmentId: null,
            Type: null,
            UserInOrg: 0,
            department: {
                Id: 0,
                Name: null,
                AdminId: null,
                OrgId: 0
            }
        }
    },
    department: {
        Id: 0,
        Name: null,
        AdminId: null,
        OrgId: 0
    }
},

 user : {
    Id: 0,
    FirstName: null,
    LastName: null,
    Email: null,
    PassWord: null,
    PersonalNumber: null,
    Address: null,
    City: null,
    CityCode: 0,
    Phone: null,
    Category: null
},
 dep : {
    Id: 0,
    Name: null,
    AdminId: null,
    OrgId: 0
},
 LogReg :{
    Id: 0,
    UserInOrgId: 0,
    TimeLogIn: "0001-01-01T00:00:00"
},
 org : {
    Id: 0,
    Name: null
},

 SearchDepTreeDeps : {
    Parent: 0,
    Child: [],
    Dep: {
        Id: 0,
        Name: null,
        AdminId: null,
        OrgId: 0
    }
},
 userDtails : {
    Org: {
        Id: 0,
        Name: null
    },
    User: {
        Id: 0,
        FirstName: null,
        LastName: null,
        Email: null,
        PassWord: null,
        PersonalNumber: null,
        Address: null,
        City: null,
        CityCode: 0,
        Phone: null,
        Category: null
    },
    Department: dep = {
        Id: 0,
        Name: null,
        AdminId: null,
        OrgId: 0
    },
    UserInOrgId: 0,
    Teams: [{}],
    Auth: [{
        id: 0,
        UserInOrgId: null,
        departmentId: null,
        Type: null,
        UserInOrg: userinorg = {
            Id: 0,
            UserId: 0,
            OrgId: 0,
            departmentId: 0,
            LogInRegistry: null,
            TeamMember: null,
            Auth: {
                id: 0,
                UserInOrgId: null,
                departmentId: null,
                Type: null,
                UserInOrg: 0,
                department: {
                    Id: 0,
                    Name: null,
                    AdminId: null,
                    OrgId: 0
                }
            }
        },
        department: {
            Id: 0,
            Name: null,
            AdminId: null,
            OrgId: 0
        }
    }],
    LogInRegistry: [{
        Id: 0,
        UserInOrgId: 0,
        TimeLogIn: "0001-01-01T00:00:00"
    }]
},

 userinorg : {
    Id: 0,
    UserId: 0,
    OrgId: 0,
    departmentId: 0,
    LogInRegistry: null,
    TeamMember: null,
    Auth: [{
        id: 0,
        UserInOrgId: null,
        departmentId: null,
        Type: null,
        UserInOrg: 0,
        department: {
            Id: 0,
            Name: null,
            AdminId: null,
            OrgId: 0
        }
    }]
},


 adduserDetails : {
    UserId: 0,
    OrgId: 0,
    departmentId: 0,
    UserInOrgId: 0,
    Auth: []
},

 addDepDetails : {
    Id: 0,
    Name: null,
    AdminId: 0,
    OrgId: 0,
    parentId: 0,
    AuthType: null
},

 logIn :{
    UserName: null,
    DepartmentName: null,
    Auth: null
}
}


$scope.obja = [
  { Dep: { Id: 1, Name: "soft" }, Child: [2, 3, 4], Parent: 0, Auth: ['read', 'write'], AdminId: 0 },
  { Dep: { Id: 2, Name: "soft" }, Child: [13, 14], Parent: 1, Auth: ['read', 'write'], AdminId: 0 },
  { Dep: { Id: 3, Name: "hardware" }, Child: [40], Parent: 1, Auth: ['read', 'write'], AdminId: 0 },
  { Dep: { Id: 4, Name: "c" }, Child: [16, 15], Parent: 1, Auth: ['read', 'write'], AdminId: 0 },
  { Dep: { Id: 13, Name: "f" }, Child: [130], Parent: 2, Auth: ['read', 'write'], AdminId: 0 },
  { Dep: { Id: 14, Name: "java" }, Child: [140], Parent: 2, Auth: ['read', 'write'], AdminId: 0 },
  { Dep: { Id: 40, Name: "mobil" }, Child: [], Parent: 3, Auth: ['read', 'write'], AdminId: 0 },
  { Dep: { Id: 15, Name: "tv" }, Child: [], Parent: 4, Auth: ['read', 'write'], AdminId: 0 },
  { Dep: { Id: 16, Name: "c#" }, Child: [], Parent: 4, Auth: ['read', 'write'], AdminId: 0 },
  { Dep: { Id: 130, Name: "hard" }, Child: [], Parent: 13, Auth: ['read', 'write'], AdminId: 0 },
  { Dep: { Id: 140, Name: "c++" }, Child: [222], Parent: 14, Auth: ['read', 'write'], AdminId: 0 },
  { Dep: { Id: 111, Name: "angular" }, Child: [666, 333, 444], Parent: 0, Auth: ['read', 'write'], AdminId: 0 },
  { Dep: { Id: 222, Name: "api" }, Child: [], Parent: 140, Auth: ['read', 'write'], AdminId: 0 }];