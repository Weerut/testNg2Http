using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace mockAPI.Controllers
{
    public class HomeController : ApiController
    {
        [AcceptVerbs("GET")]
        public IHttpActionResult Get()
        {
            return Ok("Get: has no problem retriving.");
        }

        [AcceptVerbs("POST")]
        public IHttpActionResult Post()
        {
            return Ok("Post: has no problem retriving.");
        }

        [AcceptVerbs("PUT")]
        public IHttpActionResult Put()
        {
            return Ok("Put: has no problem retriving.");
        }

        [AcceptVerbs("DELETE")]
        public IHttpActionResult Delete()
        {
            return Ok("Delete: has no problem retriving.");
        }
    }
}
