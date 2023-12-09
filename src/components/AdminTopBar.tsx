"use client"

import React from 'react'
import { IMAGES } from '@/config/images'
import Image from 'next/image'
import Link from 'next/link'

function AdminTopBar() {
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
                                        <i className='fa fa-home fa-4x mr-2'></i>
                                        <div className="info_data">
                                            <h4 className='mb-0 pb-0'>Welcome <strong className='text-success'>Guest!</strong></h4>
                                            <p>Last seen: <strong>9th June 2023</strong></p>
                                        </div>
                                    </div>
                                    <div className="single_info">
                                        <button className="special-button">Login <i className="fa fa-angle-right" /> <span className="button_icon"><i className="far fa-file-alt" /></span></button>
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

export default AdminTopBar
