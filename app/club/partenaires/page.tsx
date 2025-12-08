import PageTitle from "@/components/Headings/PageTitle";
import SectionTitle from "@/components/Headings/SectionTitle";
import Wrapper from "@/components/Wrapper";
import SponsorGrid from "@/components/SponsorGrid/SponsorGrid";
import SponsorGridItem from "@/components/SponsorGrid/SponsorGridItem";

export default function page() {
    return (
        <>
            <PageTitle>Nos Partenaires.</PageTitle>
            <Wrapper>
                <p>
                    Pour pouvoir{" "}
                    <span className="font-semibold">se développer</span>,{" "}
                    <span className="font-semibold">évoluer</span> et{" "}
                    <span className="font-semibold">grandir</span> dans les
                    meilleures conditions, notre club s&apos;appuie sur le
                    <span className="font-semibold"> soutien précieux</span> de
                    ses <span className="font-semibold">partenaires</span>.{" "}
                </p>
                <p>
                    Si vous désirez prendre part à cette aventure,
                    n&apos;hésitez pas à nous contacter.
                </p>
            </Wrapper>
            <Wrapper>
                <SectionTitle>
                    Nos <span className="font-semibold">principaux</span>{" "}
                    partenaires
                </SectionTitle>
                <SponsorGrid>
                    <SponsorGridItem
                        imageSrc="/images/sponsor-voltec.webp"
                        imageAlt="Voltec"
                        href="https://www.facebook.com/voltecelectricite/"
                    />
                    <SponsorGridItem
                        imageSrc="/images/logo-fleury.jpg"
                        imageAlt="Logo de Fleury sur Orne"
                        href="https://fleurysurorne.fr/"
                    />
                    <SponsorGridItem
                        imageSrc="/images/rexellogo.jpeg"
                        imageAlt="Rexel"
                        href="https://www.rexel.fr/frx/"
                    />
                </SponsorGrid>
            </Wrapper>
            <Wrapper>
                <SectionTitle>
                    Nos partenaires{" "}
                    <span className="font-semibold">locaux</span>
                </SectionTitle>
                <SponsorGrid>
                    <SponsorGridItem
                        imageSrc="/images/logo-lpa.png"
                        imageAlt="Logo de la petite agence immobilier"
                        href="https://www.lapetiteagencecaen.com/"
                    />
                    <SponsorGridItem
                        imageSrc="/images/aquila-rh.png"
                        imageAlt="Logo d'Aquila RH"
                        href="https://www.aquila-rh.com/agence-interim-recrutement/agence-interim-recrutement-emploi-aquila-rh-caen.html"
                    />
                </SponsorGrid>
            </Wrapper>
            <Wrapper>
                <SectionTitle>
                    Nos partenaires{" "}
                    <span className="font-semibold">nationaux</span>
                </SectionTitle>
                <SponsorGrid>
                    <SponsorGridItem
                        imageSrc="/images/alius-odorem.png"
                        imageAlt="Logo d'Alius Odorem"
                        href="https://www.aliusodorem.com/"
                    />
                    <SponsorGridItem
                        imageSrc="/images/digimarketi.png"
                        imageAlt="Logo de Digimarketi"
                        href="https://digimarketi.net/"
                    />
                </SponsorGrid>
            </Wrapper>
        </>
    );
}

