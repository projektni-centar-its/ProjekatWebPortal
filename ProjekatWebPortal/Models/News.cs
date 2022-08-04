using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace ProjekatWebPortal.Models
{
    public class News
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Headline { get; set; }
        public string ThumbnailImagePath { get; set; }
        public DateTime CreationDate { get; set; }
        public string Description { get; set; }
        public string Body { get; set; }
        public bool IsHighlight { get; set; }
    }
}
