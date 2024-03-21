using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProductManagementWebApi.Migrations;
using ProductManagementWebApi.Models;
using System.Collections.Generic;

namespace ProductManagementWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        DataContext db = new DataContext();




        [HttpGet]
        //..api/Product

        
        public IEnumerable<ProductResponseModel> GetAll()
        {
            var productList = db.Product.ToList();
            List <ProductResponseModel> responseList= new List <ProductResponseModel> ();
            foreach (var product in productList)
            {
                ProductResponseModel productResponseModel = new ProductResponseModel()
                {
                    Id=product.Id,
                    Name = product.Name,
                    Price = product.Price,
                    Description = product.Description,
                    CategoryId = product.CategoryId,
                    Image = product.Image,
                    SKU = product.SKU
                };
                responseList.Add(productResponseModel);
            }
            return responseList;
        }

        [HttpGet("{id}")]
        public Product GetById(int id)
        {
            var product = db.Product.FirstOrDefault(x => x.Id == id);
            return product;
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var product = db.Product.FirstOrDefault(x => x.Id == id);
            if (product != null)
            {
                db.Product.Remove(product);
                db.SaveChanges();
                return StatusCode(200);
            }
            else
            {
                return StatusCode(404);
            }
        }

        [HttpPost]
        public IActionResult Post(ProductAddRequestModel productAddRequestModel)
        {
            if (productAddRequestModel == null)
            {
                return BadRequest("Ürün bilgisi boş olamaz.");
            }

            if (String.IsNullOrEmpty(productAddRequestModel.Name))
            {
                return BadRequest("Ürün adı boş olamaz.");
            }



            try
            {
                Product product = new Product()
                {
                    CategoryId = productAddRequestModel.CategoryId,
                    Name = productAddRequestModel.Name,
                    Description = productAddRequestModel.Description,
                    Image = productAddRequestModel.Image,
                    Price = productAddRequestModel.Price,
                    SKU = productAddRequestModel.SKU
                };
                db.Product.Add(product);
                db.SaveChanges();
            }
            catch( Exception ex)
            {
               
            }

   
            return Ok();
        }





        [HttpPut("{id}")]
        public IActionResult Put2(int id, Product product)
        {
            var findProduct = db.Product.FirstOrDefault(x => x.Id == id);
            if (findProduct != null)
            {
                findProduct.Name = product.Name;
                findProduct.Price = product.Price;
                findProduct.Description = product.Description;
                findProduct.SKU = product.SKU;
                //findProduct.Tags = product.Tags;
                findProduct.CategoryId = product.CategoryId;
                findProduct.Image = product.Image;
                return Ok("Basarili");
            }
            else
            {
                return Ok("Product Bulunamadı");
            }
        }
    }
}
