namespace ProductManagementWebApi.Models
{
    public class Wishlist
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public virtual User User { get; set; }

        public virtual ICollection<WishlistItem> Items { get; set; }

        public Wishlist()
        {
            Items = new HashSet<WishlistItem>();
        }
    }

}
