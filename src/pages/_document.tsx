import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
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
    </Html>
  )
}
