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
    public class UsersController : ApiController
    {
        private UserContext db = new UserContext();

        // GET: api/Users
       
        public IHttpActionResult GetUser(int userid)
        {
            return Ok(new SearchBasedUser().searchUser(db, userid));
        }

        public IHttpActionResult GetDep(int DepId)
        {
            return Ok(new SearchBasedUser().searchDep(db, DepId));
        }
        public IHttpActionResult GetOrg(int OrgId)
        {
            return Ok(new SearchBasedUser().searchOrg(db, OrgId));
        }
        public IHttpActionResult GetAuth(string auth)
        {
            return Ok(new SearchBasedUser().searchAuth(db, auth));
        }
        public IHttpActionResult GetAuthOrg(string auth,int Orgid)
        {
            return Ok(new SearchBasedUser().searchAuthBasedOrg(db, auth,Orgid));
        }
        public IHttpActionResult GetAuthOrgDep(string auth, int Orgid,int Dep)
        {
            return Ok(new SearchBasedUser().searchAuthBasedDep(db, auth, Orgid,Dep));
        }
        public IHttpActionResult GetUserBasedDate(DateTime date)
        {
            return Ok(new SearchBasedUser().searchAllUserBasedDate(db,date));
        }
        public IHttpActionResult GetAllUserBasedRangeDate(DateTime before,DateTime after,int orgid)
        {
            return Ok(new SearchBasedUser().searchAllUserInOrgRangDate(db,before,after,orgid));
        }
        public IHttpActionResult GetUserBasedRangeDate(DateTime before, DateTime after, int userid)
        {
            return Ok(new SearchBasedUser().searchRangDateBasedUserId(db, before, after, userid));
        }
        public IHttpActionResult GetuserBasedUserIdDepId(int userid,int depid)
        {
            return Ok(new SearchBasedUser().SearchDetailsBasedUserIdDepId(db,userid,depid));
        }
        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool UserExists(int id)
        {
            return db.User.Count(e => e.Id == id) > 0;
        }
    }
}