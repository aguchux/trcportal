import React from 'react'
import RootLayout from '@/components/layouts/RootLayout'
import Slider from '@/components/Slider'
type Props = {
    settings: any
}

const HomePage = ({ settings }: Props) => {
    return (
        <RootLayout>
            <Slider />
            {/* <ThreeServices />
            <HomeWelcome />
            <HomeLatestInformation />
            <HomePopupVideo />
            <HomeTestimonials /> */}
        </RootLayout>
    )
}

export default HomePage