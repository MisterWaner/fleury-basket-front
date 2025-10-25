"use client";
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import { NavDesktop } from "./NavDesktop";
import { NavMobile } from "./NavMobile";

export function Header() {
    const isDesktop = useMediaQuery("(min-width: 768px)");

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
                    <p className="lg:text-4xl md:text-2xl font-bold font-libre-baskerville">
                        Fleury Basket
                    </p>
                </div>
                
                {isDesktop ? (
                    <div className="col-span-2 col-start-5">
                        <NavDesktop />
                    </div>
                ) : (
                    <div className="md:hidden col-end-7">
                        <NavMobile />
                    </div>
                )}
            </div>
        </header>
    );
}

