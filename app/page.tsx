import LandingSection from "@/components/Landing/LandingSection";
import SponsorSection from "@/components/HomePage/SponsorSection";
import ValorSection from "@/components/HomePage/ValorSection";
import WhereAndHow from "@/components/HomePage/WhereAndHow";
import Wrapper from "@/components/Wrapper";

export default function Home() {
    return (
        <>
            <LandingSection />
            <Wrapper>
                <ValorSection />
                <SponsorSection />
                <WhereAndHow />
            </Wrapper>
        </>
    );
}

