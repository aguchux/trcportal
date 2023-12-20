
import React from 'react'
import AdminLayout from '@/components/layouts/AdminLayout'
import { ApplicationAttrs } from '@/models/applications.model'
import { apiFetcher } from '@/axios'
import PageTitleBar from '@/components/admins/PageTitleBar'
import { ToDate } from '@/utils'
import { TestimoniesAttrs } from '@/models/testimonies.model'
import Link from 'next/link'

export default function AdminTestimonials() {


  const [testimonies, setTestimonies] = React.useState<TestimoniesAttrs[]>([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    apiFetcher<ResponseData>('/testimonies')
      .then((result) => {
        setLoading(false)
        const { data } = result
        if (!data.success) return;
        setTestimonies(data.data)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })
  }, [])

  return (
    <AdminLayout>
      <PageTitleBar title="Dashboard (Testimonials)" loading={loading} />
      <div className="trc-container trc-mx-auto">
        <div className="trc-border trc-p-5 trc-bg-gray-300 trc-shadow-md trc-rounded">
          <div className="trc-flex trc-justify-between trc-items-center">
            <h1 className="trc-text-2xl">Testimonies</h1>
            <Link href='/admin/testimonials/add-new' className="btn btn-primary trc-rounded">Add New</Link>
          </div>
          <hr className="trc-my-5" />
          <table className="trc-min-w-full trc-text-black">
            <thead className="trc-bg-gray-700 trc-rounded trc-text-white">
              <tr>
                <th className="trc-border-b-2 trc-p-2">FIRST NAME</th>
                <th className="trc-border-b-2 trc-p-2">LAST NAME</th>
                <th className="trc-border-b-2 trc-p-2">DATE CREATED</th>
              </tr>
            </thead>
            <tbody>
              {/* Table rows go here */}
              {testimonies.map((testimony, index) => (
                <>
                  <tr key={index} className="trc-cursor-pointer trc-bg-pink-100 hover:trc-bg-pink-300 trc-mt-1">
                    <td className="trc-border-b trc-p-2 trc-flex trc-flex-col">{testimony.firstName}</td>
                    <td className="trc-border-b trc-p-2">{testimony.lastName}</td>
                    <td className="trc-border-b trc-p-2">{ToDate(testimony.createdAt)}</td>
                  </tr>
                  <tr className='trc-mb-2 mt-0'>
                    <td colSpan={3}>
                      <div className="trc-border trc-px-2 trc-bg-gray-200 trc-rounded trc-my-3">
                        <p className="trc-text-gray-700">{testimony.testimony}</p>
                      </div>
                    </td>
                  </tr>
                </>
              ))}
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  )
}
