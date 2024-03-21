namespace ProductManagementWebApi.Models
{
    public class Tag
    {
        public int Id { get; set; }
        public string Name { get; set; }

        // Ürünlerle ilişki
        public List<ProductTag> ProductTags { get; set; }
    }
}
