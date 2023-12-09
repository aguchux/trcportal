"use client"

import React from 'react'

export default function Slider() {
    return (
        <>
            <section className="slider-section swiper-container" data-aos="fade-in">
                <div className="swiper-wrapper">
                    <div className="slider-area height-700 swiper-slide overlay" style={{ backgroundImage: 'url(assets/images/slider_bg_2.jpg)' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-9">
                                    <div className="slider-content text-white pb-5 mb-5">
                                        <h2 className="display-3">Better Education For a Better World</h2>
                                        <p>Best Education Theme In 2019</p>
                                        <a href="#" className="button_one mt-4">Contact Us</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slider-area height-700 swiper-slide overlay" style={{ backgroundImage: 'url(assets/images/slider_bg.jpg)' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="slider-content text-white pb-5 mb-5">
                                        <h2 className="display-3">Standart  Syllebaus For Students</h2>
                                        <p>Best Education Theme In 2019</p>
                                        <a href="#" className="button_one mt-4">Contact Us</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slider-area height-700 swiper-slide overlay" style={{ backgroundImage: 'url(assets/images/slider_bg_3.jpg)' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="slider-content text-white pb-5 mb-5">
                                        <h2 className="display-3">Maintaince Educational Value</h2>
                                        <p>Best Education Theme In 2019</p>
                                        <a href="#" className="button_one mt-4">Contact Us</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="swiper-pagination" />
            </section>
            </>
    )
}
