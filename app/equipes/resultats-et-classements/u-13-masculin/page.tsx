import Wrapper from "@/components/Wrapper";
import PageTitle from "@/components/Headings/PageTitle";
import SectionTitle from "@/components/Headings/SectionTitle";
import CalendarTable from "@/components/Table/CalendarTable";
import RankingTable from "@/components/Table/RankingTable";

export default function Page() {
    return (
        <>
            <PageTitle>U-13 Masculin</PageTitle>
            <Wrapper>
                <p>
                    Pour cette saison 2025/2026, notre équipe U-13 Masculin
                    évolue en championnat Départemental (Poule D) du Calvados.
                </p>
                <section className="mt-6">
                    <SectionTitle>Calendrier</SectionTitle>
                    <CalendarTable team="u-13-masculin" />
                </section>
                <section>
                    <SectionTitle>Classements</SectionTitle>
                    <RankingTable team="u-13-masculin" />
                </section>
            </Wrapper>
        </>
    );
}