import React from 'react'
import { TestimoniesAttrs } from '@/models/testimonies.model';

type Props = {}

const Testimonies = async (props: Props) => {
    const [busy, setBusy] = React.useState(false);
    const apiUri = process.env.NEXT_URI || 'http://localhost:3000';
    const response = await fetch(`${apiUri}/api/testimonials`, {
        next: {
            revalidate: 10
        }
    });
    const output = await response.json();
    const result = output.data as TestimoniesAttrs[];
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
                                        <div className="col-md-12 col-12 trc-my-10"></div>
                                        {result.map((item: TestimoniesAttrs, index: number) => (
                                            <div key={index} className="col-md-12">
                                                <div className="single-testimonial border-2 p-4">
                                                    {/* <div className='trc-clear-both border-sm w-full trc-bg-opacity-100 trc-opacity-100 trc-min-h-[200px] trc-bg-gray-200 hover:trc-bg-gray-300 hover:trc-opacity-25 hover:trc-border-orange-600 trc-mb-3 trc-rounded-2xl'></div> */}
                                                    <p className=''>
                                                        {item.testimony}
                                                    </p>
                                                    <div className="testimonial-referance trc-text-2xl">
                                                        <p><strong>{item.firstName} {item.lastName}</strong></p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonies