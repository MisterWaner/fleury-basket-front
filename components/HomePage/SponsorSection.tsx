import SectionTitle from "@/components/Headings/SectionTitle";
import SponsorCarousel from "@/components/SponsorCarousel/SponsorCarousel";

export default function SponsorSection() {
    return (
        <div className="w-full mt-10">
            <SectionTitle>
                Nos{" "}
                <span className="uppercase font-extrabold">Partenaires</span>
            </SectionTitle>
            <SponsorCarousel />
        </div>
    );
}



