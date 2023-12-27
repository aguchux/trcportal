import React from 'react'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import { apiFetcher } from '@/axios';
import { PageAttrs } from '@/models/pages.model';

type Props = {
    news: PageAttrs[];
}

const NewsAndEvents = ({ news }: Props) => {
    const [busy, setBusy] = React.useState(true);
    return (
        <>
            <div className="page-wrapper section-ptb-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mb-3d-5">
                            <div className="row">
                                {news.map((item, index) => (
                                    <div key={index} className="col-md-4">
                                        {/* Start Blog Area */}
                                        <div className="blog-area">
                                            <div className="single_blog mb-5">
                                                <div className="big-blog-area border bg-white">
                                                    <div className="blog-thumb">
                                                        <a href={`/news/${item.slug}`}>
                                                            <img src="assets/images/newsimage.jpg" alt="big blog" className="img-fluid" />
                                                        </a>
                                                    </div>
                                                    <div className="blog-content px-4 py-1">
                                                        <div className="blog-text">
                                                            <h3><a href={`/news/${item.slug}`}>{item.title}</a></h3>
                                                            <a href={`/news/${item.slug}`}>Read More <i className="fas fa-long-arrow-alt-right" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Blog Area */}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsAndEvents