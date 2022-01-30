type Props = {
    children: React.ReactNode;
};

export const Card: React.FC<Props> = ({ children }) => {
    return (
        <div className="w-full p-4 rounded-xl shadow-md shadow-slate-400">
            {children}
        </div>
    );
};
