using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace ProjekatWebPortal.Models
{
    public enum SubjectTypes : short
    {
        Lokalni = 0,
        Globalni = 1
    }
    public class Subject
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int SchoolYear { get; set; }
        public SubjectTypes SubjectType { get; set; }
        public bool IsGlobal { get; set; }
        public IList<Major> Majors { get; set; }
        public IList<Module> Modules { get; set; }
        public GlobalRequest GlobalRequest { get; set; }
        public ICollection<MajorSubject> MajorSubject { get; set; }
    }
}
