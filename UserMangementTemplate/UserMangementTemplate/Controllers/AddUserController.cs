
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using UserMangementTemplate.Models;
using UserMangementTemplate.Security;
namespace UserMangementTemplate.Controllers
{
    public class AddUserController : ApiController
    {
        private UserContext db = new UserContext();
        public IHttpActionResult PostUser(User u)
        {
            CommonFunctions.addUser(u, db);
           
            return Ok();
        }
    }
}
