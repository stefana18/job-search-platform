import "./Job.css"

type JobProps = {
    title: string,
    type: string;
    company: string;
    levelOfExperience: string;
    location: string;
    description: string;
    salary: number;
}

export default function Job({title, type, company, levelOfExperience, location, description, salary}: JobProps) {
    return (
        <div className="job">
            <div className="job-header">
                <h3>{title}</h3>
                <span>{company}</span>
            </div>
            <div className="job-details">
                <span className="job-type">{type}</span>
                <span className="job-experience">{levelOfExperience}</span>
                <span className="job-item-location">{location}</span>
            </div>
            <p>{description}</p>
            <div className="job-footer">
                <span>${salary}/year</span>
            </div>
        </div>
    )
}