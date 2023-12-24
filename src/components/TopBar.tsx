import React from 'react'
import { IMAGES } from '@/config/images'
import Image from 'next/image'
import Link from 'next/link'
import { settingsAtom } from '@/store'
import { useAtom } from 'jotai'
import { siteInfo } from '@/utils'
const TopBar = () => {
    const [settings] = useAtom(settingsAtom);
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
                                        <Image src={IMAGES.location} height={60} alt="Location" className="img-fluid" />
                                        <div className="info_data">
                                            <h6>Office Locations:</h6>
                                            <p>{siteInfo(settings, "siteAddress")}</p>
                                        </div>
                                    </div>
                                    <div className="single_info">
                                        <Image src={IMAGES.phone} height={50} alt="Location" className="img-fluid" />
                                        <div className="info_data">
                                            <h6>Phone/Support</h6>
                                            <p>{siteInfo(settings, "sitePhone")}</p>
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
