using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProjekatWebPortal.Data.Migrations
{
    public partial class AddingSubjects : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Subjects",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SchoolYear = table.Column<int>(type: "int", nullable: false),
                    SubjectType = table.Column<short>(type: "smallint", nullable: false),
                    IsGlobal = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Subjects", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "MajorSubject",
                columns: table => new
                {
                    MajorsId = table.Column<int>(type: "int", nullable: false),
                    SubjectsId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MajorSubject", x => new { x.MajorsId, x.SubjectsId });
                    table.ForeignKey(
                        name: "FK_MajorSubject_Majors_MajorsId",
                        column: x => x.MajorsId,
                        principalTable: "Majors",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_MajorSubject_Subjects_SubjectsId",
                        column: x => x.SubjectsId,
                        principalTable: "Subjects",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_MajorSubject_SubjectsId",
                table: "MajorSubject",
                column: "SubjectsId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "MajorSubject");

            migrationBuilder.DropTable(
                name: "Subjects");
        }
    }
}
