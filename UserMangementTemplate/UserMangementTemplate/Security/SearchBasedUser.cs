using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using UserMangementTemplate.Models;
namespace UserMangementTemplate.Security
{

    public class SearchBasedUser
    {

        public class UserDetails
        {
            public UserDetails()
            {
                //Department = new department();
                Teams = new List<Team>();
                Auth = new List<Models.Auth>();
                LogInRegistry = new List<Models.LogInRegistry>();
            }
            public Org Org { get; set; }
            public User User { get; set; }
            public department Department { get; set; }
            public int UserInOrgId { get; set; }
            public List<Team> Teams { get; set; }
            public List<Auth> Auth { get; set; }
            public List<LogInRegistry> LogInRegistry { get; set; }
        }
        public UserDetails searchUser(UserContext db, int userid)
        {
         
           UserInOrg uio =db.UserInOrg.First(x => x.UserId == userid);
            
           //return new UserDetails { Auth = uio.Auth.ToList(), Department = uio.department1, LogInRegistry = uio.LogInRegistry.ToList(), Org = uio.Org,User=uio.User,UserInOrgId=uio.Id};
            return new UserDetails();


        }

        //public List<UserDetails> searchTeam(UserContext db, int TeamIid)
        //{

        //    return new List<UserDetails>();
        //}

        public List<UserDetails> searchOrg(UserContext db, int OrgId)
        {
            List<UserDetails> lu = new List<UserDetails>();
        
            db.UserInOrg.Where(x => x.OrgId == OrgId).ToList().ForEach(x => lu.Add(new UserDetails { Auth = x.Auth.ToList(), Department = x.department1, LogInRegistry = x.LogInRegistry.ToList(), User = x.User, UserInOrgId = x.Id }));
            return lu;
        }

        public List<UserDetails> searchDep(UserContext db, int DepId)
        {
            List<UserDetails> users = new List<UserDetails>();
         foreach (UserInOrg uio in db.department.First(x => x.Id == DepId).UserInOrg1)
            {
                users.Add(new UserDetails { Auth = uio.Auth.ToList(), Department = uio.department1, User = uio.User, LogInRegistry = uio.LogInRegistry.ToList(), Org = uio.Org ,UserInOrgId=uio.Id});
            }
            return users;
        }

        public List<UserDetails> searchAuth(UserContext db, string Auth)
        {
            List<UserDetails> users = new List<UserDetails>();

            foreach (UserInOrg uio in db.Auth.Where(x => x.Type == Auth&&x.UserInOrg!=null).Select(x => x.UserInOrg))
            {
                users.Add(new UserDetails { Department = uio.department1, User = uio.User, LogInRegistry = uio.LogInRegistry.ToList(), Org = uio.Org ,UserInOrgId=uio.Id});
            }
         
            return users;
        }
        public List<UserDetails> searchAuthBasedOrg(UserContext db, string Auth,int orgId)
        {

            List<UserDetails> LUserDetails = new List<UserDetails>();
        
            db.Auth.Where(x => x.UserInOrg.OrgId == orgId && x.Type == Auth).ToList().ForEach(x => LUserDetails.Add(new UserDetails { User = x.UserInOrg.User, Department = x.UserInOrg.department1, LogInRegistry = x.UserInOrg.LogInRegistry.ToList(),UserInOrgId=x.UserInOrgId??0}));
            return LUserDetails;
        }
        public List<UserDetails> searchAuthBasedDep(UserContext db, string Auth,int OrgId, int DepId)
        {
            List<UserDetails> users = new List<UserDetails>();
            db.Auth.Where(x => x.UserInOrg.OrgId == OrgId && x.UserInOrg.DepId == DepId && x.Type == Auth).ToList().ForEach(x => users.Add(new UserDetails { User = x.UserInOrg.User, LogInRegistry = x.UserInOrg.LogInRegistry.ToList(),UserInOrgId=x.UserInOrgId??0}));
            return users;
         
        }
        //One day
        public List<UserDetails> searchAllUserBasedDate(UserContext db, DateTime DateDay)
        {
            List<UserDetails> LUserDetails = new List<UserDetails>();     
            db.LogInRegistry.Where(x => x.TimeLogIn == DateDay).ToList().ForEach(x => LUserDetails.Add(new UserDetails {User=x.UserInOrg.User,Auth=x.UserInOrg.Auth.ToList(),Department=x.UserInOrg.department1,LogInRegistry=x.UserInOrg.LogInRegistry.ToList(),Org=x.UserInOrg.Org,UserInOrgId=x.UserInOrgId }));
            return LUserDetails;
        }

        //between Two Date Based OrgId
        public List<UserDetails> searchAllUserInOrgRangDate(UserContext db, DateTime before, DateTime after, int orgid)
        {

            List<UserDetails> LUserDetails = new List<UserDetails>();
            //db.LogInRegistry.Where(x => x.TimeLogIn >= before&&x.TimeLogIn<=after&&x.UserInOrg.OrgId==orgid).ToList().ForEach(x => LUserDetails.Add(new UserDetails { User = x.UserInOrg.User, Auth = x.UserInOrg.Auth.ToList(), Department = x.UserInOrg.department1, LogInRegistry = x.UserInOrg.LogInRegistry.ToList(), Org = x.UserInOrg.Org ,UserInOrgId=x.UserInOrgId}));
            return LUserDetails;
        }

        //between Two Date Based UserId
        public UserDetails searchRangDateBasedUserId(UserContext db, DateTime before, DateTime after, int userId)
        {

          UserDetails LUserDetails = new UserDetails();


            db.LogInRegistry.Where(x => x.UserInOrg.UserId == userId && x.TimeLogIn <= after && x.TimeLogIn >= before).ToList().ForEach(x => LUserDetails.LogInRegistry.Add(new LogInRegistry { TimeLogIn = x.TimeLogIn }));
            return LUserDetails;
        }


        public UserDetails SearchDetailsBasedUserIdTeamId(UserContext db, int userId, int depId)
        {


            return null;
        }

        public UserDetails SearchDetailsBasedUserIdDepId(UserContext db, int userId, int depId)
        {

            UserInOrg u = db.UserInOrg.First(x => x.UserId == userId && x.DepId == depId);
            return new UserDetails { User = u.User, Org = u.Org, Auth = u.Auth.ToList(), LogInRegistry = u.LogInRegistry.ToList(),UserInOrgId=u.Id };
        }




    }
}