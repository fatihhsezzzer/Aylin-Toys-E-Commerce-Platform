import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Blog from './Components/Pages/Blog';
import CartPage from './Components/Pages/CartPage';
import WishList from './Components/Pages/WishList';
import Contact from './Components/Contact';
import Login from './Components/Pages/Login';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import ShopPage from './Components/Pages/ShopPage';
import ProductDetail from './Components/Pages/ProductDetail';
import BlogDetail from './Components/Pages/BlogDetail';
import CategoryDetail from './Components/Pages/CategoryDetail';
import Account from './Components/Pages/Account';

import { CartProvider } from './Contexts/CartContext';
import { UserProvider } from './Contexts/UserContext';
import { useEffect, useState } from 'react';




function App() {





  return (

    <UserProvider>
      <CartProvider>
        <Router>
          <div className="App">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/about" element={<About />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/wishList" element={<WishList />} />
              <Route path="/login" element={<Login />} />
              <Route path="/MyAccount" element={<Account />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/product-detail/:productId" element={<ProductDetail />} />
              <Route path="/category-detail/:categoryId" element={<CategoryDetail />} />
              <Route path="/blog-detail/:blogId" element={<BlogDetail />} />



            </Routes>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </UserProvider>

  );
}

export default App;
