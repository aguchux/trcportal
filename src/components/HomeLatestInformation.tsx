import React from 'react'
import { IMAGES } from '@/config/images'
const HomeLatestInformation = () => {
    return (
        <>
            <section className="blog-section semi_dark_bg" >
                <div className="blog-area trc-py-10">
                    <div className="container">
                        
                        <div className="row">
                            <div className="col-lg-6" >
                                <div className="big-blog-area border bg-white">
                                    <div className="blog-thumb trc-pr-4">
                                        <a href="#">
                                            <img src="assets/images/big_blog.png" alt="big blog" className="img-fluid" />
                                        </a>
                                    </div>
                                    <div className="blog-content px-4 pb-4">
                                        <div className="blog-text">
                                            <h3 className='trc-text-2xl'>A message from the Founder and CEO.</h3>
                                            <p>My dream and passion for Africa is to give every youth an opportunity to live their dreams and secure their future today, through The Recruitment Consult - <em>Mr. Kingsley Okafor (UK)</em>.</p>
                                            <a href="#">Read More <i className="fas fa-long-arrow-alt-right" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6" >
                                <div className="blog-lists-wrapper">
                                    <div className="single-blog-wrapper">
                                        <div className="blog-thumb pr-4">
                                            <a href="#"><img src="assets/images/blog_01.png" className='trc-h-[120px]' alt="blog" /></a>
                                        </div>
                                        <div className="blog-content-wrapper">
                                            <h4><a href="#" className='trc-text-2xl trc-line-clamp-1'>Study Recommendations.</a></h4>
                                            <p className='trc-text-lg trc-text-black'>We will help you research, and recommend available universities you can apply to. </p>
                                            <div className="post-meta"><span>Posted on 25 March, 2019</span></div>
                                        </div>
                                    </div>
                                    <div className="single-blog-wrapper">
                                        <div className="blog-thumb pr-4">
                                            <a href="#"><img src="assets/images/blog_02.png" className='trc-h-[120px]' alt="blog" /></a>
                                        </div>
                                        <div className="blog-content-wrapper">
                                            <h4><a href="#" className='trc-text-2xl trc-line-clamp-1'>Student Study Visa Services.</a></h4>
                                            <p className='trc-text-lg trc-text-black'>Our team will assist you all the way from Visa applications, Prperations, and Interviews.</p>
                                            <div className="post-meta"><span>Posted on 25 March, 2019</span></div>
                                        </div>
                                    </div>
                                    <div className="single-blog-wrapper">
                                        <div className="blog-thumb pr-4">
                                            <a href="#"><img src="assets/images/blog_03.png" className='trc-h-[120px]' alt="blog" /></a>
                                        </div>
                                        <div className="blog-content-wrapper">
                                            <h4><a href="#" className='trc-text-2xl trc-line-clamp-1'>Graduate Immigration.</a></h4>
                                            <p className='trc-text-lg trc-text-black'>Your migrations plans is important to us, we will be available to help you all the way.</p>
                                            <div className="post-meta"><span>Posted on 25 March, 2019</span></div>
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

export default HomeLatestInformation
