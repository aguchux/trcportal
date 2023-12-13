import HomeLatestInformation from "@/components/HomeLatestInformation";
import HomePopupVideo from "@/components/HomePopupVideo";
import HomeTestimonials from "@/components/HomeTestimonials";
import HomeWelcome from "@/components/HomeWelcome";
import RootLayout from "@/components/layouts/RootLayout";
import Slider from "@/components/Slider";
import ThreeServices from "@/components/ThreeServices";

const Index = () => {
    return (
        <RootLayout>
            <Slider />
            <ThreeServices />
            <HomeWelcome />
            <HomeLatestInformation />
            <HomePopupVideo />
            <HomeTestimonials />
        </RootLayout>
    );
}

export default Index