import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../../Contexts/CartContext';
import { useParams } from 'react-router-dom';
import { useUser } from '../../Contexts/UserContext';





import { Link } from 'react-router-dom';

export default function CategoryDetail() {
    const { addToCart, addToFav, fav } = useContext(CartContext);
    const { isFavorite } = useUser();


    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        fetch(`https://localhost:7237/api/Category/${categoryId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Ürünler yüklenirken bir hata oluştu.');

                }
                return response.json();
            })
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, [categoryId]);

    if (loading) return <div>Yükleniyor...</div>;
    if (error) return <div>Hata: {error}</div>;
    if (!products.length) return <div>Bu kategoride ürün bulunamadı.</div>;

    return (
        <div className="row products-container">
            {products.map(product => (
                <div key={product.id} className="col-sm-6">
                    <div className="product-item">
                        <div className="product-thumb">
                            {/* Kalp ikonu */}
                            <div className="heart fa icon-heart">
                                <i onClick={() => addToFav(product)} className={`heart fa ${isFavorite(product) ? "fa-heart" : "fa-heart-o"}`}></i>
                            </div>
                            <img src={product.image} alt={product.name} />
                            <div className="product-action">
                                <a className="action-quick-view" onClick={() => addToCart(product)}><i className="ion-ios-cart" /></a>
                                <a className="action-quick-view" href="javascript:void(0)"><i className="ion-arrow-expand" /></a>
                                <a className="action-quick-view" href="shop-compare.html"><i className="ion-shuffle" /></a>
                            </div>
                        </div>
                        <div className="product-info">
                            <div className="rating">
                                <span className="fa fa-star" />
                                <span className="fa fa-star" />
                                <span className="fa fa-star" />
                                <span className="fa fa-star" />
                                <span className="fa fa-star" />
                            </div>
                            <h4 className="title">
                                <Link to={`/product-detail/${product.id}`}>{product.name}</Link>
                            </h4>
                            <div className="prices">
                                <span className="price">&#8378;{product.price}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    );
}
