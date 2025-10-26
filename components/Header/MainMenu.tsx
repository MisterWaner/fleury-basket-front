"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetTrigger,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { X, Menu } from "lucide-react";

export function MainMenu() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon-lg" onClick={toggleMenu}>
                    {isOpen ? (
                        <X className="h-10 w-10" />
                    ) : (
                        <Menu className="h-10 w-10" />
                    )}
                </Button>
            </SheetTrigger>
            <SheetContent
                side="left"
                className="bg-slate-950 text-slate-50 font-montserrat"
            >
                <SheetHeader>
                    <SheetTitle className="sr-only">Menu</SheetTitle>
                </SheetHeader>
                <nav className="w-full mt-6 flex flex-col gap-4">
                    <Link
                        href="/"
                        className="text-sm px-6 py-2 font-semibold uppercase"
                        onClick={toggleMenu}
                    >
                        Accueil
                    </Link>

                    <Accordion
                        type="single"
                        collapsible
                        className="w-2/3 text-sm px-3 py-2 font-medium "
                    >
                        <AccordionItem value="equipes">
                            <AccordionTrigger className="text-sm px-3 py-2 font-semibold uppercase">
                                Équipes
                            </AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-2">
                                <Link
                                    href="/"
                                    className="text-sm px-6 py-2 font-medium"
                                    onClick={toggleMenu}
                                >
                                    Nos équipes
                                </Link>
                                <Link
                                    href="/"
                                    className="text-sm px-6 py-2 font-medium"
                                    onClick={toggleMenu}
                                >
                                    Résultats & Classements
                                </Link>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    <Accordion
                        type="single"
                        collapsible
                        className="w-2/3 text-sm px-3 py-2 font-medium "
                    >
                        <AccordionItem value="club">
                            <AccordionTrigger className="text-sm px-3 py-2 font-semibold uppercase">
                                Club
                            </AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-2">
                                <Link
                                    href="/"
                                    onClick={toggleMenu}
                                    className="text-sm px-6 py-2 font-medium"
                                >
                                    À propos
                                </Link>
                                <Link
                                    href="/"
                                    onClick={toggleMenu}
                                    className="text-sm px-6 py-2 font-medium"
                                >
                                    Organigramme
                                </Link>
                                <Link
                                    href="/"
                                    onClick={toggleMenu}
                                    className="text-sm px-6 py-2 font-medium"
                                >
                                    Partenaires
                                </Link>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    <Accordion
                        type="single"
                        collapsible
                        className="w-2/3 text-sm px-3 py-2 font-medium "
                    >
                        <AccordionItem value="contact">
                            <AccordionTrigger className="text-sm px-3 py-2 font-semibold uppercase">
                                Contactez-nous
                            </AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-2">
                                <Link
                                    href="/"
                                    onClick={toggleMenu}
                                    className="text-sm px-6 py-2 font-medium"
                                >
                                    Inscription
                                </Link>
                                <Link
                                    href="/"
                                    onClick={toggleMenu}
                                    className="text-sm px-6 py-2 font-medium"
                                >
                                    FAQ
                                </Link>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </nav>
            </SheetContent>
        </Sheet>
    );
}

