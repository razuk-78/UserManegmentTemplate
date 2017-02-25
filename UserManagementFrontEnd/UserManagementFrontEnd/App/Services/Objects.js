var auth = {
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
}

var user = {
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
};
var dep = {
    Id: 0,
    Name: null,
    AdminId: null,
    OrgId: 0
};
var LogReg = {
    Id: 0,
    UserInOrgId: 0,
    TimeLogIn: "0001-01-01T00:00:00"
}
var org = {
    Id: 0,
    Name: null
}

var SearchDepTreeDeps = {
    Parent: 0,
    Child: [],
    Dep: {
        Id: 0,
        Name: null,
        AdminId: null,
        OrgId: 0
    }
}
var userDtails = {
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
}

var userinorg = {
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
}


var adduserDetails = {
    UserId: 0,
    OrgId: 0,
    departmentId: 0,
    UserInOrgId: 0,
    Auth: []
}

var addDepDetails = {
    Id: 0,
    Name: null,
    AdminId: 0,
    OrgId: 0,
    parentId: 0,
    AuthType: null
}

var logIn = {
    UserName: null,
    DepartmentName: null,
    Auth: null
}