import React from 'react'

const HomeTestimonials = () => {
    return (
        <>
            <section className="testimonials-section trc-my-8">
                <div className="testimonials-area">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-title text-center">
                                    <h4>Testimonials</h4>
                                    <h2>Our Student Saying...</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="testimonials-wrapper owl-carousel m-0 p-0">

                                    <div className="single-testimonial border-2 p-4 trc-relative">
                                        <div className='trc-grid trc-grid-cols-1 '>
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla sint occaecat cupidatat non proident, sunt in culpa.</p>
                                        </div>
                                        <div className="testimonial-referance">
                                            <p><strong>Jhon Smith; </strong> CEO &amp; Founder o</p>
                                        </div>
                                    </div>
                                    <div className="single-testimonial border-2 p-4">
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla sint occaecat cupidatat non proident, sunt in culpa.</p>
                                        <div className="testimonial-referance">
                                            <p><strong>Jhon Smith; </strong> CEO &amp; Founder t</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default HomeTestimonials
