"use client";

import { useQuery, useMutation } from "@tanstack/react-query";
import { fetchCalendar } from "@/services/fetchCalendar";
import {
    Table,
    TableBody,
    TableHeader,
    TableHead,
    TableRow,
    TableCell,
} from "@/components/ui/table";

export default function CalendarTable({ team }: { team: string }) {
    const { data, error, isLoading } = useQuery({
        queryKey: ["calendar", team],
        queryFn: () => fetchCalendar(team),
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading calendar data.</div>;
    }

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Adversaire</TableHead>
                    <TableHead>Lieu</TableHead>
                    <TableHead>Heure</TableHead>
                    <TableHead>Score</TableHead>
                    <TableHead>Résultat</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data?.map((game, index) => (
                    <TableRow key={index}>
                        <TableCell>{game.date}</TableCell>
                        <TableCell>{game.opponent}</TableCell>
                        <TableCell>{game.location}</TableCell>
                        <TableCell>
                            {game.us !== null && game.them !== null
                                ? "Terminé"
                                : "À venir"}
                        </TableCell>
                        <TableCell>
                            {game.us !== null && game.them !== null
                                ? `${game.us}-${game.them}`
                                : "-"}
                        </TableCell>
                        <TableCell>{game.result}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

