import React from 'react'
import { apiFetcher } from '@/axios';

type Props = {}

const Testimonies = (props: Props) => {
    const [busy, setBusy] = React.useState(false);
    return (
        <>
            <div className="page-wrapper trc-my-10">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="main-content">
                                <div className="contact-from-wrapper-2">
                                    <h2 className="section-heading">Testimonies</h2>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="single-testimonial border-2 p-4">

                                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla sint occaecat cupidatat non proident, sunt in culpa.</p>
                                                <div className="testimonial-referance">
                                                    <p><strong>Jhon Smith; </strong> CEO &amp; Founder</p>
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

            {/* <section className="testimonials-section section-ptb" data-aos="fade-up">
                <div className="testimonials-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-title text-center mb-4">
                                    <h4>Testimonials</h4>
                                    <h2>Our Student Saying...</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="testimonials-wrapper">
                                    <div className="single-testimonial border-2 p-4">
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla sint occaecat cupidatat non proident, sunt in culpa.</p>
                                        <div className="testimonial-referance">
                                            <p><strong>Jhon Smith; </strong> CEO &amp; Founder</p>
                                        </div>
                                    </div>
                                    <div className="single-testimonial border-2 p-4">
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla sint occaecat cupidatat non proident, sunt in culpa.</p>
                                        <div className="testimonial-referance">
                                            <p><strong>Jhon Smith; </strong> CEO &amp; Founder</p>
                                        </div>
                                    </div>
                                    <div className="single-testimonial border-2 p-4">
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla sint occaecat cupidatat non proident, sunt in culpa.</p>
                                        <div className="testimonial-referance">
                                            <p><strong>Jhon Smith; </strong> CEO &amp; Founder</p>
                                        </div>
                                    </div>
                                    <div className="single-testimonial border-2 p-4">
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla sint occaecat cupidatat non proident, sunt in culpa.</p>
                                        <div className="testimonial-referance">
                                            <p><strong>Jhon Smith; </strong> CEO &amp; Founder</p>
                                        </div>
                                    </div>
                                    <div className="single-testimonial border-2 p-4">
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla sint occaecat cupidatat non proident, sunt in culpa.</p>
                                        <div className="testimonial-referance">
                                            <p><strong>Jhon Smith; </strong> CEO &amp; Founder</p>
                                        </div>
                                    </div>
                                    <div className="single-testimonial border-2 p-4">
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla sint occaecat cupidatat non proident, sunt in culpa.</p>
                                        <div className="testimonial-referance">
                                            <p><strong>Jhon Smith; </strong> CEO &amp; Founder</p>
                                        </div>
                                    </div>
                                    <div className="single-testimonial border-2 p-4">
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla sint occaecat cupidatat non proident, sunt in culpa.</p>
                                        <div className="testimonial-referance">
                                            <p><strong>Jhon Smith; </strong> CEO &amp; Founder</p>
                                        </div>
                                    </div>
                                    <div className="single-testimonial border-2 p-4">
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla sint occaecat cupidatat non proident, sunt in culpa.</p>
                                        <div className="testimonial-referance">
                                            <p><strong>Jhon Smith; </strong> CEO &amp; Founder</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}


        </>
    )
}

export default Testimonies