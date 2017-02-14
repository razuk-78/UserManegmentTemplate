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
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public department()
        {
            Auth = new HashSet<Auth>();
            //DepPointer = new HashSet<DepPointer>();
            //DepPointer1 = new HashSet<DepPointer>();
           
        }

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        [StringLength(50)]
        public string Name { get; set; }

        public int? AdminId { get; set; }

        public int OrgId { get; set; }

        public virtual ICollection<Auth> Auth { get; set; }
       
        [JsonIgnore]
        public virtual Org Org { get; set; }
     

    }
}
