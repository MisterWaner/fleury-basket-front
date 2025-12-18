import Image from "next/image";
import Link from "next/link";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Article } from "@/lib/types";

interface ActuCardProps extends Partial<Article> {
    title: string;
    date?: string;
    imageUrl: string;
    summary?: string;
    link?: string;
}

export default function ActuCard({
    title,
    date,
    imageUrl,
    summary,
    link,
}:  ActuCardProps) {
    return (
        <Card className="w-80 hover:shadow-lg transition-shadow">
            <CardHeader className="p-4">
                <CardTitle>{title}</CardTitle>
                <div className="relative aspect-video w-full">
                    <Image
                        src={imageUrl}
                        alt={title}
                        className="object-center w-full h-full"
                        width={320}
                        height={180}
                    />
                </div>
            </CardHeader>
            <CardContent>
                {date && (
                    <p className="text-sm text-gray-500 mb-2">
                        {new Date(date).toLocaleDateString()}
                    </p>
                )}
                {summary && <p className="text-gray-700">{summary}</p>}
            </CardContent>
            {link && (
                <CardFooter>
                    <Button asChild>
                        <Link href={link} className="w-full">
                            Lire la suite
                        </Link>
                    </Button>
                </CardFooter>
            )}
        </Card>
    );
}

