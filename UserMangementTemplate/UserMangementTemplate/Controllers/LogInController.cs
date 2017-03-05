using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using UserMangementTemplate.Models;
using UserMangementTemplate.Security;

namespace UserMangementTemplate.Controllers
{
   
    
    public class LogInController : ApiController
    {
        UserContext db = new UserContext();
        
        public IHttpActionResult GetLogIn(string username,int orgid)
        {
            return Ok(new LogIn().GetuserLogInIfo(db, username,orgid));
        }
        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
