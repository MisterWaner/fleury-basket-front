"use client";

import {
    Carousel,
    CarouselContent,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import SponsorCarouselImage from "./SponsorCarouselImage";
import Autoplay from "embla-carousel-autoplay";

const sponsors = [
    {
        src: "/images/sponsor-voltec.webp",
        alt: "Logo de Voltec",
    },
    {
        src: "/images/rexellogo.jpeg",
        alt: "Logo de Rexel",
    },
    {
        src: "/images/ffbb-basket.jpeg",
        alt: "Logo de la Fédération Française de BasketBall",
    },
    {
        src: "/images/comite-basket-1.png",
        alt: "Logo du Comité Départemental de BasketBall du Calvados",
    },
    {
        src: "/images/logo-lpa.png",
        alt: "Logo de la petite agence immobilier",
    },
    {
        src: "/images/aquila-rh.png",
        alt: "Logo d'Aquila RH",
    },
    {
        src: "/images/alius-odorem.png",
        alt: "Logo d'Alius Odorem",
    },
];

export default function SponsorCarousel() {
    return (
        <Carousel
            className="w-full lg:max-w-xl max-w-sm mx-auto"
            opts={{
                align: "start",
                loop: true,
            }}
            plugins={[
                Autoplay({
                    delay: 2000,
                }),
            ]}
        >
            <CarouselContent className="flex items-center">
                {sponsors.map((sponsor, index) => (
                    <SponsorCarouselImage
                        key={index}
                        src={sponsor.src}
                        alt={sponsor.alt}
                    />
                ))}
            </CarouselContent>
            {/* <CarouselPrevious className=""/>
            <CarouselNext /> */}
        </Carousel>
    );
}

