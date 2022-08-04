using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProjekatWebPortal.Data.Migrations
{
    public partial class fixOrganizationFileTypo : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OrganizationFIles_Majors_MajorId",
                table: "OrganizationFIles");

            migrationBuilder.DropPrimaryKey(
                name: "PK_OrganizationFIles",
                table: "OrganizationFIles");

            migrationBuilder.RenameTable(
                name: "OrganizationFIles",
                newName: "OrganizationFiles");

            migrationBuilder.RenameIndex(
                name: "IX_OrganizationFIles_MajorId",
                table: "OrganizationFiles",
                newName: "IX_OrganizationFiles_MajorId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_OrganizationFiles",
                table: "OrganizationFiles",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_OrganizationFiles_Majors_MajorId",
                table: "OrganizationFiles",
                column: "MajorId",
                principalTable: "Majors",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OrganizationFiles_Majors_MajorId",
                table: "OrganizationFiles");

            migrationBuilder.DropPrimaryKey(
                name: "PK_OrganizationFiles",
                table: "OrganizationFiles");

            migrationBuilder.RenameTable(
                name: "OrganizationFiles",
                newName: "OrganizationFIles");

            migrationBuilder.RenameIndex(
                name: "IX_OrganizationFiles_MajorId",
                table: "OrganizationFIles",
                newName: "IX_OrganizationFIles_MajorId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_OrganizationFIles",
                table: "OrganizationFIles",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_OrganizationFIles_Majors_MajorId",
                table: "OrganizationFIles",
                column: "MajorId",
                principalTable: "Majors",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
