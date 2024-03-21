
import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../../Contexts/CartContext';
import { useUser } from '../../Contexts/UserContext';
import { Link } from 'react-router-dom';


export default function CartPage() {
    const { cart, addToCart, removeFromCart, setCart } = useContext(CartContext);
    const [inputvalue, setInputvalue] = useState("");
    const { currentUser } = useUser();



    const calculateTotalPrice = () => {
        // Calculate the total price of items in the cart
        let totalPrice = 0;
        for (const item of cart) {
            totalPrice += item.price * item.quantity;
        }
        return totalPrice.toFixed(2);
    };


    const sendPostRequest = async () => {


        const cartInfo = cart.map(item => ({
            productId: item.id,
            qunatity: item.quantity,  // "qunatity" yerine "quantity" olarak düzelttim.

        }));

        try {
            const response = await fetch(`https://localhost:7237/api/Cart/${currentUser.id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(cartInfo) // cartInfo ile sadece gerekli bilgileri gönderiyoruz
            });
            console.log(cart)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Response:', data);

            // İşlem başarılı olduktan sonra cart'ı boşalt
            setCart([]);
            alert("Sepet Başarılı bir şekilde kayıt edilmiştir...")
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    };


    return (

        <div>
            <section className="product-area cart-page-area">
                {/* ... Diğer HTML yapısı */}
                <div className="row">
                    <div className="col-lg-12">
                        <div className="cart-table-wrap">
                            <div className="cart-table table-responsive">
                                <table>
                                    <thead>
                                        <tr>
                                            <th className="width-thumbnail" />
                                            <th className="width-name">Product</th>
                                            <th className="width-price"> Price</th>
                                            <th className="width-quantity">Quantity</th>
                                            <th className="width-subtotal">Subtotal</th>
                                            <th className="width-remove" />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart.map((item) => (
                                            <tr key={item.id}>
                                                <td className="product-thumbnail">
                                                    <Link to=""><img src={item.image} alt="Image" /></Link>
                                                </td>
                                                <td className="product-name">
                                                    <h5><Link to="shop-single-product.html">{item.name}</Link></h5>
                                                </td>
                                                <td className="product-price"><span className="amount">${item.price.toFixed(2)}</span></td>
                                                <td className="cart-quality">
                                                    <div className="product-details-quality">
                                                        <input type="number" className="input-text qty text" step={1} min={1} max={100} name="quantity" onChange={(e) => setInputvalue(e.target.value)} defaultValue={item.quantity} title="Qty" placeholder />
                                                    </div>
                                                </td>
                                                <td className="product-total"><span>${(item.price * inputvalue).toFixed(2)}</span></td>
                                                <td className="product-remove"><Link onClick={() => removeFromCart(item.id)}><i className="ion-ios-trash-outline" /></Link></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="cart-checkout-btn">
                            <button onClick={sendPostRequest} className="btn btn-primary">Sepeti Onayla</button>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
}



