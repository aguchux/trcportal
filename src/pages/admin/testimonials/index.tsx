
import React from 'react'
import AdminLayout from '@/components/layouts/AdminLayout'
import { apiFetcher } from '@/axios'
import PageTitleBar from '@/components/admins/PageTitleBar'
import { ToDate } from '@/utils'
import { TestimoniesAttrs } from '@/models/testimonies.model'
import Link from 'next/link'
import Swal from 'sweetalert2'

export default function AdminTestimonials() {

  const [copied, setCopied] = React.useState(false)
  const [testimonies, setTestimonies] = React.useState<TestimoniesAttrs[]>([])
  const [loading, setLoading] = React.useState(true)

  const swalDelete = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: any) => {
    e.preventDefault();
    const action = Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this testimony!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    })
    action.then((result) => {
      if (result.isConfirmed) {
        setLoading(true)
        apiFetcher<ResponseData>(`/testimonials/delete?id=${id}`)
          .then((result) => {
            const { data } = result
            if (!data.success) {
              Swal.fire(
                'Not Deleted',
                'Your Testomoy is not deleted or possibly was not found.',
                'error'
              )
              return;
            };
            setCopied(false)
            Swal.fire(
              'Deleted!',
              'Your Testimony has been deleted.',
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
          'Your Testimony is safe :)',
          'error'
        )
      }
    })
  }


  React.useEffect(() => {
    if (copied) return;
    const fetchTestimonies = () => {
      apiFetcher<ResponseData>('/testimonials')
      .then((result) => {
        setLoading(false)
        const { data } = result
        if (!data.success) return;
        setTestimonies(data.data)
        setCopied(true)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })
    }
    fetchTestimonies()
  }, [swalDelete])

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
                <th className="trc-border-b-2 trc-p-2">-</th>
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
                    <td className="trc-border-b trc-p-2">
                      <Link href={`#`} onClick={(e) => swalDelete(e, testimony._id!)} className="btn btn-danger btn-sm trc-rounded mx-1 my-0 py-0">Delete</Link>
                    </td>
                  </tr>
                  <tr className='trc-mb-2 mt-0'>
                    <td colSpan={4}>
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
