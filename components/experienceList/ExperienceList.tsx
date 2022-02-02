type Props = {
    title: string;
    list: string[];
};

export const ExperienceList: React.FC<Props> = ({ title, list }) => {
    const renderListItems = (list: Array<string>) =>
        list.map((e) => (
            <li key={e} className="p-1 px-2 rounded-md bg-black text-white">
                <p className="font-medium">{e}</p>
            </li>
        ));
    return (
        <section className="w-full">
            <h3 className="text-xl font-bold my-2">{title}</h3>
            <ul className="flex gap-2 flex-wrap">{renderListItems(list)}</ul>
        </section>
    );
};
