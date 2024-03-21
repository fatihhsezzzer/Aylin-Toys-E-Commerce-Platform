namespace ProductManagementWebApi.Models
{
    public class Category
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public bool IsStatus { get; set; }
        public string Image { get; set; }  

        // Her kategorinin birden fazla ürünü olabilir
        public List<Product> Products { get; set; }

        public Category()
        {
            Products = new List<Product>();
        }
    }
}
