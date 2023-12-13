import NewsWidget from '@/components/NewsWidget'
import RootLayout from '@/components/layouts/RootLayout'
import React from 'react'

const SitePage = () => {
  return (
    <RootLayout>
      <div className="page-wrapper trc-mt-10">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-3d-5" data-aos="fade-up" data-aos-delay={400}>
              {/* Start Blog Details */}
              <div className="details-wrapper">

                <div className="details-title">
                  <h2>How to become a best sale marketer in a year!</h2>
                </div>
                <div className="details-meta">
                  <div className="single-meta">
                    <p><i className="fas fa-calendar-alt" /> 25 June, 2018</p>
                  </div>
                  <div className="single-meta">
                    <p><i className="far fa-heart" /> 0 views</p>
                  </div>
                  <div className="single-meta">
                    <p><i className="far fa-comment-alt" /> 0 Comments</p>
                  </div>
                </div>
                <div className="details-text pt-4">
                  <p>Capitalize on low hanging fruit to identify a ballpark value added activity to betaPodcasting Override the digital divide with additional clickthroughs from DevtechnologyObjectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures forable supply chains. Dramatically engage top-line web services vis-a-vis cutting-edge deliverables.</p>
                </div>
                <div className="tags-and-share">
                  <div className="tags-list">
                    <p>Tags :</p>
                    <ul>
                      <li><a href="#">Business</a></li>
                      <li><a href="#">Marketing</a></li>
                    </ul>
                  </div>
                  <div className="share-option">
                    <p>Share: </p>
                    <ul>
                      <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                      <li><a href="#"><i className="fab fa-twitter" /></a></li>
                      <li><a href="#"><i className="fab fa-behance" /></a></li>
                      <li><a href="#"><i className="fab fa-youtube" /></a></li>
                    </ul>
                  </div>
                </div>
                <div className="comments-box-wrapper">
                  <div className="comments-count">
                    <h2>02 Comments</h2>
                  </div>
                  <div className="single-comment my-2">
                    <div className="authors-info">
                      <div className="author-thumb">
                        <a href="#"><img src="assets/images/author_01.png" alt="autor" className="img-fluid" /></a>
                      </div>
                      <div className="author-data">
                        <a href="#">Jhon Deo</a>
                        <p>25 June, 19</p>
                        <div className="comment">
                          <p>Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly ize quality intellectual capital without superior collaboration and idea-sharing. Holistically pontificate installed</p>
                        </div>
                        <a href="#" className="reply-btn">Reply</a>
                      </div>
                    </div>
                  </div>
                  <div className="single-comment my-2">
                    <div className="authors-info">
                      <div className="author-thumb">
                        <a href="#"><img src="assets/images/author_02.png" alt="autor" className="img-fluid" /></a>
                      </div>
                      <div className="author-data">
                        <a href="#">Jhon Deo</a>
                        <p>25 June, 19</p>
                        <div className="comment">
                          <p>Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly ize quality intellectual capital without superior collaboration and idea-sharing. Holistically pontificate installed</p>
                        </div>
                        <a href="#" className="reply-btn">Reply</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="comment-form-wrapper mt-5">
                  <h2> Write Your Comment</h2>
                  <form action="#">
                    <div className="row">
                      <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Name" />
                      </div>
                      <div className="col-md-6">
                        <input type="email" className="form-control" placeholder="Email" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <textarea name="comment_message" id="comment_message" cols={30} rows={10} className="form-control" placeholder="Write Your Comment" defaultValue={""} />
                      </div>
                      <div className="col-md-12">
                        <button type="submit" className="button_one">Submit</button>
                      </div>
                    </div>
                  </form>
                </div>
                {/* Start Latest Blogs Carousel */}
                <div className="latest-blogs-area mt-5 owl-carousel" data-aos="fade-up" data-aos-delay={400}>
                  <div className="single-blog-item p-3">
                    <div className="single-blog-thumb">
                      <a href="#"><img src="assets/images/blog_01.jpg" alt="blog" className="img-fluid" /></a>
                    </div>
                    <div className="single-blog-content">
                      <h4><a href="#">Building Diverse Design Was Teams Innovation.</a></h4>
                      <span>05 Jan 2019</span>
                    </div>
                  </div>
                  <div className="single-blog-item p-3">
                    <div className="single-blog-thumb">
                      <a href="#"><img src="assets/images/blog_02.jpg" alt="blog" className="img-fluid" /></a>
                    </div>
                    <div className="single-blog-content">
                      <h4><a href="#">Building Diverse Design Was Teams Innovation.</a></h4>
                      <span>05 Jan 2019</span>
                    </div>
                  </div>
                  <div className="single-blog-item p-3">
                    <div className="single-blog-thumb">
                      <a href="#"><img src="assets/images/blog_03.jpg" alt="blog" className="img-fluid" /></a>
                    </div>
                    <div className="single-blog-content">
                      <h4><a href="#">Building Diverse Design Was Teams Innovation.</a></h4>
                      <span>05 Jan 2019</span>
                    </div>
                  </div>
                  <div className="single-blog-item p-3">
                    <div className="single-blog-thumb">
                      <a href="#"><img src="assets/images/blog_02.jpg" alt="blog" className="img-fluid" /></a>
                    </div>
                    <div className="single-blog-content">
                      <h4><a href="#">Building Diverse Design Was Teams Innovation.</a></h4>
                      <span>05 Jan 2019</span>
                    </div>
                  </div>
                  <div className="single-blog-item p-3">
                    <div className="single-blog-thumb">
                      <a href="#"><img src="assets/images/blog_05.jpg" alt="blog" className="img-fluid" /></a>
                    </div>
                    <div className="single-blog-content">
                      <h4><a href="#">Building Diverse Design Was Teams Innovation.</a></h4>
                      <span>05 Jan 2019</span>
                    </div>
                  </div>
                  <div className="single-blog-item p-3">
                    <div className="single-blog-thumb">
                      <a href="#"><img src="assets/images/blog_06.jpg" alt="blog" className="img-fluid" /></a>
                    </div>
                    <div className="single-blog-content">
                      <h4><a href="#">Building Diverse Design Was Teams Innovation.</a></h4>
                      <span>05 Jan 2019</span>
                    </div>
                  </div>
                  <div className="single-blog-item p-3">
                    <div className="single-blog-thumb">
                      <a href="#"><img src="assets/images/blog_02.jpg" alt="blog" className="img-fluid" /></a>
                    </div>
                    <div className="single-blog-content">
                      <h4><a href="#">Building Diverse Design Was Teams Innovation.</a></h4>
                      <span>05 Jan 2019</span>
                    </div>
                  </div>
                  <div className="single-blog-item p-3">
                    <div className="single-blog-thumb">
                      <a href="#"><img src="assets/images/blog_01.jpg" alt="blog" className="img-fluid" /></a>
                    </div>
                    <div className="single-blog-content">
                      <h4><a href="#">Building Diverse Design Was Teams Innovation.</a></h4>
                      <span>05 Jan 2019</span>
                    </div>
                  </div>
                </div>
                {/* End Latest Blogs Carousel */}
              </div>
              {/* End Blog Details */}
            </div>
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay={300}>
              {/* Start Sidebar */}
              <div className="sidebar-wrapper">
                <div className="single-widget">
                  <div className="search-widget">
                    <form action="#">
                      <input type="text" className="form-control" />
                      <button type="submit"><i className="fas fa-search" /></button>
                    </form>
                  </div>
                </div>
                <div className="single-widget">
                  <div className="latest-widget border target:trc-text-right">
                    <h4>Latest News</h4>
                    <NewsWidget />
                  </div>
                </div>
              </div>
              {/* End Sidebar */}
            </div>
          </div>
        </div>
      </div>

    </RootLayout>
  )
}

export default SitePage
