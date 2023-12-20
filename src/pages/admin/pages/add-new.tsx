
import React from 'react'
import AdminLayout from '@/components/layouts/AdminLayout'
import { apiFetcher } from '@/axios'
import PageTitleBar from '@/components/admins/PageTitleBar'
import Link from 'next/link'
import { toSlug } from '@/utils'
import { useRouter } from 'next/router'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import dynamic from 'next/dynamic'
const RichTextEditor = dynamic(
  () => import('@/components/RichTextEditor'),
  { ssr: false }
)
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'


export default function AdminPages() {

  const [page, setPage] = React.useState<PageProps>({
    content: '',
  } as PageProps)

  const [loading, setLoading] = React.useState(false)
  const { push } = useRouter();

  const { register, handleSubmit, formState: { errors } } = useForm({
    values: {
      title: '',
      pageType: 'Page',
      sortNumber: 0
    }
  });

  // on Submit
  const onSubmit = async (data: any) => {
    setLoading(true);
    const slug = toSlug(data.title);
    try {
      const result = await apiFetcher<ResponseData>('/pages/create', {
        method: 'POST',
        data: {
          ...data,
          slug: slug,
          content: page.content
        }
      })
      const { data: resData } = result;
      if (!resData.success) {
        Swal.fire(
          'Not Created',
          'Your page failed and was not created.',
          'error'
        )
        return;
      };
      await Swal.fire(
        {
          title: 'Created!',
          text: 'Your page has been created.',
          icon: 'success',
          confirmButtonText: 'OK'
        }
      ).then((res) => {
        if (res.isConfirmed) {
          push('/admin/pages');
        }
      })
    } catch (error) {
      console.log(error);
    }
  }

  const editorOnChange = async (event: any, editor: ClassicEditor) => {
    const data = await editor.getData();
    setPage({
      ...page,
      content: data
    })
  }

  return (
    <AdminLayout>
      <PageTitleBar title="Add Page" loading={loading} />
      <div className="trc-container trc-mx-auto">
        <div className="trc-border trc-p-5 trc-bg-gray-300 trc-shadow-md trc-rounded">
          <div className="trc-flex trc-justify-between trc-items-center">
            <h1 className="trc-text-2xl">Add new page</h1>
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
                <tr className="trc-cursor-pointer trc-bg-pink-100 hover:trc-bg-pink-300">
                  <td className="trc-border-b trc-p-2">
                    <input type="text" {...register("title", { required: true })} className="form-control" placeholder='Page Title' />
                  </td>

                  <td className="trc-border-b trc-p-2 trc-w-[100px]">
                    <input {...register("sortNumber", { required: true })} type="number" className="form-control" placeholder='0' />
                  </td>

                  <td className="trc-border-b trc-p-2 trc-w-[300px]">
                    <select className="form-control" {...register("pageType", { required: true })}>
                      <option value="Page">Page</option>
                      <option value="Post">Post</option>
                    </select>
                  </td>
                </tr>

                <tr className="trc-cursor-pointer trc-bg-pink-100 hover:trc-bg-pink-300">
                  <td colSpan={3} className="trc-border-b trc-p-2">
                    <RichTextEditor
                      page={page}
                      onChageFunction={editorOnChange}
                    />
                  </td>
                </tr>
                <tr className="trc-cursor-pointer trc-bg-pink-100 hover:trc-bg-pink-300">
                  <td colSpan={3} className="trc-border-b trc-p-2">
                    <button className="btn btn-primary" type='submit'>Create Page</button>
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
