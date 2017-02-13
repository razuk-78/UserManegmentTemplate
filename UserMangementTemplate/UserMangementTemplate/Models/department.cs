namespace UserMangementTemplate.Models
{
    using Newtonsoft.Json;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("department")]
    public partial class department
    {
      
        public department()
        {
            Auth = new HashSet<Auth>();
            DepPointer = new HashSet<DepPointer>();
            DepPointer1 = new HashSet<DepPointer>();
            UserInOrg1 = new HashSet<UserInOrg>();
        }

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        [StringLength(50)]
        public string Name { get; set; }

        public int? AdminId { get; set; }
        [Required]
        public int OrgId { get; set; }

      
        
        public virtual ICollection<Auth> Auth { get; set; }
        //[JsonIgnore]
        //public virtual UserInOrg UserInOrg { get; set; }
        [JsonIgnore]
        public virtual Org Org { get; set; }
        [JsonIgnore]
        public virtual ICollection<DepPointer> DepPointer { get; set; }
        [JsonIgnore]
        public virtual ICollection<DepPointer> DepPointer1 { get; set; }
        [JsonIgnore]
        public virtual ICollection<UserInOrg> UserInOrg1 { get; set; }
    }
}
