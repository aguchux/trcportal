import React from 'react'

const NewsWidget = () => {
    return (
        <>
            <div className="single-widget">
                <div className="latest-widget border target:trc-text-right">
                    <h4>Latest News</h4>
                    <div className="single-latest">
                        {/* <div className="latest-image">
                        <a href="#"><img className="img-fluid" src="assets/images/blog_01.jpg" alt="blog" /></a>
                        </div> */}
                        <hr/>
                        
                        {/* <div className="latest-content">
                            <h6><Link href="#">Building Diverse Design Was Teams Innovation.</Link></h6>
                            <div className="latest-meta">
                                <span>05 Jan 2019</span>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>

        </>
    )
}

export default NewsWidget
