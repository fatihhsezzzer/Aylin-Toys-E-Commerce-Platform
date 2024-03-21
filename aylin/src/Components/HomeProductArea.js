import React, { useState, useEffect } from 'react';

export default function HomeProductArea() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/products') // Gerçek API URL'nizi buraya girin
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Ürünler yüklenirken bir hata oluştu:', error));
    }, []);

    return (
        <div>
            <section className="product-area product-style1-area">
                {/* Diğer içerikler */}
                <div className="row">
                    {products.map(product => (
                        <div key={product.id} className="col-lg-3 col-md-4 col-sm-6">
                            <div className="product-item">
                                <div className="product-thumb">
                                    <img src={product.image} alt="Image" />
                                    {/* Diğer ürün aksiyonları */}
                                </div>
                                <div className="product-info">
                                    <div className="rating">
                                        {/* Yıldız puanlaması burada yer alabilir */}
                                    </div>
                                    <h4 className="title"><a href="shop-single-product.html">{product.name}</a></h4>
                                    <div className="prices">
                                        <span className="price">${product.price}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
