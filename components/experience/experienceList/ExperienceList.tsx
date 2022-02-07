type Props = {
    title: string;
    list: string[];
};

export const ExperienceList: React.FC<Props> = ({ title, list }) => {
    const renderListItems = (list: Array<string>) =>
        list.map((e) => (
            <li
                key={e}
                className="p-1 px-2 rounded-md bg-slate-700 dark:bg-yellow-300"
            >
                <p className="text-sm font-semibold text-white dark:text-slate-900">
                    {e}
                </p>
            </li>
        ));
    return (
        <section className="w-full">
            <h3 className="text-xl font-bold my-2">{title}</h3>
            <ul className="flex gap-2 flex-wrap">{renderListItems(list)}</ul>
        </section>
    );
};
