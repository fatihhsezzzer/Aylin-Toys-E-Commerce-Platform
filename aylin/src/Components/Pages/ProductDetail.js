import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../../Contexts/CartContext';
import { useParams } from 'react-router-dom';

function ProductDetail() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        fetch(`https://localhost:7237/api/Product/${productId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Ürün yüklenirken bir hata oluştu.');
                }
                return response.json();
            })
            .then(data => {
                setProduct(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, [productId]);

    if (loading) return <div>Yükleniyor...</div>;
    if (error) return <div>Hata: {error}</div>;
    if (!product) return <div>Ürün bulunamadı.</div>;

    return (
        <div className="col-lg-6">
            <div className="single-product-info">
                <h4 className="title">{product.name}</h4>
                <div className="prices">
                    <span className="price">&#8378;{product.price}</span>
                </div>
                <div className="product-rating">
                    <div className="rating">
                        {/* Dinamik yıldız derecelendirmesi için yıldız ikonları */}
                        {/* ... */}
                    </div>
                    <div className="review">
                        <a href="#/">(Customer Review Placeholder)</a>
                    </div>
                </div>
                <div className="single-product-featured">
                    <ul>
                        <li><i className="fa fa-check" /> Free Shipping</li>
                        <li><i className="fa fa-check" /> Support 24/7</li>
                        <li><i className="fa fa-check" /> Money Return</li>
                    </ul>
                </div>
                <p className="product-desc">{product.description}</p>
                <div className="quick-product-action">
                    <div className="action-top">
                        <div className="pro-qty">
                            <input type="text" id="quantity" title="Quantity" />
                        </div>
                        <button onClick={addToCart} className="btn btn-theme">Add to Cart</button>
                        <a className="btn-wishlist" href="shop-wishlist.html">Add to Wishlist</a>
                    </div>
                </div>
                <div className="widget">
                    <h3 className="title">SKU:</h3>
                    <div className="widget-tags">
                        <span>{product.sku}</span>
                    </div>
                </div>
                <div className="widget">
                    <h3 className="title">Categories:</h3>
                    <div className="widget-tags">
                        {/* Kategorileri dinamik olarak göster */}
                        <a href="blog.html">{product.category}</a>
                    </div>
                </div>
                <div className="widget">
                    <h3 className="title">Tag:</h3>
                    <div className="widget-tags">
                        {/* Etiketleri dinamik olarak göster */}
                        {product.tags && product.tags.map(tag => (
                            <a href="blog.html" key={tag}>{tag}</a>
                        ))}
                    </div>
                </div>
                <div className="widget">
                    <h3 className="title">Share:</h3>
                    <div className="widget-tags widget-share">
                        {/* Sosyal medya paylaşım ikonları */}
                        <span className="fa fa-facebook" />
                        <span className="fa fa-dribbble" />
                        <span className="fa fa-pinterest-p" />
                        <span className="fa fa-twitter" />
                        <span className="fa fa-linkedin" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
