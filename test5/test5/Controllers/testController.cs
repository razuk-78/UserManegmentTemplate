using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace test5.Controllers
{
    public class testController : ApiController
    {
        public IHttpActionResult Get(string ms)
        {
            return Ok(ms);
        }
    }
}
