interface IconWrapperProps {
    children: React.ReactNode;
}

export default function IconWrapper({ children }: IconWrapperProps) {
    return (
        <div className="group relative flex items-center justify-center w-20 h-20 rounded-full overflow-hidden border-2 border-slate-950  bg-slate-950 text-slate-50 hover:text-slate-950 transition-colors duration-400">
            <span className="absolute inset-0 rounded-full scale-0 bg-slate-50 opacity-0 transition-transform duration-400 ease-out group-hover:scale-150 group-hover:opacity-100"></span>
            <span className="relative z-10">{children}</span>
        </div>
    );
}

