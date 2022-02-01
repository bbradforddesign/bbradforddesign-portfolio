import { Job, JobCard } from "../job/Job";

type Props = {
    jobs: Job[];
};

export const Experience: React.FC<Props> = ({ jobs }) => {
    const renderJobs = jobs.map((e) => (
        <li key={e.company}>
            <JobCard
                bullets={e.bullets}
                company={e.company}
                date={e.date}
                location={e.location}
                tools={e.tools}
                technologies={e.technologies}
            />
        </li>
    ));
    return (
        <section className="section-container">
            <h2>Experience</h2>
            <ul>{renderJobs}</ul>
        </section>
    );
};
