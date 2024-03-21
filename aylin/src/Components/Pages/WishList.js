import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../Contexts/UserContext';


import { CartContext } from '../../Contexts/CartContext';


export default function WishList() {

    const { addToCart, addToFav } = useContext(CartContext);
    const { fav } = useUser();




    return (
        <div>
            <section className="product-area wishlist-page-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto">
                            <div className="section-title text-center">
                                <h2 className="title">Wishlist</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="wishlist-table-content">
                                <div className="table-content table-responsive">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th className="width-remove" />
                                                <th className="width-thumbnail" />
                                                <th className="width-name">Product</th>
                                                <th className="width-price"> Unit price </th>
                                                <th className="width-stock-status"> Stock status </th>
                                                <th className="width-wishlist-cart" />
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {fav.map(product => (
                                                <tr key={product.id}>
                                                    <td className="product-remove"><Link onClick={() => addToFav(product)}>×</Link></td>
                                                    <td className="product-thumbnail">
                                                        <Link to="shop-single-product.html"><img src={product.image} alt="Image" /></Link>
                                                    </td>
                                                    <td className="product-name">
                                                        <h5><Link to="shop-single-product.html">{product.name}</Link></h5>
                                                    </td>
                                                    <td className="product-price"><span className="amount">${product.price}</span></td>
                                                    <td className="stock-status">
                                                        <span><i className="fa fa-check" /> In Stock</span>
                                                    </td>
                                                    <td className="wishlist-cart"><Link onClick={() => addToCart(product)}>Add to Cart</Link></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
