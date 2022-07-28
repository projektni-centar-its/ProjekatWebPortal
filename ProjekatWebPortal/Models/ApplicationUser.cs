using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace ProjekatWebPortal.Models
{
    //Ovu klasu koristimo kako bi dodali jos parametara u user tabelu
    public class ApplicationUser:IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string ImagePath { get; set; }
        //TODO: Staviti da bude foreign key kada se dodaju Skole
        public int SchoolId { get; set; }
        public int SchoolEnrollmentYear { get; set; }
        //TODO: Staviti da bude foreign key kada se dodaju Smerovi
        public int MajorId { get; set; }
        //Da ne bi uvek morali da vrsimo upite nad role tabelom, jer je u identity framework uloga veza vise na vise,
        //naziv role korisnika se nalazi i u samoj user tabeli, jer nasa logika za jednog korisnika definise jednu rolu.
        //Ako se logika ikada bude menjala, moze se dodati metoda getRoles() koja vraca sve role u kojima je korisnik
        public string Role { get; set; }

        //U konstruktoru se stringovi setuju na prazan string da ne bi bili null. Kasnije ce se sve setovati pri kreiranju i ovo nece biti potrebno.
        public ApplicationUser()
        {
            this.FirstName = "";
            this.LastName = "";
            this.ImagePath = "";
            this.Role = "";
        }

    }
}
