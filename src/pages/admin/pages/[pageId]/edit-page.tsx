
import React from 'react'
import AdminLayout from '@/components/layouts/AdminLayout'
import { apiFetcher } from '@/axios'
import PageTitleBar from '@/components/admins/PageTitleBar'
import Link from 'next/link'
import { toSlug } from '@/utils'
import { useRouter } from 'next/router'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import dynamic from 'next/dynamic'
import {useForm} from 'react-hook-form'
import Swal from 'sweetalert2'
        
const RichTextEditor = dynamic(
  () => import('@/components/RichTextEditor'),
  { ssr: false }
)

export default function EditPages() {

    const [page, setPage] = React.useState<PageProps>({} as PageProps)
    const [loading, setLoading] = React.useState(false)

    const { push, query } = useRouter();
    const { pageId } = query;

    React.useEffect(() => {
        if (!pageId) return;
        const getPageById = async () => {
            try {
                const result = await apiFetcher<ResponseData>(`/pages/page-info?pageId=${pageId}`);
                const { data } = result;
                setPage(data.data);
            } catch (error) {
                console.log(error);
            }
        }
        getPageById();
    }, [pageId])


    const {register, handleSubmit, formState: {errors}} = useForm({
        values: {
            pageId: pageId,
            title: page.title!,
            slug:   page.slug!,
            pageType: 'Page',
            content: page.content!,
            sortNumber: page.sortNumber!
        }
    });


    const onSubmit = async (data:any) => {
        setLoading(true);
        const slug = toSlug(data.title);
        try {
            const result = await apiFetcher<ResponseData>(`/pages/update?pageId=${page._id}`, {
                method: 'POST',
                data: {
                    pageId: data.pageId,
                    title: data.title,
                    slug:   slug,
                    pageType: data.pageType,
                    content: data.content,
                    sortNumber: data.sortNumber
                }
            })
            const { data: resData } = result;
            if (!resData.success) {
                Swal.fire(
                    'Not Updated',
                    'Your page is not updated of possibly was not found.',
                    'error'
                )
                return;
            };
            await Swal.fire(
                {
                    title: 'Updated!',
                    text: 'Your page has been updated.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                }
            ).then((res) => {
                if (res.isConfirmed) {
                    push('/admin/pages');
                }
            }  )
        } catch (error) {
            console.log(error);
        }
    }

    const editorOnChange = async (event:any, editor:ClassicEditor) => {
        const data = await editor.getData();
        setPage({
            ...page,
            content: data
        })
    }

    React.useEffect(() => {
        register('content', {required: true})
    }, [page.content])

    return (
        <AdminLayout>
            <PageTitleBar title="Edit Page" loading={loading} />
            <div className="trc-container trc-mx-auto">
                <div className="trc-border trc-p-5 trc-bg-gray-300 trc-shadow-md trc-rounded">
                    <div className="trc-flex trc-justify-between trc-items-center">
                        <h1 className="trc-text-2xl">.</h1>
                        <Link href='/admin/pages' className="btn btn-primary trc-rounded">List Pages</Link>
                    </div>
                    <hr className="trc-my-5" />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <table className="trc-min-w-full trc-text-black">
                            <thead className="trc-bg-gray-700 trc-rounded trc-text-white">
                                <tr>
                                    <th className="trc-border-b-2 trc-p-2">TITLE</th>
                                    <th className="trc-border-b-2 trc-p-2">SORT</th>
                                    <th className="trc-border-b-2 trc-p-2">TYPE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Table rows go here */}
                                <tr className="trc-cursor-pointer trc-bg-pink-100 hover:trc-bg-pink-300" onClick={() => { }}>
                                    <td className="trc-border-b trc-p-2">
                                        <input type="text" {...register("title", {required:true})} className="form-control" placeholder='Page Title' />
                                    </td>

                                    <td className="trc-border-b trc-p-2 trc-w-[100px]">
                                        <input {...register("sortNumber", {required:true})} type="number" className="form-control" placeholder='0'/>
                                    </td>

                                    <td className="trc-border-b trc-p-2 trc-w-[300px]">
                                        <select className="form-control">
                                            <option value="Page">Page</option>
                                            <option value="Post">Post</option>
                                        </select>
                                    </td>
                                </tr>

                                <tr className="trc-cursor-pointer trc-bg-pink-100 hover:trc-bg-pink-300" onClick={() => { }}>
                                    <td colSpan={3} className="trc-border-b trc-p-2">
                                        <RichTextEditor  {...register("sortNumber", {required:true})}
                                            page={page} 
                                            onChageFunction={editorOnChange}
                                         />
                                    </td>
                                </tr>
                                <tr className="trc-cursor-pointer trc-bg-pink-100 hover:trc-bg-pink-300" onClick={() => { }}>
                                    <td colSpan={3} className="trc-border-b trc-p-2">
                                        <button className="btn btn-primary">Update Page</button>
                                    </td>
                                </tr>
                                {/* Add more rows as needed */}
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>
        </AdminLayout>
    )
}
