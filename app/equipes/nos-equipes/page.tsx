import PageTitle from "@/components/Headings/PageTitle";
import Wrapper from "@/components/Wrapper";

export default function page() {
    return (
        <>
            <PageTitle>Nos équipes.</PageTitle>
            <Wrapper>
                <p>
                    Pour cette saison 2025/2026, notre club compte cinq équipes
                    engagées en championnat.
                </p>
                <ul>
                    <li>SM-1</li>
                    <li>SM-2</li>
                    <li>U-13 M</li>
                    <li>U-11</li>
                    <li>U-9</li>
                </ul>
            </Wrapper>
        </>
    );
}

