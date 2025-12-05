import type { ParsedRankingTableRow } from "@/lib/types";

export async function fetchRanking(
    team: string
): Promise<ParsedRankingTableRow[]> {
    try {
        const response = await fetch(
            `http://localhost:3001/api/ffbb/${team}/classement`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        if (!response.ok) {
            throw new Error("Failed to fetch ranking data");
        }

        const ranking: ParsedRankingTableRow[] = await response.json();

        return ranking;
    } catch (error) {
        console.error("Error fetching ranking data:", error);
        return [];
    }
}
