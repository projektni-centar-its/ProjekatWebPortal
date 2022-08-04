using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using ProjekatWebPortal.Models;

namespace ProjekatWebPortal.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        public DbSet<School> Schools { get; set; }
        public DbSet<Major> Majors { get; set; }
        public DbSet<OrganizationFIle> OrganizationFIles { get; set; }
        public DbSet<Subject> Subjects { get; set; }
    }
}