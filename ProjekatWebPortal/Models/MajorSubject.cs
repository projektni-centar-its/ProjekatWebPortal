using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace ProjekatWebPortal.Models

{
    public class MajorSubject
    {
        public int MajorId { get; set; }
        public Major Major { get; set; }
        public int SubjectId { get; set; }
        public Subject Subject { get; set; }
    }
}
