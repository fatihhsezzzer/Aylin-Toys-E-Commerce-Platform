using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProductManagementWebApi.Models;

namespace ProductManagementWebApi.Controllers
{
    [Route("api/[controller]")]
    //api/category
    [ApiController]
    public class CategoryController : ControllerBase
    {

        DataContext db = new DataContext();

        [HttpGet]
        [AllowAnonymous]
        public IEnumerable<Category> GetAll()
        {
            return db.Category.ToList();
        }

        [HttpGet("{id}")]
        [AllowAnonymous]
        public List<Product> GetById(int id)
        {
          
            var product = db.Product.Where(x => x.CategoryId == id).ToList();

          
            if (product == null)
            {
                return null; 
            }

            return product;
        }


        [HttpDelete("{id}")]
        [Authorize]
        public IActionResult Delete(int id)
        {
            var category = db.Category.FirstOrDefault(x => x.Id == id);
            if (category != null)
            {
                db.Category.Remove(category);
                db.SaveChanges();
                return StatusCode(200);
            }
            else
            {
                return StatusCode(404);
            }
        }

        [HttpPost]
        [Authorize]
        public IActionResult Post(Category category)
        {
            if (!String.IsNullOrEmpty(category.Name))
            {
                db.Category.Add(category);
                db.SaveChanges();
                return Ok("Basarili");
            }
            else
            {
                return Ok("Basarisiz");
            }
        }

     
        [HttpPut("{id}")]
        [Authorize]
        public IActionResult Put2(int id, Category category)
        {
            var findCategory = db.Category.FirstOrDefault(x => x.Id == id);
            if (findCategory != null)
            {
                findCategory.Name = category.Name;
                findCategory.IsStatus = category.IsStatus;
                db.SaveChanges();
                return Ok("Basarili");
            }
            else
            {
                return Ok("Kategori Bulunamadı");
            }
        }
    }
}
