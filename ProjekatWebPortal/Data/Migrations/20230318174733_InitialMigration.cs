using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProjekatWebPortal.Data.Migrations
{
    public partial class InitialMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Predmets",
                columns: table => new
                {
                    predmetId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    predmetNaziv = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    predmetOpis = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Razred = table.Column<int>(type: "int", nullable: false),
                    tipId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Predmets", x => x.predmetId);
                });

            migrationBuilder.CreateTable(
                name: "Smers",
                columns: table => new
                {
                    smerId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    smerNaziv = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    smerOpis = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    smerSkraceno = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    nazivFajlIts = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    nazivFajlNs = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    nazivFajlMs = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    fajlIts = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    fileMimeTypeIts = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    fileEkstenzijaIts = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    fajlNs = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    fileMimeTypeNs = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    fileEkstenzijaNs = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    fajlMs = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    fileMimeTypeMs = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    fileEkstenzijaMs = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Smers", x => x.smerId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Predmets");

            migrationBuilder.DropTable(
                name: "Smers");
        }
    }
}
