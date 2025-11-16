import { GiBasketballBasket, GiBasketballJersey } from "react-icons/gi";
import { PiStrategy } from "react-icons/pi";
import SectionTitle from "@/components/Headings/SectionTitle";
import IconWrapper from "@/components/IconWrapper";

export default function ValorSection() {
    return (
        <div className="w-full mt-10">
            <SectionTitle>
                Nos <span className="uppercase font-extrabold">Principes</span>
            </SectionTitle>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
                <article className="p-6">
                    <div className="flex justify-center mb-4">
                        <IconWrapper>
                            <GiBasketballBasket size={56} />
                        </IconWrapper>
                    </div>
                    <h3 className="text-2xl font-bold text-center">
                        Découverte
                    </h3>
                    <p className="mt-4 text-sm text-center">
                        Venez découvrir le basket, que ce soit en compétition ou
                        en loisir, vous pouvez tester jusqu&apos;à 3 Séances
                        offertes jusqu&apos;au 31 Octobre de l&apos;année en
                        cours.
                    </p>
                </article>
                <article className="p-6">
                    <div className="flex justify-center mb-4">
                        <IconWrapper>
                            <PiStrategy size={56} />
                        </IconWrapper>
                    </div>
                    <h3 className="text-2xl font-bold text-center">Valeurs</h3>
                    <div className="mt-4 text-sm text-center">
                        Les valeurs que véhiculent notre club sont :
                        <ul className="list-disc list-inside">
                            <li>Le respect de chacun</li>
                            <li>L&apos;engagement</li>
                            <li>Le partage</li>
                        </ul>
                    </div>
                </article>
                <article className="p-6">
                    <div className="flex justify-center mb-4">
                        <IconWrapper>
                            <GiBasketballJersey size={56} />
                        </IconWrapper>
                    </div>
                    <h3 className="text-2xl font-bold text-center">
                        Bénévolat
                    </h3>
                    <p className="mt-4 text-sm text-center">
                        Les principaux acteurs du club sont bénévoles actifs:
                        dirigeants, coachs, arbitres et OTMs.
                    </p>
                </article>
            </div>
        </div>
    );
}

