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

        public List<Deps> DepsTree(UMDataBaseEntitiesConnection db,int depId)
       
        {
            List<Deps> deps = new List<Deps>();

           for(db.DepPointer.Where(x => x.ParentId == depId){

            }
            foreach (department dep in db.department)
            {
                
            }
            int p=0;int ch=0;int d = 0;
        for(int i = 0; i < db.DepPointer.ToList().Count; i++)
            {

               
            }
           
            return deps;
        }
       
    }
}