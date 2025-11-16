import Image from "next/image";
import Wrapper from "@/components/Wrapper";
import PageTitle from "@/components/Headings/PageTitle";
import SectionTitle from "@/components/Headings/SectionTitle";

export default function page() {
    return (
        <>
            <PageTitle>À propos de notre club. </PageTitle>
            <Wrapper>
                <p className="italic text-lg">
                    Découvrez notre club, si vous avez la moindre question,
                    n&apos;hésitez pas à nous contacter.
                </p>
            </Wrapper>
            <Wrapper>
                <SectionTitle>
                    <span className="font-bold">Notre objectif</span>, le
                    plaisir de jouer au basket.
                </SectionTitle>
                <div className="mt-10 flex flex-col md:flex-row gap-8 items-center md:items-start">
                    <Image
                        src="/images/1v1_basket.jpg"
                        alt="1 contre 1 au basket"
                        width={600}
                        height={400}
                    />
                    <div>
                        <p className="font-semibold italic mb-4">
                            Mettre en avant le basket amateur avec nos
                            différentes catégories.
                        </p>
                        <p>
                            Notre club a vu le jour pour la saison 2024/2025
                            avec une équipe sénior et deux équipes jeunes (U-9
                            et U-11).
                        </p>
                        <p>
                            Pour la saison 2025/2026, nous avons deux équipes
                            séniors engagées en championnat. Ainsi qu&apos;une
                            troisième équipe jeune (U-13).
                        </p>
                        <p>
                            Nous comptons développer le basket amateur avec
                            plusieurs catégories.
                            <br /> Le club est encore jeune et récent, nous
                            comptons sur chacun de vous et votre soutien pour
                            grandir ensemble. Vous pouvez nous aider en parlant
                            du club et en partageant notre site web autours
                            auprès de vos proches.
                        </p>
                    </div>
                </div>
            </Wrapper>
        </>
    );
}

