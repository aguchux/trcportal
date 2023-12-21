import React from 'react'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import { apiFetcher } from '@/axios';


type Props = {}

const Application = (props: Props) => {
    const [busy, setBusy] = React.useState(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        values: {
            firstName: '',
            lastName: '',
            email: '',
            mobile: '',
            country: '',
            purpose: '',
            toStudy: '',
            countryToStudy: '',
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
                countryToStudy: data.countryToStudy,
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
                        <div className="col-lg-12 mb-3d-5">
                            <div className="main-content">
                                <div className="contact-from-wrapper-2">
                                    <h2 className="section-heading">Register With Us</h2>
                                    <hr />
                                    <form action="#" className="contact-form mt-4" onSubmit={handleSubmit(onSubmit)}>
                                        <div className="row">

                                            {completed && <div className="col-md-12 trc-bg-green-100 my-2 py-2 trc-rounded-3xl py1 px-10 text-center trc-text-black">
                                                {completed}
                                            </div>}

                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label htmlFor="firstName">First Name</label>
                                                    <input type="text" className="form-control" placeholder="First Name" {...register("firstName", { required: true })} />
                                                    {errors.firstName && <span className="text-danger">This field is required</span>}
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label htmlFor="lastName">Last Name</label>
                                                    <input type="text" className="form-control" placeholder="Last Name" {...register("lastName", { required: true })} />
                                                    {errors.lastName && <span className="text-danger">This field is required</span>}
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="email">Email</label>
                                                    <input type="email" className="form-control" placeholder="Email" {...register("email", { required: true })} />
                                                    {errors.email && <span className="text-danger">This field is required</span>}
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="mobile">Mobile/Telephone</label>
                                                    <input type="text" className="form-control" placeholder="Mobile" {...register("mobile", { required: true })} />
                                                    {errors.mobile && <span className="text-danger">This field is required</span>}
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="country">Country of Origin</label>
                                                    <input type="text" className="form-control" placeholder="Country" {...register("country", { required: true })} />
                                                    {errors.country && <span className="text-danger">This field is required</span>}
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="purpose">Purpose of Application</label>
                                                    <select className="form-control" {...register("purpose", { required: true })}>
                                                        <option value="">Select Purpose</option>
                                                        <option value="General Enquiries">General Enquiries</option>
                                                        <option value="Seeking Admission">Seeking Admission</option>
                                                        <option value="Study VISA Assistance">Study VISA Assistance</option>
                                                    </select>
                                                    {errors.purpose && <span className="text-danger">This field is required</span>}
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="toStudy">Desired Field of Study</label>
                                                    <input type="text" className="form-control" placeholder="Desired Field of Study" {...register("toStudy")} />
                                                    {errors.toStudy && <span className="text-danger">This field is required</span>}
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="countryToStudy">Desired Country of Study</label>
                                                    <input type="text" className="form-control" placeholder="Desired Country of Study" {...register("countryToStudy")} />
                                                    {errors.toStudy && <span className="text-danger">This field is required</span>}
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <textarea id="notes" className="form-control" cols={30} rows={10} placeholder="Notes" {...register("notes")} />
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