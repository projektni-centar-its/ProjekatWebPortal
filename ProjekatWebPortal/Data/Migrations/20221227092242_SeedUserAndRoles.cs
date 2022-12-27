using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProjekatWebPortal.Data.Migrations
{
    public partial class SeedUserAndRoles : Migration
    {
        //Roles Id
        private string superAdministratorRoleId = Guid.NewGuid().ToString();
        private string administratorRoleId = Guid.NewGuid().ToString();
        private string globalEditorRoleId = Guid.NewGuid().ToString();
        private string localEditorRoleId = Guid.NewGuid().ToString();
        private string professorRoleId = Guid.NewGuid().ToString();
        private string studentRoleId = Guid.NewGuid().ToString();

        //Users Id
        private string superAdministratorId = Guid.NewGuid().ToString();

        protected override void Up(MigrationBuilder migrationBuilder)
        {
            SeedRoles(migrationBuilder);
            SeedSuperAdmin(migrationBuilder);
            SeedSuperAdminRole(migrationBuilder);
        }

        private void SeedRoles(MigrationBuilder migrationBuilder)
        {
            //Super administrator
            migrationBuilder.Sql($@"INSERT INTO [dbo].[AspNetRoles] ([Id],[Name],[NormalizedName],[ConcurrencyStamp])
            VALUES ('{superAdministratorRoleId}','SuperAdministrator','SUPERADMINISTRATOR',null);");
            //Administrator
            migrationBuilder.Sql($@"INSERT INTO [dbo].[AspNetRoles] ([Id],[Name],[NormalizedName],[ConcurrencyStamp])
            VALUES ('{administratorRoleId}','Administrator','ADMINISTRATOR',null);");
            //Global editor
            migrationBuilder.Sql($@"INSERT INTO [dbo].[AspNetRoles] ([Id],[Name],[NormalizedName],[ConcurrencyStamp])
            VALUES ('{globalEditorRoleId}','GlobalEditor','GLOBALEDITOR',null);");
            //Local editor
            migrationBuilder.Sql($@"INSERT INTO [dbo].[AspNetRoles] ([Id],[Name],[NormalizedName],[ConcurrencyStamp])
            VALUES ('{localEditorRoleId}','LocalEditor','LOCALEDITOR',null);");
            //Professor
            migrationBuilder.Sql($@"INSERT INTO [dbo].[AspNetRoles] ([Id],[Name],[NormalizedName],[ConcurrencyStamp])
            VALUES ('{professorRoleId}','Professor','PROFESSOR',null);");
            //Student
            migrationBuilder.Sql($@"INSERT INTO [dbo].[AspNetRoles] ([Id],[Name],[NormalizedName],[ConcurrencyStamp])
            VALUES ('{studentRoleId}','Student','STUDENT',null);");
        }

        private void SeedSuperAdmin(MigrationBuilder migrationBuilder)
        {
            //UserName: SuperAdministrator | Password: SuperAdmin-1234
            migrationBuilder.Sql(@$"INSERT [dbo].[AspNetUsers] ([Id], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], 
            [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], 
            [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount], [FirstName], [ImagePath], [LastName],
            [MajorId],[Role],[SchoolEnrollmentYear],[SchoolId]) 
            VALUES 
            (N'{superAdministratorId}', N'SuperAdministrator', N'SUPERADMINISTRATOR', N'superadministrator@gmail.com', N'SUPERADMINISTRATOR@GMAIL.COM', 
            0, N'AQAAAAEAACcQAAAAECtPRy83llAh6yCb3pAU9dgFimYcRS9t6ayXX2raElxZcHgjZVf+D0Kd2j/cL3OEN==', NULL, NULL, NULL, 0, 0, NULL, 0, 0, NULL, NULL, 
            NULL, NULL, N'SuperAdministrator', 0, NULL)");
        }

        private void SeedSuperAdminRole(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(@$"
            INSERT INTO [dbo].[AspNetUserRoles]
           ([UserId]
           ,[RoleId])
            VALUES
           ('{superAdministratorId}', '{superAdministratorRoleId}');");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
