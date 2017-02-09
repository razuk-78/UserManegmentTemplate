using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace UserMangementTemplate.Security
{
    public class AuthTypes
    {
        public static string Read { get { return "read"; } private set { } }
        public static string Write { get { return "write"; } private set { } }
        public static string Dalete { get { return "delete"; } private set { } }
        public static string Edite { get { return "edite"; } private set { } }
    }
}