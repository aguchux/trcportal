"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { IMAGES } from '@/config/images'
import BaseFooter from './BaseFooter'
import { settingsAtom, menusAtom } from '@/store'
import { useAtom } from 'jotai'
import { siteInfo, filterMenus } from '@/utils'

const Footer = () => {
    const [settings] = useAtom(settingsAtom);
    const [menus] = useAtom(menusAtom);
    return (
        <>
            <footer>
                <div className="footer-area default_bg">
                    <div className="footer-top trc-py-10">
                        <div className="container-fluid">
                            <div className='trc-py-0 trc-px-10'>
                                <div className="row">
                                    <div className="col-md-5 mb-xs-5">
                                        <div className="single_widget">
                                            <div className="address-widget">
                                                <div className="footer-logo">
                                                    <Link href="/"><Image src={IMAGES.logoFooter} alt='' width={300} className="img-fluid" /></Link>
                                                </div>
                                                <p className='trc-font-medium'>
                                                    {siteInfo(settings, "siteAbout")}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mb-3d-5">
                                        <div className="single_widget">
                                            <h3>Useful Links</h3>
                                            <div className="widget-list ">
                                                <ul>
                                                    {filterMenus(menus, "home").map((menu, index) => <li key={index}><Link href={`/pages/${menu.slug}`}>{menu.title}</Link></li>)}
                                                </ul>
                                                <ul>
                                                    <li><Link href="#">Online Application</Link></li>
                                                    <li><Link href="#">Client Feedback</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4 mb-xs-5">
                                        <div className="single_widget">
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <Image src={IMAGES.cert1} alt='' height={250} />
                                                </div>
                                                <div className='col-md-6'>
                                                    <Image src={IMAGES.cert2} alt='' height={250} />
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
