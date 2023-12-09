"use client"

import React from 'react'
import { IMAGES } from '@/config/images'
import Image from 'next/image'
import Link from 'next/link'

function TopBar() {
    return (
        <>
            <div className="header_top_area my-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="header_top d-flex justify-content-between">
                                <div className="site_logo mb-0">
                                    <Link href="/"><Image src={IMAGES.logo} width={370} alt="logo" className="img-fluid" /></Link>
                                </div>
                                <div className="site_info d-flex justify-content-between">
                                    <div className="single_info">
                                        <img src="assets/images/location.png" alt="Location" className="img-fluid" />
                                        <div className="info_data">
                                            <h6>Office Locations:</h6>
                                            <p>1010 New York, NY 10018 US</p>
                                        </div>
                                    </div>
                                    <div className="single_info">
                                        <img src="assets/images/phone.png" alt="Location" className="img-fluid" />
                                        <div className="info_data">
                                            <h6>Phone/Support</h6>
                                            <p>+880 2456 547</p>
                                        </div>
                                    </div>
                                    <div className="single_info">
                                        <button className="special-button">Apply Now <i className="fa fa-angle-right" /> <span className="button_icon"><i className="far fa-file-alt" /></span></button>
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

export default TopBar
