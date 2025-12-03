import { Card, CardContent } from "@/components/ui/card";
import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqCardProps {
    question: string;
    answer: string;
    itemValue: string;
}

export default function FaqCard({ question, answer, itemValue }: FaqCardProps) {
    return (
        <Card className="w-full">
            <CardContent>
                <AccordionItem value={itemValue}>
                    <AccordionTrigger>{question}</AccordionTrigger>
                    <AccordionContent className="text-sm">
                        {answer}
                    </AccordionContent>
                </AccordionItem>
            </CardContent>
        </Card>
    );
}

