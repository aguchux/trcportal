
import React from 'react'
import { IMAGES } from '@/config/images'
import Image from 'next/image'
import Link from 'next/link'
import { useAuth } from '@/hooks'

function AdminTopBar() {

    const { admin, busy, authLogout } = useAuth()

    const hanldeLogout = async (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        authLogout().then((res) => {
            if (res) window.location.href = '/auth'
        })
    }

    return (
        <>
            <div className="header_top_area my-4 trc-clear-both">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="header_top d-flex justify-content-between">
                                <div className="site_logo mb-0">
                                    <Link href="/admin"><Image src={IMAGES.logo} height={80} alt="logo" className="img-fluid" /></Link>
                                </div>
                                <div className="site_info d-flex justify-content-between">
                                    <div className="single_info">
                                        <i className='fa fa-home fa-4x mr-2'></i>
                                        <div className="info_data">
                                            <h4 className='mb-0 pb-0'>Welcome <strong className='text-success'>{busy ? '....' : admin?.name}</strong></h4>
                                            <p>Last seen: <strong>{busy ? '....' : admin?.lastSeen.toString()}</strong></p>
                                        </div>
                                    </div>
                                    <div className="single_info">
                                        <Link href={'#'} onClick={hanldeLogout} className="special-button" >Logout  <i className="fa fa-angle-right" /> <span className="button_icon"><i className="far fa-file-alt" /></span></Link>
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
