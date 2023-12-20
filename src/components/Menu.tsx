"use client"

import React from 'react'
import { IMAGES } from '@/config/images'
import Image from 'next/image'
import Link from 'next/link'
import { PageAttrs } from '@/models/pages.model'
import { useParams } from 'next/navigation'

const Menu = () => {

    const params = useParams<{ slug: string }>();
    const slug = params?.slug;

    // const {query} = useRouter();
    // const {slug} = query;
    const [menus, setMenus] = React.useState<PageAttrs[]>([] as PageAttrs[]);
    const [selectedMenu, setSelectedMenu]  = React.useState<string>('');

    React.useEffect(() => {
        fetch('/api/pages')
            .then((res) => res.json())
            .then((data) => {
                const rawMenus = data.data || [];
                setMenus(rawMenus)
                if (!slug) return;
                setSelectedMenu(slug as string);
            })
    }, [slug])

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        
                        <div className="main-menu default_bg">
                            <nav className="navbar navbar-expand-lg">
                                <div className="mobile_site_logo d-none">
                                    <a href="/"><Image src={IMAGES.logoFooter} alt="logo" className="img-fluid" /></a>
                                </div>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                                    <i className="fa fa-bars" />
                                </button>
                                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                        <li className="nav-item">
                                            <Link className={`nav-link ${selectedMenu===''?'active': ''}`} href="/">
                                                Home <span className="sr-only">(current)</span>
                                            </Link>  
                                        </li>
                                        {menus.map((menu,index) => (
                                            <li key={index} className="nav-item">
                                                <Link className={`nav-link ${menu.slug===selectedMenu?'active': ''}`} href={`/pages/${menu.slug}`}>{menu.title}</Link>
                                            </li>
                                        ))}
                                        <li className="nav-item">
                                            <Link href="/forms/testimonies" className="nav-link">Testimonies</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="/forms/contact-us" className="nav-link">Contact</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="#search_modal" data-toggle="modal" data-target="#search_modal" className="nav-link"><i className="fa fa-search" /></Link>
                                        </li>
                                    </ul>
                                    <div className="collapse-bar">
                                        <Link className="navbar-brand" data-toggle="collapse" href="#languages_options"><i className="fa fa-bars" /></Link>
                                        <div className="option-menu collapse" id="languages_options">
                                            <nav>
                                                <ul>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" href="#">English</Link>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu
