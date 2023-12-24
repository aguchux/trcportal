import React from 'react'
import RootLayout from '@/components/layouts/RootLayout'
import Slider from '@/components/Slider'
import ThreeServices from '@/components/ThreeServices'
import HomeWelcome from '@/components/HomeWelcome'
import HomeLatestInformation from '@/components/HomeLatestInformation'
import HomePopupVideo from '@/components/HomePopupVideo'
import HomeTestimonials from '@/components/HomeTestimonials'

const HomePage = () => {
    return (
        <RootLayout>
            <Slider />
            <ThreeServices />
            <HomeWelcome />
            <HomeLatestInformation />
            <HomePopupVideo />
            <HomeTestimonials />
        </RootLayout>
    )
}

export default HomePage