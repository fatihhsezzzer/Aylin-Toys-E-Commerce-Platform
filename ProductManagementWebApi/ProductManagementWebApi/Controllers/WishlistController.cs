using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProductManagementWebApi.Models;


namespace ProductManagementWebApi.Controllers
{
    public class WishlistController : Controller
    {
        DataContext db = new DataContext();

        [HttpPost]
        [Route("add")]
        public IActionResult AddToWishlist(int userId, int productId)
        {
            // Önce kullanıcının Wishlist'ini bulur veya yoksa oluşturur
            var wishlist = db.Wishlists.FirstOrDefault(w => w.UserId == userId);
            if (wishlist == null)
            {
                wishlist = new Wishlist { UserId = userId };
                db.Wishlists.Add(wishlist);
                db.SaveChanges();
            }

            // Bu ürün zaten kullanıcının Wishlist'inde var mı kontrol 
            var existingItem = db.WishlistItems
                                 .Any(wi => wi.WishlistId == wishlist.Id && wi.ProductId == productId);
            if (existingItem)
            {
                return BadRequest("Bu ürün zaten Wishlist'te var.");
            }

            
            var wishlistItem = new WishlistItem
            {
                WishlistId = wishlist.Id,
                ProductId = productId
            };

            db.WishlistItems.Add(wishlistItem);
            db.SaveChanges();

            return Ok(); // İşlem başarılı
        }


        [HttpPost]
        [Route("remove")]
        public IActionResult RemoveFromWishlist( int productId, int userId)
        {
            // Kullanıcının Wishlist'ini bulma
            var wishlist = db.Wishlists.FirstOrDefault(w => w.UserId == userId);
            if (wishlist == null)
            {
                return NotFound("Wishlist bulunamadı.");
            }

            // İlgili WishlistItem'ı bulma
            var wishlistItem = db.WishlistItems
                                 .Where(wi => wi.WishlistId == wishlist.Id && wi.ProductId == productId)
                                 .FirstOrDefault();

            if (wishlistItem != null)
            {
                db.WishlistItems.Remove(wishlistItem);
                db.SaveChanges();

                return Ok(); // Başarılı silme işlemi
            }
            else
            {
                return NotFound("WishlistItem bulunamadı.");
            }
        }



        [HttpGet]
        [Route("view/{userId}")]
        public IActionResult ViewWishlist(int userId)
        {
            if (userId <= 0)
            {
                return BadRequest("Geçersiz Kullanıcı ID.");
            }

            try
            {
                // Kullanıcıya ait WishlistItems'ları ve ilişkili ürünleri getirir
                var wishlistItems = db.WishlistItems
                                      .Where(wi => wi.Wishlist.UserId == userId)
                                      .Include(wi => wi.Product) 
                                      .ToList();

                if (!wishlistItems.Any())
                {
                    return new JsonResult(null);
                }

               
                var products = wishlistItems.Select(wi => wi.Product).ToList();

                return Ok(products); 
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Sunucu hatası: " + ex.Message);
            }
        }







    }
}
