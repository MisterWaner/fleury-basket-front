import React from "react";

export default function PageTitle({ children }: { children: React.ReactNode }) {
    return (
        <h1 className="text-center uppercase font-montserrat font-bold text-3xl sm:text-4xl md:text-5xl my-8">
            {children}
        </h1>
    );
}

