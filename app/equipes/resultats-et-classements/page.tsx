import Link from "next/link";
import { Button } from "@/components/ui/button";
import PageTitle from "@/components/Headings/PageTitle";
import Wrapper from "@/components/Wrapper";

export default function page() {
    return (
        <>
            <PageTitle>Résultats & Classements.</PageTitle>
            <Wrapper>
                <div className="flex flex-col items-center md:flex-row gap-4">
                    <Button asChild className="w-1/2 md:w-1/4">
                        <Link
                            href="/equipes/resultats-et-classements/senior-masculin-1"
                            as="/equipes/resultats-et-classements/senior-masculin-1"
                            className="text-blue-600 uppercase"
                        >
                            Sénior Masculin 1
                        </Link>
                    </Button>
                    <Button asChild className="w-1/2 md:w-1/4">
                        <Link
                            href="/equipes/resultats-et-classements/senior-masculin-2"
                            as="/equipes/resultats-et-classements/senior-masculin-2"
                            className="text-blue-600 uppercase"
                        >
                            Sénior Masculin 2
                        </Link>
                    </Button>
                </div>
            </Wrapper>
        </>
    );
}

