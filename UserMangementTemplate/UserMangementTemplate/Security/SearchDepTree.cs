using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using UserMangementTemplate.Models;
namespace UserMangementTemplate.Security
{
    public class SearchDepTree
    {
        int depId;
        List<Deps> deps;
        public class Deps
        {
            public Deps()
            {
                Child = new List<int>();
            }
            public int? Parent { get; set; }
            public List<int> Child { get; set; }
            public department Dep { get; set; }
      
        }
      
        public List<Deps> AllDepsTreeBasedOrg(UserContext db, int OrgId)

        {
            deps = new List<Deps>();
            List<int> l = db.department.Where(x => x.OrgId == OrgId).Select(x => x.Id).ToList();
         
            //recursive(l, db);
            foreach(department x in db.Org.Find(OrgId).department.ToList())
            {
                Deps dp = new Deps();
                dp.Child = db.DepPointer.Where(z => z.ParentId == x.Id).Select(z => z.ChildId).ToList();
                dp.Parent = db.DepPointer.Where(z => z.ChildId == x.Id).ToList().Count>0? db.DepPointer.Where(z => z.ChildId == x.Id).ToList()[0].ParentId:0;
                dp.Dep = x;
               
                deps.Add(dp);
        }
            //db.Org.Find(OrgId).department.ToList().ForEach(x => deps.Add(new Deps {Child=db.DepPointer.Where(z=>z.ParentId==x.Id).Select(z=>z.ChildId).ToList(),Parent=db.DepPointer.FirstOrDefault(z=>z.ChildId==x.Id).ParentId,Dep=x}));
            return deps;
        }
        public List<Deps> DepsTree(UserContext db, int departmentId,int OrgId)

        {
            this.depId = departmentId;
            List<int> l = new List<int> { db.department.First(x=>x.Id==departmentId&&x.OrgId==OrgId).Id};

            recursive(l, db);
            
            return deps;
        }

        #region Excetract Deps
       List<int> FixedIds = new List<int>();  List<int> TemIds;
        void recursive(List<int> _Ids,UserContext db)
        {
           
            TemIds = new List<int>();
            foreach (int id in _Ids)
            {
                foreach (DepPointer  pointer in db.DepPointer.Where(x=>x.ParentId==id).ToList())
                {
                    TemIds.Add(pointer.ChildId); FixedIds.Add(pointer.ChildId);
                }
            }
            if (TemIds.Count < 1)
            {
               deps= output(FixedIds,db);
            }else
            {
recursive1(TemIds,db);
            }
            

        }

        void recursive1(List<int> _Ids, UserContext db)
        {

            TemIds = new List<int>();
            foreach (int id in _Ids)
            {
                foreach (DepPointer pointer in db.DepPointer.Where(x => x.ParentId == id).ToList())
                {
                    TemIds.Add(pointer.ChildId); FixedIds.Add(pointer.ChildId);
                }
            }
            if (TemIds.Count < 1)
            {
               deps= output(FixedIds,db);
            }
            else
            {
recursive(TemIds,db);
            }
            

        }
       List<Deps> output(List<int> i,UserContext db)
        {
            List<Deps> deps1 = new List<Deps>();
            List<int> p = db.department.Select(x => x.Id).ToList();
            foreach (int ii in i.Distinct())
            {
                p.Remove(ii);
            }
                foreach (int ii in i.Distinct())
            {
                //deps1.Add(new Deps { Child = db.DepPointer.Where(x => x.ParentId == ii).Select(x => x.ChildId).ToList(), Dep = db.department.First(x => x.Id == ii), Parent = db.department.First(x => x.Id == ii).DepPointer.First(x => x.ChildId == ii).ParentId });
                deps1.Add(new Deps { Child = db.DepPointer.Where(x => x.ParentId == ii).Select(x => x.ChildId).ToList(), Dep = db.department.First(x => x.Id == ii), Parent = db.DepPointer.First(x => x.ChildId == ii).ParentId});

            }
            deps1.Add(new Deps { Child = db.DepPointer.Where(x => x.ParentId == this.depId).Select(x => x.ChildId).ToList(), Dep = db.department.Find(this.depId), Parent = db.DepPointer.Where(x => x.ChildId == this.depId).ToList().Count > 0 ? db.DepPointer.First(x => x.ChildId == this.depId).ParentId : 0 });
            return deps1;
        } 
        #endregion

    
    }
}