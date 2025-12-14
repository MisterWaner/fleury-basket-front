import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface TeamCardProps {
    teamName?: string;
}

export default function TeamCard({ teamName }: TeamCardProps) {
    return (
        <Card className="group relative w-64 overflow-hidden cursor-pointer border-none">
            <CardContent className="p-0">
                <div className="relative aspect-square w-full">
                    <Image
                        src="/images/undraw_basketball_40ga.svg"
                        alt="Basketball illustration"
                        width={200}
                        height={200}
                        className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
                <div className="absolute inset-0 bg-slate-950/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white text-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        {teamName}
                    </h3>
                </div>
            </CardContent>
        </Card>
    );
}

