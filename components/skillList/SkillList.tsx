type Props = {
    title: string;
    list: string[];
};

export const SkillList: React.FC<Props> = ({ title, list }) => {
    const renderSkills = () =>
        list.map((e) => {
            return (
                <li
                    key={e}
                    className="p-1 px-2 rounded-md highlight-background"
                >
                    <p className="text-sm font-semibold">{e}</p>
                </li>
            );
        });

    return (
        <section className="w-full">
            <h3 className="text-xl font-bold my-2">{title}</h3>
            <ul className="flex gap-2 flex-wrap">{renderSkills()}</ul>
        </section>
    );
};
