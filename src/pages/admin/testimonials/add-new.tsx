
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


export default function AdminAddTestimonial() {

  const [loading, setLoading] = React.useState(false)
  const { push } = useRouter();

  const { register, handleSubmit, formState: { errors } } = useForm();

  // on Submit
  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      const result = await apiFetcher<ResponseData>('/testimonials/create', {
        method: 'POST',
        data
      })
      const { data: resData } = result;
      if (!resData.success) {
        Swal.fire(
          'Not Created',
          'Your Testimony failed and was not created.',
          'error'
        )
        return;
      };
      await Swal.fire(
        {
          title: 'Created!',
          text: 'Your Testimony has been created.',
          icon: 'success',
          confirmButtonText: 'OK'
        }
      ).then((res) => {
        if (res.isConfirmed) {
          push('/admin/testimonials');
        }
      })
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <AdminLayout>
      <PageTitleBar title="Add Testimony" loading={loading} />
      <div className="trc-container trc-mx-auto">
        <div className="trc-border trc-p-5 trc-bg-gray-300 trc-shadow-md trc-rounded">
          <div className="trc-flex trc-justify-between trc-items-center">
            <h1 className="trc-text-2xl">Add new Testimony</h1>
            <Link href='/admin/testimonials' className="btn btn-primary trc-rounded">List Testimonials</Link>
          </div>
          <hr className="trc-my-5" />
          <form onSubmit={handleSubmit(onSubmit)}>
            <table className="trc-min-w-full trc-text-black">
              <thead className="trc-bg-gray-700 trc-rounded trc-text-white">
                <tr>
                  <th className="trc-border-b-2 trc-p-2">TITLE</th>
                  <th className="trc-border-b-2 trc-p-2">FIRST NAME</th>
                  <th className="trc-border-b-2 trc-p-2">LAST NAME</th>
                </tr>
              </thead>
              <tbody>
                {/* Table rows go here */}
                <tr className="trc-cursor-pointer trc-bg-pink-100 hover:trc-bg-pink-300">

                  <td className="trc-border-b trc-p-2">
                    <select {...register("title", { required: true })} className="form-control">
                      <option value="Mr">Mr</option>
                      <option value="Mrs">Mrs</option>
                      <option value="Miss">Miss</option>
                    </select>                  </td>

                  <td className="trc-border-b trc-p-2">
                    <input type="text" {...register("firstName", { required: true })} className="form-control" placeholder='First Name' />
                  </td>
                  <td className="trc-border-b trc-p-2">
                    <input type="text" {...register("lastName", { required: true })} className="form-control" placeholder='Last Name' />
                  </td>
                </tr>
                <tr className="trc-cursor-pointer trc-bg-pink-100 hover:trc-bg-pink-300">
                  <td colSpan={3} className="trc-border-b trc-p-2">
                    <textarea {...register("testimony", { required: true })} className="form-control" placeholder='Enter testimony here'></textarea>
                  </td>
                </tr>


                <tr className="trc-cursor-pointer trc-bg-pink-100 hover:trc-bg-pink-300">
                  <td className="trc-border-b trc-p-2">
                    <input type="text" {...register("photoUrl")} className="form-control" placeholder='Photo Url' />
                  </td>
                  <td className="trc-border-b trc-p-2 flex flex-row">
                    <input type="text" {...register("videoUrl")} className="form-control" placeholder='Youtube Url' />
                  </td>
                  <td className="trc-border-b trc-p-2 trc-grid trc-grid-cols-2">
                    <input type="checkbox" {...register("useVideo")} className="form-control" placeholder='Use Video' />
                    <span className='trc-text-2xl'>Use Video on Site</span>
                  </td>
                </tr>

                <tr className="trc-cursor-pointer trc-bg-pink-100 hover:trc-bg-pink-300">
                  <td colSpan={3} className="trc-border-b trc-p-2">
                    <button className="btn btn-primary" type='submit'>Create Testimony</button>
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
