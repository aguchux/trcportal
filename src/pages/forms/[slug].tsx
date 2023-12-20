import NewsWidget from '@/components/NewsWidget'
import RootLayout from '@/components/layouts/RootLayout'
import { MENU_FORMS } from '@/config/forms';
import { PageAttrs } from '@/models/pages.model';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import ContactUs from '@/components/forms/ContactUs';


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
  const [menu, setMenu] = React.useState({
    id: 'contact-us',
        slug: 'contact-us',
        title: 'Contact Us',
        menuTitle: 'Contact Us',
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
    <RootLayout>
      <div className="page-wrapper">
        <div className="container">         
            <div className="row">
              <div className="col-lg-12">
                { menu.slug==='contact-us' && <ContactUs />}
              </div>
            </div>
        </div>
      </div>

    </RootLayout>
  )
}

export default SitePage
