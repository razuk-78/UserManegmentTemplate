namespace UserMangementTemplate.Models
{
    using Newtonsoft.Json;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Auth")]
    public partial class Auth
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public int? UserInOrgId { get; set; }

        public int? departmentId { get; set; }

        [Required]
        [StringLength(50)]
        public string Type { get; set; }
        [JsonIgnore]
        public virtual UserInOrg UserInOrg { get; set; }
        [JsonIgnore]
        public virtual department department { get; set; }
    }
}
