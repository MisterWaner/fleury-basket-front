import Wrapper from "@/components/Wrapper";
import PageTitle from "@/components/Headings/PageTitle";
import SectionTitle from "@/components/Headings/SectionTitle";
import CalendarTable from "@/components/Calendar/CalendarTable";

export default function Page() {
    return (
        <>
            <PageTitle>Sénior Masculin 1</PageTitle>
            <Wrapper>
                <p>
                    Pour cette saison 2025/2026, notre équipe Sénior Masculin 1
                    évolue en championnat Départemental 3 (Poule A) du Calvados.
                </p>
                <section className="mt-6">
                    <SectionTitle>Calendrier</SectionTitle>
                    <CalendarTable team="senior-1" />
                </section>
                <section>
                    <SectionTitle>Classements</SectionTitle>
                </section>
            </Wrapper>
        </>
    );
}

