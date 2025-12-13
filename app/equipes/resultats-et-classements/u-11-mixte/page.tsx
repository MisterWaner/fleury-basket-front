import Wrapper from "@/components/Wrapper";
import PageTitle from "@/components/Headings/PageTitle";
import SectionTitle from "@/components/Headings/SectionTitle";
import CalendarTable from "@/components/Table/CalendarTable";
import RankingTable from "@/components/Table/RankingTable";

export default function Page() {
    return (
        <>
            <PageTitle>U-11 Mixte</PageTitle>
            <Wrapper>
                <p>
                    Pour cette saison 2025/2026, notre équipe U-11 Mixte
                    évolue en championnat Départemental (Poule B) du Calvados.
                </p>
                <section className="mt-6">
                    <SectionTitle>Calendrier</SectionTitle>
                    <CalendarTable team="u-11-mixte" />
                </section>
                <section>
                    <SectionTitle>Classements</SectionTitle>
                    <RankingTable team="u-11-mixte" />
                </section>
            </Wrapper>
        </>
    );
}