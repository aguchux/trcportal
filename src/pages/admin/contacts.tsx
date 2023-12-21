
import React from 'react'
import AdminLayout from '@/components/layouts/AdminLayout'
import { ContactAttrs } from '@/models/contacts.model'
import { apiFetcher } from '@/axios'
import PageTitleBar from '@/components/admins/PageTitleBar'
import { ToDate } from '@/utils'
import Link from 'next/link'
import Swal from 'sweetalert2'

export default function AdminContacts() {

  const [copied, setCopied] = React.useState(false)
  const [contacts, setContacts] = React.useState<ContactAttrs[]>([])
  const [loading, setLoading] = React.useState(true)


  const swalDelete = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: any) => {
    e.preventDefault();
    const action = Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this Feedback!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    })
    action.then((result) => {
      if (result.isConfirmed) {
        setLoading(true)
        apiFetcher<ResponseData>(`/contacts/delete?id=${id}`)
          .then((result) => {
            const { data } = result
            if (!data.success) {
              Swal.fire(
                'Not Deleted',
                'Your Feedback is not deleted or possibly was not found.',
                'error'
              )
              return;
            };
            setCopied(false)
            Swal.fire(
              'Deleted!',
              'Your Feedback has been deleted.',
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
          'Your Feedback is safe :)',
          'error'
        )
      }
    })
  }



  React.useEffect(() => {
    if (copied) return;
    apiFetcher<ResponseData>('/contacts')
      .then((result) => {
        setLoading(false)
        const { data } = result
        if (!data.success) return;
        setContacts(data.data)
        setCopied(true)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })
  }, [swalDelete])

  return (
    <AdminLayout>
      <PageTitleBar title="Dashboard (Contacts)" loading={loading} />
      <div className="trc-container trc-mx-auto">
        <div className="trc-border trc-p-5 trc-bg-gray-300 trc-shadow-md trc-rounded">
          <table className="trc-min-w-full trc-text-black">
            <thead className="trc-bg-gray-700 trc-rounded trc-text-white">
              <tr>
                <th className="trc-border-b-2 trc-p-2">NAME</th>
                <th className="trc-border-b-2 trc-p-2">EMAIL</th>
                <th className="trc-border-b-2 trc-p-2">MOBILE</th>
                <th className="trc-border-b-2 trc-p-2">SUBJECT</th>
                <th className="trc-border-b-2 trc-p-2">DATE</th>
                <th className="trc-border-b-2 trc-p-2">fa-align-right</th>
              </tr>
            </thead>
            <tbody>
              {/* Table rows go here */}
              {contacts.map((contact, index) => (
                <>
                  <tr key={index} className="trc-cursor-pointer trc-bg-pink-100 hover:trc-bg-pink-300 trc-mt-2">
                    <td className="trc-border-b trc-p-2">{contact.name}</td>
                    <td className="trc-border-b trc-p-2">{contact.email}</td>
                    <td className="trc-border-b trc-p-2">{contact.mobile}</td>
                    <td className="trc-border-b trc-p-2">{contact.subject}</td>
                    <td className="trc-border-b trc-p-2">{ToDate(contact.createdAt)}</td>
                    <td className="trc-border-b trc-p-2">
                      <Link href={`#`} onClick={(e) => swalDelete(e, contact._id!)} className="btn btn-danger btn-sm trc-rounded mx-1 my-0 py-0">Delete</Link>
                    </td>
                  </tr>
                  <tr className='trc-mb-2'>
                    <td colSpan={6}>
                      <div className="trc-border trc-px-2 trc-bg-gray-200 trc-rounded trc-my-3">
                        <p className="trc-text-gray-700">{contact.message}</p>
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
