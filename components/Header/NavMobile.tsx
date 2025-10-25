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
import { ChevronRight } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { X, Menu } from "lucide-react";

export function NavMobile() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" onClick={toggleMenu}>
                    {isOpen ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <Menu className="h-6 w-6" />
                    )}
                </Button>
            </SheetTrigger>
            <SheetContent side="top" className="bg-slate-950 text-slate-50">
                <SheetHeader>
                    <SheetTitle className="sr-only">Menu</SheetTitle>
                </SheetHeader>
                <nav className="w-full mt-6 flex flex-col gap-4">
                    <Link
                        href="/"
                        className="text-sm px-3 py-2 font-medium uppercase"
                        onClick={toggleMenu}
                    >
                        Accueil
                    </Link>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                className="w-full justify-start font-medium uppercase"
                            >
                                Équipes
                                <ChevronRight className="ml-1" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start">
                            <DropdownMenuItem asChild>
                                <Link href="/">Nos équipes</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/">Résultats & Classements</Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                className="w-full justify-start font-medium uppercase"
                            >
                                Club
                                <ChevronRight className="ml-1" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start">
                            <DropdownMenuItem asChild>
                                <Link href="/">À propos</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/">Organigramme</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/">Partenaires</Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                className="w-full justify-start font-medium uppercase"
                            >
                                Contactez-nous
                                <ChevronRight className="ml-1" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start">
                            <DropdownMenuItem asChild>
                                <Link href="/">Inscription</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/">FAQ</Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </nav>
            </SheetContent>
        </Sheet>
    );
}

