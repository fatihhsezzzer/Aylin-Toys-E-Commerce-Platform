namespace ProductManagementWebApi.Models
{
    public class CartRequestModel
    {
      
      
        public int ProductId { get; set; }  // Ürüne ait referans
        public int Quantity { get; set; }  

    }
}
