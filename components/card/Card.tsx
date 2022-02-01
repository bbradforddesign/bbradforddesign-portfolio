type Props = {
    children: React.ReactNode;
    className?: string;
};

export const Card: React.FC<Props> = ({ children, className }) => {
    return (
        <div className={`p-4 rounded-xl shadow-md ${className}`}>
            {children}
        </div>
    );
};
