import React, { createContext, useState } from 'react';
import { useUser } from '../Contexts/UserContext';



export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);






    // Cart'a ürün ekleme fonksiyonu
    const addToCart = (product) => {
        // Sepette bu ürün var mı diye kontrol et
        const existingProduct = cart.find(item => item.id === product.id);

        if (existingProduct) {
            // Ürün zaten varsa, sadece miktarını güncelle
            const updatedCart = cart.map(item => {
                if (item.id === product.id) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
            setCart(updatedCart);
        } else {
            // Ürün yoksa, yeni ürünü sepete ekle
            setCart([...cart, { ...product, quantity: 1 }]);
        }
        alert("Ürün Sepete Eklendi...")
    };


    // Cart'tan ürün çıkarma fonksiyonu
    const removeFromCart = (productId) => {
        setCart(cart.filter(product => product.id !== productId));
    };





    return (
        <CartContext.Provider value={{ cart, addToCart, setCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
