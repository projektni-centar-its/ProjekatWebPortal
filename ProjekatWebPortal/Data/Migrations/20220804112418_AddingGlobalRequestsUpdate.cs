using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProjekatWebPortal.Data.Migrations
{
    public partial class AddingGlobalRequestsUpdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_GlobalRequests_SubjectId",
                table: "GlobalRequests");

            migrationBuilder.CreateIndex(
                name: "IX_GlobalRequests_SubjectId",
                table: "GlobalRequests",
                column: "SubjectId",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_GlobalRequests_SubjectId",
                table: "GlobalRequests");

            migrationBuilder.CreateIndex(
                name: "IX_GlobalRequests_SubjectId",
                table: "GlobalRequests",
                column: "SubjectId");
        }
    }
}
