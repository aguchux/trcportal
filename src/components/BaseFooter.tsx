"use client"

import Link from 'next/link'
import React from 'react'

const BaseFooter = () => {

    return (
        <>
            <div className="footer-bottom-wrapper border-top py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="footer-bottom">
                                <div className="copyright-text">
                                    <p>&copy;<strong>The Recruitment Consult</strong> 2023. All Rights Reserved.</p>
                                </div>
                                <div className="social-accounts">
                                    <ul>
                                        <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                        <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                        <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                        <li><Link href="/admin"><i className="fa fa-lock text-success" /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="scroll-top">
                <div className="scroll-icon">
                    <i className="fa fa-angle-up" />
                </div>
            </div>
        </>
    )
}

export default BaseFooter
