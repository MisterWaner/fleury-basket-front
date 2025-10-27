import type { Metadata } from "next";
import { Libre_Baskerville, Montserrat } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/Header/Header";

const libreBaskerville = Libre_Baskerville({
    variable: "--font-libre-baskerville",
    subsets: ["latin"],
    weight: ["400", "700"],
});

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Club de Basket de Fleury-sur-Orne",
    description: "Site officiel du Fleury-sur-Orne Basket Club",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${libreBaskerville.variable} ${montserrat.variable} antialiased bg-fleury-pink/75 text-slate-950`}
            >
                <Header />
                {children}
            </body>
        </html>
    );
}

