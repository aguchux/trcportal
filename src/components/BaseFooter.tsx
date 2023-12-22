import Link from 'next/link'
import React from 'react'
import { useAuth } from '@/hooks';
import { SettingsAttrs } from '@/models/settings.model';

type Props = {
    settings: SettingsAttrs[]
}

const BaseFooter = ({ settings }: Props) => {
    const {loggedIn, busy} = useAuth();
    const getByKeyName = (keyName: string) => settings.find((item) => item.keyName === keyName)?.keyValue;
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
                                       <li><Link href={`${getByKeyName('siteFacebook')}`}><i className="fab fa-facebook-f" /></Link></li>
                                       <li><Link href={`${getByKeyName('siteTwitter')}`}><i className="fab fa-twitter" /></Link></li>
                                       <li><Link href={`${getByKeyName('siteWhatsApp')}`}><i className="fab fa-whatsapp" /></Link></li>
                                       <li><Link href={`${getByKeyName('siteYouTube')}`}><i className="fab fa-youtube" /></Link></li>
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
