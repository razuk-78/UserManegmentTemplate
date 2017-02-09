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
                Department = new department();
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
            
            return new UserDetails { Auth = uio.Auth.ToList(), Department = uio.department1, LogInRegistry = uio.LogInRegistry.ToList(), Org = uio.Org,User=uio.User};
        
           
        }

        //public List<UserDetails> searchTeam(UserContext db, int TeamIid)
        //{

        //    return new List<UserDetails>();
        //}

        public List<UserDetails> searchOrg(UserContext db, int OrgId)
        {
            List<UserDetails> lu = new List<UserDetails>();
            #region MyRegion
            //List<UserDetails> LUserDetails = new List<UserDetails>();
            //List<UserInOrg> AllUserInOrg = new List<UserInOrg>();
            //foreach (UserInOrg Uig in AllUserInOrg)
            //{
            //    UserDetails u = new UserDetails();
            //    u.User = db.User.First(x => x.Id == Uig.UserId);
            //    u.Department = db.department.First(x => x.Id == Uig.DepId);
            //    u.Org = db.Org.First(x => x.Id == Uig.OrgId);
            //    foreach (TeamMember Tm in db.TeamMember.Where(x => x.UserInOrgId == Uig.Id).ToList())
            //    {
            //        u.Teams.Add(db.Team.First(x => x.Id == Tm.TeamId));
            //    }
            //    u.Auth = db.Auth.Where(x => x.UserInOrgId == Uig.Id).ToList();
            //    u.LogInRegistry = db.LogInRegistry.Where(x => x.UserInOrgId == Uig.Id).ToList();
            //    LUserDetails.Add(u);
            //}
            //return LUserDetails; 
            #endregion
            db.UserInOrg.Where(x => x.OrgId == OrgId).ToList().ForEach(x => lu.Add(new UserDetails { Auth = x.Auth.ToList(), Department = x.department1, LogInRegistry = x.LogInRegistry.ToList(), User = x.User, UserInOrgId = x.Id }));
            return lu;
        }

        public List<UserDetails> searchDep(UserContext db, int DepId)
        {
            List<UserDetails> users = new List<UserDetails>();
         foreach (UserInOrg uio in db.department.First(x => x.Id == DepId).UserInOrg1)
            {
                users.Add(new UserDetails { Auth = uio.Auth.ToList(), Department = uio.department1, User = uio.User, LogInRegistry = uio.LogInRegistry.ToList(), Org = uio.Org });
            }
            return users;
        }

        public List<UserDetails> searchAuth(UserContext db, string Auth)
        {
            List<UserDetails> users = new List<UserDetails>();

            foreach (UserInOrg uio in db.Auth.Where(x=>x.Type==Auth).Select(x=>x.UserInOrg))
            {
                users.Add(new UserDetails { Auth = uio.Auth.ToList(), Department = uio.department1, User = uio.User, LogInRegistry = uio.LogInRegistry.ToList(), Org = uio.Org });
            }
            return users;
        }
        public List<UserDetails> searchAuthBasedOrg(UserContext db, string Auth,int orgId)
        {

            List<UserDetails> LUserDetails = new List<UserDetails>();
            foreach (UserInOrg ui in db.UserInOrg.Where(x => x.OrgId == orgId).ToList())
            {
                if (db.Auth.Where(x => x.UserInOrgId == ui.Id && x.Type == Auth) != null)
                {
                    UserDetails U = new UserDetails();
                    U.Department = db.department.First(x => x.Id == ui.DepId);
                    U.User = db.User.First(x => x.Id == ui.UserId);
                    U.LogInRegistry = db.LogInRegistry.Where(x => x.UserInOrgId == ui.Id).ToList();
                    List<int> AllTeamId = db.TeamMember.Where(x => x.UserInOrgId == ui.Id).ToList().Select(x => x.TeamId).ToList();
                    foreach (int i in AllTeamId.ToList())
                    {
                        U.Teams.Add(db.Team.First(x => x.Id == i));
                    }
                    LUserDetails.Add(U);
                }
            }
            return LUserDetails;
        }
        public List<UserDetails> searchAuthBasedDep(UserContext db, string Auth,int OrgId, int DepId)
        {
            List<UserDetails> users = new List<UserDetails>();

            foreach (UserInOrg uio in db.Auth.Where(x => x.Type == Auth&&x.DepId==DepId&&x.UserInOrg.OrgId==OrgId).Select(x => x.UserInOrg))
            {
                users.Add(new UserDetails { Auth = uio.Auth.ToList(), Department = uio.department1, User = uio.User, LogInRegistry = uio.LogInRegistry.ToList(), Org = uio.Org });
            }
            return users;
         
        }
        //One day
        public List<UserDetails> searchAllUserBasedDate(UserContext db, DateTime DateDay)
        {
            List<UserDetails> LUserDetails = new List<UserDetails>();
            foreach (LogInRegistry Lo in db.LogInRegistry.Where(x => x.TimeLogIn == DateDay).ToList())
            {
                UserDetails U = new UserDetails();
                //db.UserInOrg.Where(x => x.Id == Lo.UserInOrgId)
                U.User = db.User.First(x => x.Id == Lo.UserInOrg.UserId);
                U.Org = db.Org.First(x => x.Id == Lo.UserInOrg.OrgId);
                U.Department = db.department.First(x => x.Id == Lo.UserInOrg.DepId);
                U.Auth = db.Auth.Where(x => x.UserInOrgId == Lo.UserInOrg.Id).ToList();
                LUserDetails.Add(U);
            }
            return LUserDetails;
        }

        //between Two Date Based OrgId
        public List<UserDetails> searchAllUserInOrgRangDate(UserContext db, DateTime before, DateTime after, int orgid)
        {

            List<UserDetails> LUserDetails = new List<UserDetails>();
            foreach (UserInOrg uIg in db.UserInOrg.Where(x => x.OrgId == orgid).ToList())
            {
                foreach (LogInRegistry Lo in db.LogInRegistry.Where(x => x.TimeLogIn > after && x.TimeLogIn < before && x.UserInOrgId == uIg.Id).ToList())
                {
                    UserDetails U = new UserDetails();
                    U.User = db.User.First(x => x.Id == Lo.UserInOrg.UserId);
                    U.Department = db.department.First(x => x.Id == Lo.UserInOrg.DepId);
                    U.Auth = db.Auth.Where(x => x.UserInOrgId == Lo.UserInOrg.Id).ToList();
                    LUserDetails.Add(U);
                }
            }
            return LUserDetails;
        }

        //between Two Date Based UserId
        public List<UserDetails> searchRangDateBasedUserId(UserContext db, DateTime before, DateTime after, int userId)
        {

            List<UserDetails> LUserDetails = new List<UserDetails>();
            UserInOrg userInorg = db.UserInOrg.First(x => x.UserId == userId);

            foreach (LogInRegistry Lo in db.LogInRegistry.Where(x => x.TimeLogIn > after && x.TimeLogIn < before && x.UserInOrgId == userInorg.Id).ToList())
            {
                UserDetails U = new UserDetails();
                U.Department = db.department.First(x => x.Id == Lo.UserInOrg.DepId);
                U.Auth = db.Auth.Where(x => x.UserInOrgId == Lo.UserInOrg.Id).ToList();
                LUserDetails.Add(U);
            }
            return LUserDetails;
        }


        public UserDetails SearchDetailsBasedUserIdTeamId(UserContext db, int userId, int depId)
        {


            return null;
        }

        public UserDetails SearchDetailsBasedUserIdDepId(UserContext db, int userId, int depId)
        {

            UserInOrg u = db.UserInOrg.First(x => x.UserId == userId && x.DepId == depId);
            return new UserDetails { User = u.User, Org = u.Org, Auth = u.Auth.ToList(), LogInRegistry = u.LogInRegistry.ToList() };
        }




    }
}