import { apiFetcher } from '@/axios';
import { SettingsAttrs } from '@/models/settings.model';
import React from 'react'
import { BeatLoader } from 'react-spinners';
import { editableAtom } from '@/store';
import { useAtom } from 'jotai';

type Props = {}

const NewSettingsInfo = (props: Props) => {
    const [busy, setBusy] = React.useState(false);
    const [settings, setSettings] = React.useState<SettingsAttrs>({
        keyName: '',
        keyTitle: '',
        keyValue: '',
        keyType: 'text'
    } as SettingsAttrs);
    // const [editable, setEditable] = React.useState(false);
    const [editable, setEditable] = useAtom(editableAtom);
    const [password, setPassword] = React.useState('' as unknown as string);

    const unlockAsync = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (password === '*Golojan2014#') {
                setEditable(true)
            }
        } else {
            setEditable(false)
        }
    }

    const textToCamelCase = (text: string) => {
        return text
            .replace(/\s(.)/g, function ($1) { return $1.toUpperCase(); })
            .replace(/\s/g, '')
            .replace(/^(.)/, function ($1) { return $1.toLowerCase(); });
    }



    const createSetting = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setBusy(true);
        apiFetcher<ResponseData>('/settings/create', {
            method: 'POST',
            data: settings
        })
            .then((result) => {
                setBusy(false)
                const { data } = result
                if (!data.success) return;
                setSettings(data.data);
            })
            .catch((err) => {
                console.log(err)
            }).finally(() => {
                setBusy(false);
            })
    }

    return (
        <>
            <form id={`settings_new`} onSubmit={createSetting} className='col-12 col-md-12' >

                <table className="trc-min-w-full my-2 trc-text-black trc-cursor-pointer trc-bg-blue-100 hover:trc-bg-blue-200 trc-rounded">
                    <thead className="trc-bg-gray-700 trc-text-white ">
                        <tr>
                            <th className="trc-border-b-2 trc-p-2 trc-grid trc-grid-cols-2">
                                <span>Create New Setting</span>
                                <input className='trc-px-2 trc-rounded-lg trc-py-1 trc-texttrc-float-right trc-bg-black trc-text-white' type='password' placeholder='Ulock Editable' value={password} onChange={
                                    (e) => {
                                        setPassword(e.target.value)
                                    }
                                } onKeyDown={unlockAsync} />
                            </th>
                        </tr>
                    </thead>
                    {editable && (
                        <tbody>
                            {/* Table rows go here */}
                            <tr>
                                <td className="trc-border-b trc-p-2">
                                    <div className='form-group trc-my-0'>
                                        <input disabled={busy} type='text' placeholder='Settings Title' onChange={
                                            (e) => {
                                                setSettings({
                                                    ...settings,
                                                    keyTitle: e.target.value,
                                                    keyName: textToCamelCase(e.target.value)
                                                })
                                            }
                                        } value={settings.keyTitle} className='trc-border trc-border-gray-400 trc-rounded trc-p-2 trc-w-full' />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="trc-border-b trc-p-2">
                                    <div className='form-group trc-my-0'>
                                        <strong>Key Name:</strong> <em className='trc-text-green-500 trc-font-bold'>{settings.keyName}</em>
                                        <input disabled={busy} type='hidden' value={settings.keyName} className='trc-m-0 trc-p-0' />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="trc-border-b trc-p-2">
                                    <div className='form-group trc-my-0'>
                                        <input disabled={busy} type='text' placeholder='Key Value' onChange={
                                            (e) => {
                                                setSettings({
                                                    ...settings,
                                                    keyValue: e.target.value
                                                })
                                            }
                                        } value={settings.keyValue} className='trc-border trc-border-gray-400 trc-rounded trc-p-2 trc-w-full' />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="trc-border-b trc-p-2 trc-flex-rows trc-justify-items-end trc-items-stretch">
                                    <div className='flex flex-row gap-1'>
                                        <button disabled={busy}
                                            className={`col-7 trc-float-right trc-rounded-md trc-py-0 trc-text-white ${busy ? ' trc-bg-gray-400  hover:trc-bg-gray-500' : ' trc-bg-sky-500  hover:trc-bg-sky-600'} trc-border-none`}>
                                            {busy ? <BeatLoader color='#ffffff' size={5} /> : 'Create'}
                                        </button>
                                        <label className='col-5 trc-float-right trc-border-none'>
                                            <input disabled={busy} type="checkbox" name="textArea" onChange={
                                                (e) => {
                                                    setSettings({
                                                        ...settings,
                                                        keyType: e.target.value
                                                    })
                                                }

                                            } id="textArea" value={'textarea'} /> Text Area
                                        </label>
                                    </div>
                                </td>
                            </tr>
                            {/* Add more rows as needed */}
                        </tbody>
                    )}

                </table>
            </form>
        </>
    )
}

export default NewSettingsInfo