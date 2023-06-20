using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace ProjekatWebPortal.Models

{
    public class Major
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public string Shortcode { get; set; }
        public ICollection<MajorSchool> MajorSchools { get; set; }
        //public IList<ApplicationUser> Students { get; set; }
        //public IList<OrganizationFile> OrganizationFiles { get; set; }
        public ICollection<MajorSubject> MajorSubject { get; set; }
    }
}
