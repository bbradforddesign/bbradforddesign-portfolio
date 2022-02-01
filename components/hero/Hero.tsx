type Props = {
    name: string;
    introduction: string;
    summary: string;
};

export const Hero: React.FC<Props> = ({ name, introduction, summary }) => {
    return (
        <p className="text-2xl font-medium max-w-2xl">
            <span>{introduction}</span>
            <br />
            <span className="text-4xl font-bold">{name}</span>
            <br />
            <span>{summary}</span>
        </p>
    );
};
