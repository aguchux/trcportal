"use client"

import { PageAttrs } from '@/models/pages.model';
import React, { useEffect } from 'react'
import { MENU_FORMS } from '@/config/forms';


import ContactUs from '@/app/components/forms/ContactUs';
import Testimonies from '@/app/components/forms/Testimonies';
import Application from '@/app/components/forms/Application';

type Props = {
    params: {
        slug: string
    }
}

const PageInfo = ({ params }: Props) => {
    const { slug } = params;
    const [menu, setMenu] = React.useState({
        id: 'home',
        slug: 'home',
        title: 'Home',
        menuTitle: 'Home',
    });

    const findMenu = (slug: string) => {
        const menu = MENU_FORMS.find((m) => m.slug === slug);
        return menu;
    }

    useEffect(() => {
        if (!slug || slug === undefined || slug.length <= 0) return;
        const _menu = findMenu(slug as string);
        setMenu(_menu as any);
    }, [slug])

    const [pageInfo, setPageInfo] = React.useState<PageAttrs>({
        title: '',
        pageType: 'Page',
        slug: '',
        sortNumber: 0,
        content: ''
    } as PageAttrs);

    return (
        <>
            <div className="page-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {menu.slug === 'contact-us' && <ContactUs />}
                            {menu.slug === 'testimonies' && <Testimonies />}
                            {menu.slug === 'application' && <Application />}
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default PageInfo