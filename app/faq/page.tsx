import PageTitle from "@/components/Headings/PageTitle";
import Wrapper from "@/components/Wrapper";
import FaqCard from "@/components/FaqCard/FaqCard";
import { Accordion } from "@/components/ui/accordion";

export default function page() {
    return (
        <>
            <PageTitle>FAQ Basket Club de Fleury Basket</PageTitle>
            <Wrapper>
                <Accordion
                    type="single"
                    collapsible
                    className="w-full space-y-4"
                >
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
                        question="Quelle est la durée d'un match de basket-ball ?"
                        answer="La durée d’un match de basketball professionnel est de quatre quart-temps de 10 minutes chacun, soit une durée totale de 40 minutes. Cependant, pour les niveaux amateur ou jeunes joueurs, la durée peut varier. En cas d’égalité le match doit se prolonger de 5min jusqu’à ce qu’il y est un gagnant."
                    />
                    <FaqCard
                        itemValue="question-4"
                        question="Quelle est la hauteur d'un panier de basket-ball ?"
                        answer="La hauteur réglementaire du panir est de 3,05m depuis le sol jusqu'au bord supérieur de l'anneau."
                    />
                    <FaqCard
                        itemValue="question-5"
                        question="Quelles sont les différentes positions sur le terrain de basket-ball ?"
                        answer="Les différentes positions sur le terrain de basketball sont les arrières (guards), les ailiers (forwards) et les pivots (centers). Chaque position a des responsabilités spécifiques et des rôles distincts dans le jeu d’équipe."
                    />
                    <FaqCard
                        itemValue="question-6"
                        question="Quelles sont les principales compétions internationales de basket-ball ?"
                        answer="Les principales compétitions internationales de basketball incluent la Coupe du Monde de la FIBA, les Jeux Olympiques, l’EuroBasket (championnat d’Europe) et la NBA (National Basketball Association) aux États-Unis."
                    />
                    <FaqCard
                        itemValue="question-7"
                        question="Quelles sont les règles pour effectuer un dribble au basket ?"
                        answer="Lors d’un dribble, le joueur doit faire rebondir le ballon sur le sol de manière continue. Il ne doit pas toucher le ballon avec les deux mains simultanément ni effectuer plus de deux dribbles consécutifs sans le toucher à nouveau avec une autre partie du corps."
                    />
                </Accordion>
            </Wrapper>
        </>
    );
}

