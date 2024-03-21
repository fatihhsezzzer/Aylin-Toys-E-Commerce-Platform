
import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../../Contexts/CartContext';
import { useUser } from '../../Contexts/UserContext';
import { Link, useNavigate } from 'react-router-dom';

export default function Account() {
    const { addToCart } = useContext(CartContext);
    const { currentUser, addToFav, isFavorite, fav, fetchFavorites, logout } = useUser();
    const [cartData, setCartData] = useState([]);




    const [orders, setOrders] = useState([]);

    useEffect(() => {

        const fetchOrders = async () => {
            try {
                const response = await fetch(`https://localhost:7237/api/Cart/${currentUser.id}`);
                const data = await response.json();
                setOrders(groupOrdersByOrderId(data));
            } catch (error) {
                console.error('Siparişler yüklenirken hata oluştu:', error);
            }
        };

        fetchOrders();
    }, []);

    // orderId'ye göre gruplandırma
    const groupOrdersByOrderId = (orders) => {
        return orders.reduce((acc, current) => {
            (acc[current.id] = acc[current.id] || []).push(current);
            return acc;
        }, {});
    };

    const fatih = () => { console.log(orders) }

    return (
        <>
            <main className="main-content">
                <section className="page-title-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12 m-auto">
                                <div className="page-title-content text-center">
                                    <h2 className="title">My Account</h2>
                                    <div className="bread-crumbs"><a href="index.html"> Home </a><span className="breadcrumb-sep"> // </span><span className="active"> My Account</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="my-account-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 m-auto">
                                <div className="section-title text-center">
                                    <h2 className="title">My account</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="myaccount-page-wrapper">
                                    <div className="row">
                                        <div className="col-lg-3 col-md-4">
                                            <nav>
                                                <div className="myaccount-tab-menu nav nav-tabs" id="nav-tab" role="tablist">
                                                    <button className="nav-link active" id="dashboad-tab" data-bs-toggle="tab" data-bs-target="#dashboad" type="button" role="tab" aria-controls="dashboad" aria-selected="true">Dashboard</button>
                                                    <button className="nav-link" id="orders-tab" data-bs-toggle="tab" data-bs-target="#orders" type="button" role="tab" aria-controls="orders" aria-selected="false"> Orders</button>
                                                    <button className="nav-link" id="download-tab" data-bs-toggle="tab" data-bs-target="#download" type="button" role="tab" aria-controls="download" aria-selected="false">Download</button>
                                                    <button className="nav-link" id="payment-method-tab" data-bs-toggle="tab" data-bs-target="#payment-method" type="button" role="tab" aria-controls="payment-method" aria-selected="false">Payment Method</button>
                                                    <button className="nav-link" id="address-edit-tab" data-bs-toggle="tab" data-bs-target="#address-edit" type="button" role="tab" aria-controls="address-edit" aria-selected="false">address</button>
                                                    <button className="nav-link" id="account-info-tab" data-bs-toggle="tab" data-bs-target="#account-info" type="button" role="tab" aria-controls="account-info" aria-selected="false">Account Details</button>
                                                    <button className="nav-link logout logout-link" onClick={logout} type="button">Logout</button>

                                                </div>
                                            </nav>
                                        </div>
                                        <div className="col-lg-9 col-md-8">
                                            <div className="tab-content" id="nav-tabContent">
                                                <div className="tab-pane fade show active" id="dashboad" role="tabpanel" aria-labelledby="dashboad-tab">
                                                    <div className="myaccount-content">
                                                        <h3>Dashboard</h3>
                                                        <div className="welcome">
                                                            <p>
                                                                Hello, <strong>{currentUser ? `${currentUser.name} ${currentUser.surname}` : 'Tuntuni'}</strong>
                                                                {currentUser && (
                                                                    <span> (If Not <strong>Tuntuni!</strong>
                                                                        <a onClick={logout} className="logout logout-link"> Logout) </a>
                                                                    </span>
                                                                )}
                                                            </p>
                                                        </div>
                                                        <p className="mb-0">From your account dashboard. you can easily check &amp; view your recent orders, manage your shipping and billing addresses and edit your password and account details.</p>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="orders" role="tabpanel" aria-labelledby="orders-tab">
                                                    <div className="myaccount-content">
                                                        <h3>Orders</h3>
                                                        <div className="myaccount-table table-responsive text-center">
                                                            <table className="table table-bordered">
                                                                <thead className="thead-light">
                                                                    <tr>
                                                                        <th>Order</th>
                                                                        <th>Date</th>
                                                                        <th>Status</th>
                                                                        <th>Total</th>
                                                                        <th>Action</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {Object.keys(orders).map((userId) => (
                                                                        orders[userId].map((order, index) => (
                                                                            <React.Fragment key={order.id}>
                                                                                <tr>
                                                                                    <td>{index + 1}</td>
                                                                                    <td>{ }</td>
                                                                                    <td>{/* Durum veya diğer bilgiler buraya gelecek */}</td>
                                                                                    <td>{/* Toplam fiyat veya diğer bilgiler buraya gelecek */}</td>
                                                                                    <td><a href="shop-cart.html" className="check-btn sqr-btn">View</a></td>
                                                                                </tr>
                                                                                {order.items.map((item, itemIndex) => (
                                                                                    <tr key={item.id}>
                                                                                        <td>--</td>
                                                                                        <td>Product ID: {item.productId}</td>
                                                                                        <td>Quantity: {item.quantity}</td>
                                                                                        <td>{/* Ürün fiyatı veya diğer bilgiler buraya gelecek */}</td>
                                                                                        <td><Link to={`/product-detail/${item.productId}`} className="check-btn sqr-btn">View Product</Link></td>
                                                                                    </tr>
                                                                                ))}
                                                                            </React.Fragment>
                                                                        ))
                                                                    ))}
                                                                </tbody>




                                                            </table>
                                                        </div>
                                                        <div className="tab-pane fade" id="download" role="tabpanel" aria-labelledby="download-tab">
                                                            <div className="myaccount-content">
                                                                <h3>Downloads</h3>
                                                                <div className="myaccount-table table-responsive text-center">
                                                                    <table className="table table-bordered">
                                                                        <thead className="thead-light">
                                                                            <tr>
                                                                                <th>Product</th>
                                                                                <th>Date</th>
                                                                                <th>Expire</th>
                                                                                <th>Download</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>Kidol - Kids Toys Store eCommerce Template</td>
                                                                                <td>Aug 22, 2022</td>
                                                                                <td>Yes</td>
                                                                                <td><a href="#/" className="check-btn sqr-btn"><i className="fa fa-cloud-download" /> Download File</a></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>HasTech - Profolio Business Template</td>
                                                                                <td>Sep 12, 2022</td>
                                                                                <td>Never</td>
                                                                                <td><a href="#/" className="check-btn sqr-btn"><i className="fa fa-cloud-download" /> Download File</a></td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="tab-pane fade" id="payment-method" role="tabpanel" aria-labelledby="payment-method-tab">
                                                            <div className="myaccount-content">
                                                                <h3>Payment Method</h3>
                                                                <p className="saved-message">You Can't Saved Your Payment Method yet.</p>
                                                            </div>
                                                        </div>
                                                        <div className="tab-pane fade" id="address-edit" role="tabpanel" aria-labelledby="address-edit-tab">
                                                            <div className="myaccount-content">
                                                                <h3>Billing Address</h3>
                                                                <address>
                                                                    <p><strong>Alex Tuntuni</strong></p>
                                                                    <p>1355 Market St, Suite 900 <br />
                                                                        San Francisco, CA 94103</p>
                                                                    <p>Mobile: (123) 456-7890</p>
                                                                </address>
                                                                <a href="#/" className="check-btn sqr-btn"><i className="fa fa-edit" /> Edit Address</a>
                                                            </div>
                                                        </div>
                                                        <div className="tab-pane fade" id="account-info" role="tabpanel" aria-labelledby="account-info-tab">
                                                            <div className="myaccount-content">
                                                                <h3>Account Details</h3>
                                                                <div className="account-details-form">
                                                                    <form action="#">
                                                                        <div className="row">
                                                                            <div className="col-lg-6">
                                                                                <div className="single-input-item">
                                                                                    <label htmlFor="first-name" className="required">First Name</label>
                                                                                    <input type="text" id="first-name" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-lg-6">
                                                                                <div className="single-input-item">
                                                                                    <label htmlFor="last-name" className="required">Last Name</label>
                                                                                    <input type="text" id="last-name" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="single-input-item">
                                                                            <label htmlFor="display-name" className="required">Display Name</label>
                                                                            <input type="text" id="display-name" />
                                                                        </div>
                                                                        <div className="single-input-item">
                                                                            <label htmlFor="email" className="required">Email Addres</label>
                                                                            <input type="email" id="email" />
                                                                        </div>
                                                                        <fieldset>
                                                                            <legend>Password change</legend>
                                                                            <div className="single-input-item">
                                                                                <label htmlFor="current-pwd" className="required">Current Password</label>
                                                                                <input type="password" id="current-pwd" />
                                                                            </div>
                                                                            <div className="row">
                                                                                <div className="col-lg-6">
                                                                                    <div className="single-input-item">
                                                                                        <label htmlFor="new-pwd" className="required">New Password</label>
                                                                                        <input type="password" id="new-pwd" />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-lg-6">
                                                                                    <div className="single-input-item">
                                                                                        <label htmlFor="confirm-pwd" className="required">Confirm Password</label>
                                                                                        <input type="password" id="confirm-pwd" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </fieldset>
                                                                        <div className="single-input-item">
                                                                            <button className="check-btn sqr-btn">Save Changes</button>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </ >
    )
}
