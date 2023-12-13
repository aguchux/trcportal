import NewsWidget from '@/components/NewsWidget'
import RootLayout from '@/components/layouts/RootLayout'
import { PageAttrs } from '@/models/pages.model';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import React from 'react'


const SitePage = () => {
  const {query} = useRouter();
  const {slug} = query;

  const [pageInfo, setPageInfo] = React.useState<PageAttrs>({
    title: '',
    pageType: 'Page',
    slug: '',
    sortNumber: 0,
    content: ''
  } as PageAttrs);
  
  const { data:pageApiResult, isLoading, isRefetching, isPending } = useQuery<ResponseData>({
    queryKey: ['pages', slug],
    queryFn: async () => fetch(`/api/pages/info?slug=${slug}`).then(res => res.json()),
    staleTime: Number(process.env.CATCHE_STALE_TIME || 1000 * 60 * 10),
  });

  React.useEffect(() => {
    if(!pageApiResult?.success) return;
    const {data} = pageApiResult;
    setPageInfo(data);
  }, [pageApiResult])
  

  return (
    <RootLayout>
      <div className="page-wrapper trc-my-10">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-3d-5" data-aos="fade-up" data-aos-delay={400}>
              {/* Start Blog Details */}
              <div className="details-wrapper">
                <div className="details-title">
                  <h2>{pageInfo.title}</h2>
                </div>
                <div className="details-meta">
                  <div className="single-meta">
                    <p><i className="fas fa-calendar-alt" /> {pageInfo.createdAt}</p>
                  </div>
                  <div className="single-meta">
                    <p><i className="far fa-heart" /> 0 views</p>
                  </div>
                  <div className="single-meta">
                    <p><i className="far fa-comment-alt" /> 0 Comments</p>
                  </div>
                </div>
                <div className="details-text pt-4">
                {pageInfo.content}
                </div>
                
              </div>
              {/* End Blog Details */}
            </div>
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay={300}>
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

export default SitePage
