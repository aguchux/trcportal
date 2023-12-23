import { TestimoniesAttrs } from '@/models/testimonies.model'
import React from 'react'

const HomeTestimonials = () => {
    // const apiUri = process.env.NEXT_URI || 'http://localhost:3000';
    // const output = await fetch(`${apiUri}/api/testimonials`, {
    //     next: {
    //         revalidate: 10
    //     }
    // })
    // const result = await output.json()
    const testimonies: TestimoniesAttrs[] = []
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
                                    {testimonies.map((testimony: TestimoniesAttrs, index: number) => (

                                        <div key={index} className="single-testimonial border-2 p-4 trc-relative">
                                            <div className='trc-grid trc-grid-cols-1 '>
                                                <p>{testimony.testimony!}</p>
                                            </div>
                                            <div className="testimonial-referance">
                                                <p><strong>{testimony.firstName} {testimony.lastName}</strong> </p>
                                            </div>
                                        </div>

                                    ))}


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
