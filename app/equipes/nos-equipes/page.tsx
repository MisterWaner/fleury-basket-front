import PageTitle from "@/components/Headings/PageTitle";
import Wrapper from "@/components/Wrapper";
import TeamCard from "@/components/TeamCard/TeamCard";

export default function page() {
    return (
        <>
            <PageTitle>Nos équipes.</PageTitle>
            <Wrapper>
                <p>
                    Pour cette saison 2025/2026, notre club compte cinq équipes
                    engagées en championnat.
                </p>
                <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 w-full place-items-center lg:place-items-start mt-8">
                    <li>
                        <TeamCard teamName="SM-1" />
                    </li>
                    <li>
                        <TeamCard teamName="SM-2" />
                    </li>
                    <li>
                        <TeamCard teamName="U-13 M" />
                    </li>
                    <li>
                        <TeamCard teamName="U-11 Mixte" />
                    </li>
                    <li>
                        <TeamCard teamName="U-9 Mixte" />
                    </li>
                </ul>
            </Wrapper>
        </>
    );
}

