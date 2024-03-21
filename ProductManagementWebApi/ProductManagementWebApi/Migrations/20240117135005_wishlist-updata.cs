using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProductManagementWebApi.Migrations
{
    public partial class wishlistupdata : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ProductId",
                table: "Wishlists",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ProductId",
                table: "Wishlists");
        }
    }
}
