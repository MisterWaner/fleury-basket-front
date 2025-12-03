import type { ParsedGame } from "@/lib/types";

export async function fetchCalendar(team: string): Promise<ParsedGame[]> {
    try {
        const response = await fetch(
            `http://localhost:3001/api/ffbb/${team}/rencontres`,
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

