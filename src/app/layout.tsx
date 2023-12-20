import Script from 'next/script'
import React from 'react'
import { Metadata } from 'next'
import TopBar from '@/components/TopBar'
import Menu from '@/components/Menu'
import SearchModal from '@/components/SearchModal'
import Footer from '@/components/Footer'
import BreadCrumb from '@/components/BreadCrumb'

export const metadata: Metadata = {
    title: 'Home | The Recruitment Consult',
    description: 'Welcome to The Recruitment Consult',
}


interface Props {
    children: React.ReactNode
}
function RootLayout({ children }: Props) {
    return (
        <>
            <html lang="en">
                <head>
                    <meta charSet="utf-8" />
                    <base href="/" />
                    <title>{metadata.title as string}</title>
                    <meta name="description" content={metadata.description as string} />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                    <link rel="apple-touch-icon" sizes="57x57" href="icons/apple-icon-57x57.png" />
                    <link rel="apple-touch-icon" sizes="60x60" href="icons/apple-icon-60x60.png" />
                    <link rel="apple-touch-icon" sizes="72x72" href="icons/apple-icon-72x72.png" />
                    <link rel="apple-touch-icon" sizes="76x76" href="icons/apple-icon-76x76.png" />
                    <link rel="apple-touch-icon" sizes="114x114" href="icons/apple-icon-114x114.png" />
                    <link rel="apple-touch-icon" sizes="120x120" href="icons/apple-icon-120x120.png" />
                    <link rel="apple-touch-icon" sizes="144x144" href="icons/apple-icon-144x144.png" />
                    <link rel="apple-touch-icon" sizes="152x152" href="icons/apple-icon-152x152.png" />
                    <link rel="apple-touch-icon" sizes="180x180" href="icons/apple-icon-180x180.png" />
                    <link rel="icon" type="image/png" sizes="192x192" href="icons/android-icon-192x192.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="icons/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="96x96" href="icons/favicon-96x96.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="icons/favicon-16x16.png" />
                    <link rel="manifest" href="icons/manifest.json" />
                    <meta name="msapplication-TileColor" content="#ffffff" />
                    <meta name="msapplication-TileImage" content="icons/ms-icon-144x144.png" />
                    <meta name="theme-color" content="#ffffff" />

                    <link rel="icon" type="image/png" href="assets/images/favicon.png" />
                    <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
                    <link rel="stylesheet" href="/assets/css/owl.carousel.min.css" />
                    <link rel="stylesheet" href="/assets/css/font-awesome.min.css" />
                    <link rel="stylesheet" href="/assets/css/aos.css" />
                    <link rel="stylesheet" href="/assets/css/swiper.min.css" />
                    <link rel="stylesheet" href="/assets/css/jquery.fancybox.min.css" />
                    <link rel="stylesheet" href="/style.css" />
                </head>
                <body>
                    <header>
                        <div>
                            <TopBar />
                            <div className="main-menu-area bg_dark_mobile">
                                <Menu />
                                <BreadCrumb />
                                <SearchModal />
                            </div>
                        </div>
                    </header>
                    <div className="trc-my-10 my-10 trc-px-10">
                        {children}
                    </div>
                    <Footer />
                    <Script src="assets/js/jquery-3.4.0.min.js" strategy='beforeInteractive' />
                    <Script src="assets/js/popper.min.js" strategy='lazyOnload' />
                    <Script src="assets/js/jquery.easing.min.js" strategy='lazyOnload' />
                    <Script src="assets/js/bootstrap.min.js" strategy='lazyOnload' />
                    <Script src="assets/js/aos.js" strategy='lazyOnload' />
                    <Script src="assets/js/owl.carousel.min.js" strategy='beforeInteractive' />
                    <Script src="assets/js/swiper.min.js" strategy='beforeInteractive' />
                    <Script src="assets/js/jquery.fancybox.min.js" strategy='lazyOnload' />
                    <Script src="assets/js/jquery.waypoints.min.js" strategy='lazyOnload' />
                    <Script src="assets/js/jquery.counterup.min.js" strategy='lazyOnload' />
                    <Script src="assets/js/jquery.matchHeight-min.js" strategy='lazyOnload' />
                    <Script src="assets/js/bootnavbar.js" strategy='lazyOnload' />
                    <Script src="assets/js/main.js" strategy='lazyOnload' />
                </body>
            </html>
        </>
    )
}

export default RootLayout
