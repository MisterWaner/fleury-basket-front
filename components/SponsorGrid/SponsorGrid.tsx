export default function SponsorGrid({
    children,
}: {
    children?: React.ReactNode;
}) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">{children}</div>
    );
}

