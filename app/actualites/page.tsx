import PageTitle from "@/components/Headings/PageTitle";
import Wrapper from "@/components/Wrapper";
import ActuCard from "@/components/ActuCard/ActuCard";
import { articles } from "@/lib/fakedata";

export default function page() {
    return (
        <>
            <PageTitle>Actualités</PageTitle>
            <Wrapper>
                <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 w-full place-items-center lg:place-items-start mt-8">
                    {articles.map((article) => (
                        <li key={article.id}>
                            <ActuCard
                                title={article.title}
                                date={article.date}
                                imageUrl={article.imageUrl}
                                summary={article.summary}
                                link={article.link}
                            />
                        </li>
                    ))}
                </ul>
            </Wrapper>
        </>
    );
}
