import HomeLatestInformation from "@/components/HomeLatestInformation";
import HomePopupVideo from "@/components/HomePopupVideo";
import HomeTestimonials from "@/app/components/HomeTestimonials";
import HomeWelcome from "@/components/HomeWelcome";
import Slider from "@/components/Slider";
import ThreeServices from "@/components/ThreeServices";

const IndexPage = async () => {
    return (
        <>
            <Slider />
            <ThreeServices />
            <HomeWelcome />
            <HomeLatestInformation />
            <HomePopupVideo />
            <HomeTestimonials />
        </>
    );
}

export default IndexPage