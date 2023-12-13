import React from 'react'

const ThreeServices = () => {
    return (
        <>
            <section className="services-section translate_34">
                <div className="services-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 mb-xs-5 mt-xs-5" data-aos="fade-in" data-aos-delay={200}>
                                <div className="single-service trc-bg-green-600 text-center text-white py-5 px-4">
                                    <div className="service-icon">
                                        <img src="assets/images/service_icon_01.png" alt="service one" className="img-fluid" />
                                    </div>
                                    <div className="service-text">
                                        <h4>Admissions, School Search &  Consultancy</h4>
                                        {/* <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.</p> */}
                                        <a href="#">Read More <i className="fas fa-angle-right" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-xs-5" data-aos="fade-in" data-aos-delay={400}>
                                <div className="single-service trc-bg-black hover:trc-bg-blue-900 text-center text-white py-5 px-4">
                                    <div className="service-icon">
                                        <img src="assets/images/service_icon_02.png" alt="service one" className="img-fluid" />
                                    </div>
                                    <div className="service-text">
                                        <h4>Study, Scholarships & Work permit</h4>
                                        {/* <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.</p> */}
                                        <a href="#">Read More <i className="fas fa-angle-right" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-xs-5" data-aos="fade-in" data-aos-delay={600}>
                                <div className="single-service trc-bg-blue-500 hover:trc-bg-gray-400 text-center text-white py-5 px-4">
                                    <div className="service-icon">
                                        <img src="assets/images/service_icon_03.png" alt="service one" className="img-fluid" />
                                    </div>
                                    <div className="service-text">
                                        <h4>Study VISA Assistance and Guidance </h4>
                                        {/* <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.</p> */}
                                        <a href="#">Read More <i className="fas fa-angle-right" /></a>
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

export default ThreeServices
