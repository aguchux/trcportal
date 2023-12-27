import { SettingsAttrs } from '@/models/settings.model'
import { siteInfo } from '@/utils'
import React from 'react'

type Props = {
    settings: SettingsAttrs[]
}
const HomeWelcome = ({ settings }: Props) => {
    return (
        <>
            <section className="welcome-section section-pb">
                <div className="welcome-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mb-3d-5 px-0">
                                <div className="half_column_image">
                                    <img src="assets/images/welcome.jpg" alt="welcome" className="img-fluid equal-height  trc-rounded-3xl trc-shadow-2xl" />
                                </div>
                            </div>
                            <div className="col-lg-6 equal-height">
                                <div className="half_column_content">
                                    <h2 className="sub-title">{siteInfo(settings, "siteHomeWelcomeTitle") || <>Welcome to <strong className='trc-text-gray-800'>The Recruitment Consult</strong></>}</h2>
                                    <p className=' trc-text-lg'>{siteInfo(settings, "siteHomeWelcomeText") || "The Recruitment Consult is a student recruitment agency based in Nigeria, with a mission to help aspiring students pursue their academic dreams in some of the best schools in Europe, America, Canada and Australia."}</p>
                                    <div className="theme-list trc-text-lg">
                                        <ul>
                                            <li><a href={siteInfo(settings, "siteHomeWelcomeLink1") || "#"}>{siteInfo(settings, "siteHomeWelcomeList1") || "Pre-Departure Services"}</a></li>
                                            <li><a href={siteInfo(settings, "siteHomeWelcomeLink2") || "#"}>{siteInfo(settings, "siteHomeWelcomeList2") || "Accommodation Guidance"}</a></li>
                                            <li><a href={siteInfo(settings, "siteHomeWelcomeLink3") || "#"}>{siteInfo(settings, "siteHomeWelcomeList3") || "Student Visa Assistance"}</a></li>
                                        </ul>
                                    </div>
                                    <div className="theme-list ml-xl-5 trc-text-lg">
                                        <ul>
                                            <li><a href={siteInfo(settings, "siteHomeWelcomeLink4") || "#"}>{siteInfo(settings, "siteHomeWelcomeList4") || "Financial Advice"}</a></li>
                                            <li><a href={siteInfo(settings, "siteHomeWelcomeLink5") || "#"}>{siteInfo(settings, "siteHomeWelcomeList5") || "Admission Services"}</a></li>
                                            <li><a href={siteInfo(settings, "siteHomeWelcomeLink6") || "#"}>{siteInfo(settings, "siteHomeWelcomeList6") || "Genral Consultancy"}</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default HomeWelcome
