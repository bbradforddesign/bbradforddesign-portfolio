export const Skeleton: React.FC = () => {
    return (
        <div className="section-container animate-pulse">
            <div className="rounded-full my-6 self-start bg-slate-200 dark:bg-slate-800 h-10 w-1/2 md:w-1/3 lg:w-1/4" />
            <div className="grid lg:grid-cols-2 gap-4 w-full md:w-5/6 lg:w-full pr-24">
                <div>
                    <div className="rounded-lg w-full h-60 mx-8 lg:max-w-xl bg-slate-200" />
                    <div className="rounded-full w-1/3 h-6 m-8 bg-slate-200" />
                </div>
                <div className="w-full flex flex-col mx-8 gap-4">
                    <div className="w-full h-6 bg-slate-200 rounded-full" />
                    <div className="w-full h-6 bg-slate-200 rounded-full" />
                    <div className="w-full h-6 bg-slate-200 rounded-full" />
                    <div className="w-full h-6 bg-slate-200 rounded-full" />
                    <div className="w-full h-6 bg-slate-200 rounded-full" />
                    <div className="w-full h-6 bg-slate-200 rounded-full" />
                </div>
            </div>
        </div>
    );
};
