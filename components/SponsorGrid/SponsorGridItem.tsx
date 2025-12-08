import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export interface SponsorGridItemProps {
    href?: string;
    imageSrc: string;
    imageAlt: string;
    width?: number;
    height?: number;
}

export default function SponsorGridItem({
    imageSrc,
    imageAlt,
    width,
    height,
    href = "#",
}: SponsorGridItemProps) {
    return (
        <div className="p-1">
            <Card className="bg-transparent border-none shadow-none flex aspect-square justify-center items-center">
                <CardContent>
                    <Link href={href} target="_blank" rel="noopener noreferrer">
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            width={width ?? 200}
                            height={height ?? 200}
                        />
                    </Link>
                </CardContent>
            </Card>
        </div>
    );
}

