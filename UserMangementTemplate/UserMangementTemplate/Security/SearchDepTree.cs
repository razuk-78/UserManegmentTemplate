using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using UserMangementTemplate.Models;
namespace UserMangementTemplate.Security
{
    public class SearchDepTree
    {
        public class Deps
        {
            public Deps()
            {
                Child = new List<int>();
            }
            public int Parent { get; set; }
            public List<int> Child { get; set; }
            public department Dep { get; set; }
        }
        public SearchDepTree()
        {

        }

        public List<Deps> DepsTree(UserContext db, int depId)

        {
            List<Deps> deps = new List<Deps>();

            List<DepPointer> AllDep = db.DepPointer.ToList();
            List<DepPointer> AllDep1 = new List<DepPointer>();
            List<int> ii = new List<int>();
            List<int> q = new List<int>();
            while (true)
            {
                ii = new List<int>();
                foreach (DepPointer dp in db.DepPointer.Where(x => x.ParentId == depId))
                {
                    AllDep1.Add(dp);
                }

                foreach (DepPointer aa in AllDep1)
                {
                    q.Add(aa.ChildId);

                }



            }






            return deps;
        }

    }
}