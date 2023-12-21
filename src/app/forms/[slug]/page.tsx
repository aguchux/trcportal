import React from 'react'
import { MENU_FORMS } from '@/config/forms';

import ContactUs from '@/app/components/forms/ContactUs';
import Testimonies from '@/app/components/forms/Testimonies';
import Application from '@/app/components/forms/Application';
import { Metadata } from 'next';

type Props = {
    params: {
        slug: string
    }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = params;
    const findMenu = (slug: string) => {
        const menu = MENU_FORMS.find((m) => m.slug === slug);
        return menu;
    }
    const thisMenu = findMenu(slug as string);
    return {
        title: thisMenu?.title + ' | The Recruitment Consult' || 'Home | The Recruitment Consult',
        description: 'The Recruitment Consult is a student recruitment agency based in Nigeria, with a mission to help aspiring students pursue their academic dreams in some of the best schools in Europe, America, Canada and Australia.',
    };
}


const PageInfo = ({ params }: Props) => {
    const { slug } = params;
    return (
        <>
            <div className="page-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {slug === 'contact-us' && <ContactUs />}
                            {slug === 'testimonies' && <Testimonies />}
                            {slug === 'application' && <Application />}
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default PageInfo