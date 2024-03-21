import React from 'react'
import { Link } from 'react-router-dom';
export default function Footer() {
    return (
        <div>
            <footer className="footer-area default-style">
                <div className="footer-main">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 col-lg-3">
                                <div className="widget-item item-style3">
                                    <div className="about-widget">
                                        <Link className="footer-logo" href="index.html">
                                            <img src="assets/img/logo.png" alt="Logo" />
                                        </Link>
                                        <div className="widget-social-icons">
                                            <Link href="#"><i className="ion-social-twitter" /></Link>
                                            <Link href="#"><i className="ion-social-tumblr" /></Link>
                                            <Link href="#"><i className="ion-social-facebook" /></Link>
                                            <Link href="#"><i className="ion-social-instagram-outline" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-lg-2">
                                <div className="widget-item item-style1">
                                    <h4 className="widget-title">Quick Links</h4>
                                    <h4 className="widget-title widget-collapsed-title collapsed" data-bs-toggle="collapse" data-bs-target="#dividerId-1">Quick Links</h4>
                                    <div id="dividerId-1" className="collapse widget-collapse-body">
                                        <nav className="widget-menu-wrap">
                                            <ul className="nav-menu nav item-hover-style">
                                                <li><Link href="index.html">- Support</Link></li>
                                                <li><Link href="index.html">- Helpline</Link></li>
                                                <li><Link href="index.html">- Courses</Link></li>
                                                <li><Link href="about.html">- About</Link></li>
                                                <li><Link href="index.html">- Event</Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-2">
                                <div className="widget-item item-style1">
                                    <h4 className="widget-title">Other Page</h4>
                                    <h4 className="widget-title widget-collapsed-title collapsed" data-bs-toggle="collapse" data-bs-target="#dividerId-2">Other Page</h4>
                                    <div id="dividerId-2" className="collapse widget-collapse-body">
                                        <nav className="widget-menu-wrap item-hover-style">
                                            <ul className="nav-menu nav">
                                                <li><Link href="about.html">- About</Link></li>
                                                <li><Link href="blog.html">- Blog</Link></li>
                                                <li><Link href="index.html">- Speakers</Link></li>
                                                <li><Link href="contact.html">- Contact</Link></li>
                                                <li><Link href="index.html">- Tricket</Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5 col-lg-2">
                                <div className="widget-item item-style2">
                                    <h4 className="widget-title">Company</h4>
                                    <h4 className="widget-title widget-collapsed-title collapsed" data-bs-toggle="collapse" data-bs-target="#dividerId-3">Company</h4>
                                    <div id="dividerId-3" className="collapse widget-collapse-body">
                                        <nav className="widget-menu-wrap item-hover-style">
                                            <ul className="nav-menu nav">
                                                <li><Link href="index.html">- Jesco</Link></li>
                                                <li><Link href="shop.html">- Shop</Link></li>
                                                <li><Link href="contact.html">- Contact us</Link></li>
                                                <li><Link href="login-register.html">- Log in</Link></li>
                                                <li><Link href="index.html">- Help</Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7 col-lg-3">
                                <div className="widget-item">
                                    <h4 className="widget-title">Store Information.</h4>
                                    <h4 className="widget-title widget-collapsed-title collapsed" data-bs-toggle="collapse" data-bs-target="#dividerId-4">Store Information.</h4>
                                    <div id="dividerId-4" className="collapse widget-collapse-body">
                                        <p className="widget-address">2005 Your Address Goes Here. <br />896, Address 10010, HGJ</p>
                                        <ul className="widget-contact-info">
                                            <li>Phone/Fax: <Link href="tel://0123456789">0123456789</Link></li>
                                            <li>Email: <Link href="mailto://demo@example.com">demo@example.com</Link></li>
                                        </ul>
                                        <div className="widget-payment-info">
                                            <div className="thumb">
                                                <Link href="index.html"><img src="assets/img/photos/payment1.png" alt="Image" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="footer-bottom-content">
                            <div className="row text-center">
                                <div className="col-sm-12">
                                    <div className="widget-copyright">
                                        <p><i className="fa fa-copyright" /> 2021 <span>KIDOL. </span> Made with <i className="fa fa-heart" /> by <Link target="_blank" href="https://www.hasthemes.com">HasThemes</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-shape bg-img" data-bg-img="assets/img/photos/footer1.png" />
            </footer>
        </div>
    )
}
