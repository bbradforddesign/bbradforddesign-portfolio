type Props = {
    width: string;
    children: React.ReactNode;
};

export const Card: React.FC<Props> = ({ children, width }) => {
    return (
        <section className="card">
            {children}
            <style jsx>{`
                .card {
                    width: ${width};
                    padding: 1rem 2rem;
                    background-color: #fff;
                    border-radius: 1rem;
                    box-shadow: 0.5rem 0.5rem 0.25rem rgba(196, 196, 196, 0.5);
                }
            `}</style>
        </section>
    );
};
