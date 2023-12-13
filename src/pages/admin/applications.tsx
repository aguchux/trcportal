
import React from 'react'
import AdminLayout from '@/components/layouts/AdminLayout'
import { ApplicationAttrs } from '@/models/applications.model'
import { apiFetcher } from '@/axios'
import PageTitleBar from '@/components/admins/PageTitleBar'

export default function AdminApplications() {


  const [applications, setApplications] = React.useState<ApplicationAttrs[]>([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    apiFetcher<ResponseData>('/applications')
      .then((result) => {
        setLoading(false)
        const {data} = result
        if(!data.success) return;
        setApplications(data.data)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })
  }, [])

  return (
    <AdminLayout>
      <PageTitleBar title="Dashboard (Applications)" loading={loading} />
      <div className="trc-container trc-mx-auto">
          <div className="trc-border trc-p-5 trc-bg-gray-300 trc-shadow-md trc-rounded">
            <table className="trc-min-w-full trc-text-black">
              <thead className="trc-bg-gray-700 trc-rounded trc-text-white">
                <tr>
                  <th className="trc-border-b-2 trc-p-2">APPLICANT</th>
                  <th className="trc-border-b-2 trc-p-2">EMAIL</th>
                  <th className="trc-border-b-2 trc-p-2">MOBILE</th>
                  <th className="trc-border-b-2 trc-p-2">COUNTRY</th>
                  <th className="trc-border-b-2 trc-p-2">DATE</th>
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
