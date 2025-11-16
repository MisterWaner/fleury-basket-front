import { Card, CardContent } from "@/components/ui/card";
import {
    Accordion,
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
        <Card className="bg-slate-50 border-none shadow-md w-1/3">
            <CardContent>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value={itemValue}>
                        <AccordionTrigger>{question}</AccordionTrigger>
                        <AccordionContent className="text-sm">
                            {answer}
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </CardContent>
        </Card>
    );
}

