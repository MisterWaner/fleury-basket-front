import PageTitle from "@/components/Headings/PageTitle";
import Wrapper from "@/components/Wrapper";
import FaqCard from "@/components/FaqCard/FaqCard";

export default function page() {
    return (
        <>
            <PageTitle>FAQ Basket Club de Fleury Basket</PageTitle>
            <Wrapper>
                <div className="flex gap-4">
                    <FaqCard
                        itemValue="question-1"
                        question="Quelles sont les dimensions officielles d'un terrain de basket-ball ?"
                        answer="Les dimensions officielles d’un terrain de basketball sont de 28 mètres de long sur 15 mètres de large. Cependant, les dimensions peuvent varier pour les terrains de basket amateur ou pour les jeunes joueurs."
                    />
                    <FaqCard
                        itemValue="question-2"
                        question="Combien de joueurs composent une équipe de basket-ball ?"
                        answer="Une équipe de basketball est généralement composée de cinq joueurs sur le terrain : deux arrières (guards), deux ailiers (forwards) et un pivot (center)."
                    />
                    <FaqCard
                        itemValue="question-3"
                        question="Quelles sont les principales fautes en basket-ball ?"
                        answer="Les principales fautes en basket-ball incluent les fautes personnelles (contact physique illégal), les fautes techniques (comportement antisportif), et les violations (comme marcher ou double dribble)."
                    />
                </div>
                <p>Contenu à venir...</p>
            </Wrapper>
        </>
    );
}

