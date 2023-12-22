import React from 'react'
import BaseFooter from './BaseFooter'
import Link from 'next/link'

const AdminFooter = () => {
    return (
        <>
            <footer>
                <div className="footer-area default_bg">
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
                                                <li><Link href="/auth"><i className="fa fa-lock text-danger" /></Link></li>
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

export default AdminFooter
