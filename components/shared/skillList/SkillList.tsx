type Props = {
    title?: string;
    list: string[];
};

export const SkillList: React.FC<Props> = ({ title, list }) => {
    const renderSkills = () =>
        list.map((e) => {
            return (
                <li
                    key={e}
                    className="p-1 px-2 rounded-md bg-slate-300 dark:bg-slate-600"
                >
                    <p className="text-sm font-semibold">{e}</p>
                </li>
            );
        });

    return title ? (
        <section className="w-full max-w-prose">
            <h3 className="text-xl font-bold my-3 md:my-4">{title}</h3>
            <ul className="flex gap-2 flex-wrap">{renderSkills()}</ul>
        </section>
    ) : (
        <ul className="my-4 w-full flex gap-2 flex-wrap">{renderSkills()}</ul>
    );
};
