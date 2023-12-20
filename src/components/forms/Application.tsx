import React from 'react'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import { apiFetcher } from '@/axios';


type Props = {}

const Application = (props: Props) => {
    const [busy, setBusy] = React.useState(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        mode: 'onSubmit',
        values: {
            firstName: '',
            lastName: '',
            email: '',
            mobile: '',
            country: '',
            purpose: '',
            toStudy: '',
            notes: ''
        }
    });
    const [completed, setCompleted] = React.useState('');

    const onSubmit = async (data: any) => {
        try {
            setBusy(true);
            const response = await apiFetcher.post<ResponseData>('/applications/create', {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                mobile: data.mobile,
                country: data.country,
                purpose: data.purpose,
                toStudy: data.toStudy,
                notes: data.notes
            });
            const { data: resData } = response;
            if (resData.success) {
                await Swal.fire({
                    title: 'Success',
                    text: resData.message,
                    icon: 'success',
                    confirmButtonText: 'Ok'
                }).then((result) => {
                    if (result.isConfirmed) {
                        setCompleted('Your application has been sumitted to us. One of our team members will contact you soon.');
                    }
                })
            } else {
                Swal.fire({
                    title: 'Error',
                    text: resData.message,
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })
                setCompleted('');
            }
        } catch (error) {

        } finally {
            setBusy(false);
        }
    }

    return (
        <>
            <div className="page-wrapper trc-my-10">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mb-3d-5 trc-mx-auto">
                            <div className="main-content">
                                <div className="contact-from-wrapper-2">
                                    <h2 className="section-heading">Register With Us</h2>
                                    <form action="#" className="contact-form mt-4" onSubmit={handleSubmit(onSubmit)}>
                                        <div className="row">

                                            {completed && <div className="col-md-12 trc-bg-green-100 my-2 py-2 trc-rounded-3xl py1 px-10 text-center trc-text-black">
                                                {completed}
                                            </div>}

                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="text" placeholder="First Name" {...register("firstName", { required: true })} />
                                                    {errors.firstName && <span className="text-danger">This field is required</span>}
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="text" placeholder="Last Name" {...register("lastName", { required: true })} />
                                                    {errors.lastName && <span className="text-danger">This field is required</span>}
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="email" placeholder="Email" {...register("email", { required: true })} />
                                                    {errors.email && <span className="text-danger">This field is required</span>}
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="text" placeholder="Mobile" {...register("mobile", { required: true })} />
                                                    {errors.mobile && <span className="text-danger">This field is required</span>}
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="text" placeholder="Country" {...register("country", { required: true })} />
                                                    {errors.country && <span className="text-danger">This field is required</span>}
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="text" placeholder="Purpose" {...register("purpose", { required: true })} />
                                                    {errors.purpose && <span className="text-danger">This field is required</span>}
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="text" placeholder="To Study" {...register("toStudy", { required: true })} />
                                                    {errors.toStudy && <span className="text-danger">This field is required</span>}
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <textarea id="notes" cols={30} rows={10} placeholder="Notes" {...register("notes", { required: true })} />
                                                    {errors.notes && <span className="text-danger">This field is required</span>}
                                                </div>
                                            </div>


                                            <div className="col-md-12 mx-auto text-center">
                                                <button type="submit">Submit Application</button>
                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </>
    )
}

export default Application