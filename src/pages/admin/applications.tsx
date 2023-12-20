
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
                <th className="trc-border-b-2 trc-p-2">SUBJECT</th>
                  <th className="trc-border-b-2 trc-p-2">COUNTRY</th>
                <th className="trc-border-b-2 trc-p-2">TO STUDY</th>
                <th className="trc-border-b-2 trc-p-2">IN COUNTRY</th>
                  <th className="trc-border-b-2 trc-p-2">DATE</th>
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
                  </tr>
                  <tr className='trc-mb-2 mt-0'>
                    <td colSpan={6}>
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
