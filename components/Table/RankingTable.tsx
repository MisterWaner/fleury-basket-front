"use client";

import { useQuery } from "@tanstack/react-query";
import {
    Table,
    TableBody,
    TableHeader,
    TableHead,
    TableRow,
    TableCell,
} from "@/components/ui/table";
import { fetchRanking } from "@/services/fetchRanking";

export default function RankingTable({ team }: { team: string }) {
    const { data, error, isLoading } = useQuery({
        queryKey: ["ranking", team],
        queryFn: () => fetchRanking(team),
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading calendar data.</div>;
    }

    return (
        <Table className="border border-slate-950 rounded-3xl mb-10">
            <TableHeader>
                <TableRow className="bg-slate-200 border-b border-slate-950">
                    <TableHead>Position</TableHead>
                    <TableHead>Équipe</TableHead>
                    <TableHead>Points</TableHead>
                    <TableHead>Joués</TableHead>
                    <TableHead>Victoires</TableHead>
                    <TableHead>Défaites</TableHead>
                    <TableHead>Points Marqués</TableHead>
                    <TableHead>Points Encaissés</TableHead>
                    <TableHead>Différence</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data?.map((row, index) => (
                    <TableRow
                        key={index}
                        className={`border border-slate-950 ${
                            row.club === "FLEURY SUR ORNE BASKET - 1" ||
                            row.club === "FLEURY SUR ORNE BASKET - 2" ||
                            row.club === "FLEURY SUR ORNE BASKET"
                                ? "bg-pink-500 hover:bg-pink-400"
                                : ""
                        }`}
                    >
                        <TableCell>{row.position}</TableCell>
                        <TableCell>{row.club}</TableCell>
                        <TableCell>{row.rankingPoints}</TableCell>
                        <TableCell>{row.gamesData.played}</TableCell>
                        <TableCell>{row.gamesData.won}</TableCell>
                        <TableCell>{row.gamesData.lost}</TableCell>
                        <TableCell>{row.points.for}</TableCell>
                        <TableCell>{row.points.against}</TableCell>
                        <TableCell>{row.points.difference}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}


