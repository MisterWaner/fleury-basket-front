import Image from "next/image";
import PageTitle from "@/components/Headings/PageTitle";
import Wrapper from "@/components/Wrapper";

export default function page() {
    return (
        <>
            <PageTitle>Organigramme du club.</PageTitle>
            <Wrapper>
                <Image
                    src="/images/organigramme.png"
                    alt="Organigramme du Club"
                    width={800}
                    height={600}
                    className="md:mx-auto border border-slate-950"
                />
            </Wrapper>
        </>
    );
}

