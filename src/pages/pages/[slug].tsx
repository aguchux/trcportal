import NewsWidget from '@/components/NewsWidget';
import { PageAttrs } from '@/models/pages.model';
import React from 'react'
import { ToDate, siteInfo } from '@/utils';
import { SettingsAttrs } from '@/models/settings.model';
import { useRouter } from 'next/router';
import { getPageInfo } from '@/utils';
import RootLayout from '@/components/layouts/RootLayout';

import Head from 'next/head';

const CKEditorOutput = ({ htmlContent }: CKProps) => {
    return (
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    );
};

type Props = {
    settings: SettingsAttrs[],
    menus: PageAttrs[],
}

const PageInfo = ({ settings, menus }: Props) => {
    const { query } = useRouter();
    const { slug } = query;
    const thisPageInfo = getPageInfo(menus, slug as string);
    return (
        <RootLayout>
            <Head>
                <title>{`${thisPageInfo?.title} | ${siteInfo(settings, "siteTitle")}`}</title>
                <meta name="description" content={siteInfo(settings, "siteDescription")}></meta>
            </Head>

            <div className="page-wrapper trc-py-[50px]">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mb-3d-5" data-aos="fade-up">
                            {/* Start Blog Details */}
                            <div className="details-wrapper">
                                <div className="details-title">
                                    <h2>{thisPageInfo?.title}</h2>
                                </div>
                                <div className="details-meta">
                                    <div className="single-meta">
                                        <p><i className="fas fa-calendar-alt" /> {!thisPageInfo ? <span>Loading...</span> : ToDate(thisPageInfo?.createdAt)}</p>
                                    </div>
                                    <div className="single-meta">
                                        <p><i className="far fa-heart" /> {!thisPageInfo ? <span>Loading...</span> : thisPageInfo?.views || 0} views</p>
                                    </div>
                                    <div className="single-meta">
                                        <p><i className="far fa-comment-alt" /> {!thisPageInfo ? <span>Loading...</span> : thisPageInfo?.comments?.length || 0} Comments</p>
                                    </div>
                                </div>
                                <div className="details-text pt-4">
                                    {!thisPageInfo ? <h3>Loading...</h3> : <CKEditorOutput htmlContent={thisPageInfo?.content.toString()} />}
                                </div>

                            </div>
                            {/* End Blog Details */}
                        </div>
                        <div className="col-lg-4" data-aos="fade-up">
                            {/* Start Sidebar */}
                            <div className="sidebar-wrapper">
                                <div className="single-widget">
                                    <div className="search-widget">
                                        <form action="#">
                                            <input type="text" className="form-control" />
                                            <button type="submit"><i className="fas fa-search" /></button>
                                        </form>
                                    </div>
                                </div>
                                <NewsWidget />
                            </div>
                            {/* End Sidebar */}
                        </div>
                    </div>
                </div>
            </div>

        </RootLayout>
    )
}

export default PageInfo