"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function NavDesktop() {
    return (
        <nav className="w-full flex items-center justify-end">
            <Link href="/" className="text-sm px-3 py-2 font-medium uppercase">
                Accueil
            </Link>

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="font-medium uppercase">
                        Équipes
                        <ChevronDown className="ml-1" />
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
                    <Button variant="ghost" className="font-medium uppercase">
                        Club
                        <ChevronDown className="ml-1" />
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
                    <Button variant="ghost" className="font-medium uppercase">
                        Contactez-nous
                        <ChevronDown className="ml-1" />
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
    );
}

