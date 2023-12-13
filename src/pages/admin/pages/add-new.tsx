
import React from 'react'
import AdminLayout from '@/components/layouts/AdminLayout'
import { apiFetcher } from '@/axios'
import { PageAttrs } from '@/models/pages.model'
import PageTitleBar from '@/components/admins/PageTitleBar'
import Link from 'next/link'
import Head from 'next/head'
import { toSlug } from '@/utils'
import { useRouter } from 'next/router'

type PageProps = {
    title: string,
    pageType: string,
    content: string,
    sortNumber:number
}

export default function AdminPages() {

  const [page, setPage] = React.useState<PageProps>({} as PageProps)
  const [loading, setLoading] = React.useState(false)
  const [pageContent, setPageContent] = React.useState<string>('');

  React.useEffect(() => {
    setPage({
      title: '',
      pageType: 'Page',
      content: '',
      sortNumber: 0
    })
  }, [])
  
  const {push} = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const { title, pageType,sortNumber, content } = page;
    const slug = toSlug(title);
    const data = {
      title,
      pageType,
      slug,
      sortNumber,
      content
    }
    try {
      const result = await apiFetcher<ResponseData>('/pages/create', {
        method: 'POST',
        data
      })
      const { data: resData } = result;
      if (!resData.success) return;
      push('/admin/pages');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AdminLayout>
      <PageTitleBar title="Add Page" loading={loading} />
      <div className="trc-container trc-mx-auto">
        <div className="trc-border trc-p-5 trc-bg-gray-300 trc-shadow-md trc-rounded">
          <div className="trc-flex trc-justify-between trc-items-center">
            <h1 className="trc-text-2xl">Add new page</h1>
            <Link href='/admin/pages' className="btn btn-primary trc-rounded">List Pages</Link>
          </div>
          <hr className="trc-my-5" />
          <form onSubmit={handleSubmit}>
            <table className="trc-min-w-full trc-text-black">
              <thead className="trc-bg-gray-700 trc-rounded trc-text-white">
                <tr>
                  <th className="trc-border-b-2 trc-p-2">TITLE</th>
                  <th className="trc-border-b-2 trc-p-2">SORT</th>
                  <th className="trc-border-b-2 trc-p-2">TYPE</th>
                </tr>
              </thead>
              <tbody>
                {/* Table rows go here */}
                <tr className="trc-cursor-pointer trc-bg-pink-100 hover:trc-bg-pink-300" onClick={() => { }}>
                  <td className="trc-border-b trc-p-2">
                    <input onChange={
                      (e) => {
                        setPage({
                          ...page,
                          title: e.target.value
                        })

                      } 
                    } type="text" required aria-required={true} className="form-control" placeholder='Page Title' />
                  </td>

                  <td className="trc-border-b trc-p-2 trc-w-[100px]">
                    <input onChange={
                      (e) => {
                        setPage({
                          ...page,
                          sortNumber: Number(e.target.value)
                        })
                      } 
                    } type="number" required aria-required={true} className="form-control" placeholder='0' />
                  </td>
                 
                  <td className="trc-border-b trc-p-2 trc-w-[300px]">
                    <select className="form-control" 
                    onChange={
                      (e) => {
                        setPage({
                          ...page,
                          pageType: e.target.selectedIndex === 0 ? 'Page' : 'Post'
                        })
                      } 
                    }>
                      <option value="Page">Page</option>
                      <option value="Post">Post</option>
                    </select>
                  </td>
                </tr>
                
                <tr className="trc-cursor-pointer trc-bg-pink-100 hover:trc-bg-pink-300" onClick={() => { }}>
                  <td colSpan={3} className="trc-border-b trc-p-2">
                    <textarea onChange={
                      (e) => {
                        setPage({
                          ...page,
                          content: e.target.value
                        })
                      } 
                    } className="form-control" placeholder='Page Content' rows={10}></textarea>
                  </td>
                </tr>
                <tr className="trc-cursor-pointer trc-bg-pink-100 hover:trc-bg-pink-300" onClick={() => { }}>
                  <td colSpan={3} className="trc-border-b trc-p-2">
                    <button className="btn btn-primary">Creat Page</button>
                  </td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </AdminLayout>
  )
}
