import Image from "next/image";
import { CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export default function SponsorCarouselImage({
    src,
    alt,
}: {
    src: string;
    alt: string;
}) {
    return (
        <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
                <Card className="bg-transparent border-none shadow-none flex aspect-square justify-center items-center">
                    <CardContent>
                        <Image src={src} alt={alt} width={200} height={200} />
                    </CardContent>
                </Card>
            </div>
        </CarouselItem>
    );
}

