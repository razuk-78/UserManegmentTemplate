using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using UserMangementTemplate.Models;
using UserMangementTemplate.Security;

namespace UserMangementTemplate.Controllers
{
    public class UserInOrgController : ApiController
    {
        UserContext db = new UserContext();

        //Add UserInOrg
        public IHttpActionResult PostAddUserInOrg(Security.AddEditDeleteUser.UserDetailes u)
        {
            new AddEditDeleteUser().AddUserInOrg(u, db);
            return Ok();
        }

        //Edit UserInOrg Auth
        public IHttpActionResult PutEditeUserInOrg(Security.AddEditDeleteUser.UserDetailes u)
        {
            new AddEditDeleteUser().EditeUserInOrgAuth(u, db);
            return Ok();
        }

    }
    public class DeleteUserInOrgController : ApiController
    {
        UserContext db = new UserContext();

  

        //Delete UserInOrg
        public IHttpActionResult PostDelteUserInOrg(Security.AddEditDeleteUser.UserDetailes u)
        {
            new AddEditDeleteUser().DeleteUserInOrg(u, db);
            return Ok();
        }


    }
}
