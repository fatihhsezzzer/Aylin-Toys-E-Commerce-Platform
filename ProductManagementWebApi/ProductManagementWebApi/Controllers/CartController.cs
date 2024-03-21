using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProductManagementWebApi.Models;
using ProductManagementWebApi.Models.ViewModel;

// Diğer gerekli using ifadeleri

[ApiController]
[Route("api/[controller]")]
public class CartController : ControllerBase
{
    DataContext db = new DataContext();


    [HttpGet("{userId}")]
    public async Task<IActionResult> GetCarts(int userId)
    {
        var carts = await db.Carts.Include(c => c.Items)
                                  .ThenInclude(i => i.Product) // Sepet öğelerine bağlı ürünleri dahil et
                                  .Where(c => c.UserId == userId)
                                  .Select(c => new {
                                      c.Id,
                                      c.UserId,
                                      Items = c.Items.Select(i => new {
                                          i.Id,
                                          i.Quantity,
                                          ProductName = i.Product.Name, // Ürünün ismini al
                                          ProductId=i.ProductId
                                      })
                                  })
                                  .ToListAsync();

        if (!carts.Any()) // Carts'ın null kontrolüne gerek yok, çünkü ToListAsync boş bir liste döndürürse Any() false olacaktır.
        {
            return NotFound("Kullanıcıya ait sepet bulunamadı.");
        }

        return Ok(carts);
    }



    // Sepete asenkron olarak ürün ekleme
    [HttpPost("{userId}")]
    public async Task<IActionResult> AddToCart(int userId, List<OrderViewModel> items)
    {
        
        Cart cart = new Cart();
        cart.UserId = userId;
        db.Carts.Add(cart);
        db.SaveChanges();

        foreach (var item in items)
        {
            CartItem cartItem = new CartItem();
            cartItem.ProductId = item.ProductId;
            cartItem.CartId= cart.Id;
            cartItem.OrderTime = DateTime.Now;
            cartItem.Quantity = item.Qunatity;
            db.CartItem.Add(cartItem);
            db.SaveChanges();
        }

       
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        //var cart = await db.Carts.Include(c => c.Items)
        //                         .FirstOrDefaultAsync(c => c.UserId == userId);

        //if (cart == null)
        //{
        //    cart = new Cart
        //    {
        //        UserId = userId,
        //        Items = new List<CartItem>()
        //    };
        //    db.Carts.Add(cart);
        //}

        //// CartItem ID'si veritabanında otomatik olarak oluşturulacak
        //cart.Items.Add(item);
        //await db.SaveChangesAsync();

        return Ok(cart);
    }


    // Sepetten asenkron olarak ürün çıkarma
    [HttpDelete("{userId}/{itemId}")]
    public async Task<IActionResult> RemoveFromCart(int userId, int itemId)
    {
        var cart = await db.Carts.Include(c => c.Items)
                                       .FirstOrDefaultAsync(c => c.UserId == userId);
        if (cart == null)
        {
            return NotFound("Sepet bulunamadı.");
        }

        var item = cart.Items.FirstOrDefault(i => i.Id == itemId);
        if (item == null)
        {
            return NotFound("Ürün bulunamadı.");
        }

        cart.Items.Remove(item);
        await db.SaveChangesAsync();

        return Ok(cart);
    }

    // Sepeti asenkron olarak güncelleme
    [HttpPut("{userId}")]
    public async Task<IActionResult> UpdateCart(int userId, List<CartItem> updatedItems)
    {
        var cart = await db.Carts.Include(c => c.Items)
                                       .FirstOrDefaultAsync(c => c.UserId == userId);
        if (cart == null)
        {
            return NotFound("Sepet bulunamadı.");
        }

        cart.Items = updatedItems;
        await db.SaveChangesAsync();

        return Ok(cart);
    }
}
