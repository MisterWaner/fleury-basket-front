import type { ParsedGame } from "@/lib/types";

export async function fetchCalendar(team: string, phase?: string): Promise<ParsedGame[]> {
    try {
        let url: string;

        if (phase) {
            url = `http://localhost:3001/api/ffbb/${team}/rencontres/${phase}`;
        } else {
            url = `http://localhost:3001/api/ffbb/${team}/rencontres`;
        }
        const response = await fetch(
            url,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        if (!response.ok) {
            throw new Error("Failed to fetch calendar data");
        }

        const games: ParsedGame[] = await response.json();
        
        return games;
    } catch (error) {
        console.error("Error fetching calendar data:", error);
        return [];
    }
}

