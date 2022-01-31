type Props = {
    children: React.ReactNode;
    className?: string;
};

export const Card: React.FC<Props> = ({ children, className }) => {
    return (
        <div
            className={`w-full p-4 rounded-xl shadow-md shadow-slate-400 ${className}`}
        >
            {children}
        </div>
    );
};
