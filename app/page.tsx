import LandingSection from "@/components/Landing/LandingSection";
import SponsorSection from "@/components/SponsorSection";
import ValorSection from "@/components/ValorSection";
import Wrapper from "@/components/Wrapper";

export default function Home() {
    return (
        <main>
            <LandingSection />
            <Wrapper>
                <ValorSection />
                <SponsorSection />
            </Wrapper>
        </main>
    );
}
