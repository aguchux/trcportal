import React from 'react'
import RootLayout from '@/components/layouts/RootLayout'
import dynamic from 'next/dynamic'

const ThreeServices = dynamic(() => import('@/components/ThreeServices'), { ssr: false });
const Slider = dynamic(() => import('@/components/Slider'), { ssr: false });
// import Slider from '@/components/Slider'
// import ThreeServices from '@/components/ThreeServices'
import HomeWelcome from '@/components/HomeWelcome'
import HomeLatestInformation from '@/components/HomeLatestInformation'
import HomePopupVideo from '@/components/HomePopupVideo'
import HomeTestimonials from '@/components/HomeTestimonials'
import Head from 'next/head'
import { siteInfo } from '@/utils'

type Props = {
    settings: any;
}
const HomePage = ({ settings }: Props) => {
    return (
        <RootLayout>
            <Head>
                <title>{`Home | ${siteInfo(settings, "siteTitle")}`}</title>
                <meta name="description" content={siteInfo(settings, "siteDescription")}></meta>
            </Head>
            <Slider settings={settings} />
            <ThreeServices settings={settings} />
            <HomeWelcome />
            <HomeLatestInformation />
            <HomePopupVideo settings={settings} />
            <HomeTestimonials />
        </RootLayout>
    )
}

export default HomePage