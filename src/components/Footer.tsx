"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { IMAGES } from '@/config/images'
import BaseFooter from './BaseFooter'

const Footer = () => {
    
    return (
        <>
            <footer>
                <div className="footer-area default_bg">
                    <div className="footer-top section-ptb">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 mb-xs-5">
                                    <div className="single_widget">
                                        <div className="address-widget">
                                            <div className="footer-logo">
                                                <Link href="/"><Image src={IMAGES.logoFooter} alt='' className="img-fluid" /></Link>
                                            </div>
                                            <div className='my-1 p p-1'>900 Lucerne Station Road Terrace, Orlando, FL 32806, USA </div>
                                            <div className='my-1 p p-1'>contact@eduaid.com</div>
                                            <div className='my-1 p p-1'>+892 5555 444</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-3d-5">
                                    <div className="single_widget">
                                        <h3>Useful Links</h3>
                                        <div className="widget-list">
                                            <ul>
                                                <li><a href="#">About Us</a></li>
                                                <li><a href="#">Our Instructors</a></li>
                                                <li><a href="#">Courses</a></li>
                                                <li><a href="#">History</a></li>
                                                <li><a href="#">Privacy Policy</a></li>
                                                <li><a href="#">Service Plus</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-xs-5">
                                    <div className="single_widget">
                                        <h3>Our Services</h3>
                                        <div className="widget-list">
                                            <ul>
                                                <li><a href="#">CSE Engeering</a></li>
                                                <li><a href="#">Graduation</a></li>
                                                <li><a href="#">Courses</a></li>
                                                <li><a href="#">Admission</a></li>
                                                <li><a href="#">Internation</a></li>
                                                <li><a href="#">Faqs</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="single_widget">
                                        <h3>Latest News</h3>
                                        <div className="widget-item">
                                            <div className="widget-image">
                                                <a href="#"><img src="assets/images/blog_01.jpg" alt="blog one" /></a>
                                            </div>
                                            <div className="widget-content">
                                                <h5><a href="#">7 Step Social Media Marke ting Strategy</a></h5>
                                                <div className="widget-meta">
                                                    <span>05 Jan 2019</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="widget-item">
                                            <div className="widget-image">
                                                <a href="#"><img src="assets/images/blog_02.jpg" alt="blog one" /></a>
                                            </div>
                                            <div className="widget-content">
                                                <h5><a href="#">7 Step Social Media Marke ting Strategy</a></h5>
                                                <div className="widget-meta">
                                                    <span>05 Jan 2019</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                   <BaseFooter />
                </div>
                <div className="scroll-top">
                    <div className="scroll-icon">
                        <i className="fa fa-angle-up" />
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
