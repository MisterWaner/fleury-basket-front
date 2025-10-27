import LandingSection from "@/components/Landing/LandingSection";
import ValorSection from "@/components/ValorSection";
import Wrapper from "@/components/Wrapper";

export default function Home() {
    return (
        <main>
            <LandingSection />
            <Wrapper>
                <ValorSection />
            </Wrapper>
        </main>
    );
}
