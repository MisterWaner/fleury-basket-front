"use client";
import Image from "next/image";
import { MainMenu } from "./MainMenu";

export function Header() {
    return (
        <header className="w-full border-b bg-slate-950 backdrop-blur-md text-slate-50 sticky top-0 z-50 shadow-md">
            <div className="grid grid-cols-6 items-center px-4 py-3">
                <div className="col-span-2 flex items-center gap-2">
                    <Image
                        src="/images/fleury-basket.png"
                        alt="Fleury Basket"
                        width={150}
                        height={150}
                    />
                    <p className="lg:text-4xl md:text-2xl font-bold font-montserrat">
                        Fleury Basket
                    </p>
                </div>

                <div className="col-end-7 justify-self-end">
                    <MainMenu />
                </div>
            </div>
        </header>
    );
}

