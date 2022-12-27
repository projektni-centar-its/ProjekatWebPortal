using Microsoft.AspNetCore.Identity;

namespace ProjekatWebPortal.Models
{
    //Ovu klasu koristimo kako bi dodali jos parametara u user tabelu
    public class ApplicationUser : IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string ImagePath { get; set; }
        public int? SchoolId { get; set; }
        public School School { get; set; }
        public int SchoolEnrollmentYear { get; set; }
        //TODO: Staviti da bude foreign key kada se dodaju Smerovi
        public int? MajorId { get; set; }
        public Major? Major { get; set; }
        //Da ne bi uvek morali da vrsimo upite nad role tabelom, jer je u identity framework uloga veza vise na vise,
        //naziv role korisnika se nalazi i u samoj user tabeli, jer nasa logika za jednog korisnika definise jednu rolu.
        //Ako se logika ikada bude menjala, moze se dodati metoda getRoles() koja vraca sve role u kojima je korisnik
        public string Role { get; set; }
        public IList<Material> Materials { get; set; }
    }
}