import Job from "./Job";
import "./JobList.css"

type JobListProps = {
    jobs: {
    title: string,
    type: string;
    company: string;
    levelOfExperience: string;
    location: string;
    description: string;
    salary: number;
    }[]
}

export default function JobList( {jobs}: JobListProps) {

    return (
        <div className="job-list">
            {jobs.map((job, index) => (
                <Job 
                key={index}
                title={job.title}
                type={job.type}
                company={job.company}
                levelOfExperience={job.levelOfExperience}
                location={job.location}
                description={job.description}
                salary={job.salary}
                />
            ))}
        </div>
    )
}
