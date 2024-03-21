import React from 'react'
import { Link } from 'react-router-dom';
import AccountSlider from '../Sliders/AccountSlider'
import { useState, useEffect } from 'react';
import { useUser } from '../../Contexts/UserContext';
import { useNavigate } from 'react-router-dom';



export default function Login({ }) {
    const navigate = useNavigate();
    const { currentUser, setCurrentUser, fetchFavorites, Loginemail, Name, setName, Surname, setSurname, email, setEmail, password, Loginpassword, setLoginpassword, setLoginemail, setPassword, handleRegister, handleLogin } = useUser();

    const fatih = (e) => {
        e.preventDefault()
        handleLogin();
        navigate('/');

    }

    return (

        <div>
            <AccountSlider></AccountSlider>
            <section className="login-register-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 login-register-border">
                            <div className="login-register-content">
                                <div className="login-register-title mb-30">
                                    <h2>Login</h2>
                                    <p>Welcome back! Please enter your username and password to login. </p>
                                </div>
                                <div className="login-register-style login-register-pr">
                                    <form action="#" method="post">
                                        <div className="login-register-input">
                                            <input type="text" name="name" placeholder="E-mail address" value={Loginemail} required onChange={(e) => setLoginemail(e.target.value)} />
                                        </div>
                                        <div className="login-register-input">
                                            <input type="password" name="user-password" placeholder="Password" value={Loginpassword} required onChange={(e) => setLoginpassword(e.target.value)} />
                                            <div className="forgot">
                                                <Link href="#">Forgot?</Link>
                                            </div>
                                        </div>
                                        <div className="remember-me-btn">
                                            <input type="checkbox" />
                                            <label>Remember me</label>
                                        </div>
                                        <div className="btn-style-3">
                                            <button className="btn" onClick={(e) => fatih(e)} type="button">Login</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="login-register-content login-register-pl">
                                <div className="login-register-title mb-30">
                                    <h2>Register</h2>
                                    <p>Create new account today to reap the benefits of a personalized shopping experience. </p>
                                </div>
                                <div className="login-register-style">
                                    <form onSubmit={handleRegister} action="#" method="post">
                                        <div className="login-register-input">
                                            <input type="text" name="name" placeholder="Name" required
                                                value={Name} onChange={(e) => setName(e.target.value)} />
                                        </div>
                                        <div className="login-register-input">
                                            <input type="text" name="surname" placeholder="Surname" required
                                                value={Surname} onChange={(e) => setSurname(e.target.value)} />
                                        </div>
                                        <div className="login-register-input">
                                            <input type="text" name="user-name" placeholder="E-mail address" value={email} required onChange={(e) => setEmail(e.target.value)} />
                                        </div>
                                        <div className="login-register-input">
                                            <input type="password" name="user-password" placeholder="Password" value={password} required onChange={(e) => setPassword(e.target.value)} />
                                        </div>
                                        <div className="login-register-paragraph">
                                            <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <Link href="#">privacy policy.</Link></p>
                                        </div>
                                        <div className="btn-style-3">
                                            <button className="btn" onClick={handleRegister} type="button">Register</button>
                                        </div>
                                    </form>
                                    <div className="register-benefits">
                                        <h3>Sign up today and you will be able to :</h3>
                                        <p>The Loke Buyer Protection has you covered from click to delivery. Sign up <br />or sign in and you will be able to:</p>
                                        <ul>
                                            <li><i className="pe-7s-check icons" /> Speed your way through checkout</li>
                                            <li><i className="pe-7s-check icons" /> Track your orders easily</li>
                                            <li><i className="pe-7s-check icons" /> Keep a record of all your purchases</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </section >

        </div >
    )
}
