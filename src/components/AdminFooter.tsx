import React from 'react'
import BaseFooter from './BaseFooter'

const AdminFooter = () => {
    return (
        <>
            <footer>
                <div className="footer-area default_bg">
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

export default AdminFooter
