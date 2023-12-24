
import React from 'react'
import AdminLayout from '@/components/layouts/AdminLayout'
import { apiFetcher } from '@/axios'
import { PageAttrs } from '@/models/pages.model'
import PageTitleBar from '@/components/admins/PageTitleBar'
import Link from 'next/link'
import Swal from 'sweetalert2'
import { ToDate } from '@/utils'

export default function AdminPages() {

  const [copied, setCopied] = React.useState(false)
  const [pages, setPages] = React.useState<PageAttrs[]>([])
  const [loading, setLoading] = React.useState(true)

  const swalDelete = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, slug: string) => {
    e.preventDefault();
    const action = Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this page!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    })
    action.then((result) => {
      if (result.isConfirmed) {
        setLoading(true)
        apiFetcher<ResponseData>(`/pages/delete?slug=${slug}`)
          .then((result) => {
            const { data } = result
            if (!data.success) {
              Swal.fire(
                'Not Deleted',
                'Your page is not deleted of possibly was not found.',
                'error'
              )
              return;
            };
            setCopied(false)
            Swal.fire(
              'Deleted!',
              'Your page has been deleted.',
              'success'
            )
          })
          .catch((err) => {
            console.log(err)
          })
          .finally(() => {
            setLoading(false)
          })
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your page is safe :)',
          'error'
        )
      }
    })
  }

  React.useEffect(() => {
    if (copied) return;
    apiFetcher<ResponseData>('/pages')
      .then((result) => {
        setLoading(false)
        const { data } = result
        if (!data.success) return;
        setPages(data.data)
        setCopied(true)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })
  }, [swalDelete])


  return (
    <AdminLayout>
      <PageTitleBar title="Dashboard (Pages)" loading={loading} />
      <div className="trc-container trc-mx-auto">
        <div className="trc-border trc-p-5 trc-bg-gray-300 trc-shadow-md trc-rounded">
          <div className="trc-flex trc-justify-between trc-items-center">
            <h1 className="trc-text-2xl">Pages</h1>
            <Link href='/admin/pages/add-new' className="btn btn-primary trc-rounded">Add New</Link>
          </div>
          <hr className="trc-my-5" />
          <table className="trc-w-full trc-text-black">
            <thead className="trc-bg-gray-700 trc-rounded trc-text-white">
              <tr>
                <th className="trc-border-b-2 trc-p-2">TITLE</th>
                <th className="trc-border-b-2 trc-p-2">SLUG</th>
                <th className="trc-border-b-2 trc-p-2">TYPE</th>
                <th className="trc-border-b-2 trc-p-2">SORT</th>
                <th className="trc-border-b-2 trc-p-2">UPDATED</th>
                <th className="trc-border-b-2 trc-p-2">-</th>
              </tr>
            </thead>
            <tbody>
              {/* Table rows go here */}
              {pages.map((page, index) => (
                <tr key={index} className="trc-cursor-pointer hover:trc-bg-pink-300" onClick={() => { }}>
                  <td className="trc-border-b trc-p-2">{page.title}</td>
                  <td className="trc-border-b trc-p-2">{page.slug}</td>
                  <td className="trc-border-b trc-p-2">{page.pageType}</td>
                  <td className="trc-border-b trc-p-2">{page.sortNumber}</td>
                  <td className="trc-border-b trc-p-2">{ToDate(page.updatedAt)}</td>
                  <td className="trc-border-b trc-p-2 trc-flex">
                    <Link href={`/admin/pages/${page._id}/edit-page`} className="btn btn-primary btn-sm trc-rounded mx-1 my-0 py-0">Edit</Link>
                    <Link href={`#`} onClick={(e) => swalDelete(e, page.slug)} className="btn btn-danger btn-sm trc-rounded mx-1 my-0 py-0">Delete</Link>
                  </td>
                </tr>
              ))}

              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  )
}
