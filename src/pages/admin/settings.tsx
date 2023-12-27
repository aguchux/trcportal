
import React from 'react'
import AdminLayout from '@/components/layouts/AdminLayout'
import PageTitleBar from '@/components/admins/PageTitleBar'
import { SettingsAttrs } from '@/models/settings.model'
import { apiFetcher } from '@/axios'
import { Schema } from 'mongoose'
import { BeatLoader } from 'react-spinners'
import NewSettingsInfo from '@/components/admins/NewSettingsInfo'
import { editableAtom } from '@/store';
import { useAtom } from 'jotai';
import Swal from 'sweetalert2';
import dynamic from 'next/dynamic'
const RichEditor = dynamic(() => import('@/components/RichEditor'), { ssr: false })

export default function AdminSettings() {


  const [copied, setCopied] = React.useState(false);
  const [settings, setSettings] = React.useState<SettingsAttrs[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [editable] = useAtom(editableAtom);
  const [busy, setBusy] = React.useState(false);
  const [deleting, setDeleting] = React.useState(false);
  const [currKey, setCurrKey] = React.useState<Schema.Types.ObjectId>('' as unknown as Schema.Types.ObjectId);



  const deleteSettings = (e: React.MouseEvent<HTMLButtonElement>, data: SettingsAttrs) => {
    e.preventDefault();
    setDeleting(true);
    Swal.fire({
      title: 'Are you sure?',
      text: `You are about to delete ${data.keyTitle} from the settings. This action is irreversible`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.isConfirmed) {
        setDeleting(true);
        apiFetcher<ResponseData>('/settings/delete', {
          method: 'POST',
          data
        })
          .then((result) => {
            const { data } = result
            if (!data.success) return;
            setCopied(false)
            Swal.fire('Deleted!', `${data.data.keyTitle} has been deleted.`, 'success')
          })
          .catch((err) => {
            console.log(err)
          }).finally(() => {
            setDeleting(false);
          })
      } else {
        setDeleting(false);
      }
    })
  }


  React.useEffect(() => {
    if (copied) return;
    apiFetcher<ResponseData>('/settings')
      .then((result) => {
        setLoading(false)
        const { data } = result
        if (!data.success) return;
        setSettings(data.data);
        setCopied(true)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })
  }, [copied, deleting])

  const autoResizeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.target.style.height = 'inherit';
    e.target.style.height = `${e.target.scrollHeight}px`;
  }



  const saveSettings = (e: React.MouseEvent<HTMLButtonElement>, data: SettingsAttrs) => {
    e.preventDefault();
    setBusy(true);
    apiFetcher<ResponseData>('/settings/update', {
      method: 'POST',
      data
    })
      .then((result) => {
        setLoading(false)
        const { data } = result
        if (!data.success) return;
        setSettings(data.data);
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      }).finally(() => {
        setBusy(false);
      })
  }


  return (
    <AdminLayout>
      <PageTitleBar title="Dashboard (Settings)" loading={loading} />
      <div className='trc-grid trc-grid-cols-1 trc-gap-0'>
        <div className="trc-container trc-mx-auto">
          <div className="trc-border trc-p-5 trc-bg-gray-300 trc-shadow-md trc-rounded">
            <div className="row">
              {settings.map((setting, index) => (
                <form key={index} id={`settings_${index}`} className='col-12 col-md-12' >
                  <input type="hidden" value={setting.keyName} />
                  <table className="trc-min-w-full my-2 trc-text-black trc-cursor-pointer trc-bg-blue-100 hover:trc-bg-blue-200 trc-rounded">
                    <thead className="trc-bg-gray-700 trc-text-white ">
                      <tr>
                        <th className="trc-border-b-2 trc-p-2">
                          <span>{setting.keyTitle}</span>
                          {editable && <button
                            onClick={(e) => {
                              deleteSettings(e, setting)
                            }}
                            className={`trc-float-right trc-rounded-md trc-py-0 trc-bg-red-500 trc-text-white trc-border-none`}>
                            {deleting ? <BeatLoader color='#ffffff' size={5} /> : 'Delete'}
                          </button>
                          }
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Table rows go here */}
                      <tr>
                        <td className="trc-border-b trc-p-2">
                          <div className='form-group trc-my-0'>
                            {setting.keyType === 'textarea' ?
                              <RichEditor content={setting.keyValue} onChageFunction={
                                (event: any, editor: any) => {
                                  setSettings((prev) => {
                                    const newSettings = [...prev];
                                    newSettings[index].keyValue = editor.getData();
                                    setCurrKey(setting._id!);
                                    return newSettings;
                                  })
                                }
                              } /> : <input type='text' onChange={
                                (e) => {
                                  setSettings((prev) => {
                                    const newSettings = [...prev];
                                    newSettings[index].keyValue = e.target.value;
                                    setCurrKey(setting._id!);
                                    return newSettings;
                                  })
                                }
                              } value={setting.keyValue} className='trc-border trc-border-gray-400 trc-rounded trc-p-2 trc-w-full' />
                            }

                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="trc-border-b trc-p-2 trc-flex-rows trc-justify-items-end trc-items-stretch">
                          <strong>Key Name:</strong> <em>{setting.keyName}</em>
                          <button disabled={
                            Boolean(setting._id !== currKey)
                          }
                            onClick={(e) => {
                              saveSettings(e, setting)
                            }}
                            className={`trc-float-right trc-rounded-md trc-py-0 trc-text-white ${Boolean(setting._id !== currKey) ? ' trc-bg-gray-400  hover:trc-bg-gray-500' : ' trc-bg-sky-500  hover:trc-bg-sky-600'} trc-border-none`}>
                            {busy && Boolean(setting._id === currKey) ? <BeatLoader color='#ffffff' size={5} /> : 'save'}
                          </button>
                        </td>
                      </tr>
                      {/* Add more rows as needed */}
                    </tbody>
                  </table>
                </form>
              ))}
              <NewSettingsInfo />
            </div>

          </div>
        </div>


      </div>
    </AdminLayout>
  )
}
