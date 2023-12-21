import NewsWidget from '@/components/NewsWidget';
import { PageAttrs } from '@/models/pages.model';
import React from 'react'
import { ToDate } from '@/utils';
import { Metadata } from 'next';

interface CKProps {
    htmlContent: string;
}
const CKEditorOutput = ({ htmlContent }: CKProps) => {
    return (
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    );
};

type Props = {
    params: {
        slug: string
    }
}


const apiUri = process.env.NEXT_URI || 'http://localhost:3000';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = params;
    const url = `${apiUri}/api/pages/page-info-by-slug?pageId=${slug}`;
    const responsedata = await fetch(url).then((res) => res.json());
    const pageInfo: PageAttrs = responsedata.data;
    return {
        title: pageInfo?.title + ' | The Recruitment Consult' || 'Home | The Recruitment Consult',
        description: pageInfo?.content || 'The Recruitment Consult is a student recruitment agency based in Nigeria, with a mission to help aspiring students pursue their academic dreams in some of the best schools in Europe, America, Canada and Australia.',
    };
}


const PageInfo = async ({ params }: { params: { slug: string } }) => {
    const { slug } = params;
    const url = `${apiUri}/api/pages/page-info-by-slug?pageId=${slug}`;
    const responsedata = await fetch(url).then((res) => res.json());
    const thisPageInfo: PageAttrs = responsedata.data;
    return (
        <>
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
        </>
    )
}

export default PageInfo