import React from 'react'
import { IMAGES } from '@/config/images'
import Image from 'next/image'
import Link from 'next/link'

async function TopBar() {
    return (
        <>
        
            <div className="header_top_area my-4">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="header_top d-flex justify-content-between">
                                <div className="site_logo trc-mb-[-10px] p-0">
                                    <Link href="/"><Image src={IMAGES.logo} width={180} alt="logo" className="img-fluid trc-m-0 trc-p-0" /></Link>
                                </div>
                                <div className="site_info d-flex justify-content-between">
                                    <div className="single_info">
                                        <img src="assets/images/location.png" alt="Location" className="img-fluid" />
                                        <div className="info_data">
                                            <h6>Office Locations:</h6>
                                            <p>83 Ziks Avenue, Uwani, Enugu State, NG.</p>
                                        </div>
                                    </div>
                                    <div className="single_info">
                                        <img src="assets/images/phone.png" alt="Location" className="img-fluid" />
                                        <div className="info_data">
                                            <h6>Phone/Support</h6>
                                            <p>234 815 811 6094</p>
                                        </div>
                                    </div>
                                    <div className="single_info">
                                        <Link href={'/forms/application'} className="special-button">Apply Now <i className="fa fa-angle-right" /> <span className="button_icon"><i className="far fa-file-alt" /></span></Link>
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
