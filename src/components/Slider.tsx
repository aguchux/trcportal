import Link from 'next/link'
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
                                        <h2 className="display-3">Helping Nigerians to Study in the UK</h2>
                                        <p className='trc-text-2xl trc-font-bold'>TRC operates in Europe, America, Canada and Australia</p>
                                        <Link href="#" className="button_one mt-4 trc-text-2xl trc-font-extrabold">Apply with TRC Free</Link>
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
                                        <h2 className="display-3">Hassle-free & Fast VISA UK assistance.</h2>
                                        <p className='trc-text-2xl trc-font-bold'>TRC operates in Europe, America, Canada and Australia</p>
                                        <Link href="#" className="button_one mt-4 trc-text-2xl trc-font-extrabold">See How it works</Link>
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
                                        <h2 className="display-3">University Search and Cunsultancy</h2>
                                        <p className='trc-text-2xl trc-font-bold'>TRC operates in Europe, America, Canada and Australia</p>
                                        <Link href="#" className="button_one mt-4 trc-text-2xl trc-font-extrabold">Contact Us Today</Link>
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
