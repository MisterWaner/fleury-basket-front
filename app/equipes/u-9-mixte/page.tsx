import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


import Wrapper from "@/components/Wrapper";
import PageTitle from "@/components/Headings/PageTitle";
import SectionTitle from "@/components/Headings/SectionTitle";
import CalendarTable from "@/components/Table/CalendarTable";
import RankingTable from "@/components/Table/RankingTable";

export default function Page() {
    return (
        <>
            <PageTitle>U-9 Mixte</PageTitle>
            <Wrapper>
                <p>
                    Pour cette saison 2025/2026, notre équipe U-9 Mixte évolue
                    en championnat Départemental (Poule C) du Calvados.
                </p>
                <section className="mt-6">
                    <SectionTitle>Calendrier</SectionTitle>
                    <Tabs defaultValue="phase 1">
                        <TabsList className="bg-transparent cursor-pointer">
                            <TabsTrigger value="phase 1">Phase 1</TabsTrigger>
                            <TabsTrigger value="phase 2">Phase 2</TabsTrigger>
                        </TabsList>
                        <TabsContent value="phase 1">
                            <Card>
                                <CardHeader>
                                    <CardTitle>
                                        Calendrier U-9 Mixte - Phase 1
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CalendarTable
                                        team="u-9-mixte"
                                        phase="phase-1"
                                    />
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="phase 2">
                            <Card>
                                <CardHeader>
                                    <CardTitle>
                                        Calendrier U-9 Mixte - Phase 2
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CalendarTable
                                        team="u-9-mixte"
                                        phase="phase-2"
                                    />
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </section>
                <section className="mt-6">
                    <SectionTitle>Classements</SectionTitle>
                    <Tabs defaultValue="phase 1">
                        <TabsList className="bg-transparent cursor-pointer">
                            <TabsTrigger value="phase 1">Phase 1</TabsTrigger>
                            <TabsTrigger value="phase 2">Phase 2</TabsTrigger>
                        </TabsList>
                        <TabsContent value="phase 1">
                            <Card>
                                <CardHeader>
                                    <CardTitle>
                                        Classement U-9 Mixte - Phase 1
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <RankingTable
                                        team="u-9-mixte"
                                        phase="phase-1"
                                    />
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="phase 2">
                            <Card>
                                <CardHeader>
                                    <CardTitle>
                                        Classement U-9 Mixte - Phase 2
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <RankingTable
                                        team="u-9-mixte"
                                        phase="phase-2"
                                    />
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </section>
            </Wrapper>
        </>
    );

}