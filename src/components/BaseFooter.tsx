import Link from 'next/link'
import React from 'react'
import { useAuth } from '@/hooks';
import { settingsAtom } from '@/store';
import { useAtom } from 'jotai';
import { siteInfo } from '@/utils';

const BaseFooter = () => {
    const { loggedIn } = useAuth();
    const [settings] = useAtom(settingsAtom);
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
                                       <li><Link href={`${siteInfo(settings, "siteFacebook")}`}><i className="fab fa-facebook-f" /></Link></li>
                                       <li><Link href={`${siteInfo(settings, "siteTwitter")}`}><i className="fab fa-twitter" /></Link></li>
                                       <li><Link href={`${siteInfo(settings, "siteWhatsApp")}`}><i className="fab fa-whatsapp" /></Link></li>
                                       <li><Link href={`${siteInfo(settings, "siteYouTube")}`}><i className="fab fa-youtube" /></Link></li>
                                       <li><Link href={`${siteInfo(settings, "siteEmailLink")}`}><i className="fab fa-instagram" /></Link></li>
                                       <li><Link href={`${siteInfo(settings, "siteInstagram")}`}><i className="fa fa-envelope" /></Link></li>
                                        {loggedIn==true ?<li><Link href="/admin"><i className="fa fa-lock text-success" /></Link></li>:<li><Link href="/auth"><i className="fa fa-lock text-danger" /></Link></li> }
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
