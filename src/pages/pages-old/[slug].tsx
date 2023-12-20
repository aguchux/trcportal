import NewsWidget from '@/components/NewsWidget'
import RootLayout from '@/components/layouts/RootLayout'
import { PageAttrs } from '@/models/pages.model';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import React from 'react'


interface CKProps {
  htmlContent: string;
}
const CKEditorOutput = ({ htmlContent }: CKProps) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
};


const SitePage = () => {
  const { query } = useRouter();
  const { slug } = query;
  const [busy, setBusy] = React.useState(true);
  const [pageInfo, setPageInfo] = React.useState<PageAttrs>({
    title: '',
    pageType: 'Page',
    slug: '',
    sortNumber: 0,
    content: ''
  } as PageAttrs);

  React.useEffect(() => {
    const getPage = async () => {
      try {
        const result = await fetch(`/api/pages/info?slug=${slug}`);
        const response = await result.json();
        const { data } = response;
        setPageInfo(data);
      } catch (error) {
        console.log(error);
      } finally {
        setBusy(false);
      }
    }
    getPage();
  }, [slug])


  return (
    <RootLayout>
      <div className="page-wrapper trc-my-10">
        <div className="container">
          {busy ? <div className="text-center">Loading...</div> :
            <div className="row">
              <div className="col-lg-8 mb-3d-5" data-aos="fade-up">
                {/* Start Blog Details */}
                <div className="details-wrapper">
                  <div className="details-title">
                    <h2>{pageInfo?.title}</h2>
                  </div>
                  <div className="details-meta">
                    <div className="single-meta">
                      <p><i className="fas fa-calendar-alt" /> {pageInfo?.createdAt}</p>
                    </div>
                    <div className="single-meta">
                      <p><i className="far fa-heart" /> 0 views</p>
                    </div>
                    <div className="single-meta">
                      <p><i className="far fa-comment-alt" /> 0 Comments</p>
                    </div>
                  </div>
                  <div className="details-text pt-4">
                    <CKEditorOutput htmlContent={pageInfo?.content.toString()} />
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
          }

        </div>
      </div>

    </RootLayout>
  )
}

export default SitePage
