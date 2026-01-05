"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchCalendar } from "@/services/fetchCalendar";
import Basketball_Loader from "../Loaders/basketball-loader";
import {
    Table,
    TableBody,
    TableHeader,
    TableHead,
    TableRow,
    TableCell,
} from "@/components/ui/table";

export default function CalendarTable({
    team,
    phase,
}: {
    team: string;
    phase?: string;
}) {
    const { data, error, isLoading } = useQuery({
        queryKey: ["calendar", team, phase],
        queryFn: () => fetchCalendar(team, phase),
    });

    if (isLoading) {
        return <Basketball_Loader />;
    }

    if (error) {
        return <div>Error loading calendar data.</div>;
    }

    return (
        <Table className="border border-slate-950 rounded-3xl mb-10">
            <TableHeader>
                <TableRow className="bg-slate-200 border-b border-slate-950">
                    <TableHead>Date</TableHead>
                    <TableHead>Adversaire</TableHead>
                    <TableHead>Lieu</TableHead>

                    <TableHead>Score</TableHead>
                    <TableHead>Résultat</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data?.map((game, index) => (
                    <TableRow
                        key={index}
                        className={`${
                            game.result === "Victoire"
                                ? "bg-green-500 hover:bg-green-400"
                                : game.result === "Défaite"
                                ? "bg-red-500 hover:bg-red-400"
                                : ""
                        }
                        
                        border border-slate-950`}
                    >
                        <TableCell>{game.datetime}</TableCell>
                        <TableCell>{game.opponent}</TableCell>
                        <TableCell>{game.location}</TableCell>

                        <TableCell>
                            {game.location === "Domicile"
                                ? `${game.us} - ${game.them}`
                                : `${game.them} - ${game.us}`}
                        </TableCell>
                        <TableCell>{game.result}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

