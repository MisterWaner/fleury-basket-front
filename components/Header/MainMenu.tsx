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
                        className="text-sm px-6 py-2 font-semibold uppercase hover:underline hover:underline-offset-4"
                        onClick={toggleMenu}
                    >
                        Accueil
                    </Link>

                    <Link
                        href="/actualites"
                        className="text-sm px-6 py-2 font-semibold uppercase hover:underline hover:underline-offset-4"
                        onClick={toggleMenu}
                    >
                        Actualités
                    </Link>
                    
                    <Accordion
                        type="single"
                        collapsible
                        className="w-2/3 text-sm px-3 py-2 font-medium"
                    >
                        <AccordionItem value="equipes">
                            <AccordionTrigger className="menu-section-title">
                                Équipes
                            </AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-2">
                                <Link
                                    href="/equipes/nos-equipes"
                                    className="menu-link"
                                    onClick={toggleMenu}
                                >
                                    Nos équipes
                                </Link>
                                <Link
                                    href="/equipes/resultats-et-classements"
                                    className="menu-link"
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
                            <AccordionTrigger className="menu-section-title">
                                Club
                            </AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-2">
                                <Link
                                    href="/club/a-propos"
                                    onClick={toggleMenu}
                                    className="menu-link"
                                >
                                    À propos
                                </Link>
                                <Link
                                    href="/club/organigramme"
                                    onClick={toggleMenu}
                                    className="menu-link"
                                >
                                    Organigramme
                                </Link>
                                <Link
                                    href="/club/partenaires"
                                    onClick={toggleMenu}
                                    className="menu-link"
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
                            <AccordionTrigger className="menu-section-title">
                                Contactez-nous
                            </AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-2">
                                <Link
                                    href="/contact"
                                    onClick={toggleMenu}
                                    className="menu-link"
                                >
                                    Contact
                                </Link>
                                <Link
                                    href="/inscription"
                                    onClick={toggleMenu}
                                    className="menu-link"
                                >
                                    Inscription
                                </Link>
                                <Link
                                    href="/faq"
                                    onClick={toggleMenu}
                                    className="menu-link"
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

