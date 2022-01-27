type Props = {
    width: string;
    children: React.ReactNode;
};

export const Card: React.FC<Props> = ({ children, width }) => {
    return (
        <div className="card">
            {children}
            <style jsx>{`
                .card {
                    width: ${width};
                    padding: 0.5rem 2rem;
                    background-color: #eee;
                    border-radius: 1rem;
                    box-shadow: 0.5rem 0.5rem #c4c4c4;
                }
            `}</style>
        </div>
    );
};
