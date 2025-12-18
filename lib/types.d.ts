export interface ParsedGame {
    datetime: string;
    opponent: string;
    location: "Domicile" | "Extérieur";
    us: number | null;
    them: number | null;
    result: "Victoire" | "Défaite" | "Nul" | "À venir";
}

export interface ParsedRankingTableRow {
    position: number;
    club: string;
    rankingPoints: number;
    gamesData: {
        played: number;
        won: number;
        lost: number;
        nulls: number;
    };

    points: {
        for: number;
        against: number;
        difference: number;
    };
}

export interface Article {
    id: number;
    title: string;
    date: string;
    imageUrl: string;
    summary: string;
    link: string;
    content: string;
    images?: string[];
}
