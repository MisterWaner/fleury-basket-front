export default function Wrapper({ children }: { children: React.ReactNode }) {
    return (
        <section className="mt-10 mx-10 lg:mx-20 xl:mx-auto xl:max-w-7xl">
            {children}
        </section>
    );
}

