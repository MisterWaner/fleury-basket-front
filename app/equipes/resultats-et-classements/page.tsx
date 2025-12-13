import Link from "next/link";
import { Button } from "@/components/ui/button";
import PageTitle from "@/components/Headings/PageTitle";
import Wrapper from "@/components/Wrapper";

export default function page() {
    return (
        <>
            <PageTitle>Résultats & Classements.</PageTitle>
            <Wrapper>
                <div className="flex flex-col items-center md:flex-row md:flex-wrap gap-4">
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
                    <Button asChild className="w-1/2 md:w-1/4">
                        <Link
                            href="/equipes/resultats-et-classements/u-13-masculin"
                            as="/equipes/resultats-et-classements/u-13-masculin"
                            className="text-blue-600 uppercase"
                        >
                            U-13 Masculin
                        </Link>
                    </Button>
                    <Button asChild className="w-1/2 md:w-1/4">
                        <Link
                            href="/equipes/resultats-et-classements/u-11-mixte"
                            as="/equipes/resultats-et-classements/u-11-mixte"
                            className="text-blue-600 uppercase"
                        >
                            U-11 Mixte
                        </Link>
                    </Button>
                    <Button asChild className="w-1/2 md:w-1/4">
                        <Link
                            href="/equipes/resultats-et-classements/u-9-mixte"
                            as="/equipes/resultats-et-classements/u-9-mixte"
                            className="text-blue-600 uppercase"
                        >
                            U-9 Mixte
                        </Link>
                    </Button>
                </div>
            </Wrapper>
        </>
    );
}

