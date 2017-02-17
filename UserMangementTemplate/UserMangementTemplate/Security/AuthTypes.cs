using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace UserMangementTemplate.Security
{
    public class AuthTypes
    {
       static List<string> types =new List<string>() { "read","write", "delete" , "edite","admin","superadmin" };
        //public static string Read { get { return "read"; } private set { } }
        //public static string Write { get { return "write"; } private set { } }
        //public static string Dalete { get { return "delete"; } private set { } }
        //public static string Edite { get { return "edite"; } private set { } }
        //public static const  string Admin = "admin";
        public static bool checkTypeExistence(List<string> RecievedTypes)
        {
            if (RecievedTypes.Count < 1)
                return true;
            foreach(string s in RecievedTypes)
            {
                if (types.FirstOrDefault(x => x == s) == null)
                {
                    return false;
                }
            }
            return true;
        }
    }
}