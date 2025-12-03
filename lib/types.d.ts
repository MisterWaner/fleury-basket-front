export interface ParsedGame {
    date: string;
    opponent: string;
    location: "Domicile" | "Extérieur";
    us: number | null;
    them: number | null;
    result: "Victoire" | "Défaite" | "Nul" | "À venir";
}