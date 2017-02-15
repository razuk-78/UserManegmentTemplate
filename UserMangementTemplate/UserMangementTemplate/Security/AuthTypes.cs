﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace UserMangementTemplate.Security
{
    public class AuthTypes
    {
       static List<string> types =new List<string>() { "read","write", "delete" , "edite" };
        public static string Read { get { return "read"; } private set { } }
        public static string Write { get { return "write"; } private set { } }
        public static string Dalete { get { return "delete"; } private set { } }
        public static string Edite { get { return "edite"; } private set { } }
        public static bool checkTypeExistence(List<string> Types)
        {
            if (Types.Count < 1)
                return true;
            foreach(string s in Types)
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