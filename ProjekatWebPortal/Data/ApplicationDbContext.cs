using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Hosting;
using ProjekatWebPortal.Models;

namespace ProjekatWebPortal.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //modelBuilder.Entity<PredmetPoSmeru>().HasKey(ps => new { ps.PredmetId, ps.SmerId });
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<MajorSchool>()
            .HasKey(ms => new { ms.MajorId, ms.SchoolId });
            modelBuilder.Entity<MajorSchool>()
                .HasOne(ms => ms.Major)
                .WithMany(ms => ms.MajorSchools)
                .HasForeignKey(ms => ms.MajorId);
            modelBuilder.Entity<MajorSchool>()
                .HasOne(ms => ms.School)
                .WithMany(ms => ms.MajorSchools)
                .HasForeignKey(bc => bc.SchoolId);

            modelBuilder.Entity<MajorSubject>()
            .HasKey(ms => new { ms.MajorId, ms.SubjectId });
            modelBuilder.Entity<MajorSubject>()
                .HasOne(ms => ms.Major)
                .WithMany(ms => ms.MajorSubject)
                .HasForeignKey(ms => ms.MajorId);
            modelBuilder.Entity<MajorSubject>()
                .HasOne(ms => ms.Subject)
                .WithMany(ms => ms.MajorSubject)
                .HasForeignKey(bc => bc.SubjectId);
        }

        public DbSet<School> Schools { get; set; }
        public DbSet<Major> Majors { get; set; }
        public DbSet<OrganizationFile> OrganizationFiles { get; set; }
        public DbSet<Subject> Subjects { get; set; }
        public DbSet<Module> Modules { get; set; }
        public DbSet<Material> Materials { get; set; }
        public DbSet<GlobalRequest> GlobalRequests { get; set; }
        public DbSet<News> News { get; set; }
        public DbSet<MajorSchool> MajorSchool { get; set; }
        public DbSet<MajorSubject> MajorSubject { get; set; }


    }
}