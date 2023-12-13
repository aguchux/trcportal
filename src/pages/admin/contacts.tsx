
import React from 'react'
import AdminLayout from '@/components/layouts/AdminLayout'
import { ContactAttrs } from '@/models/contacts.model'
import { apiFetcher } from '@/axios'
import PageTitleBar from '@/components/admins/PageTitleBar'

export default function AdminContacts() {

  const [contacts, setContacts] = React.useState<ContactAttrs[]>([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    apiFetcher<ResponseData>('/contacts')
      .then((result) => {
        setLoading(false)
        const {data} = result
        if(!data.success) return;
        setContacts(data.data)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })
  }, [])
  
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
                <th className="trc-border-b-2 trc-p-2">-</th>
              </tr>
            </thead>
            <tbody>
              {/* Table rows go here */}
              <tr className="trc-cursor-pointer hover:trc-bg-pink-300" onClick={() => { }}>
                <td className="trc-border-b trc-p-2">1</td>
                <td className="trc-border-b trc-p-2">1</td>
                <td className="trc-border-b trc-p-2">John Doe</td>
                <td className="trc-border-b trc-p-2">john@example.com</td>
                <td className="trc-border-b trc-p-2">john@example.com</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  )
}
