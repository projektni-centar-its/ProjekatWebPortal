using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace ProjekatWebPortal.Models

{
    public class MajorSchool
    {
        public int MajorId { get; set; }
        public Major Major { get; set; }
        public int SchoolId { get; set; }
        public School School { get; set; }
    }
}
