namespace UserMangementTemplate.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Auth")]
    public partial class Auth
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id { get; set; }

        public int? UserInOrgId { get; set; }

        public int? DepId { get; set; }

        [Required]
        [StringLength(50)]
        public string Type { get; set; }

        public virtual UserInOrg UserInOrg { get; set; }

        public virtual department department { get; set; }
    }
}
