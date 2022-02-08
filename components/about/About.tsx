type Props = {
    text: string[];
};

export const About: React.FC<Props> = ({ text }) => {
    // might get key from cms rather than map
    const renderText = text.map((e: string, index: number) => {
        return (
            <p className="body-text" key={index}>
                {e}
            </p>
        );
    });
    return (
        <section className="section-container" id="About">
            <h2 className="section-header">About</h2>
            <div className=" w-full grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="w-full h-72 bg-slate-100" />
                <div className="w-full">
                    <p className="font-bold text-xl highlight-text">
                        Nice to Meet You!
                    </p>
                    {renderText}
                </div>
            </div>
        </section>
    );
};
