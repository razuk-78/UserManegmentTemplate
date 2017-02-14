namespace UserMangementTemplate.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("UserInOrg")]
    public partial class UserInOrg
    {
 
        public UserInOrg()
        {
            Auth = new HashSet<Auth>();
     
            LogInRegistry = new HashSet<LogInRegistry>();
            TeamMember = new HashSet<TeamMember>();
        }

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public int UserId { get; set; }

        public int OrgId { get; set; }

        public int departmentId { get; set; }
      
        public virtual ICollection<LogInRegistry> LogInRegistry { get; set; }
        public virtual ICollection<TeamMember> TeamMember { get; set; }
        public virtual ICollection<Auth> Auth { get; set; }
       
    }
}
