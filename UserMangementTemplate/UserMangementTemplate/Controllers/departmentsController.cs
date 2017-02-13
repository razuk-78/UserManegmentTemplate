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

using static UserMangementTemplate.Security.DepAddEditeDelete;

namespace UserMangementTemplate.Controllers
{
   
    public class departmentsController : ApiController
    {
        private UserContext db = new UserContext();

        // GET: api/departments
        public IHttpActionResult GetAlldepartmentInOrg(int orgid)
        {
            return Ok(new SearchDepTree().AllDepsTreeBasedOrg(db,orgid));
        }
        public IHttpActionResult GetdepartmentInOrg(int orgid,int depid)
        {
            return Ok(new SearchDepTree().DepsTree(db,depid,orgid));
        }


        public void PostDep([FromBody] DepDetailes dep)
        {
            DepAddEditeDelete d = new Security.DepAddEditeDelete();

            d.AddDepartment(dep, db);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool departmentExists(int id)
        {
            return db.department.Count(e => e.Id == id) > 0;
        }
    }
}