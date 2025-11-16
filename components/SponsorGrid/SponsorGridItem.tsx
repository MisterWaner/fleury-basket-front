import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export interface SponsorGridItemProps {
    imageSrc: string;
    imageAlt: string;
    width?: number;
    height?: number;
}

export default function SponsorGridItem({ imageSrc, imageAlt, width, height }: SponsorGridItemProps) {
    return (
        <div className="p-1">
            <Card className="bg-transparent border-none shadow-none flex aspect-square justify-center items-center">
                <CardContent>
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        width={width ?? 200}
                        height={height ?? 200}
                    />
                </CardContent>
            </Card>
        </div>
    );
}

