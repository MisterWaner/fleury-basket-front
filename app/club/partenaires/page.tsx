import PageTitle from "@/components/Headings/PageTitle";
import Wrapper from "@/components/Wrapper";
export default function page() {
    return (
        <main>
            <PageTitle>Nos Partenaires</PageTitle>
            <Wrapper>
                <p>
                    Pour pouvoir{" "}
                    <span className="font-semibold">se développer</span>,{" "}
                    <span className="font-semibold">évoluer</span> et{" "}
                    <span className="font-semibold">grandir</span> dans les
                    meilleures conditions, notre club s&apos;appuie sur le
                    <span className="font-semibold"> soutien précieux</span> de
                    ses <span className="font-semibold">partenaires</span>.{" "}
                </p>
                <p></p>
            </Wrapper>
        </main>
    );
}

