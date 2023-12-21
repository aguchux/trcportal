
import React from 'react'
import AdminLayout from '@/components/layouts/AdminLayout'
import { ApplicationAttrs } from '@/models/applications.model'
import { apiFetcher } from '@/axios'
import PageTitleBar from '@/components/admins/PageTitleBar'
import Swal from 'sweetalert2'
import Link from 'next/link'

export default function AdminApplications() {

  const [copied, setCopied] = React.useState(false)
  const [applications, setApplications] = React.useState<ApplicationAttrs[]>([])
  const [loading, setLoading] = React.useState(true)



  const swalDelete = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: any) => {
    e.preventDefault();
    const action = Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this Application once deleted!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    })
    action.then((result) => {
      if (result.isConfirmed) {
        setLoading(true)
        apiFetcher<ResponseData>(`/applications/delete?id=${id}`)
          .then((result) => {
            const { data } = result
            if (!data.success) {
              Swal.fire(
                'Not Deleted',
                'Your Application is not deleted or possibly was not found.',
                'error'
              )
              return;
            };
            setCopied(false)
            Swal.fire(
              'Deleted!',
              'Your Application has been deleted.',
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
          'Your Application is safe :)',
          'error'
        )
      }
    })
  }




  React.useEffect(() => {
    if (copied) return;
    apiFetcher<ResponseData>('/applications')
      .then((result) => {
        setLoading(false)
        const { data } = result
        if (!data.success) return;
        setApplications(data.data)
        setCopied(true)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })
  }, [swalDelete])

  return (
    <AdminLayout>
      <PageTitleBar title="Dashboard (Applications)" loading={loading} />
      <div className="trc-container trc-mx-auto">
        <div className="trc-border trc-p-5 trc-bg-gray-300 trc-shadow-md trc-rounded">
          <table className="trc-min-w-full trc-text-black">
            <thead className="trc-bg-gray-700 trc-rounded trc-text-white">
              <tr>
                <th className="trc-border-b-2 trc-p-2">APPLICANT</th>
                <th className="trc-border-b-2 trc-p-2">SUBJECT</th>
                <th className="trc-border-b-2 trc-p-2">COUNTRY</th>
                <th className="trc-border-b-2 trc-p-2">TO STUDY</th>
                <th className="trc-border-b-2 trc-p-2">IN COUNTRY</th>
                <th className="trc-border-b-2 trc-p-2">DATE</th>
                <th className="trc-border-b-2 trc-p-2">-</th>
              </tr>
            </thead>
            <tbody>
              {/* Table rows go here */}
              {applications.map((application, index) => (
                <>
                  <tr key={index} className="trc-cursor-pointer trc-bg-pink-100 hover:trc-bg-pink-300 trc-mt-1">
                    <td className="trc-border-b trc-p-2 trc-flex trc-flex-col">
                      <div>{`${application.firstName} ${application.lastName}`}</div>
                      <div>{application.email}</div>
                      <div>{application.mobile}</div>
                    </td>
                    <td className="trc-border-b trc-p-2">{application.purpose}</td>
                    <td className="trc-border-b trc-p-2">{application.country}</td>
                    <td className="trc-border-b trc-p-2">{application.toStudy}</td>
                    <td className="trc-border-b trc-p-2">{application.countryToStudy}</td>
                    <td className="trc-border-b trc-p-2">{application.createdAt}</td>
                    <td className="trc-border-b trc-p-2">
                      <Link href={`#`} onClick={(e) => swalDelete(e, application._id!)} className="btn btn-danger btn-sm trc-rounded mx-1 my-0 py-0">Delete</Link>
                    </td>

                  </tr>
                  <tr className='trc-mb-2 mt-0'>
                    <td colSpan={7}>
                      <div className="trc-border trc-px-2 trc-bg-gray-200 trc-rounded trc-my-3">
                        <p className="trc-text-gray-700">{application.notes}</p>
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
