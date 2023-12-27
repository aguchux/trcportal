import { SettingsAttrs } from '@/models/settings.model';
import { siteInfo } from '@/utils'
import React from 'react'

type Props = {
    settings: SettingsAttrs[];
}
const HomePopupVideo = ({ settings }: Props) => {
  return (
    <>
          <section className="video-section mt-0">
              <div className="video-popup-area default_bg py-5">
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-6 mb-3d-5">
                              <div className="half_column_image overlay">
                                  <img src="assets/images/video_popup.jpg" alt="Video Image" className="img-fluid image-link" />
                                  <div className="video-play-btn"><a data-fancybox href={siteInfo(settings, "homeServiceTitle2") || "https://www.youtube.com/watch?v=_sI_Ps7JSEk"} className="video-play-link"><i className="fas fa-play-circle" /></a></div>
                              </div>
                          </div>
                          <div className="col-lg-6" data-aos="fade-in-right">
                              <div className="video_popup_content text-white">
                                  <h2 className="sub-title text-white mb-3">Why TRC - <strong className='trc-text-green-500'>?</strong></h2>
                                  <p>Our team comprises seasoned and qualified counselors. Dedicated to providing expert guidance throughout your academic journey. Well-versed in the intricacies of the application process. Comprehensive Support Across All Academic Levels.</p>
                                  <ul style={{
                                        listStyle: 'none', padding: 0, margin: '0 0 1.5rem 1.5rem', lineHeight: '1.5rem'
                                    }}>
                                        <li><i className="fas fa-check" /> <span>Free Counselling</span></li>
                                        <li><i className="fas fa-check" /> <span>Free Application</span></li>
                                        <li><i className="fas fa-check" /> <span>Free Visa Guidance</span></li>
                                        <li><i className="fas fa-check" /> <span>Free Accommodation</span></li>
                                  </ul>
                                  <p className='trc-mt-0 trc-pt-0'>Core values include transparency in operations. Providing clear and honest information about services and fees.</p>
                              </div>
                          </div>
                      </div>
                      <div className="row mt-2" data-aos="fade-up">
                          <div className="col-md-3 col-sm-6 mb-xs-2">
                              <div className="single-countdown">
                                  <span className="counter">60</span><sup>+</sup>
                                  <p>Partner Universities</p>
                              </div>
                          </div>
                          <div className="col-md-3 col-sm-6 mb-xs-2">
                              <div className="single-countdown">
                                  <span className="counter">800</span><sup>+</sup>
                                  <p>Happy Students</p>
                              </div>
                          </div>
                          <div className="col-md-3 col-sm-6 mb-xs-2">
                              <div className="single-countdown">
                                  <span className="counter">37</span>
                                  <p>Staff & Agents</p>
                              </div>
                          </div>
                          <div className="col-md-3 col-sm-6 mb-xs-2">
                              <div className="single-countdown">
                                  <span className="counter">4</span><sup className='trc-text-green-500'>+</sup>
                                  <p>Academic Countries</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

    </>
  )
}

export default HomePopupVideo
