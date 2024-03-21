import React from 'react'

export default function Sldier() {
    return (
        <div>
            <section className="home-slider-area slider-default">
                <div className="home-slider-content">
                    <div className="swiper-container home-slider-container">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="home-slider-item">
                                    <div className="thumb-one bg-img" data-bg-img="assets/img/slider/1.png" />
                                    <div className="slider-content-area">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="content">
                                                        <div className="inner-content">
                                                            <h2>Best Kids Store &amp; Online Shop</h2>
                                                            <p>Give The Gift Of Your Children Everyday</p>
                                                            <a href="shop.html" className="btn-theme">Shop This Now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <img className="thumb-two" src="assets/img/slider/2.png" alt="Image" />
                                        <img className="thumb-three" src="assets/img/slider/3.png" alt="Image" />
                                        <img className="thumb-four" src="assets/img/photos/3.png" alt="Image" />
                                    </div>
                                    <div className="shape-top bg-img" data-bg-img="assets/img/photos/1.png" />
                                    <div className="shape-bottom bg-img" data-bg-img="assets/img/photos/2.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
