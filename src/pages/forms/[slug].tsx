
import ContactUs from '@/components/forms/ContactUs';
import Testimonies from '@/components/forms/Testimonies';
import Application from '@/components/forms/Application';
import { useRouter } from 'next/router';
import { findMenu } from '@/utils';
import Head from 'next/head';
import { SettingsAttrs } from '@/models/settings.model';
import { siteInfo } from '@/utils';
import RootLayout from '@/components/layouts/RootLayout';
import NewsAndEvents from '@/components/forms/NewsAndEvents';
import { PageAttrs } from '@/models/pages.model';

type Props = {
    settings: SettingsAttrs[];
    news: PageAttrs[];
}
const PageInfo = ({ settings, news }: Props) => {
    const { query } = useRouter();
    const { slug } = query;
    const thisSingleMenu = findMenu(slug as string);
    return (
        <RootLayout>
            <Head>
                <title>{`${thisSingleMenu?.title} | ${siteInfo(settings, "siteTitle")}`}</title>
                <meta name="description" content={siteInfo(settings, "siteDescription")}></meta>
            </Head>
            <div className="page-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {slug === 'contact-us' && <ContactUs />}
                            {slug === 'testimonies' && <Testimonies />}
                            {slug === 'application' && <Application />}
                            {slug === 'news' && <NewsAndEvents news={news} />} 
                        </div> 
                    </div>
                </div>
            </div>
        </RootLayout>
    )
}

export default PageInfo