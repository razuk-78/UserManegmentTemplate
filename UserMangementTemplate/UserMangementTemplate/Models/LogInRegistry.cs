namespace UserMangementTemplate.Models
{
    using Newtonsoft.Json;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("LogInRegistry")]
    public partial class LogInRegistry
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public int UserInOrgId { get; set; }

        public DateTime TimeLogIn { get; set; }
        [JsonIgnore]
        public virtual UserInOrg UserInOrg { get; set; }
    }
}
