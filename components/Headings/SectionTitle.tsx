export default function SectionTitle({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl mb-8">
            {children}
        </h2>
    );
}

