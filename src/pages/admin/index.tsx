import React from "react";
import AdminLayout from "@/components/layouts/AdminLayout";
import { apiFetcher } from "@/axios";
import PageTitleBar from "@/components/admins/PageTitleBar";
import { ContactAttrs } from "@/models/contacts.model";
import { IMAGES } from "@config/images";
import Image from "next/image";
import { ToDate } from "@/utils";

export default function Admin() {

  const [contacts, setContacts] = React.useState<ContactAttrs[]>([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    apiFetcher<ResponseData>('/contacts')
      .then((result) => {
        setLoading(false)
        const { data } = result
        if (!data.success) return;
        setContacts(data.data)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })
  }, [])

  return (
    <AdminLayout>
      <>
        <Image src={IMAGES.adminBanner} className="trc-w-full trc-mb-7" alt='' />
        <PageTitleBar title="Admin Dashboard" loading={loading} />
        <div className="trc-container trc-mx-auto">
          <div className="trc-border trc-p-5 trc-bg-gray-300 trc-shadow-md trc-rounded">
            <h1 className="trc-text-2xl trc-font-bold trc-text-center">Contact & Feedback Messages</h1>  
            <table className="trc-min-w-full trc-text-black">
              <thead className="trc-bg-gray-700 trc-rounded trc-text-white">
                <tr>
                  <th className="trc-border-b-2 trc-p-2">NAME</th>
                  <th className="trc-border-b-2 trc-p-2">EMAIL</th>
                  <th className="trc-border-b-2 trc-p-2">MOBILE</th>
                  <th className="trc-border-b-2 trc-p-2">SUBJECT</th>
                  <th className="trc-border-b-2 trc-p-2">DATE</th>
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
                    </tr>
                    <tr className='trc-mb-2'>
                      <td colSpan={5}>
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
      </>
    </AdminLayout>
  );
}
