import { apiFetcher } from '@/axios';
import { PageAttrs } from '@/models/pages.model';
import { useRouter } from 'next/router';
import React from 'react'

const BreadCrumb = () => {

    const { query } = useRouter();
    const { slug } = query;

    const [selectedMenu, setSelectedMenu] = React.useState<string>('');
    const [menu, setMenu] = React.useState<PageAttrs>({
        title: '',
        pageType: 'Page',
        slug: '',
        sortNumber: 0,
        content: ''
    } as PageAttrs);


    React.useEffect(() => {
        if(!slug || slug===undefined || slug.length<=0) return;
        const fetchMenu = async () => {
            const response = await apiFetcher.get<ResponseData>(`/pages/info?slug=${slug}`);
            setMenu(response.data.data);
            setSelectedMenu(response.data.data.slug);
        }
        fetchMenu();
    }, [query])


    return (
        <>
            {selectedMenu && (
                <section className="hero-section height-470" style={{ backgroundImage: 'url(assets/images/about_us.jpg)' }}>
                    <div className="hero-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="page-hrader text-white text-center">
                                        <h1 className="display-3 trc-drop-shadow-2xl trc-text-white trc-shadow-gray-600">{menu?.title}</h1>
                                        <div className="page-breadcrumb">
                                            <p><a className="text-white" href="/">Home</a> - {menu?.slug}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>)}
        </>
    )
}

export default BreadCrumb
