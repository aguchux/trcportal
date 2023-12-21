import React from 'react'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import { apiFetcher } from '@/axios';

type Props = {}

const ContactUs = (props: Props) => {
    const [busy, setBusy] = React.useState(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        mode: 'onSubmit',
        values: {
            name: '',
            email: '',
            mobile: '',
            subject: '',
            message: ''
        }
    });
    const [completed, setCompleted] = React.useState('');

    const onSubmit = async (data: any) => {
        try {
            setBusy(true);
            const response = await apiFetcher.post<ResponseData>('/contact-us', {
                name: data.name,
                email: data.email,
                mobile: data.mobile,
                subject: data.subject,
                message: data.message
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
                        setCompleted('Your feedback has been sumitted to us. One of our team members will ');
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
                        <div className="col-lg-8 mb-3d-5">
                            <div className="main-content">
                                <div className="contact-from-wrapper-2">
                                    <h2 className="section-heading">Get In Touch</h2>
                                    <form action="#" className="contact-form mt-4" onSubmit={handleSubmit(onSubmit)}>
                                        <div className="row">
                                            {completed && <div className="col-md-12 trc-bg-green-100 my-2 py-2 trc-rounded-3xl py1 px-10 text-center trc-text-black">
                                                {completed}
                                            </div>}

                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="text" {...register("name", { required: true })} className="form-control" placeholder="Enter Your Name" />
                                                    {/* error */}
                                                    {errors.name && <span className="text-danger">This field is required</span>}
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="email" {...register("email", { required: true })} className="form-control" placeholder="Enter Your Email" />
                                                    {errors.email && <span className="text-danger">Email is required</span>}
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="text" {...register("mobile", { required: true })} className="form-control" id="phone_number" placeholder="Enter Phone Number" />
                                                    {errors.mobile && <span className="text-danger">Mobile is required</span>}
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="subject" {...register("subject", { required: true })} className="form-control" placeholder="Enter Subject" />
                                                    {errors.subject && <span className="text-danger">Subject is required</span>}
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    {errors.message && <span className="text-danger">Subject is required</span>}
                                                    <textarea {...register("message", { required: true })} className="form-control" id="message" cols={30} rows={6} placeholder="Write Your Message" />
                                                </div>
                                            </div>
                                            <div className="col-md-12 mx-auto text-center">
                                                <button type="submit">Send Message</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4" data-aos="fade-up">
                            <div className="highlights-section trc-bg-blue-500 text-white p-4">
                                <h4>Don’t Hesitate to contact with us for any kind of information</h4>
                                <ul>
                                    <li><i className="fas fa-paper-plane" /> 83 Ziks Avenue, Uwani, Enugu.</li>
                                    <li><i className="fas fa-mobile-alt" /> +234 815 811 6094</li>
                                    <li><i className="fas fa-mobile-alt" /> +44 740 535 7303</li>
                                    <li><i className="fas fa-envelope" /> info@therecruitmentconsult.com</li>
                                </ul>
                                <div className="social-links">
                                    <ul>
                                        <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                                        <li><a href="#"><i className="fab fa-twitter" /></a></li>
                                        <li><a href="#"><i className="fab fa-behance" /></a></li>
                                        <li><a href="#"><i className="fab fa-youtube" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default ContactUs