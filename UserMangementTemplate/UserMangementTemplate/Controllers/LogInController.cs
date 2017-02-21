using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using UserMangementTemplate.Models;
using UserMangementTemplate.Security;

namespace UserMangementTemplate.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")] // tune to your needs
    [RoutePrefix("")]
    public class LogInController : ApiController
    {
        UserContext db = new UserContext();
        [UserAuthCheck("read")]
        public IHttpActionResult GetLogIn(string username)
        {
            return Ok(new LogIn().GetuserLogInIfo(db, username));
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
