using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProjekatWebPortal.Data.Migrations
{
    public partial class addMajorSubjectSchoolManyMany : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_MajorSchool_Majors_MajorsId",
                table: "MajorSchool");

            migrationBuilder.DropForeignKey(
                name: "FK_MajorSchool_Schools_SchoolsId",
                table: "MajorSchool");

            migrationBuilder.DropForeignKey(
                name: "FK_MajorSubject_Majors_MajorsId",
                table: "MajorSubject");

            migrationBuilder.DropForeignKey(
                name: "FK_MajorSubject_Subjects_SubjectsId",
                table: "MajorSubject");

            migrationBuilder.RenameColumn(
                name: "SubjectsId",
                table: "MajorSubject",
                newName: "SubjectId");

            migrationBuilder.RenameColumn(
                name: "MajorsId",
                table: "MajorSubject",
                newName: "MajorId");

            migrationBuilder.RenameIndex(
                name: "IX_MajorSubject_SubjectsId",
                table: "MajorSubject",
                newName: "IX_MajorSubject_SubjectId");

            migrationBuilder.RenameColumn(
                name: "SchoolsId",
                table: "MajorSchool",
                newName: "SchoolId");

            migrationBuilder.RenameColumn(
                name: "MajorsId",
                table: "MajorSchool",
                newName: "MajorId");

            migrationBuilder.RenameIndex(
                name: "IX_MajorSchool_SchoolsId",
                table: "MajorSchool",
                newName: "IX_MajorSchool_SchoolId");

            migrationBuilder.AddColumn<int>(
                name: "SubjectId",
                table: "Majors",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Majors_SubjectId",
                table: "Majors",
                column: "SubjectId");

            migrationBuilder.AddForeignKey(
                name: "FK_Majors_Subjects_SubjectId",
                table: "Majors",
                column: "SubjectId",
                principalTable: "Subjects",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_MajorSchool_Majors_MajorId",
                table: "MajorSchool",
                column: "MajorId",
                principalTable: "Majors",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_MajorSchool_Schools_SchoolId",
                table: "MajorSchool",
                column: "SchoolId",
                principalTable: "Schools",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_MajorSubject_Majors_MajorId",
                table: "MajorSubject",
                column: "MajorId",
                principalTable: "Majors",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_MajorSubject_Subjects_SubjectId",
                table: "MajorSubject",
                column: "SubjectId",
                principalTable: "Subjects",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Majors_Subjects_SubjectId",
                table: "Majors");

            migrationBuilder.DropForeignKey(
                name: "FK_MajorSchool_Majors_MajorId",
                table: "MajorSchool");

            migrationBuilder.DropForeignKey(
                name: "FK_MajorSchool_Schools_SchoolId",
                table: "MajorSchool");

            migrationBuilder.DropForeignKey(
                name: "FK_MajorSubject_Majors_MajorId",
                table: "MajorSubject");

            migrationBuilder.DropForeignKey(
                name: "FK_MajorSubject_Subjects_SubjectId",
                table: "MajorSubject");

            migrationBuilder.DropIndex(
                name: "IX_Majors_SubjectId",
                table: "Majors");

            migrationBuilder.DropColumn(
                name: "SubjectId",
                table: "Majors");

            migrationBuilder.RenameColumn(
                name: "SubjectId",
                table: "MajorSubject",
                newName: "SubjectsId");

            migrationBuilder.RenameColumn(
                name: "MajorId",
                table: "MajorSubject",
                newName: "MajorsId");

            migrationBuilder.RenameIndex(
                name: "IX_MajorSubject_SubjectId",
                table: "MajorSubject",
                newName: "IX_MajorSubject_SubjectsId");

            migrationBuilder.RenameColumn(
                name: "SchoolId",
                table: "MajorSchool",
                newName: "SchoolsId");

            migrationBuilder.RenameColumn(
                name: "MajorId",
                table: "MajorSchool",
                newName: "MajorsId");

            migrationBuilder.RenameIndex(
                name: "IX_MajorSchool_SchoolId",
                table: "MajorSchool",
                newName: "IX_MajorSchool_SchoolsId");

            migrationBuilder.AddForeignKey(
                name: "FK_MajorSchool_Majors_MajorsId",
                table: "MajorSchool",
                column: "MajorsId",
                principalTable: "Majors",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_MajorSchool_Schools_SchoolsId",
                table: "MajorSchool",
                column: "SchoolsId",
                principalTable: "Schools",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_MajorSubject_Majors_MajorsId",
                table: "MajorSubject",
                column: "MajorsId",
                principalTable: "Majors",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_MajorSubject_Subjects_SubjectsId",
                table: "MajorSubject",
                column: "SubjectsId",
                principalTable: "Subjects",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
