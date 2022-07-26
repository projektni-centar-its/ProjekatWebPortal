﻿using Microsoft.AspNetCore.Identity;
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
        public DbSet<OrganizationFile> OrganizationFiles { get; set; }
        public DbSet<Subject> Subjects { get; set; }
        public DbSet<Module> Modules { get; set; }
        public DbSet<Material> Materials { get; set; }
        public DbSet<GlobalRequest> GlobalRequests { get; set; }
        public DbSet<News> News { get; set; }
    }
}