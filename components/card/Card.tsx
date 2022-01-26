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
                    padding: 1rem 2rem;
                    background-color: #fff;
                    border-radius: 1rem;
                    border: 1px solid black;
                    box-shadow: 0.5rem 0.5rem #c4c4c4;
                }
            `}</style>
        </div>
    );
};
