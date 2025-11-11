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
                <Card className="bg-transparent flex aspect-square justify-center items-center">
                    <CardContent>
                        <Image src={src} alt={alt} width={100} height={100} />
                    </CardContent>
                </Card>
            </div>
            
        </CarouselItem>
    );
}

