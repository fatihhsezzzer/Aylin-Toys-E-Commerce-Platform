import React from 'react'
import { Link } from 'react-router-dom';
export default function Contact() {
    return (
        <div>
            <main className="main-content">
                <section className="page-title-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12 m-auto">
                                <div className="page-title-content text-center">
                                    <h2 className="title">Contact Us</h2>
                                    <div className="bread-crumbs"><Link to="/">Home</Link><span className="breadcrumb-sep">//</span><span className="active">Contact Us</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="contact-area">
                    <div className="container">
                        <div className="contact-page-wrap">
                            <div className="row">
                                <div className="col-lg-10 m-auto">
                                    <div className="contact-info-items text-center">
                                        <div className="row row-gutter-80">
                                            <div className="col-sm-6 col-md-4">
                                                <div className="contact-info-item">
                                                    <div className="icon">
                                                        <img className="icon-img" src="assets/img/icons/5.png" alt="Icon" />
                                                    </div>
                                                    <h2>Address</h2>
                                                    <div className="content">
                                                        <p>Your address goes here</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-4">
                                                <div className="contact-info-item mt-xs-30">
                                                    <div className="icon">
                                                        <img className="icon-img" src="assets/img/icons/6.png" alt="Icon" />
                                                    </div>
                                                    <h2>Phone No</h2>
                                                    <div className="content">
                                                        <Link href="tel://+00123456789">+ 00 123 456 789</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-4">
                                                <div className="contact-info-item mt-sm-30">
                                                    <div className="icon">
                                                        <img className="icon-img" src="assets/img/icons/7.png" alt="Icon" />
                                                    </div>
                                                    <h2>Email / Web</h2>
                                                    <div className="content">
                                                        <Link href="mailto://demo@example.com">demo@example.com</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="contact-map-area">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8402891185374!2d144.95373631590425!3d-37.81720974201477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2ssg!4v1607294780661!5m2!1sen!2ssg" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-10 m-auto">
                                    <div className="contact-form">
                                        <form className="contact-form-wrapper" id="contact-form" action="https://whizthemes.com/mail-php/raju/arden/mail.php" method="post">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="section-title">
                                                        <h2 className="title">Send A Quest</h2>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <input className="form-control" type="text" name="con_name" placeholder="Name *" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <input className="form-control" type="email" name="con_email" placeholder="Email *" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <input className="form-control" type="text" placeholder="Subject (Optinal)" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <textarea className="form-control" name="con_message" placeholder="Message" defaultValue={""} />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="form-group text-center">
                                                                <button className="btn btn-theme" type="submit">Send Message</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="form-message" />
                                </div>
                            </div>
                        </div>
                    </div >
                </section >
            </main >
        </div >

    )
}
